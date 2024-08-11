import express from 'express';
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('This is VideoTubes server!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})