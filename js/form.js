var counter = 0; //licznik komentarzy

//==funkcja pokazująca formularz ==
function showForm(n, edit=false, key=null) {
    //kod html zawierający formularz
    //================
    //każde pole input które jest walidowane ma obok lub na sobie znacznik  "NAZWAPOLA_error"
    //pole to jest używane gdy trzeba wypisać błędy wprowadzone do odpowiednich pól
    //===============
    document.getElementById(`form${n}`).innerHTML = '<div class="kom">\n' +
        '                <table>\n' +
        '                    <tr> <td>Imię: </td>\n' +
        '                        <td class="in">\n' +
                                    //pole tekstowe
        '                            <label id="name_error'+n+'"><input type="text" name="name" id="name'+n+'" /></label>\n' +
        '                        </td>\n' +
        '                    </tr>\n' +
        '                    <tr> <td>Wiek:</td>\n' +
        '                        <td class="in">\n' +
                                    //pole typu number
        '                            <label id="age_error'+n+'"><input type="number" min="0" name="age" id="age'+n+'"/></label>\n' +
        '                        </td>\n' +
        '                    </tr>\n' +
        '                    <tr> <td>Państwo:</td>\n' +
        '                        <td class="in">\n' +
                                    //pole typu selected
        '                            <label><select name="country" id="country'+n+'">\n' +
        '                                <option  value="Polska" selected="selected">Polska</option>\n' +
        '                                <option value="Wielka Brytania">Wielka Brytania</option>\n' +
        '                                <option value="Niemcy">Niemcy</option>\n' +
        '                                <option value="Czechy">Czechy</option>\n' +
        '                                <option value="Ukraina">Ukraina</option>\n' +
        '                                <option value="Słowacja">Słowacja</option>\n' +
        '                                <option value="Francja">Francja</option>\n' +
        '                                <option value="Włochy">Włochy</option>\n' +
        '                                <option value="Inne">Inne</option>\n' +
        '                            </select></label>\n' +
        '                        </td>\n' +
        '                    </tr>\n' +
        '                    <tr>\n' +
        '                        <td></td>\n' +
        '                        <td class="in">\n' +
                                        //div do wyswietlenie bledy pola date
        '                            <div class="error" id="date_error'+n+'"></div>\n' +
        '                        </td>\n' +
        '                    </tr>\n' +
        '                    <tr> <td>Data:</td>\n' +
        '                        <td class="in">\n' +
                                    //pole input typu date
        '                            <label><input type="date" id="date'+n+'"></label>\n' +
        '                        </td>\n' +
        '                    </tr>\n' +
        '                    <tr>\n' +
        '                        <td></td>\n' +
        '                        <td class="in">\n' +
                                    //div do wyswietlenie bledy pola rating
        '                            <div class="error" id="rating_error'+n+'"></div>\n' +
        '                        </td>\n' +
        '                    </tr>\n' +
        '                    <tr> <td>Ocena:</td>\n' +
        '                        <td class="in">\n' +
                                    //pole input typu radio
        '                            <input type="radio" id="1'+n+'" name="rating" value="1">\n' +
        '                            <label for="1">1</label>\n' +
        '                            <input type="radio" id="2'+n+'" name="rating" value="2">\n' +
        '                            <label for="2">2</label>\n' +
        '                            <input type="radio" id="3'+n+'" name="rating" value="3">\n' +
        '                            <label for="3">3</label>\n' +
        '                            <input type="radio" id="4'+n+'" name="rating" value="4">\n' +
        '                            <label for="4">4</label>\n' +
        '                            <input type="radio" id="5'+n+'" name="rating" value="5">\n' +
        '                            <label for="5">5</label>\n' +
        '                        </td>\n' +
        '                    </tr>\n' +
        '                    <tr> <td>Tagi:</td>\n' +
        '                        <td class="in">\n' +
                                    //pole input typu checkboc
        '                            <input type="checkbox" id="family'+n+'">\n' +
        '                            <label for="family"> Rodzinne</label><br>\n' +
        '                            <input type="checkbox" id="nature'+n+'">\n' +
        '                            <label for="nature"> Przyrodnicze</label><br>\n' +
        '                            <input type="checkbox" id="sport'+n+'">\n' +
        '                            <label for="sport"> Sportowe</label><br>\n' +
        '                            <input type="checkbox" id="gastronomic'+n+'">\n' +
        '                            <label for="gastronomic"> Gastronomiczne</label><br>\n' +
        '                            <input type="checkbox" id="culture'+n+'">\n' +
        '                            <label for="culture"> Kulturalne</label><br>\n' +
        '                        </td>\n' +
        '                    </tr>\n' +
        '                </table>\n' +
                            //div z 2 kolumną formularzy
        '                <div class="kol2">\n' +
        '                    Opinia: <br>\n' +
                            //opinia
        '                    <label id="opinion_error'+n+'"><textarea id="opinion'+n+'"></textarea></label>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <br>\n' +
                    //przyciski anulujące wpisywanie formularza i sprawdzający dane do walidacji
        '            <button type="button" id="cancel'+n+'" onclick="cancel('+n+')">Anuluj</button>\n' +
        '            <button type="button" id="confirm'+n+'" onclick="sprawdz('+n+','+edit+','+key+')">Zatwierdź</button>';
}

