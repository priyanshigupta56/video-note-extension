//importing express
const express = require('express');
require('dotenv').config();
const UserRouter = require('./routers/UserRouter');
const NoteRouter = require('./routers/NoteRouter');
const cors = require('cors');

//initialize express
const app = express();
const port = process.env.PORT || 5000;
//middlewares
app.use(cors({
    origin: '*'
}))
app.use(express.json()); //to parse 
app.use('/user', UserRouter);
app.use('/note', NoteRouter);


//endpoints or routes
app.get('/', (req, res) => {
res.send('response from express');
})
app.get('/add', (req, res) => {
    res.send('response from add ');
})

app.get('/getall', (req, res) => {
    res.send('response from getall');
})

app.get('/delete', (req, res) => {
    res.send('response from delete ');
})
app.get('/update', (req, res) => {
    res.send('response from update ');
})
//starting the server
app.listen(port, () => {
    console.log('server started');
    
});
