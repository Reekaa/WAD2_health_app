This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application is a simple health app where user can register. When they log in they can create personal goals. These goals can be updated, deleted and marked as complete. The navigation on the website done through the navigation bar.

The project used:

JavaScript/React
NodeJS 
NEDB
Cypress

## How to run the project

`Pull donw code from Github`

In the project directory, you can run:

### `npm install`

Installs all dependencies.

### `npm run start`

Runs the app in the development mode.\
Open in Firefox [http://localhost:3000](http://localhost:3000) to view it in your browser (Please use Firefox as a CORS error in Chrome can't be bypassed by the usual settings)

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

Runs the server in development mode.\

### `npm run cypress`

Launches the cypress test runner in the interactive watch mode.\

## Netlify Deployment 

https://main--legendary-tartufo-e04894.netlify.app/

Open it in Firefox (Chrome has CORS issue). 
All functionality works as intened but need to follow steps as the deployed version fails to load Login page.

1. Register (redirects to Login)
2. Login
3. Create a goal
4. Update a goal
5. Delete goal
6. Logout (also breaks the app in deployment)

### Features

Unauthenticated: 

- Registration
- Login
- Home page
- About page

Authenticated: 

- Create Goal
- Update Goal
- Delete Goal
- List Goals
- List Achievements



