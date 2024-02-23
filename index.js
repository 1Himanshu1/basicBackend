require('dotenv').config()

const express = require('express') // require module syntax - old style(common js)
// import { Express } from 'express' -- new style(module js)


const app = express() // app yaha ecpress se bana hai to uske pas express ki powers hai

const port = 3000 // computer virtual ports on which server runs approx 65500. .. on this port it will run 

const gitData = {
  "login": "mojombo",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mojombo",
  "html_url": "https://github.com/mojombo",
  "followers_url": "https://api.github.com/users/mojombo/followers",
  "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
  "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
  "organizations_url": "https://api.github.com/users/mojombo/orgs",
  "repos_url": "https://api.github.com/users/mojombo/repos",
  "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mojombo/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Tom Preston-Werner",
  "company": "@chatterbugapp, @redwoodjs, @preston-werner-ventures ",
  "blog": "http://tom.preston-werner.com",
  "location": "San Francisco",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "mojombo",
  "public_repos": 66,
  "public_gists": 62,
  "followers": 23794,
  "following": 11,
  "created_at": "2007-10-20T05:24:19Z",
  "updated_at": "2024-02-08T04:58:15Z"
}

app.get('/', (req, res) => { // get request is being handled by app(exprrss powered) and it is listening on "/" 
  res.send('Hello World!') // callback functions are important in backend and we write them mostly  in backend
})

app.get("/login", (req,res)=>{
    res.send("This is a server")
})

app.get("/youtube", (req,res)=>{
    res.send("<h2> Chai aur code</h2>")
})

app.get("/github", (req,res)=>{
  res.json(gitData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// this is a basic server, i.e it doesnt end just here- it constantly listens on route "/"