import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Adi 123 ');
}) 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
