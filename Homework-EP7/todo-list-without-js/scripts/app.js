const addButton = document.getElementById('enter');
const userInput = document.getElementById('userInput');
const ul = document.querySelector('ul');

let todos = [];

const addInput = (input) => {
  if (input) {
    todos.push({ task: input, isComplete: false });
  }
};

const createList = () => {
  addInput(userInput.value);

  todos.forEach((todo, index) => {

    let li = ul.children[index];

    if (!li) {
      li = document.createElement('li');
      li.appendChild(document.createTextNode(todo.task));
      ul.appendChild(li);

      const doneTask = () => {
        todos[index].isComplete = !todos[index].isComplete;
        li.classList.toggle('done');
      };

      li.addEventListener('click', doneTask);

      const deleteButton = document.createElement('button');
      deleteButton.appendChild(document.createTextNode('x'));
      li.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
        todos.splice(index, 1);
        li.remove();
      });
    } else {
      li.firstChild.nodeValue = todo.task;
    }

    if (todo.isComplete) {
      li.classList.add('done');
    } else {
      li.classList.remove('done');
    }

    console.log(todos)
  });

  userInput.value = '';
};

addButton.addEventListener('click', createList);
