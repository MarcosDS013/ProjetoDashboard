function redirectUser(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // valores dos campos de login e senha
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifique se a senha está correta (fictícia no exemplo)
    if ( username === "user" && password === "123") {
      // Adiciona a classe de fade-out na página atual
      document.body.classList.add("fade-out");

      // Aguarda um pequeno intervalo para permitir a animação de fade-out
      setTimeout(function () {
        // Armazena o nome de usuário no armazenamento local do navegador
        localStorage.setItem("username", username);

        window.location.href = "/ProjetoDashboard/dashboard.html";
      }, 800); // Tempo correspondente à duração da animação de fade-out
    } else {
      alert("Informação incorreta. Tente novamente.");
    }
  }