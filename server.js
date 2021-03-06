const http = require('http');
import './src/configs/database';
import App from './src/app';
import params from './src/configs/params';

const server = http.createServer(App());
const PID = process.pid;

server.listen(params.apiPort, () => {
    console.log(`Listening ${server.address().port} port. Process: ${PID}`);
});
