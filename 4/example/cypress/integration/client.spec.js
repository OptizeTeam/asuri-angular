describe('Blog client side', function () {
  it('Shows latest posts and single post', function () {
    var url = 'http://localhost:4200';

    cy.visit(url);
    cy.url().should('eq', url + '/#/');

    cy.get('h1').should('contain', 'Strona główna');
    cy.get('.post').as('posts');
    cy.get('@posts').should('have.length', 5);
    cy.get('@posts').first().as('post');
    cy.get('@post').find('h2').should('have.length', 1);
    cy.get('@post').find('p').should('have.length', 1);
    cy.get('@post').find('a').as('readMoreButton');
    cy.get('@readMoreButton').should('have.length', 1);
    cy.get('@readMoreButton').should('contain', 'Czytaj dalej');

    cy.get('@readMoreButton').click();
    cy.url().should('eq', url + '/#/post/Witajcie-7');

    cy.get('.single-post').as('post');
    cy.get('@post').should('have.length', 1);
    cy.get('@post').find('h1').should('have.length', 1);
    cy.get('@post').find('.content').should('have.length', 1);
    cy.get('@post').find('.back').as('backButton');
    cy.get('@backButton').should('have.length', 1);
    cy.get('@backButton').should('contain', 'Wróć do strony głównej');

    cy.get('@backButton').click();
    cy.url().should('eq', url + '/#/');
  });
});
