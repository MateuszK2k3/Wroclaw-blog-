// Indeks aktualnie wyświetlanego krasnala.
var current_dwarf = 0;

// Liczba wszystkich krasnali.
var dwarfs_number = 10;

// Tablica zawierająca dane o krasnalach: opis, szerokość geograficzną, długość geograficzną.
var dwarfs = [
    [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.938654431891!2d17.0306077!3d51.109592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3e87ed863d1%3A0x3d907549a4cc4fc5!2sKrasnale%20Syzyfki!5e0!3m2!1spl!2spl!4v1717851482151!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        51.10907669965721,
        17.032892942014975,
    ],
    [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.039045665752!2d17.02897406108911!3d51.10773976108497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2741756399d%3A0x296042ed218641b7!2sdwarf%20Papa!5e0!3m2!1spl!2spl!4v1717849664624!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        51.10797423473316,
        17.032487299734022
    ],
    [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8539162118914!2d17.02663362695313!3d51.11115540000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2756de2c699%3A0x996d533c4b45b406!2sKrasnal%20WrocLovek!5e0!3m2!1spl!2spl!4v1717850989824!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        51.11132042403135,
        17.030774957553035
    ],
    [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8539162118914!2d17.02663362695313!3d51.11115540000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2750a24383f%3A0x5f36442ee1c8bfb!2sKrasnal%20%C5%BByczliwek!5e0!3m2!1spl!2spl!4v1717851095079!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        51.11063338132663,
        17.03127921283334
    ],
    [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.929993159169!2d17.029154626953126!3d51.10975180000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc275c883f0f3%3A0x5d46952d1a4e7655!2sKrasnale%20Troszka%20i%20Adoratorek!5e0!3m2!1spl!2spl!4v1717851148411!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        51.10988314969471,
        17.033328144060288
    ],
    [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.929993159169!2d17.029154626953126!3d51.10975180000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc275ada3c313%3A0xcac6dc5f53e0498d!2sKrasnale%20%C5%9Alepak%2C%20G%C5%82uchak%20i%20W-Skers!5e0!3m2!1spl!2spl!4v1717851186508!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        51.10978211150117,
        17.031686632190375
    ],
    [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.1077025302143!2d17.02290772695313!3d51.106472999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27369cc046f%3A0x868f0efcbb193905!2sKrasnale%20Muzycy%20(Orkiestra)!5e0!3m2!1spl!2spl!4v1717851321258!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        51.10669193148118,
        17.027070515224537
    ],
    [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8525503253495!2d17.026373126953132!3d51.1111806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2756dd5508b%3A0x2ab4095cdefc27b3!2sKrasnale%20Po%C5%BCarki!5e0!3m2!1spl!2spl!4v1717851362816!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        51.1113186812973,
        17.03046081337428
    ],
    [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.9851474639354!2d17.028636926953133!3d51.1087342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc273d0c4de7b%3A0x8a7145f561bb41ec!2sKrasnal%20S%C5%82upnik%20%C5%9Awidnicki%202!5e0!3m2!1spl!2spl!4v1717851422103!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        51.10882513644599,
        17.03278898638878
    ],
    [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.938654431891!2d17.0306077!3d51.109592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27685c455fb%3A0x34560dbeba85c3d0!2sKrasnale%20Grajek%20i%20Meloman!5e0!3m2!1spl!2spl!4v1717851527313!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        51.10878705119053,
        17.035060166836686
    ]
]

// Funkcja wyswietlająca mapę krasnala i jego zdjęicie
function showDwarf() {
    // Wywołanie funkcji showButtons
    showButtons();
    var html_code = ""

    //dodanie kodu html, który wyświetla mapę i zdjęcie aktualnego krasnala
    html_code += dwarfs[current_dwarf][0] + '\n<img src="images/dwarfs/dwarf' + (current_dwarf+1) + '.jpg" alt="dwarf1">';
    document.getElementById('dwarf-container').innerHTML = html_code;
    document.getElementById('length').innerHTML= "Odległosć w lini prostej odtwojej lokalizacji: " + dwarfs[current_dwarf][3] + "km";
}

