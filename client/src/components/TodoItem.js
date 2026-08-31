import Button from '../ui/Button'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-3 mb-2 shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => onToggle(todo)}
          className="w-4 h-4 accent-blue-600"
        />
        <span
          className={`text-sm ${
            todo.isComplete ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {todo.title}
        </span>
      </div>
      <Button variant="danger" onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </li>
  )
}