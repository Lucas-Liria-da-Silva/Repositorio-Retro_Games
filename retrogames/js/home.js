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

    // Iniciar o Web Worker
    if (window.Worker) {
        const worker = new Worker('retrogames/js/worker.js');

        // Enviar mensagem para o Worker iniciar a contagem
        worker.postMessage("startCounting");

        // Receber o resultado do Web Worker
        worker.onmessage = function(event) {
            console.log("Contagem de visitantes:", event.data);
            alert("Visitantes até agora: " + event.data); // Exibir o valor retornado
        };
    } else {
        console.log("Web Workers não são suportados pelo navegador.");
    }
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


//Aumentar Container
document.getElementById("nerdInfo").addEventListener("click", function() {
    const box = document.getElementById("box");
    const carouselBackground = document.querySelector(".carousel-background");

    // Alternar altura
    if (box.style.height === "2150px") {
        box.style.height = "1625px"; // Altura original do #box
        carouselBackground.style.height = "1675px"; // Altura padrão do .carousel-background
    } else {
        box.style.height = "2150px"; // Nova altura do #box
        carouselBackground.style.height = "2200px"; // Nova altura do .carousel-background
    }
});





//Gráfico
// Carregar a biblioteca de gráficos do Google
google.charts.load('current', {packages: ['corechart']});

// Configurar a função de callback para desenhar o gráfico
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Dados do gráfico
    const data = google.visualization.arrayToDataTable([
        ['Mêses', 'Vendas'],
        ['Janeiro', 100],
        ['Fevereiro', 80],
        ['Março', 90],
        ['Abril', 120],
        ['Maio', 150],
        ['Junho', 140],
        ['Julho', 160],
        ['Agosto', 170],
        ['Setembro', 150],
        ['Outubro', 190],
        ['Novembro', 200],
        ['Dezembro', 200],
    ]);

    // Configurações do gráfico
    const options = {
        title: 'Vendas Anuais',
        hAxis: {title: 'Mêses'},
        vAxis: {title: 'Vendas'},
        legend: 'none',
    };

    // Desenhar o gráfico na div com ID "myChart"
    const chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
}
