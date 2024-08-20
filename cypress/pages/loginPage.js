class Login {
    userNameInput = "input#username";
    passwordInput = "input#password";
    loginButton = "button[name='login']";
    welcomeMessage = "p:nth-of-type(1) > strong:nth-of-type(1)";
  
    login(userName, password) {
      cy.get(this.userNameInput).clear().type(userName);
      cy.get(this.passwordInput).clear().type(password);
      cy.get(this.loginButton).click();
    }

    verifyLogin(name) {
        cy.get(this.welcomeMessage).contains(name)
    }
  };
  
  export default new Login();
  