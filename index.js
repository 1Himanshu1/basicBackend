require('dotenv').config()

const express = require('express') // require module syntax - old style(common js)
// import { Express } from 'express' -- new style(module js)


const app = express() // app yaha ecpress se bana hai to uske pas express ki powers hai

const port = 4000 // computer virtual ports on which server runs approx 65500. .. on this port it will run 

app.get('/', (req, res) => { // get request is being handled by app(exprrss powered) and it is listening on "/" 
  res.send('Hello World!') // callback functions are important in backend and we write them mostly  in backend
})

app.get("/login", (req,res)=>{
    res.send("This is a server")
})

app.get("/youtube", (req,res)=>{
    res.send("<h2> Chai aur code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// this is a basic server, i.e it doesnt end just here- it constantly listens on route "/"