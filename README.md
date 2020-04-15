## Would You Rather React App!
React and Redux project for React Nano degree program.

### Additional Libraries/Dependencies
 - Material-UI
 - Font-Awesome
### Notable Features
 -  Persisting authentication.
		  When a user is authenticated, a stringified JSON object with an identifier "authedUser", is  set into the local storage, this is used for keeping track of currently logged in user, if a user is available, it will not be asked to log-in again and will be redirected to questions route. To log-out, please use the log-out button available on clicking the user tab on the  navbar. To force log-out clear delete "authedUser" from local storage or clear site data from using browser console.
		  
- Auth state listener using HOC
		- React Hooks based higher order component takes root component i.e App.js and listens to the Auth state from the state tree returned by Redux Store.
If auth state is returned null,  user is redirected to '/' i.e root, and rest of the app is made unavailable to the user.
- 404 page
		- React Router Switch component is used to handle 404 page not found logic.
### Setup Guide
1.  Do "npm install" on the root of the project
2.  Do "npm start" to start development server
3.  Do "npm run build" to export build

### References 

 1. https://reacttraining.com/react-router/web/example/auth-workflow
 2. https://reactjs.org/docs/higher-order-components.html
 3. https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial#firebases-authentication-api
 4. https://material-ui.com/components
 5. https://medium.com/@nil4u.you/create-auth-guard-in-react-js-212df08ade47
 6. https://reactjs.org/docs/hooks-intro.html
 7. https://tylermcginnis.com/why-react-hooks