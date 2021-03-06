import express, { Request, response, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { request } from 'http';
import { videosRouter } from './routes/videos-routers';



const app = express()

const corsMiddleware = cors();
app.use(corsMiddleware)
const jsonBodyMiddleware = bodyParser.json()
app.use(jsonBodyMiddleware)

const port = process.env.PORT || 5001

const videos = [
  {id: 1, title: 'About JS - 01', author: 'it-incubator.eu'},
  {id: 2, title: 'About JS - 02', author: 'it-incubator.eu'},
  {id: 3, title: 'About JS - 03', author: 'it-incubator.eu'},
  {id: 4, title: 'About JS - 04', author: 'it-incubator.eu'},
  {id: 5, title: 'About JS - 05', author: 'it-incubator.eu'},
]

app.use(cors())

app.get('/videos', (req: Request, res: Response) => {
  res.send(videos)
})
app.post('/videos', (req: Request, res: Response) => {
  const newVideo = {
    id: +(new Date()),
    title: req.body.title,
    author: 'it-incubator.eu'
}
videos.push(newVideo)
res.send(newVideo)
})
app.get('/videos/:videoId', (req: Request, res: Response) => {
  const id = +req.params.videoId;
    // FIND VIDEO AND RETURN IT
    // IF VIDEO IS NOW EXISTS THEN RETURN 404 CODE
})
app.put('/videos/:videoId', (req: Request, res: Response) => {
  
})

app.delete('/videos/:videoId', (req: Request, res: Response) => {
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].id === +req.params.videoId) {
     videos.splice(i, 1)
     res.send(204)
     return;
    }
  }
  res.send(404)
})

app.use('/videos', videosRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})