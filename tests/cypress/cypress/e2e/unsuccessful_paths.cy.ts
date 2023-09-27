const letters = Cypress.env('letters');

describe('Unsuccessful paths', () => {
    beforeEach('Visit page', () => {
        cy.visit(Cypress.env('login_url'));
    });

    it('Write letters instead of numbers', () => {
        cy.typeNumbersAndClickButton(letters);
        cy.checkIfNoResult();
    });
})