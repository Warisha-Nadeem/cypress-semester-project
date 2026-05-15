describe('Navigation Tests', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

  })

  it('Navigation Test 1 - Open About Page', () => {

    cy.get('#react-burger-menu-btn')
      .click()

    cy.contains('About')
      .click()

    cy.url()
      .should('include', 'saucelabs')

  })

  it('Navigation Test 2 - Visit Multiple Pages', () => {

    cy.get('.shopping_cart_link')
      .click()

    cy.url()
      .should('include', 'cart')

    cy.go('back')

    cy.get('.title')
      .should('contain', 'Products')

  })

})