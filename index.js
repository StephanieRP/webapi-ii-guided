// import server from './server.js'
const server = require('./server.js'); // <<<<<<<<<< import server

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
