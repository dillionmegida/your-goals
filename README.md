# your-goals

An application that helps you define your goals and frequently guides you (especially by notification emails or text message) of them until achieved.

## 🚀 How to start the server

The server is built with [apollo-server](https://www.apollographql.com/docs/apollo-server/), it is easy to work with.

The frontEnd developer is free to use any request system of his choice, but it is recommended in this project to work with [apollo-client](https://www.apollographql.com/docs/apollo-client/).

> To start up the server

### Step One ☑️

- Open the project in a terminal window and navigate into the `server` directory.
- Once within the server directory, run `npm install` to install the required dependencies.
- Start your `mongodb` service locally.
- Create a `config.json` inside the `src/config` folder. [Check this gist](https://gist.github.com/phavor/0c5e05bb23adae2bca1802badf646118) for example values.
- Back in the terminal, create the https credentials by running this:

```sh
$ openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

make sure to answer the question, they are easy to answer.

- Once your mongodb service is up and running, then run `npm start` or `yarn start`.
- Open the localhost at the specified port to interact with the playground
- The localhost endpoint is what you then call from your frontEnd interface to communicate with the backend service.

## Let's fire up 🔥

your-goals.com is about to go live...