//== funkcja usuwająca komentarze do n-tego formularza
function deleteComments(n){
    //pętla przechodząca przez wszystkie zapisane dane JSON
    for (var i = 0; i < localStorage.length; i++) {
        //pobranie wartości JSON dla klucza na i-pozycji
        var retrieveItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(retrieveItem.id ===n){ //sprawdzenie czy dany komentarz należy do n-tego artykułu
            localStorage.removeItem(localStorage.key(i)); // usunięcie danych o kluczu na i-tej pozycji
            i--;
        }
    }
    //ukrycie przycisku usunięcia komentarzy
    document.getElementById(`deleteButton${n}`).innerHTML = "";
    //ponowne załadowanie danych z localstorage w celu uaktualnienia komentzry
    readFromJSON(n);
}

//funkcja ukrywająca formularz
function cancel(n) {
    //dodanie kodu html dla artukułu n-tego
    document.getElementById(`form${n}`).innerHTML = '<button type="button" id="formButton'+n+'"' +
        ' onclick="showForm('+n+')">Wstaw opinię</button>';
}

// Funkcja sprawdzająca, czy pole formularza jest puste.
function sprawdzPuste(pole_id) {
    var dateValue = document.getElementById(pole_id).value;
    return !!dateValue; // Zwraca true, jeśli pole nie jest puste, w przeciwnym razie false.
}

// Funkcja sprawdzająca pole
function sprawdzPole(pole_id, obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    return obiektRegex.test(obiektPole.value); // Zwraca true, jeśli wartość pola pasuje do wzorca, w przeciwnym razie false.
}

// Funkcja sprawdzająca, czy którykolwiek z przycisków opcji (radio) o określonej nazwie jest zaznaczony.
function sprawdz_radio(nazwa_radio){
    var obiekt=document.getElementsByName(nazwa_radio);
    for (i=0;i<obiekt.length;i++)
    { wybrany=obiekt[i].checked; // Sprawdza, czy przycisk opcji jest zaznaczony.
        if (wybrany) return true; } // Zwraca true, jeśli którykolwiek z przycisków opcji jest zaznaczony.
    return false; // Zwraca false, jeśli żaden z przycisków opcji nie jest zaznaczony.
}


//sprawdzenie pola checkbox
function sprawdz_box(box_id) {
    // Pobierz element formularza o podanym identyfikatorze
    var obiekt = document.getElementById(box_id);

    // Zwróć wartość logiczną określającą, czy pole wyboru jest zaznaczone (true) czy nie (false)
    return obiekt.checked;
}


//podsumowanie danych z formularza
function pokazDane(n) {
    // Zmienna przechowująca tekst wyświetlany w oknie dialogowym
    var dane = "Następujące dane zostaną zapisane:\n";

    // Pobranie danych z pól formularza i dodanie ich do zmiennej dane
    dane += "Imię:" + document.getElementById(`name${n}`).value + "\n";
    dane += "Wiek: " + document.getElementById(`age${n}`).value + "\n";
    dane += "Państwo: " + document.getElementById(`country${n}`).value + "\n";
    dane += "Data: " + document.getElementById(`date${n}`).value + "\n";

    // Pobranie wybranej oceny
    var obiekt = document.getElementsByName("rating");
    for (var i = 0; i < obiekt.length; i++) {
        var wybrany = obiekt[i].checked;
        if (wybrany) dane += "Ocena: " + obiekt[i].value + "/5\n";
    }

    // Dodanie tagów do tekstu wyświetlanego w oknie dialogowym
    dane += "Tagi: \n"
    if (sprawdz_box(`family${n}`)) dane += "-Rodzinne \n";
    if (sprawdz_box(`nature${n}`)) dane += "-Przyrodnicze \n";
    if (sprawdz_box(`sport${n}`)) dane += "-Sportowe\n";
    if (sprawdz_box(`gastronomic${n}`)) dane += "-Gastronomiczne \n";
    if (sprawdz_box(`culture${n}`)) dane += "-Kulturalne \n";

    // Dodanie treści opinii do tekstu wyświetlanego w oknie dialogowym
    dane += "Tresć opinii: \n" + document.getElementById(`opinion${n}`).value;

    // Wyświetlenie okna dialogowego z potwierdzeniem wprowadzonych danych
    return window.confirm(dane);
}


