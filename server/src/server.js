import express from "express"
import { routerUser } from "./routes/User.routes.js"
import { routerPost } from "./routes/Post.routes.js"
import { routerComment } from "./routes/Comment.routes.js"
import { tryToConnect } from "./database/connection.js"

const server = express()
const port = 8001

server.use(express.json())
server.use(routerUser)
server.use(routerPost)
server.use(routerComment)

server.listen(port, () => {
    tryToConnect()
    console.log("Running")
})

export default server