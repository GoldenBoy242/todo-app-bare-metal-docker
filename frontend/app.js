const API_URL = '/api/todos';

async function fetchTodos() {
  try {
    const res = await fetch(API_URL);
    const todos = await res.json();
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${todo.title}</span>
        <button class="btn-delete" onclick="deleteTodo(${todo.id})">Supprimer</button>
      `;
      list.appendChild(li);
    });
  } catch (err) {
    console.error('Erreur de chargement :', err);
  }
}

async function addTodo() {
  const input = document.getElementById('todo-input');
  const title = input.value.trim();
  if (!title) return;

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    input.value = '';
    fetchTodos();
  } catch (err) {
    console.error('Erreur lors de l’ajout :', err);
  }
}

async function deleteTodo(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTodos();
  } catch (err) {
    console.error('Erreur lors de la suppression :', err);
  }
}

fetchTodos();
