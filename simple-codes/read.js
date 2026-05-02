// const fs = module.require('fs');

// fs.readFile("file.txt", function(err, data) {
//     console.log(data.toString());
// })
// console.log(process.argv);
const http = module.require("http");
// notice below, the first parameter to createServer is a callback function!
const server = http.createServer(function(req, res, next) {
  // sending some header info in my response
  res.writeHead(200, { "Content-type": "text/html" });
  // send some data to the client
  res.write("<h1>Hello, I'm Radhika Kapoor</h1>");
  // end the response
  return res.end();
});
// notice below, another callback function!
server.listen(3000, function() {
  console.log("Go to localhost:3000");
});