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

describe('template spec', () => {
  it('register', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('[data-key="user"]').type('prueba');
    cy.get('[data-key="username"]').type('prueba@gmail.com');
    cy.get('[data-key="password"]').type('Hola1234');
    cy.get('[data-key="submit"]').click();
    cy.get('label').contains('ICESI - Market');
  })
})

describe('template spec', () => {
  it('profile', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[data-key="username"]').type('prueba@gmail.com');
    cy.get('[data-key="password"]').type('Hola1234');
    cy.get('[data-key="submit"]').click();
    cy.get('[data-key="profile"]').click();
    cy.get('h1').contains('prueba');
  })
})

describe('template spec', () => {
  it('seller', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[data-key="username"]').type('prueba@gmail.com');
    cy.get('[data-key="password"]').type('Hola1234');
    cy.get('[data-key="submit"]').click();
    cy.get('[data-key="/join"]').click();
    cy.get('[data-key="phone"]').type('3022852699');
    cy.get('[data-key="location"]').type('ICESI');
    cy.get('[data-key="submit"]').click();
    cy.get('label').contains('ICESI - Market');
  })
})