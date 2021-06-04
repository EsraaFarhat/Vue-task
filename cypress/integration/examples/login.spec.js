describe('My First Test', () => {
    it('Wrong email or password', () => {
      cy.visit('http://localhost:8080/login')

      cy.get('#email')
      .type('esraa@email.com')
      .should('have.value', 'esraa@email.com')

      cy.get('#password')
      .type('1234567M')
      .should('have.value', '1234567M')

      cy.get('#login').click()
      cy.contains('Your email and/or your password are incorrect.')
    })
  })

  describe('My Second Test', () => {
    it('Wrong password', () => {
      cy.visit('http://localhost:8080/login')

      cy.get('#email')
      .type('mohamed@instabug.com')
      .should('have.value', 'mohamed@instabug.com')

      cy.get('#password')
      .type('5435I458')
      .should('have.value', '5435I458')

      cy.get('#login').click()
      cy.contains('Your email and/or your password are incorrect.')
    })
  })

  describe('My Third Test', () => {
    it('Correct email and password', () => {
      cy.visit('http://localhost:8080/login')

      cy.get('#email')
      .type('mohamed@instabug.com')
      .should('have.value', 'mohamed@instabug.com')

      cy.get('#password')
      .type('1234567M')
      .should('have.value', '1234567M')

      cy.get('#login').click()
      cy.url().should('include', '/welcome')
    })
  })