
describe('Successful paths', () => {
    beforeEach('Visit page', () => {
        cy.visit('http://localhost:5173');
    });

    it('Border numbers are the highest', () => {
        cy.get('.block-nav__el input').type('7142567');
    });
})