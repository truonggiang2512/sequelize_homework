import express from "express"
import cors from "cors"
import rootRoute from "./Routes/rootRoute.js"
const app = express()
app.listen(8090)
app.use(cors())
app.use(express.json());
app.use(rootRoute)