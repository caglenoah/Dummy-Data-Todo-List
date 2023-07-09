let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    const ol = document.getElementById("todo-list")
    for (let i = 0; i < arrayOfTodos.length; i++) {
        const li = document.createElement("li")
        const liText = document.createTextNode(arrayOfTodos[i].title)
        li.appendChild(liText)
        ol.appendChild(li)
    }
    
}

const selectedNumber = document.getElementById(userNum).value

