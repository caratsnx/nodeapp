require("appdynamics").profile({
 controllerHostName: 'kabuki201909242352403.saas.appdynamics.com',
 controllerPort: 80,
   accountName: 'kabuki201909242352403',
 accountAccessKey: 'wl4f70z9bamd',
 applicationName: 'mynodejs',
 tierName: 'mynodetier',
 nodeName: 'process' // The controller will automatically append the node name with a unique number
});

const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});