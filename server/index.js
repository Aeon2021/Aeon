const express = require('express');
const PORT = 8080;

const app = express();
app.use(express.json())
app.get('/test', (req,res) => {
    res.status(200).send({
        test: 'TestLol',
        name: 'san'
        
    })
app.post('/test/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({message: 'Nothinglol' })
    }
    res.send({
        test: `logo = ${logo} and ID = ${id} `

    })

});

});
app.listen(
    PORT,
    () => console.log(`dis working ( http://localhost:${PORT} )`)
);