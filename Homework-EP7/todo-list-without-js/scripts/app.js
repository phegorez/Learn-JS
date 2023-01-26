const addButton = document.getElementById('enter')
const userInput = document.getElementById('userInput')
const ul = document.querySelector('ul')
const todos = []

const addInput = (input) => {
    if(input){
        todos.push(input)
    }
    
}

const createList = () => {
    addInput(userInput.value)

    while (ul.firstChild) {
        ul.removeChild(ul.lastChild)
    }

    todos.forEach((todo) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(todo))
        ul.appendChild(li)

        userInput.value = ''

        const doneTask = () => {
            li.classList.toggle('done')
        }

        li.addEventListener('click', doneTask)

        const deleteButton = document.createElement('button')
        deleteButton.appendChild(document.createTextNode('x'))
        li.appendChild(deleteButton)

        deleteButton.addEventListener('click', () => {
            li.classList.add('delete')
        })
    })
}

addButton.addEventListener('click', createList)