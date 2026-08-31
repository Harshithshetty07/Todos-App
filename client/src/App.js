import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';

function App() {
   const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos()

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center pt-16 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Todo List
        </h1>

        <TodoForm onAdd={addTodo} />

        {loading && <p className="text-center text-gray-400 text-sm">Loading...</p>}
        {error && <p className="text-center text-red-500 text-sm">{error}</p>}

        {!loading && !error && (
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        )}
      </div>
    </div>
  )
}

export default App;
