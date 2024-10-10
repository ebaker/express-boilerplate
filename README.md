# Express.js API with Axios

This project is a simple Express.js application that demonstrates how to create a basic API endpoint and make external API calls using Axios.

## Prerequisites

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   `git clone https://github.com/ebaker/express-boilerplace.git`

2. Navigate to the project directory:
   `cd express-boilerplate`

3. Install dependencies:
   `npm install`

4. Create a .env file in the root directory and add the following:

   PORT=3000
   API_URL=https://jsonplaceholder.typicode.com/posts/1

## Running the Application

Start the server:
`node app.js`

The server will start running at `http://localhost:3000`.

## API Endpoints

1. Root endpoint:
   - URL: `http://localhost:3000/`
   - Method: GET
   - Description: Returns a "Hello, World!" message

2. API endpoint:
   - URL: `http://localhost:3000/api`
   - Method: GET
   - Description: Fetches data from an external API (JSONPlaceholder) and returns it

## Dependencies

- Express.js: `npm install express`
- Axios: `npm install axios`
- dotenv: `npm install dotenv`

## Development

To run the server in development mode with automatic restarts:
`npm install -g nodemon`
`nodemon app.js`

## Environment Variables

The following environment variables are used:

- `PORT`: The port number for the server (default: 3000)
- `API_URL`: The URL for the external API call


