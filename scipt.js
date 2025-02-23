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


function showInfo(car) {
    let title = "";
    let text = "";

    if (car === "bmw") {
        title = "BMW M3";
        text = "Der BMW M3 ist ein Hochleistungs-Sportwagen mit einem starken Motor.";
    } else if (car === "mercedes") {
        title = "Mercedes AMG";
        text = "Mercedes-AMG bietet leistungsstarke Modelle mit Luxus und Performance.";
    } else if (car === "audi") {
        title = "Audi RS6";
        text = "Der Audi RS6 kombiniert Sportlichkeit mit Alltagstauglichkeit und starkem Motor.";
    }

    document.getElementById("infoTitle").innerText = title;
    document.getElementById("infoText").innerText = text;
    document.getElementById("infoBox").classList.remove("hidden");
}

function closeInfo() {
    document.getElementById("infoBox").classList.add("hidden");
}
