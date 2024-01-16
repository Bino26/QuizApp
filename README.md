## Simple MERN Quiz App

The Simple Quiz App is a MERN stack-based web application designed to provide users with an engaging quiz-taking experience. 

## Tech Stack

- **Client:** React JS , CSS , MATERIAL-UI

- **Server:** Node, Express , MongoDB .

- **Authentication :** JSON Web Tokens (JWT)


## Key Features:

- **Easy Access to Quizzes::** Users can select and participate in quizzes effortlessly.
- **Quiz Navigation:** Intuitive quiz navigation for easy movement between questions..
- **Score Tracking:** A summary at the end displaying the user's performance .
- **Efficient Data Storage:** MongoDB used for efficient storage of quiz questions and answers.

## Run Locally

Clone the project :

```bash
  git clone <repository-url>
```

Go to the project directory :

```bash
  cd repository-name
```

## Running the App

1. Start the backend server:

```bash
  cd backend
```

Install the dependencies :

```bash
  npm install
```

To run this project, you will need to create an .env file and add the following environment variables to your .env file:

```
PORT=<server-port>
MONGO_URL=<mongodb-connection-string>
CLIENT_URL=<client-side-url>

```

Launch the server :

```bash
  npm run start
```

2. Start the frontend server:

```bash
   cd client
```

Install the dependencies :

```bash
  npm install
```
To run this project, you will need to create an .env file and add the following environment variables to your .env file:

```
REACT_APP_SERVER_HOSTNAME= backend_url
```

Launch the server :

```bash
  npm start 
```


3. Access the app in your web browser:

Open a web browser and access the application at `http://localhost:3000`

**Note:** Make sure to update the port number (`3000`) according to your client server configuration.

Feel free to customize and enhance the project according to your needs and send pull requests.

## Screenshoots

**Main Dashboard** :
![main-page](https://github.com/Bino26/QuizApp/assets/81714858/1e6414c3-6ddb-4fbd-82f0-a07aa373b189)

**Quiz Interface** : 
![quiz-interface](https://github.com/Bino26/QuizApp/assets/81714858/68fb6f94-3606-4b72-8cc9-8bfb563f137a)


**Result Dashboard** : 
![result-dashboard](https://github.com/Bino26/QuizApp/assets/81714858/bb4c71b7-26f7-476c-b878-cb5c82658ea9)


