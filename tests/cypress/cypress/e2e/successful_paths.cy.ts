const border_numbers = Cypress.env('border_numbers');
const second_highest = Cypress.env('second_highest');
const zero_first = Cypress.env('zero_first');

describe('Successful paths', () => {
    beforeEach('Visit page', () => {
        cy.visit(Cypress.env('login_url'));
    });

    it('Border numbers are the highest', () => {
        cy.typeNumbersAndClickButton(border_numbers);
        cy.checkResults(border_numbers);
    });

    it('Second number from left is the highest', () => {
        cy.typeNumbersAndClickButton(second_highest);
        cy.checkResults(second_highest);
    });

    it('Zero x3 as first numbers', () => {
        cy.typeNumbersAndClickButton(zero_first);
        cy.checkResults(zero_first);
    });

    it('No input', () => {
        cy.typeNumbersAndClickButton("0");
        cy.checkResults("0");
    });
})