import { column } from './DColumn'
import { entity } from './DEntity'
import { Entity } from './Entity'

@entity({ schema: 'Aslap', table: 'book' })
export class Book extends Entity {
  @column({ name: 'title' })
  title: string

  @column({ name: 'author' })
  author: string

  constructor(title: string, author: string) {
    super()
    this.title = title
    this.author = author
  }
}
