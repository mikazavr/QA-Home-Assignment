describe('Global feed', () => {
  beforeEach(function () {
      cy.visit('/');
  });

  it('Global feed is shown when unauthorized user is visits the site', () => {
      cy.intercept('GET', '**/articles*').as('articles');
      cy.intercept('GET', '**/tags').as('tags');
      
      cy.wait('@articles');
      cy.wait('@tags');

      cy.contains('.feed-toggle', 'Global Feed').should('be.visible');
  });

  it('Global feed is loading', () => {
      cy.contains('.home-page', 'Loading articles').should('be.visible');
  });

  it('Global feed contains articles', () => {
      cy.intercept('GET', '**/articles*').as('articles');
      cy.intercept('GET', '**/tags').as('tags');
      
      cy.wait('@articles');
      cy.wait('@tags');

      cy.get('@articles').its('response.body.articles').then(function (articles) {
          articles.forEach(article => cy.contains('h1', article.title).should('be.visible'));
      });    
  });


  it('Filtering the feed by tag', () => {
      cy.intercept('GET', '**/articles*').as('articles');
      cy.intercept('GET', '**/tags').as('tags');
      
      cy.wait('@articles');
      cy.wait('@tags');

      cy.get('@tags').its('response.body.tags').then(function (tags) {
          tags.forEach(tag => cy.contains('.sidebar > .tag-list > *', tag).should('be.visible'));
      });

      cy.get('@tags').its('response.body.tags.0').then(function (firstTag) {
          cy.contains('.sidebar > .tag-list > *', firstTag).should('be.visible').click();

          cy.contains('.nav-link', `#${firstTag}`).should('be.visible');

          cy.contains('.home-page', 'Loading articles').should('be.visible');

          cy.wait('@articles');

          cy.get('@articles').its('response.body.articles').then(function (articles) {
              articles.forEach(article => expect(article.tagList).to.contain(firstTag));
          });
      });
  });

  describe('Global Feed pagination', () => {
      it('selects second page from the end', () => {
          cy.intercept('GET', '**/articles*').as('articles');
          cy.visit('/');

          cy.wait('@articles');
          cy.get('.pagination').should('be.visible');
          cy.get('@articles').its('response.body.articlesCount').then(function (articlesCount) {
              const pageCount = Math.ceil(articlesCount / 10);
              cy.get('.pagination .page-link').should('have.length', pageCount);

              cy.get(`.pagination :nth-child(${pageCount - 1}) .page-link`).click();
              cy.wait('@articles');

              cy.contains('.pagination .active', `${pageCount - 1}`).should('be.visible');
          });
          
          
      });
  });
});