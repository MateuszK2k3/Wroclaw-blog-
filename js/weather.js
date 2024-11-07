// Funkcja renderująca informacje o pogodzie na stronie.
function renderWeather(weather) {
    // Ustawienie tekstu elementu o identyfikatorze 'weather' na podstawie danych o pogodzie.
    document.getElementById('weather').textContent = weather.weather[0].description +
        ' ' + Math.round(weather.main.temp) + '℃';
}

// Funkcja pobierająca informacje o pogodzie z serwisu OpenWeatherMap.
function fetchWeather(query) {
    // URL do zapytania API OpenWeatherMap z parametrami ustawiającymi lokalizację (Wrocław),
    // jednostki temperatury (metryczne), język odpowiedzi (polski) oraz klucz API.
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Wroclaw&units=metric&lang=pl&appid=92d16d3db25a11ddce1f22ba69b079c3";

    // Wywołanie funkcji fetch() do pobrania danych z serwisu OpenWeatherMap.
    fetch(url)
        // Odebranie odpowiedzi i przekonwertowanie jej na format JSON.
        .then((response) => response.json())
        // Przetworzenie danych otrzymanych z API i przekazanie ich do funkcji renderWeather().
        .then((data) => renderWeather(data));
}

// Wywołanie funkcji fetchWeather() bez argumentów, co spowoduje pobranie informacji o pogodzie dla Wrocławia.
fetchWeather();
