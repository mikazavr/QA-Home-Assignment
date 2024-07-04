describe('Article Navigation', () => {
  it('Article page is opened by clicking article from the Global Feed', () => {
      cy.intercept('GET', '**/articles*').as('articles');

      cy.visit('/');
      
      cy.wait('@articles').its('response.body.articles').then(articles => {
          const firstArticle = articles[0];
          cy.get('.preview-link').should('have.length', articles.length);
          //click on first article
          cy.get('a.preview-link').then(links => links[0].click());
          //wait till navigation
          cy.location('pathname', {timeout: 60000})
            .should('include', `/${firstArticle.slug}`);
          cy.contains('h1', firstArticle.title);
          cy.contains('div', firstArticle.body);
      });
  });

  it('Article page is opened by clicking article from the Your Feed', () => {
      cy.intercept('GET', '**/articles*').as('articles');
      // register user, you can use your API-way and login, you could do it if you SHARED me something

      cy.visit('/register');
      cy.get('form').should('be.visible').find('.form-control').should('have.length', 3);

      cy.intercept('POST', '**/users').as('postUser');
      cy.get(`.form-control[placeholder=Username]`).type(`test+${Date.now()}`);
      cy.get(`.form-control[placeholder=Email]`).type(`test+${Date.now()}`);
      cy.get(`.form-control[placeholder=Password]`).type(`test+${Date.now()}@test.test`);
      cy.contains('button', 'Sign up').click();
      
      cy.wait('@postUser');

      //end registration

      // subscribing to someone
      cy.intercept('POST', '**/follow').as('followReq');

      cy.contains('.nav-link', 'Global Feed').click(); // switch to global feed
      cy.get('a.preview-link').then(links => links[0].click()); // navigate to first article
      cy.contains('button', 'Follow').click(); // press follow button
      cy.wait('@followReq');
      //end
      
      cy.visit('/');
      
      cy.wait('@articles').its('response.body.articles').then(articles => {
          const firstArticle = articles[0];
          cy.get('.preview-link').should('have.length', articles.length);
          //click on first article
          cy.get('a.preview-link').then(links => links[0].click());
          //wait till navigatoin
          cy.location('pathname', {timeout: 60000})
            .should('include', `/${firstArticle.slug}`);
          cy.contains('h1', firstArticle.title);
          cy.contains('div', firstArticle.body);
      });

  });
});

describe('New article', () => {
  it(`'New Article' button is hidden for an unauthorized users`, () => {
      cy.visit('/');
      cy.contains('.nav-link', 'New Article').should('not.exist');
  });

  describe('Registered user', () => {
      beforeEach(() => {
        cy.registerNew();
      });
  
      it(`'New Article' button is displayed for the logged in users`, () => {
          cy.visit('/');
          cy.contains('.nav-link', 'New Article').should('be.visible');
      });

      describe('Article editor', () => {
          beforeEach(() => {
              cy.visit('/');
              cy.contains('.nav-link', 'New Article').should('be.visible').click();

              cy.get('form').should('be.visible').find('.form-control').should('have.length', 4);

              cy.get(`.form-control[name=articleTitle]`).as('titleInput');
              cy.get(`.form-control[name=description]`).as('descriptionInput');
              cy.get(`.form-control[name=body]`).as('bodyInput');
              cy.get(`.form-control[name=tags]`).as('tagsInput');
              cy.contains('button', 'Publish Article').as('publishButton');
          });

          it(`Article editor is opened by clicking 'New Article' button`, () => {
              cy.get('@titleInput').should('be.visible');
              cy.get('@descriptionInput').should('be.visible');
              cy.get('@bodyInput').should('be.visible');
              cy.get('@tagsInput').should('be.visible');
              cy.get('@publishButton').should('be.visible');
          });

          it(`Article successfully created`, () => {
              cy.intercept('POST', '**/articles').as('postArticle');

              const artTitle = 'title';
              const artDesc = 'description';
              const artBody = 'bodybodybody bodybodybody bodybodybody';
              const artTags = 'tag1{enter}tag2{enter}';
              cy.get('@titleInput').type(artTitle);
              cy.get('@descriptionInput').type(artDesc);
              cy.get('@bodyInput').type(artBody);
              cy.get('@tagsInput').type(artTags);
              cy.get('@publishButton').click();

              cy.wait('@postArticle').its('response.body.article').then(article => {
                  // redirectred
                  cy.location('pathname', {timeout: 60000})
                      .should('include', `/${article.slug}`);
              });
          });

          it(`An error message is displayed to the user if they leave the 'Title' field blank`, () => {
              cy.intercept('POST', '**/articles').as('postArticle');

              const artDesc = 'desc';
              const artBody = 'body';
              const artTags = 'tag1{enter}tag2{enter}';
              cy.get('@descriptionInput').type(artDesc);
              cy.get('@bodyInput').type(artBody);
              cy.get('@tagsInput').type(artTags);
              cy.get('@publishButton').click();

              // no error message on article page
              cy.wait('@postArticle').its('response.statusCode').should('be.equal', 422);
              cy.contains('.error-messages', `title can't be blank`).should('be.visible');
          });

          it(`An error message is displayed to the user if they leave the 'Description' field blank`, () => {
              cy.intercept('POST', '**/articles').as('postArticle');

              const artTitle = 'title';
              const artBody = 'body';
              const artTags = 'tag1{enter}tag2{enter}';
              cy.get('@titleInput').type(artTitle);
              cy.get('@bodyInput').type(artBody);
              cy.get('@tagsInput').type(artTags);
              cy.get('@publishButton').click();

              // no error message on article page
              cy.wait('@postArticle').its('response.statusCode').should('be.equal', 422);
              cy.contains('.error-messages', `description can't be blank`).should('be.visible');
          });

          it(`An error message is displayed to the user if they leave the 'Body' field blank`, () => {
              cy.intercept('POST', '**/articles').as('postArticle');

              const artTitle = 'title';
              const artDesc = 'desc';
              const artTags = 'tag1{enter}tag2{enter}';
              cy.get('@titleInput').type(artTitle);
              cy.get('@descriptionInput').type(artDesc);
              cy.get('@tagsInput').type(artTags);
              cy.get('@publishButton').click();

              // no error message on article page
              cy.wait('@postArticle').its('response.statusCode').should('be.equal', 422);
              cy.contains('.error-messages', `body can't be blank`).should('be.visible');
          });

          describe('Tags', () => {
              it(`The tag is added to the Tags`, () => {
                  const tag = 'test-tag';
                  cy.get('@tagsInput').type(`${tag}{enter}`);
                  cy.contains('.tag-default', tag).should('be.visible');
              });

              it(`The tag is removed from the Tags`, () => {
                  const tag1 = 'some-tag-to-remove';
                  const tag2 = 'test-tag';
                  cy.get('@tagsInput').type(`${tag1}{enter}`);
                  cy.get('@tagsInput').type(`${tag2}{enter}`);
                  cy.contains('.tag-default', tag1).find('i').click();
                  cy.contains('.tag-default', tag2).should('be.visible');
                  cy.contains('.tag-default', tag1).should('not.exist');
              });
          });

      });
  });
});