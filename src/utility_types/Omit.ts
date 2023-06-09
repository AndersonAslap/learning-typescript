interface Todo {
  priority: number
  description: string
  done: boolean
}

const todo_: Partial<Todo> = {
  description: 'Estudar',
  done: false,
}

function updateTodo(updatedTodo: Omit<Todo, 'priority' | 'description'>) {
  return { ...todo_, ...updatedTodo }
}

const updatedTodo = {
  done: true,
}

console.log(updateTodo(updatedTodo))
