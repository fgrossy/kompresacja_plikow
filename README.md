Importujemy potrzebne moduły do pracy z systemem plików, hashowania, interakcji z użytkownikiem, bcryptu i kompresji.

Tworzymy funkcję do generowania hasha, która korzysta z określonego algorytmu (np. md5, sha1, sha256).

Tworzymy funkcję do hashowania za pomocą bcrypt, która generuje sol i hashuje dane pliku.

Tworzymy funkcję do kompresji pliku. Czytamy zawartość pliku, kompresujemy ją i zapisujemy skompresowane dane do nowego pliku.

Tworzymy główną funkcję programu, która zarządza całą operacją.

Pytamy użytkownika o ścieżkę do pliku, wybór algorytmu hashowania i czy chce skompresować plik za pomocą inquirer.

Wyciągamy odpowiedzi użytkownika.

Sprawdzamy, czy podany plik istnieje. Jeśli nie, wypisujemy komunikat o błędzie i kończymy działanie.

Odczytujemy dane pliku.

Wybieramy odpowiednią funkcję hashowania w zależności od wybranego przez użytkownika algorytmu.

Wyświetlamy wygenerowany hash na konsoli.

Jeśli użytkownik wybrał kompresję, wywołujemy funkcję kompresji.

Na koniec uruchamiamy główną funkcję programu.