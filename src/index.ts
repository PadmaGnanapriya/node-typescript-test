import express, {Request, Response, Application} from 'express';
// Create a new express app instance
const app: Application = express();
app.get('/',  (req:Request, res:Response)=> {
res.send('Node Express TypeScript');
});
app.get('/cominglevel', (req:Request, res:Response) =>{
    res.send('Routing test for this');
    });
    

const PORT :number=4000;
app.listen(PORT, function () {
console.log(`App is listening on port ${PORT}!`);
});
// npm run tsc  
// node src/index.js