
// Importujemy potrzebne moduły
const fs = require('fs'); // Do pracy z plikami
const crypto = require('crypto'); // Do hashowania
const inquirer = require('inquirer'); // Do interakcji z użytkownikiem
const bcrypt = require('bcryptjs'); // Do bcrypt
const zlib = require('zlib'); // Do kompresji

// Funkcja do generowania hash
function generateHash(fileData, algorithm) {
    return crypto.createHash(algorithm).update(fileData).digest('hex');
}

// Funkcja do bcrypt
function bcryptHash(fileData) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(fileData, salt);
}

// Kompresja pliku
function compressFile(filePath) {
    const fileContent = fs.readFileSync(filePath);
    const compressed = zlib.gzipSync(fileContent);
    fs.writeFileSync(`${filePath}.gz`, compressed);
    console.log(`Plik skompresowany jako ${filePath}.gz`);
}

// Główna funkcja programu
async function run() {
//Pytania do użytkownika
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'filePath',
            message: 'Podaj ścieżkę do pliku:',
        },
        {
            type: 'list',
            name: 'algorithm',
            message: 'Wybierz algorytm:',
            choices: ['md5', 'sha1', 'sha256', 'bcrypt'],
        },
        {
            type: 'confirm',
            name: 'compress',
            message: 'Czy chcesz skompresować plik?',
        }
    ]);

    const { filePath, algorithm, compress } = answers;

    // Sprawdź, czy plik istnieje
    if (!fs.existsSync(filePath)) {
        console.error('Plik nie istnieje!');
        return;
    }

    // Odczyt pliku
    const fileData = fs.readFileSync(filePath, 'utf-8');

    // Wybór algorytmu hashowania
    let hash;
    if (algorithm === 'bcrypt') {
        hash = bcryptHash(fileData);
    } else {
        hash = generateHash(fileData, algorithm);
    }

    console.log(`Hash (${algorithm}): ${hash}`);

    // Kompresja (jeśli wybrano)
    if (compress) {
        compressFile(filePath);
    }
}

run();
