import express from 'express';
// Create a new express app instance
const app: express.Application = express();
app.get('/', function (req, res) {
res.send('Node Express TypeScript');
});
app.get('/cominglevel', function (req, res) {
    res.send('Routing test for this');
    });
    

const PORT :number=4000;
app.listen(PORT, function () {
console.log(`App is listening on port ${PORT}!`);
});