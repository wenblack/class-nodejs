import { fastify } from 'fastify'
import { DatabaseMemory } from './database/memory.js'

const server = fastify()
const database = new DatabaseMemory()

server.get('/videos', (req, res) => {
  const search = req.query.search
  const videos = database.list(search)

  return videos
})

server.post('/videos', (req, res) => {
  const { title, description, duration } = req.body
  database.create(
    {
      title,
      description,
      duration
    }
  )

  return res.status(201).send()
})

server.put('/videos/:id', (req, res) => {
  const videoId = req.params.id
  const { title, description, duration } = req.body

  database.update(videoId, {
    title,
    description,
    duration
  })

  return res.status(204).send()
})

server.delete('/videos/:id', (req, res) => {
  const videoID = req.params.id

  database.delete(videoID)

  return res.status(204).send()
})

server.listen({
  port: 3333
})
