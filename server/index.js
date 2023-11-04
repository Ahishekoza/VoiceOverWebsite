import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.get('/api',(req,res)=>{
    res.status(200).json({
        message:'Success'
    })
})



app.listen(3000,()=>{
    console.log('listening on port 3000')
})