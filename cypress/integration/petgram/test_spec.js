/* global describe, it, expect, cy */

/* describe('Mi primer test,', function () {
  it('para ver mi función', function () {
    expect(true).to.equal(true)
  })
}) */

describe('Petgram', function () {
  /* ver que la pagina funciona */
  it('The app could be visited', function () {
    cy.visit('/')
  })
  /* navegar entre una categoria y vemos imagenes */
  it('Could navigate to a category and see cards', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })
  /* navegar de la navbar al home */
  it('Could navigate using the navbar to the home', function () {
    cy.visit('/pet/1')

    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  /* usuarios no registrados vean el formulario */
  it('A non registered user see forms to register and login on favs page', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
