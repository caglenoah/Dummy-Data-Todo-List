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

const ol = document.getElementById("todo-list")

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    reset() 
    for (let i = 0; i < arrayOfTodos.length; i++) {
        const li = document.createElement("li")
        const liText = document.createTextNode(arrayOfTodos[i].title)
        li.appendChild(liText)
        ol.appendChild(li)
    }
    
}


const reset = () => {
    ol.innerHTML = "" 
}

const resetButton = () => {
    document.getElementById("userNum").value = ""
    ol.innerHTML = "" 
}

const popById = () => {
    reset()
    const numById = document.getElementById("userNum").value
    console.log(numById)
    const arrayOfTodosById = arrayOfTodos.filter((todo) => {
        return todo.userId == numById
    })
    console.log(arrayOfTodosById)
    for (let i = 0; i < arrayOfTodosById.length; i++) {
        const li = document.createElement("li")
        const liText = document.createTextNode(arrayOfTodosById[i].title)
        li.appendChild(liText)
        ol.appendChild(li)
    }

}

const compTodos = () => {
    reset()
    const arrayOfCompletedTodos = arrayOfTodos.filter((todo) => {
        console.log(typeof todo.completed)
        return todo.completed == true
    })
    console.log(arrayOfCompletedTodos)
    for (let i = 0; i < arrayOfCompletedTodos.length; i++) {
        const li = document.createElement("li")
        const liText = document.createTextNode(arrayOfCompletedTodos[i].title)
        li.appendChild(liText)
        ol.appendChild(li)
    }
}

const inCompTodos = () => {
    reset()
    const arrayOfincompletedTodos = arrayOfTodos.filter((todo) => {
        return todo.completed == false
    })
    console.log(arrayOfincompletedTodos)
    for (let i = 0; i < arrayOfincompletedTodos.length; i++) {
        const li = document.createElement("li")
        const liText = document.createTextNode(arrayOfincompletedTodos[i].title)
        li.appendChild(liText)
        ol.appendChild(li)
    }
}