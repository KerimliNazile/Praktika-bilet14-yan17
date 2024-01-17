import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose, { Schema } from 'mongoose'

dotenv.config()
app.use(cors())
app.use(express.json())

const setSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    star: { type: Number, required: true },
    heart: { type: Number, required: true },
    text: { type: String, required: true }

})
const Sets = mongoose.model("Sets", setSchema)

app.get('/sets', async (req, res) => {
    try {
        const sets = await Sets.find({})
        res.send(sets)
    } catch (error) {
        res.status(500).json({ message: error })
    }

})

app.get('/sets/:id', async (req, res) => {
    try {
        const sets = await Sets.findById(req.params.id)
        res.send(sets)
    } catch (error) {
        res.status(500).json({ message: error })
    }

})


app.post('/sets', async (req, res) => {
    try {
        const set = new Sets({
            image: req.body.image,
            title: req.body.title,
            star: req.body.star,
            heart: req.body.heart,
            text: req.body.text
        })
        await set.save()
        res.send({ message: "Created" })
    }
    catch (error) {
        res.status(500).json({ message: error })
    }



})




app.delete('/sets/:id', async (req, res) => {
    try {
        const sets = await Sets.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted" })
    } catch (error) {

        res.status(500).json({ message: error })
    }
})

const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(url)
    .then(() => console.log("Db connect"))
    .catch(err => console.log("Db not connect" + err))
app.listen(port, () => {
    console.log(`Example app listening on port `)
})