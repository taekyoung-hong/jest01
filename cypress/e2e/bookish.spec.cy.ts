import { expect } from 'chai';

describe('Bookish application', () => {
  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-test="book-list"]').should('exist');
    cy.get('.book-item').should('have.length', 2).each((book) => {
      cy.wrap(book).find('h2').invoke('text').then((title) => {
        expect(['Refactoring', 'Domain-driven design']).to.include(title);
      });
    });
  });
});
