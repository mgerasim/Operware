import ExampleServer from './server';



const exampleServer = new ExampleServer();
const port = parseInt(process.env.PORT, 3000) || 8080;
exampleServer.start(port);