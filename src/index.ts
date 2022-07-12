import express, { Request, response, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { request } from 'http';



const app = express()

const corsMiddleware = cors();
app.use(corsMiddleware)
const jsonBodyMiddleware = bodyParser.json()
app.use(jsonBodyMiddleware)

const port = process.env.PORT || 3000​

const videos = [
  {id: 1, title: 'About JS - 01', author: 'it-incubator.eu'},
  {id: 2, title: 'About JS - 02', author: 'it-incubator.eu'},
  {id: 3, title: 'About JS - 03', author: 'it-incubator.eu'},
  {id: 4, title: 'About JS - 04', author: 'it-incubator.eu'},
  {id: 5, title: 'About JS - 05', author: 'it-incubator.eu'},
]  

app.get('/', (req: Request, res: Response) => {
  debugger;
  res.send(videos)
})

app.get('/', (req: Request, res: Response) => {})
app.get('/videos', (req: Request, res: Response) => {})
app.post('/videos', (req: Request, res: Response) => {})
app.get('/videos/:videoId', (req: Request, res: Response) => {
  const id = +req.params.videoId;
  // FIND VIDEO AND RETURN IT
  // IF VIDEO IS NOW EXISTS THEN RETURN 404 CODE
})
app.put('/videos/:videoId', (req: Request, res: Response) => {})
app.delete('/videos/:videoId', (req: Request, res: Response) => {})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})