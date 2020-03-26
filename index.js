require('dotenv').config()


const server = require("./api/server.js");

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
//CI/CD PIPELINE stages
// * development (dev)
// * test
// * staging
// * ----manual gate ***varies depending on company
// * production