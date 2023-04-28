describe('About page', () => {
    it('loads about page', () => {
        cy.visit('http://localhost:3000/about')
    })
    it('shows correct message on about page', () => {
        cy.contains('.MuiTypography-root', 'Welcome to our health and fitness goal tracking website! We are dedicated to helping individuals achieve their wellness goals and live a happier, healthier life. Our platform is designed to be user-friendly and customizable, allowing you to track your progress and stay motivated along the way.')
    })
})