declare namespace Cypress {
    interface Chainable {
        typeNumbersAndClickButton(numbers: string): void
    }

    interface Chainable {
        checkResults(numbers: string): void
    }

    interface Chainable {
        checkIfNoResult(): void
    }
  }