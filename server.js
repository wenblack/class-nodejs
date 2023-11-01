import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
  return "Hello World"
})

server.post('/videos', () => {
  return "Hello World"
})

server.put('/videos/:id', () => {
  return "Hello World"
})

server.delete('/videos/:id', () => {
  return "Hello World"
})

server.listen({
  port: 3333
})
