// Inicialização do Swiper
var swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: true,
});

// Alerta automático de boas-vindas
window.onload = function() {
    alert("Bem-vindo ao RetroGames!");

    // Exibe as informações do navegador (escondidas)
    navegadorInfo();

    // Verifica cookies
    verificarCookie();

    // Alerta temporizado com atraso de 15 segundos
    setTimeout(function() {
        alert("Esperamos que você esteja gostando do site!");
    }, 15000); // 15 segundos de atraso
};

// Função para exibir informações do navegador (escondidas)
function navegadorInfo() {
    const info = `
        Nome do navegador: ${navigator.appName}<br>
        Versão: ${navigator.appVersion}<br>
        Idioma: ${navigator.language}<br>
        Plataforma: ${navigator.platform}<br>
        Cookies habilitados: ${navigator.cookieEnabled}
    `;
    document.getElementById('navegador-info').innerHTML = info;
}

// Funções para criar, ler e verificar cookies
function criarCookie(nome, valor, dias) {
    let data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expira = "expires=" + data.toUTCString();
    document.cookie = nome + "=" + valor + ";" + expira + ";path=/";
}

function lerCookie(nome) {
    let nomeEQ = nome + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nomeEQ) == 0) {
            return c.substring(nomeEQ.length, c.length);
        }
    }
    return "";
}

function verificarCookie() {
    let usuario = lerCookie("usuario");
    if (usuario != "") {
        alert("Bem-vindo novamente, " + usuario);
    } else {
        usuario = alert("Usamos cookies, está de acordo?");
        if (usuario != "" && usuario != null) {
            criarCookie("usuario", usuario, 30); // Cookie de 30 dias
        }
    }
}
