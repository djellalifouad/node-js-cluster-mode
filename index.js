const express = require('express')
const cluster  = require('cluster')
if(cluster.isMaster){
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
}else {

const app = express();
function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}
app.get("/", (req, res) => {
  doWork(10000);
  return res.send("hi there");
});
app.get('/fast',(req,res)=> {
    return res.send("hi i'am fast")
})
app.listen(3000);
}
