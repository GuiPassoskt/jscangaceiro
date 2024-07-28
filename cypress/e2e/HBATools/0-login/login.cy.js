describe('Login HBATools', () => {
  describe('Enviando um formulário com entradas inválidas', () => {
    after(() => {
      cy.clearAllCookies();
    });

    it('Dado que estou na página de login', () => {
      cy.visit('Login/Login');
    });

    it('Quando insiro "teste@teste.com" no campo de e-mail', () => {
      cy.get('input[name=Email]').type('teste@teste.com');
    });

    it('Então eu insiro "123456" no campo de senha', () => {
      cy.get('input[name=Password]').type('123456');
    });

    it('Então clico no botão entrar', () => {
      cy.get('input[type=button]').click();
    });

    it('Então devo ver a mensagem "Login falhou. Verifique seu usuário e senha." acima do campo e-mail e senha', () => {
      cy.get('label[id=msgError]').contains('Login falhou. Verifique seu usuário e senha.');
    });
  });
  describe('Enviando um formulário com entradas vazias', () => {
    after(() => {
      cy.clearAllCookies();
    });

    it('Dado que estou na página de login', () => {
      cy.visit('Login/Login');
    });

    it('Então clico no botão entrar', () => {
      cy.get('input[type=button]').click();
    });

    it('Então devo ver uma notificação com a mensagem "Campos não podem estar vazios!"', () => {
      cy.get('div[class=toast-message]').contains('Campos não podem estar vazios!');
    });
  });
});
