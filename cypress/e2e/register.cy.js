describe('Registration page', () => {
    it('loads registration page and the correct form', () => {
        cy.visit('http://localhost:3000/register')
        cy.contains('.MuiTypography-root', 'Register')
        cy.get('input[id="username"]')
        cy.get('input[id="password"]')
        cy.get('input[id="confirm-password"]')
        cy.get('button').contains('Register');
    })
})