// Scroll suave para seções da página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exibir ano dinâmico no rodapé
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
});

// Exibir tamanho da página e do monitor
function showPageAndMonitorSize() {
    var pageWidth = document.documentElement.scrollWidth;
    var pageHeight = document.documentElement.scrollHeight;
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var sizeInfo = "Tamanho da Página: " + pageWidth + "x" + pageHeight + " | " + 
                   "Tamanho do Monitor: " + screenWidth + "x" + screenHeight;

    var infoElement = document.getElementById("page-monitor-info");
    infoElement.textContent = sizeInfo;
    infoElement.style.display = "block";
}

// Chamar função ao carregar a página e ao redimensionar a janela
window.onload = showPageAndMonitorSize;
window.onresize = showPageAndMonitorSize;