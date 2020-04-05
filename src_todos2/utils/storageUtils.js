export function saveTodos(todo){
    localStorage.setItem('todos_key',JSON.stringify(todo))
}
export const getTodos=()=>JSON.parse(localStorage.getItem('todos_key') || '[]')