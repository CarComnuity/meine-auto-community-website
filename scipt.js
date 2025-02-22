document.addEventListener('DOMContentLoaded', function() {
    alert("Willkommen auf der Auto-Community-Seite!");
});
function showInfo(car) {
    const carInfo = {
        bmw: {
            name: "BMW M3",
            image: "bmw-m3.jpg",
            details: "Der BMW M3 ist ein sportliches Fahrzeug mit herausragender Leistung und einem dynamischen Design."
        },
        mercedes: {
            name: "Mercedes AMG",
            image: "mercedes-amg.jpg",
            details: "Die Mercedes AMG-Modelle bieten exklusive Performance mit Luxus und Komfort."
        },
        audi: {
            name: "Audi RS6",
            image: "audi-rs6.jpg",
            details: "Der Audi RS6 kombiniert beeindruckende Leistung mit einem eleganten und funktionalen Design."
        }
    };

    const infoSection = document.getElementById("more-info");

    // Neue Info für das ausgewählte Auto hinzufügen
    const newInfo = document.createElement("div");
    newInfo.innerHTML = `
        <h3>${carInfo[car].name}</h3>
        <img src="${carInfo[car].image}" alt="${carInfo[car].name}">
        <p>${carInfo[car].details}</p>
    `;

    infoSection.style.display = "block"; // Zeigt den Bereich mit den Infos an
    infoSection.appendChild(newInfo); // Fügt neue Info zum Abschnitt hinzu
}