//sprawdzenie poprawnosci formularza
function sprawdz(n, edit, key) {
    var ok = true; // Zmienna określająca poprawność danych

    // Obiekty wyrażeń regularnych do walidacji danych
    let obiektNazw = /^[a-zA-Z]{2,20}$/; // Nazwa powinna zawierać od 2 do 20 liter
    let obiektWiek = /^[1-9][0-9]{1,2}$/; // Wiek powinien być liczbą całkowitą z zakresu 1-999

    // Walidacja pola z imieniem
    if (!sprawdzPole(`name${n}`, obiektNazw)) {
        ok = false;
        // Wyświetlenie komunikatu błędu i placeholdera
        document.getElementById(`name_error${n}`).innerHTML =
            '<input type="text" name="name" id="name'+n+'" placeholder="Wpisz poprawnie imię!"/>';
    }

    // Walidacja pola z wiekiem
    if (!sprawdzPole(`age${n}`, obiektWiek)) {
        ok = false;
        // Wyświetlenie komunikatu błędu i placeholdera
        document.getElementById(`age_error${n}`).innerHTML =
            '<input type="number" min="0" name="age" id="age'+n+'" placeholder="Wpisz poprawnie Wiek!"/>';
    }

    // Walidacja pola z datą
    if (!sprawdzPuste(`date${n}`)) {
        ok = false;
        // Wyświetlenie komunikatu błędu
        document.getElementById(`date_error${n}`).innerHTML =
            'Wpisz datę!';
    } else {
        // Wyczyszczenie komunikatu błędu
        document.getElementById(`date_error${n}`).innerHTML = "";
    }

    // Walidacja pola z oceną (radio)
    if (!sprawdz_radio("rating")) {
        ok = false;
        // Wyświetlenie komunikatu błędu
        document.getElementById(`rating_error${n}`).innerHTML =
            'Daj ocenę!';
    } else {
        // Wyczyszczenie komunikatu błędu
        document.getElementById(`rating_error${n}`).innerHTML= "";
    }

    // Walidacja pola z opinią
    if (!sprawdzPuste(`opinion${n}`)) {
        ok = false;
        // Wyświetlenie komunikatu błędu i placeholdera
        document.getElementById(`opinion_error${n}`).innerHTML =
            '<textarea id="opinion'+n+'" placeholder="Napisz opinię!"></textarea>';
    }

    // Jeśli wszystkie dane są poprawne
    if (ok) {
        // Jeśli użytkownik potwierdzi wprowadzone dane
        if (pokazDane(n)) {
            // Zapisz dane do localStorage
            saveToJSON(n, edit, key);
            // Anuluj formularz
            cancel(n);
            // Wyświetl komentarze
            readFromJSON(n);
        }
    }

    return ok; // Zwrócenie flagi określającej poprawność danych
}


//==funkcja zapisująca do localstorage dane z formularza n-tego artykułu==
function saveToJSON(n, edit, key) {
    // Pobierz dane z formularza
    const id = n; // Pobierz identyfikator formularza
    //pobranie elementów z formularza
    const name = document.getElementById(`name${n}`).value;
    const age = document.getElementById(`age${n}`).value;
    const country = document.getElementById(`country${n}`).value;
    const date = document.getElementById(`date${n}`).value;
    const opinion = document.getElementById(`opinion${n}`).value;

    // Pobierz wybraną ocenę
    const rating = document.querySelector('input[name="rating"]:checked')?.value; // Pobierz wartość zaznaczonego pola radiowego "Ocena"

    // Pobierz zaznaczone tagi
    const tags = [];
    if (document.getElementById(`family${n}`).checked) tags.push('Rodzinne');
    if (document.getElementById(`nature${n}`).checked) tags.push('Przyrodnicze');
    if (document.getElementById(`sport${n}`).checked) tags.push('Sportowe');
    if (document.getElementById(`gastronomic${n}`).checked) tags.push('Gastronomiczne');
    if (document.getElementById(`culture${n}`).checked) tags.push('Kulturalne');

    //obiekt z danymi
    const formData = {
        id,
        name,
        age,
        country,
        date,
        rating,
        tags,
        opinion
    };

    // Sprawdzenie, czy dodajesz nowy wpis, czy edytujesz istniejący
    if(!edit){ // Jeśli nie edytujesz istniejącego wpisu
        counter++; // Inkrementuj licznik
        localStorage.setItem(`formData${counter}`, JSON.stringify(formData)); // Zapisz dane do localStorage pod nowym kluczem
    } else { // Jeśli edytujesz istniejący wpis
        localStorage.setItem(localStorage.key(key), JSON.stringify(formData)); // Zapisz dane do localStorage pod istniejącym kluczem
    }
}


