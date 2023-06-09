interface Todo {
  priority: number
  description: string
  done: boolean
}

const todo: Partial<Todo> = {
  description: 'Estudar',
  done: false,
}

console.log(todo)
