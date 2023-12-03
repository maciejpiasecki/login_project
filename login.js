// Wyciągnięcie z dokumentu elementów na podstawie ich ID i przypisanie ich do stałych

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");



// Dodanie do przycisku login funkcji która będzie uruchamiać się podczas kliknięcia na niego
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Wyciągnięcie z inputów username i password wprowadzonych wartości
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    // Walidacja wprowadzonych danych
    if (username === "Student" && password === "1234") {
        //Komunikat o zalogowaniu się
        alert("You have successfully logged in.");
        // Odświeżenie strony
        location.reload();
    } else {

        loginErrorMsg.style.opacity = 1;


    }

})