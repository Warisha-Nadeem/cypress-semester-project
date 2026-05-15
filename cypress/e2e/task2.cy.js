describe('Task 2 Tests', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')

  })

  it('Assertion Practice', () => {

    cy.get('.login_logo')
      .should('be.visible')

    cy.get('.login_logo')
      .should('have.text', 'Swag Labs')

    cy.get('[data-test="login-button"]')
      .should('have.attr', 'type', 'submit')

  })

 it('Negative Assertion', () => {

  cy.contains('Epic sadface')
    .should('not.exist')

})

  it('Alias Practice', () => {

    cy.get('[data-test="username"]')
      .as('usernameField')

    cy.get('@usernameField')
      .type('standard_user')

  })

})
it('Custom Command Login Test', () => {

  cy.login()

  cy.url()
    .should('include', 'inventory')

})