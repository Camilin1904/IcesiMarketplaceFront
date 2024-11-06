describe('template spec', () => {
  it('login', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[data-key="username"]').type('admin@gmail.com');
    cy.get('[data-key="password"]').type('Hola1234');
    cy.get('[data-key="submit"]').click();
    cy.get('label').contains('ICESI - Market');
  })
})

describe('template spec', () => {
  it('logout', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[data-key="username"]').type('admin@gmail.com');
    cy.get('[data-key="password"]').type('Hola1234');
    cy.get('[data-key="submit"]').click();
    cy.get('[data-key="logout"]').click();
    cy.get('a').contains('¿No estas registrado todavia?')
  })
})