// Funkcja do wyświetlania przycisków nawigacyjnych w zależności od aktualnego krasnala.
function showButtons() {
    // Jeśli aktualny krasnal jest pierwszym na liście, wyświetlenie tylko przycisku "Następny".
    if (current_dwarf === 0) {
        document.getElementById('buttons_kras').innerHTML =
            '<button type="button" onclick="nextDwarf()">Następny</button>';
    }
    // Jeśli aktualny krasnal jest ostatnim na liście, wyświetlenie tylko przycisku "Poprzedni".
    else if (current_dwarf === (dwarfs_number - 1)) {
        document.getElementById('buttons_kras').innerHTML =
            '<button type="button" onclick="previousDwarf()">Poprzedni</button>';
    }
    // W przeciwnym razie, gdy aktualny krasnal jest gdzieś pośrodku listy, wyświetlenie obu przycisków "Poprzedni" i "Następny".
    else {
        document.getElementById('buttons_kras').innerHTML =
            '<button type="button" onclick="previousDwarf()">Poprzedni</button>\n' +
            '<button type="button" onclick="nextDwarf()">Następny</button>';
    }
}


//następny krasnal
function nextDwarf() {
    current_dwarf++;
    showDwarf();
}

//poprzedni krasnal
function previousDwarf() {
    current_dwarf--;
    showDwarf();
}

// Funkcja do pobierania aktualnej geolokalizacji użytkownika.
function getGeolocation() {
    // Sprawdzenie, czy przeglądarka wspiera geolokalizację.
    if (navigator.geolocation) {
        // Jeśli geolokalizacja jest wspierana, użycie metody getCurrentPosition, aby pobrać aktualną pozycję użytkownika.
        // Przekazanie do niej funkcje showPosition i showError jako funkcje zwrotne w przypadku powodzenia i niepowodzenia.
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        // Jeśli przeglądarka nie wspiera geolokalizacji, wyświetlenie odpowiedniego komunikatu w konsoli.
        console.log("Twoja przeglądarka nie wspiera geolokalizacji.");
    }
}

// Funkcja wywoływana w przypadku poprawnego pobrania aktualnej pozycji geograficznej użytkownika.
function showPosition(position) {
    // szerokość i długość geograficzną z obiektu position.
    var latitude = position.coords.latitude; // Szerokość geograficzna.
    var longitude = position.coords.longitude; // Długość geograficzna.

    // Iterowanie przez wszystkich krasnoludów i oblicz odległość między każdym krasnoludem a pozycją użytkownika.
    for(var i=0; i<dwarfs_number; i++){
        // Wywołanie funkcji haversineDistance, aby obliczyć odległość między dwoma punktami na sferze ziemskiej
        // i zaktualizowanie odległości dla każdego krasnoluda w tablicy dwarfs.
        dwarfs[i][3] = haversineDistance(latitude, longitude, dwarfs[i][1], dwarfs[i][2]).toFixed(2); // Zaokrąglona odległość do dwóch miejsc po przecinku.
    }
}


// Funkcja obsługująca błędy podczas pobierania pozycji geograficznej użytkownika.
function showError(error) {
    // Instrukcja switch do obsługi różnych rodzajów błędów zwracanych przez API geolokalizacji.
    switch(error.code) {
        case error.PERMISSION_DENIED:
            // Błąd: użytkownik zablokował dostęp do geolokalizacji.
            console.log("Użytkownik zablokował dostęp do geolokalizacji.");
            break;
        case error.POSITION_UNAVAILABLE:
            // Błąd: informacje o lokalizacji są niedostępne.
            console.log("Informacje o lokalizacji są niedostępne.");
            break;
        case error.TIMEOUT:
            // Błąd: przekroczono limit czasu pobierania lokalizacji.
            console.log("Przekroczono limit czasu pobierania lokalizacji.");
            break;
        default:
            // Nieznany błąd, który nie jest obsługiwany przez konkretne przypadki.
            console.log("Wystąpił nieznany błąd.");
            break;
    }
}


// Funkcja zamianiająca jednostkę stopni na radiany
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

// Funkcja obliczająca odległość między dwoma punktami na Ziemi przy użyciu wzoru Haversine.
// Parametry 'lat1', 'lon1', 'lat2' i 'lon2' to szerokości i długości geograficzne punktów w stopniach.
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Średni promień Ziemi w kilometrach
    // Konwersja różnic szerokości i długości geograficznych na radiany
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);
    // Obliczenie odległości przy użyciu wzoru Haversine
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Wyznaczenie kąta
    // Obliczenie odległości na podstawie wzoru Haversine i zwrócenie wyniku
    return R * c;
}

// Funkcje użyte od razu po interpretacji kodu
getGeolocation();
showDwarf();