//==funkcja pobiera z localstorage dane z formularza n-tego artykułu==
function readFromJSON(n) {
    var comment = ""; // Inicjalizacja zmiennej comment do przechowywania HTML-a dla opinii
    if (localStorage.length !== 0) { // Sprawdzenie, czy localStorage nie jest puste
        var show = false; // Zmienna kontrolująca wyświetlanie przycisku usuwania opinii
        for (var k = 0; k < localStorage.length; k++) { // Pętla iterująca przez elementy w localStorage
            var item = JSON.parse(localStorage.getItem(localStorage.key(k))); // Pobranie elementu z localStorage i sparsowanie go do obiektu
            if(item.id === n){ // Sprawdzenie, czy identyfikator opinii zgadza się z identyfikatorem formularza
                show = true; // Ustawienie wartości true, aby wyświetlić przycisk usuwania opinii
                break; // Przerwanie pętli, gdy znajdzie opinie o podanym identyfikatorze
            }
        }
        if(show){ // Jeśli znaleziono opinie, wyświetl przycisk usuwania
            document.getElementById(`deleteButton${n}`).innerHTML =
                '<button type="button" id="clearComments'+n+'" onClick="deleteComments('+n+')">Usuń wszystkie opinie</button>';
        }
        for (var i = 0; i < localStorage.length; i++) { // Pętla iterująca przez elementy w localStorage w poszukiwaniu opinii o podanym identyfikatorze
            var retrieveItem = JSON.parse(localStorage.getItem(localStorage.key(i))); // Pobranie elementu z localStorage i sparsowanie go do obiektu
            if(retrieveItem.id !== n) continue; // Jeśli identyfikator opinii nie zgadza się z identyfikatorem formularza, przejdź do następnej iteracji pętli
            // Konstruowanie HTML-a dla opinii
            comment += '<div class="kom">\n' +
                '                <div class="inf1">\n' +
                '                    <img src="images/anonim.png" alt="anonim" style="width: 100px;height: auto;"><br>\n' +
                '                    ' + retrieveItem.name + ' ' + retrieveItem.age + 'lat\n' +
                '                </div>\n' +
                '                <div class="inf2">\n' +
                '                    Ocena: ' + retrieveItem.rating + '/5 <br>\n' +
                '                    ' + retrieveItem.country + ' <br>\n';
            // Sprawdzenie, czy opinia ma tagi
            if (retrieveItem.tags.length !== 0) {
                for (var j = 0; j < retrieveItem.tags.length; j++) {
                    comment += '#' + retrieveItem.tags[j] + "\n"; // Dodanie tagów do HTML-a opinii
                }
            }
            // Zakończenie konstrukcji HTML-a dla opinii
        comment+=           '</div>\n' +
                '                <div class="inf3">\n' + retrieveItem.date +
                '                    <div class="kom-contents">\n' + retrieveItem.opinion +
                '                    </div>\n' +
                '                    <button class="edit-button" type="button" onclick="editComment('+n+','+i+')">edytuj</button> ' +
                '                </div>\n' +
                '            </div>'
        }
        // Wyświetlenie wygenerowanego HTML-a opinii w kontenerze
        document.getElementById(`kom-container${n}`).innerHTML = comment;
    }
    else { // Jeśli localStorage jest puste, wyczyść kontenery na opinie
        document.getElementById(`deleteButton${n}`).innerHTML = ""; // Wyczyść przycisk usuwania opinii
        document.getElementById(`kom-container${n}`).innerHTML = ""; // Wyczyść kontener na opinie
    }
}

//funkcja która umożliwia edytowanie elementów
function editComment(n, key)
{
    // Pobierz dane komentarza z localStorage
    const comment = JSON.parse(localStorage.getItem(localStorage.key(key)));

    // Wyświetl formularz z uzupełnionymi danymi
    showForm(n, true, key);
    //wpisywanie zapisanych wartosci do formularza
    document.getElementById(`name${n}`).value = comment.name;
    document.getElementById(`age${n}`).value = comment.age;
    document.getElementById(`country${n}`).value = comment.country;
    document.getElementById(`date${n}`).value = comment.date;
    document.getElementById(`opinion${n}`).value = comment.opinion;

    // Ustaw wybraną ocenę
    document.querySelector(`input[name="rating"][value="${comment.rating}"]`).checked = true;

    // Ustaw zaznaczone tagi
    if (comment.tags.includes('Rodzinne')) document.getElementById(`family${n}`).checked = true;
    if (comment.tags.includes('Przyrodnicze')) document.getElementById(`nature${n}`).checked = true;
    if (comment.tags.includes('Sportowe')) document.getElementById(`sport${n}`).checked = true;
    if (comment.tags.includes('Gastronomiczne')) document.getElementById(`gastronomic${n}`).checked = true;
    if (comment.tags.includes('Kulturalne')) document.getElementById(`culture${n}`).checked = true;
}