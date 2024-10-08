document.getElementById("form-programare").addEventListener("submit", function(event) {
    event.preventDefault();

    const nume = document.getElementById("nume").value;
    const email = document.getElementById("email").value;
    const serviciu = document.getElementById("serviciu").value;
    const data = document.getElementById("data").value;

    if (nume === "" || email === "" || data === "") {
        alert("Te rugăm să completezi toate câmpurile.");
    } else {
        alert(`Programarea ta la ${serviciu} a fost înregistrată pentru data de ${data}.`);
        document.getElementById("form-programare").reset(); // Resetează formularul după trimitere
    }
});
