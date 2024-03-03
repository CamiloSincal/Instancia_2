import express from 'express';

const app = express();

app.get("/check",(req,res)=>{
    res.status(200).send('OK');
})

app.get("/",(req,res)=>{
    const data = {
        "Instancia": "Instancia #2 - API #2",
        "Curso": "Seminario de Sistemas 1",
        "Estudiante":"Estudiante - <202000605>"
    }

    const jsonD = JSON.stringify(data);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(jsonD);
})

app.listen(8000,() =>{
    console.log('SERVIDOR ESCUCHANDO')
})