describe('template spec', () => {
  it('passes', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/login')
 
    cy.get('a').contains('¿No estas registrado todavia?')
  })
})