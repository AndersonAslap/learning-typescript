import { Book } from './Book'
import { ORM } from './ORM'
import { PostgreSQLConnection } from './PostgreSQLConnection'

async function init() {
  const connection = new PostgreSQLConnection()
  const book = new Book('Clean Code', 'Robert Martin')
  const orm = new ORM(connection)
  await orm.save(book)
}

init()
