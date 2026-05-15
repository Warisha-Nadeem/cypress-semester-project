describe('Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Valid Login', () => {

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.url()
      .should('include', '/inventory.html')

  })

  it('Invalid Password', () => {

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('wrongpassword')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')

  })

  it('Empty Fields', () => {

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')

  })

})