//função para validar o formulário
function criar(){
  var nome= document.getElementById('nome').value
  var email= document.getElementById('email').value
  var tel= document.getElementById('telefone').value
  var cidade= document.getElementById('cidade').value
  var estado= document.getElementById('estado').value
  var endereco= document.getElementById('endereco').value
  if (nome != "" && email != "" && tel != "" && cidade != "" && estado != "" && endereco != ""){
    window.alert("Bem Vindo " + nome +" \nAprovite nosso catalogo!");
    location.href= "Home.html"
  }else{
    window.confirm("Por favor preencha todas as caixas");
  }
}
//botão de voltar
function voltar(){
    window.history.back()
}
//checa se os cookies estao habilitados
function checkCookies() {
let text = "";
if (navigator.cookieEnabled == true) {
text = "Cookies are enabled.";
} else {
text = "Cookies are not enabled.";
}
document.getElementById("demo").innerHTML = text;
}
document.write(Date());
//animação do controle indo de um lado ao outro
{const image = document.querySelector('#myImage');
  let position = 0;
  function moveImage() {
  image.style.transform = `translateX(${position}px)`;
  position += 5;
  if (position > 1550) {
  position = 0;
  }
  }
}
  setInterval(moveImage, 15);
