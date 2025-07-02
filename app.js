function checkRegistration() {
    
    const age = parseInt(document.getElementById("age").value);

    
    const validEmail = document.getElementById("valiEmail").value === "true";

    
    const isAllowed = age >= 18 && validEmail;

    
    const resultElement = document.getElementById("regresult0");

    resultElement.textContent = isAllowed ? " Registro permitido" :
    " x Registro denegado";

    
    resultElement.className = isAllowed ? "true" : "false";
}

function check() {
    const isPremium = document.getElementById("is_premium").value === "true";
    const hasAccess = isPremium; // or add more logic if needed
    const resultElement = document.getElementById("contentResult");
    resultElement.textContent = hasAccess ? "contenido disponible" :
     "contenido bloqueado";
    resultElement.className = hasAccess ? "true" : "false";
}

function checkLogin() {
  const isLoggedIn = document.getElementById('isLoggedIn').value === "true";
  const resultElement = document.getElementById('loginResult');

  if (!isLoggedIn) {
    alert("Alerta: Por favor, inicia sesión.");
    resultElement.textContent = "No tienes permiso.";
    resultElement.style.color = "red";
  } else {
    resultElement.textContent = "Tienes permiso.";
    resultElement.style.color = "green";
  }
}




