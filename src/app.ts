import express, { Express } from "express"
import bodyParser from 'body-parser'
import mongoose from "mongoose"
import cors from "cors"
import todoRouter from "./routes/todo.routes"
import path from "path"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(todoRouter)
app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../../client/build/index.html'));
});

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.pxa5l.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
  )
  .catch(error => {
    throw error
  })