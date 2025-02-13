import axios from "axios"

const gotoApp = () => {
  cy.visit('http://localhost:3000/');
  cy.window().then((win) => {
    win.console.log("Cypress 테스트 중 로그 확인");
  });

}

const checkAppTitle = () => {
  cy.get('h2[data-test="heading"').contains('Bookish')
}

const checkBookListWith = (expectation = []) => {
  cy.get('div[data-test="book-list"').should('exist');
  cy.get('div.book-item').should((books) => {
    expect(books).to.have.length(expectation.length);

    const titles = Array.from(books).map(x => x.querySelector('h2').innerHTML);
    expect(titles).to.deep.equal(expectation)
  })
}
const composeReview = (name: string, content: string) => {
  cy.get('input[name="name"]').type(name);
  cy.get('input[name="content"]').type(content);
  cy.get('button[name="submit"]').first().should('be.visible').click();

}

const checkReview = () => {
  cy.get('div[data-testid="reviews-container"]').should('have.length', 1);
}


const performSearch = (term: string) => {
  cy.get('[data-test="search"] input').type(term);
}

const gotoNthBookInTheList = (index: number) => {
  cy.get('div.book-item').contains('View Details').eq(index).click();
  cy.url().should('include', "/books/1"); // 디버깅
}

const checkBookDetail = (content: string = "") => {
  cy.url().then((url) => {
    console.log("📌 현재 Cypress URL:", url);
  });

  cy.url().should('include', "/books/1");
  cy.get('h2.book-title').contains(content);
};


describe('Bookish application', () => {
  beforeEach(() => {
    gotoApp();
  })
  it('Visits the bookish', () => {
    checkAppTitle();
  })
  it('Shows a book list', () => {
    checkBookListWith([
      'Refactoring',
      'Domain-driven design',
      'Building Microservices',
      'Acceptance Test Driven Development with React'
    ]);
  });
  it('Goes to the detail page', () => {
    gotoNthBookInTheList(0);
    checkBookDetail('Refactoring')
  })
  it('Searches for a title', () => {
    checkBookListWith([
      'Refactoring',
      'Domain-driven design',
      'Building Microservices',
      'Acceptance Test Driven Development with React'
    ]);
    performSearch('Refactoring');
    checkBookListWith(['Refactoring']);
  })
  it('Write a review for a book', () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:8080/books/1/reviews",
      failOnStatusCode: false
    });
    gotoNthBookInTheList(0);
    checkBookDetail('Refactoring');
    composeReview('Juntao Qiu', 'Excellent work!');
    checkReview();
  })





})
