document.addEventListener('DOMContentLoaded', function() {
    alert("Willkommen auf der Auto-Community-Seite!");
});
function showInfo(car) {
    let info = {
        "bmw": "Der BMW M3 ist ein Sportwagen mit hoher Leistung.",
        "mercedes": "Der Mercedes AMG bietet Luxus und Power in einem.",
        "audi": "Der Audi RS6 kombiniert Geschwindigkeit mit Eleganz."
    };

    alert(info[car]);
}


