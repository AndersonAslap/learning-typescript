import { Book } from './Book'
import { Person } from './Person'
import { Repository } from './Repository'

const persons = new Repository<Person | Book>()
persons.add(new Person('Aslap', 24))
persons.add(new Book('The code book'))
console.log(persons)
