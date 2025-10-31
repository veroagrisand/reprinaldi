const express = require ('express');
const cors = require ('cors')
const app = express();
const port = process.env.PORT;

import db from db

cors();

app.get('/', (req, res, next)=>{
    res.json('response from new api');
});

app.get('/user', (req, res, next) => { 
   res.json('get all user from database')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
