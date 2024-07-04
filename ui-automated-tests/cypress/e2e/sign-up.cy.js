describe('Sign Up form', function() {
  beforeEach(function () {
      cy.wrap({
          username: `test+${Date.now()}`,
          password: `test+${Date.now()}`,
          email: `test+${Date.now()}@test.test`,
      }).as('user');
      cy.visit('/register');
      cy.get('form').should('be.visible').find('.form-control').should('have.length', 3);

      cy.get(`.form-control[placeholder=Username]`).as('usernameInput');
      cy.get(`.form-control[placeholder=Email]`).as('emailInput');
      cy.get(`.form-control[placeholder=Password]`).as('passwordInput');
      cy.contains('button', 'Sign up').as('signupButton');
  });

  it('should register new user with random email', function () {
      cy.intercept('POST', '**/users').as('postUser');

      cy.get('@user').then(user => {
          cy.get('@usernameInput').type(user.username);
          cy.get('@emailInput').type(user.email);
          cy.get('@passwordInput').type(user.password);
          cy.get('@signupButton').click();
          
          cy.wait('@postUser');
      })
      // cy.get('.error-messages').should('not.be.visible');
  });

  it('should show error for the attempt to register user with empty username', function () {
      cy.intercept('POST', '**/users').as('postUser');

      cy.get('@user').then(user => {
          cy.get('@emailInput').type(user.email);
          cy.get('@passwordInput').type(user.password);
          cy.get('@signupButton').click();
          
          cy.wait('@postUser');

          cy.get('.error-messages').should('be.visible').contains(`username can't be blank`).should('be.visible');
      });
  });

  it('should show error for the attempt to register user with empty email', function () {
      cy.intercept('POST', '**/users').as('postUser');

      cy.get('@user').then(user => {
          cy.get('@usernameInput').type(user.username);
          cy.get('@passwordInput').type(user.password);
          cy.get('@signupButton').click();
          
          cy.wait('@postUser');

          cy.get('.error-messages').should('be.visible').contains(`email can't be blank`).should('be.visible');
      });
  });

  it('should show error for the attempt to register user with empty password', function () {
      cy.intercept('POST', '**/users').as('postUser');

      cy.get('@user').then(user => {
          cy.get('@usernameInput').type(user.username);
          cy.get('@emailInput').type(user.email);
          cy.get('@signupButton').click();
          
          cy.wait('@postUser');

          cy.get('.error-messages').should('be.visible').contains(`password can't be blank`).should('be.visible');
      });
  });

  afterEach(function () {
      cy.visit('/settings');
      cy.contains('button', 'Or click here to logout.').click();
      // Instead, might be changed to
      // cy.clearAllLocalStorage();
      // as token is stored in local storage
  });
});

describe('Register form with existing user', function() {
  const user = {
      username: `test+${Date.now()}`,
      password: `test+${Date.now()}`,
      email: `test+${Date.now()}@test.test`,
  };

  beforeEach(function () {
      cy.intercept('POST', '**/users').as('postUser');
      cy.visit('/register');
      cy.get('form').should('be.visible').find('.form-control').should('have.length', 3);

      cy.get(`.form-control[placeholder=Username]`).as('usernameInput').type(user.username);
      cy.get(`.form-control[placeholder=Email]`).as('emailInput').type(user.email);
      cy.get(`.form-control[placeholder=Password]`).as('passwordInput').type(user.password);
      cy.contains('button', 'Sign up').as('signupButton').click();

      cy.wait('@postUser');
      cy.visit('/register');
  });

  it('should show error for the attempt to register user with the same name', function () {
      cy.intercept('POST', '**/users').as('postUser');
      cy.get('@usernameInput').type(user.username);
      cy.get('@emailInput').type(user.email + '1');
      cy.get('@passwordInput').type(user.password + '1');
      cy.get('@signupButton').click();
      
      cy.wait('@postUser');

      cy.get('.error-messages').should('be.visible').contains('username has already been taken').should('be.visible');
  });

  it('should show error for the attempt to register user with the same email', function () {
      cy.intercept('POST', '**/users').as('postUser');
      cy.get('@usernameInput').type(user.username + '1');
      cy.get('@emailInput').type(user.email);
      cy.get('@passwordInput').type(user.password + '1');
      cy.get('@signupButton').click();
      
      cy.wait('@postUser');

      cy.get('.error-messages').should('be.visible').contains('email has already been taken').should('be.visible');
  });

  afterEach(function () {
      cy.visit('/settings');
      cy.contains('button', 'Or click here to logout.').click();
      // Instead, might be changed to
      // cy.clearAllLocalStorage();
      // as token is stored in local storage
  });
});

describe('Navigating to Sign Up', function () {
  it('should opens the registration form by clicking Sign Up from header', function () {
      cy.visit('/');
      // force is used to override the error as part of 'Sign up' button is covered
      cy.contains('.nav-link', 'Sign up').click({force: true});
      cy.get(`.form-control[placeholder=Username]`).should('be.visible');
      cy.get(`.form-control[placeholder=Email]`).should('be.visible');
      cy.get(`.form-control[placeholder=Password]`).should('be.visible');
  });
});