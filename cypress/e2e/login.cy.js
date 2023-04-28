describe('Login page', () => {
    it('loads login page', () => {
        cy.visit('http://localhost:3000/login')
        cy.contains('.MuiTypography-root', 'Login')
        cy.get('input[id="username"]')
        cy.get('input[id="password"]')
        cy.get('button').contains('Login');
    })
})