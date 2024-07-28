Feature: Login HBATools

  Cenário: Enviando um formulário com entradas inválidas
    Dado que estou na página de login
    Quando insiro "teste@teste.com" no campo de e-mail
    Então eu insiro "123456" no campo de senha
    Então clico no botão entrar
    Então devo ver a mensagem "Login falhou. Verifique seu usuário e senha." acima do campo e-mail e senha

  Cenário: Enviando um formulário com entradas vazias
    Dado que estou na página de login
    Então clico no botão entrar
    Então devo ver uma notificação com a mensagem "Campos não podem estar vazios!"
