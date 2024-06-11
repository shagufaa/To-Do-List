const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}




// let todo = [];

// while (true) {
//     let req = prompt("Please enter your request");

//     if (req === "quit") {
//         console.log("Quitting app");
//         break;
//     } else if (req === "new") {
//         let newTodo = prompt("Enter new todo");
//         todo.push(newTodo);
//         console.log(`${newTodo} added to the list`);
//     } else if (req === "list") {
//         console.log("**********");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(`${i + 1}: ${todo[i]}`);
//         }
//         console.log("**********");
//     } else if (req === "delete") {
//         let index = parseInt(prompt("Enter index of todo to delete")) - 1;
//         if (!isNaN(index) && index >= 0 && index < todo.length) {
//             let deleted = todo.splice(index, 1);
//             console.log(`Deleted ${deleted[0]}`);
//         } else {
//             console.log("Invalid index");
//         }
//     } else {
//         console.log("Invalid request");
//     }
// }


// let todo = [];


// while(true)
// {
//     let req = prompt("please enter your request");
//     if(req == "quit")
//     {
//         console.log("quitting app");
//         break;
//     }

//     if(req == "list")
//     {
//         console.log("------------");
//         for(let i=0; i<todo.length; i++)
//         {
//             console.log(task);
//         }
//         console.log("-------------");
//     }
//     else if(req == "add")
//     {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if(task=="delete")
//     req = prompt("please enter your request");


// }

// console.log(req);