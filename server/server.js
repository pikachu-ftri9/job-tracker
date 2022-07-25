const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname, '../build')));

const apiRouter = require(path.join(__dirname, 'routes/api.js'));

app.use('/api', apiRouter);
app.all('*', (req, res) => {
  console.log('Page not found');
  return res.status(404).send('Page not found. Click <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a> for more information.')
});
app.use(defaultErrorHandler);
function defaultErrorHandler(err, req, res, next){
  const defaultErr = 
  {
    log : 'Express error handler caught unknown middleware error',
    status : 400,
    message : { err: 'An error occured'}
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
};

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
