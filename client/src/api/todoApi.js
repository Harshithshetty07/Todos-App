const BASE_URL = import.meta.env.REACT_APP_API_URL || '/api/todos'

async function handleResponse(res) {
  if (!res.ok) {
    const message = await res.text()
    throw new Error(message || 'Something went wrong')
  }
  if (res.status === 204) return null
  return res.json()
}
export const todoApi = {

  getAll: () =>
    fetch(BASE_URL).then(handleResponse),

  getById: (id) =>
    fetch(`${BASE_URL}/${id}`).then(handleResponse),

  create: (todo) =>
    fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    }).then(handleResponse),

  update: (id, todo) =>
    fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    }).then(handleResponse),

  remove: (id) =>
    fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    }).then(handleResponse),

}