                // Ids para a indentificação dos inputs
                function criar(){
                var nome= document.getElementById('nome').value;
                var email= document.getElementById('email').value;
               // Fumção para a validção do formulário 
                  if ( nome == "Matheus" && email == "ma123")
                  {
                   alert("Sucesso em efetuar o login");
                        location.href= "index.html";
                        }else{
                        (isNaN);
                         alert("Falha em efetuar o login, tente novamente");
                         }
                          }
                //transfere o usuario para a pagina de criação de conta com um click
                function conta(){
                  location.href= "Criacao_conta.html";
                }
                //animação do controle indo de um lado ao outro
                {const image = document.querySelector('#myImage');
                let position = 0;
                function moveImage() {
                image.style.transform = `translateX(${position}px)`;
                position += 5;
                if (position > 1150) {
                position = 0;
                }
                }
              }
                setInterval(moveImage, 15);
                document.write(Date());