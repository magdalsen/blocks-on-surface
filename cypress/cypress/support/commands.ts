Cypress.Commands.add('typeNumbersAndClickButton', (numbers) => {
    cy.get('.block-nav__el input').type(numbers)
    .get('[data-cy="sendButton"]').click();
})

Cypress.Commands.add('checkResults', (numbers) => {
    cy.get('[data-cy="sumAddedBlocks"]').then($drops => {
        const textValue = $drops.text();
    cy.get('div[class="block-container"]')
        .find('div[class="block-one"]')
        .should('have.length', Number(blocksSum(numbers)));
    cy.get('div[class="block-container"]')
        .find('div[class="block-one block-drop"]')
        .should('have.length', Number(textValue));
    })

})

const blocksSum = (numbers: string) => {
    const splited = numbers.split("");
    const sum = splited.reduce((accumulator, currentValue) => {
        return Number(accumulator) + Number(currentValue)
      },0);
    return sum;
}

Cypress.Commands.add('checkIfNoResult', () => {
    cy.get('[data-cy="sumAddedBlocks"]').then($drops => {
        expect($drops.text()).to.eq("0");      
    cy.get('div[class="block-container"]').should('not.have.class', 'block');
    })
})