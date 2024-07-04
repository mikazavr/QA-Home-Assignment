describe('Sign In', () => {
    
    beforeEach(function (){
        cy.visit('/login')

        cy.get(`input[name=email]`).as('emailInput');
        cy.get(`input[name=password]`).as('passwordInput');
        cy.contains('button', 'Sign in').as('signinButton');

        
        const user = {username: `test+${Date.now()}`,
        password: `test+${Date.now()}`,
        email: `test+${Date.now()}@test.test`};

        cy.wrap(user).as('user');
        cy.postRequest('https://api.realworld.io/api/users', {user})

    })
    

    it('A user with an existing account can successfully log in', () => {
        cy.intercept('POST', '**/users/login').as('userLogin');
        // Given
        
        cy.get('@user').then(user => {
            cy.get('@emailInput').type(user.email);
            cy.get('@passwordInput').type(user.password);
            cy.get('@signinButton').click();
        });
        //When
        
        //Then
        cy.wait('@userLogin');

        cy.contains('.feed-toggle', 'Your Feed').should('be.visible');
    })

    it('An error message when invalid email',() => {
        
        cy.get('@user').then(user => {
            cy.get('@emailInput').type(user.email + '1');
            cy.get('@passwordInput').type(user.password);
            cy.get('@signinButton').click();
        });

        cy.contains('.error-messages', 'email or password is invalid').should('be.visible');
        cy.url().should('contain', '/login')
    })

    it('An error message when invalid password', () => {
        //cy.intercept('POST', '**/users/login').as('userLogin');
        //cy.postRequest('https://api.realworld.io/api/users', {user}).wait();

        cy.get('@user').then(user => {
            cy.get('@emailInput').type(user.email);
            cy.get('@passwordInput').type(user.password+'1');
            cy.get('@signinButton').click();
        });
        //cy.wait('@userLogin');

        cy.contains('.error-messages', 'email or password is invalid').should('be.visible');
        cy.url().should('contain', '/login')

    })

    it('An error message when blank email', () => {

        cy.get('@user').then(user => {
            cy.get('@passwordInput').type(user.password);
            cy.get('@signinButton').click();
        });

        cy.contains('.error-messages', `email can't be blank`).should('be.visible');
        cy.url().should('contain', '/login')
    })

    it('An error message when blank password', () => {
        cy.get('@user').then(user => {
            cy.get('@emailInput').type(user.email);
            cy.get('@signinButton').click();
        });

        cy.contains('.error-messages', `password can't be blank`).should('be.visible');
        cy.url().should('contain', '/login')
    })

});


