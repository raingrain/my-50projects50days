const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const clearBtn = document.getElementById('clear');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
	todos.forEach((todo) => addTodo(todo));
}

isHasTodo();

clearBtn.addEventListener('click', (event) => {
	const todos = document.querySelectorAll('li');

	todosUL.innerHTML = '';

	changeBtn('add');

	updateLS();
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	addTodo();
});

function addTodo(todo) {
	let todoText = input.value;

	if (todo) {
		todoText = todo.text;
	}

	if (todoText) {
		const todoEl = document.createElement('li');

		if (todo && todo.completed) {
			todoEl.classList.add('completed');
		}

		todoEl.innerText = todoText;

		todoEl.addEventListener('click', () => {
			todoEl.classList.toggle('completed');
			isHasTodo();
			updateLS();
		});

		todoEl.addEventListener('contextmenu', (e) => {
			e.preventDefault();

			todoEl.remove();
			isHasTodo();
			updateLS();
		});

		todosUL.appendChild(todoEl);

		input.value = '';

		updateLS();
	}

	isHasTodo();
}

function updateLS() {
	let todosEl = document.querySelectorAll('li');

	const todos = [];

	todosEl.forEach((todoEl) => {
		todos.push({
			text: todoEl.innerText,
			completed: todoEl.classList.contains('completed'),
		});
	});

	localStorage.setItem('todos', JSON.stringify(todos));
}

function isHasTodo(params) {
	if (todosUL.innerHTML === '') {
		changeBtn('add');
	} else {
		changeBtn('remove');
	}
}

function changeBtn(status) {
	if (status === 'add') {
		clearBtn.classList.add('clearAll');
		clearBtn.innerText = 'All todos have been cleared';
	} else if (status === 'remove') {
		clearBtn.classList.remove('clearAll');
		clearBtn.innerText = 'Clear ALL';
	}
}
