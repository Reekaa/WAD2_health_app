describe('Home page', () => {
  it('loads home page', () => {
    cy.visit('http://localhost:3000/')
  })
  it('shows correct message and "Register button" on home page', () => {
    cy.contains(".MuiTypography-root', 'Welcome to our health fitness app, your ultimate partner in achieving your wellness goals. Our app is designed to make your health and fitness journey simple, convenient, and effective. Whether you're looking to lose weight, build muscle, or simply improve your overall health, our platform offers a variety of features to help you stay on track and motivated.")
    cy.get('button').contains('REGISTER');
})
})