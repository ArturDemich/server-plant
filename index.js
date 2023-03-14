import express from 'express'
import router from './router.js'
import cors from 'cors'

const port = process.env.PORT || 3020

/* const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
} */

const app = express()
//app.use(cors(corsOptions))
app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:19006"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS")
    next();
});

app.use('/api', router)

app.listen(port, () => console.log(`Server start on port ${port}`))

