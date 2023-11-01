import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.write("Hello World")

  return res.end()
})

server.listen(3333)