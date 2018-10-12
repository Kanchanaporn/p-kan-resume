const express = require('express')
const app = express()
const port = 8000
const path = require('path');
//app.get('/', (req, res) => res.send('Hello World!'))


app.use(express.static(path.join(__dirname, 'resume')));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'resume', 'index.html'));
});

app.listen(port, () => console.log('app listening on port'+port))
