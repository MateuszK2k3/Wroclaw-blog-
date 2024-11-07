// Liczba atrakcji, które będą wyświetlane na stronie.
var iloscAtrakcji = 5;

// Funkcja przewijająca slajdy do przodu lub do tyłu.
function plusSlides(n, k) {
    // Wywołanie funkcji showSlides() z odpowiednimi argumentami.
    showSlides(slideIndex += n, k);
}

// Funkcja wywoływana po załadowaniu okna przeglądarki.
window.onload = function currentSlide() {
    // Pętla inicjalizująca pokaz slajdów dla każdej atrakcji.
    for(var i=0; i<iloscAtrakcji;i++)
        // Wywołanie funkcji showSlides() ustawiającej początkowy slajd dla każdej atrakcji.
        showSlides(slideIndex = 1, i+1);
    // Pętla wczytująca komentarze z localStorage dla każdej atrakcji.
    for(var j=0; j<iloscAtrakcji; j++){
        readFromJSON(j+1);
    }
}

// Funkcja wyświetlająca slajdy dla danej atrakcji.
function showSlides(n, k) {
    let i;
    // Pobranie wszystkich slajdów dla danej atrakcji.
    let slides = document.getElementsByClassName(`mySlides${k}`);
    // Jeśli numer slajdu przekroczy zakres, ustawienie go na pierwszy slajd.
    if (n > slides.length) {slideIndex = 1}
    // Jeśli numer slajdu jest mniejszy niż 1, ustawienie go na ostatni slajd.
    if (n < 1) {slideIndex = slides.length}
    // Ukrycie wszystkich slajdów.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Wyświetlenie aktualnego slajdu.
    slides[slideIndex-1].style.display = "block";
}
