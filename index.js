const todosNode = document.querySelector(".js-todos");
const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");

let todos = [];

function addTask(text) {
    const todo = {
        text,
        done:false,
        id: Math.random().toString()
    };

    todos.push(todo);
}

function deleteTask(id) {
    todos.forEach((todo) => {
        if (todo.id === id){
            todo.done = true;
        }
    })
}

function render() {
    console.log(todos);
    let html = "";

    todos.forEach(todo => {
        if (todo.done) {
            return;
        };

        html += `
            <div>
                ${todo.text}
                <button data-id='${todo.id}'>Сделано</button>
            </div>`;
    })

    todosNode.innerHTML = html;
}

btnNode.addEventListener("click", () => {
    if(inputNode.value == "") {
        return;
    }
    const text = inputNode.value;
    addTask(text);
    inputNode.value = "";
    render();
});

todosNode.addEventListener("click", (event) => {
    if(event.target.tagName !== "BUTTON") {
        return;
    }

    const id = event.target.dataset.id;
    deleteTask(id);
    render();
});


render();