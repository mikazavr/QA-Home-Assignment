const apiUrl = Cypress.env('apiUrl');

Cypress.Commands.add('getLoginToken', (user = Cypress.env('user')) => {
    return cy
        .request('POST', `${apiUrl}/api/users/login`, {
            user: Cypress._.pick(user, ['email', 'password'])
        })
        .its('body.user.token')
        .should('exist');
});

Cypress.Commands.add('login', (user = Cypress.env('user')) => {
    if (user.token) {
        localStorage.setItem('token', user.token);
        cy.visit('/');
    } else {
        cy.getLoginToken(user).then(token => {
            localStorage.setItem('token', token)
            // with this token set, when we visit the page
            // the web application will have the user logged in
            cy.visit('/');
        });
    }
});

Cypress.Commands.add('register', (user) => {
    return cy
        .request('POST', `${apiUrl}/api/users`, { user })
        .its('body.user')
        .should('exist');
});

Cypress.Commands.add('registerNew', () => {
    const user = {
        email: `he+${Date.now()}@he.he`,
        password: `${Date.now()}`,
        username: `he+${Date.now()}`,
    };
    cy.register(user).then(newUser => {
            localStorage.setItem('token', newUser.token);
            Cypress.env('user', {...user, ...newUser});
    });
});

Cypress.Commands.add('postRequest', (url, body = {}) => {
    return cy.request('POST', url, body);
});