const http = require('http');
const { createEventSourceResponseHandler } = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/events') {
    const eventSourceResponseHandler = createEventSourceResponseHandler();
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    eventSourceResponseHandler(res);
  } else {
    res.writeHead(404, 'Not Found');
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
