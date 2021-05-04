# A Simple API for demo

- Clone this repository
- cd into the directory: `cd sample-api`
- Add PORT number to the .env file: `echo "PORT=3000" > .env`
- To run the tests: `npm test`
- To run the test and watch for changes: `npm test:dev`
- To run the server: `npm start`
- To run the server and watch for changes: `npm start:dev`

## Endpoints

- Users: /api/users (GET all users (Admin only), POST a user(Public))
- Authentication: /api/auth
- Login: /api/auth/login (POST request with credentials (Public))
- Logout: /api/auth/logout (GET request with authToken (Users/Admin only))

## Authentication

- Each request to endpoint that require authorization must contain an Authorization header as follows: `Bearer qwert`
- Each request to an endpoint that requires admin priviliges must contain the authToken for admin `Bearer qwerty`
- You can find authTokens for each user in the file `db/dummy.js`

## More info

- For further clarification, just send me a discord or go through the test file under the test folder.
