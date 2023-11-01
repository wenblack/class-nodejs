import { randomUUID } from 'crypto'

export class DatabaseMemory {
  #videos = new Map()

  list() {
    return this.#videos.values()
  }
  create(video) {
    const randomId = randomUUID()

    this.#videos.set(randomId, video)
  }
  update(id, video) {
    this.#videos.set(id, video)
  }
  delete(id) {
    this.#videos.delete(id)
  }
}