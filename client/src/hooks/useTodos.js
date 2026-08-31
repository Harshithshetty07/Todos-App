import { useState, useEffect, useCallback } from 'react'
import { todoApi } from '../api/todoApi'

export function useTodos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTodos = useCallback(async () => {
    try {
      setLoading(true)
      const data = await todoApi.getAll()
      setTodos(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const addTodo = async (title) => {
    const newTodo = await todoApi.create({ title, isComplete: false })
    setTodos((prev) => [...prev, newTodo])
  }

  const toggleTodo = async (todo) => {
    const updated = { ...todo, isComplete: !todo.isComplete }
    await todoApi.update(todo.id, updated)
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? updated : t))
    )
  }

  const deleteTodo = async (id) => {
    await todoApi.remove(id)
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  return { todos, loading, error, addTodo, toggleTodo, deleteTodo }
}