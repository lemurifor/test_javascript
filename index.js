/// MODEL.
let toDoList;

/// Three ways of defining a function.
function func1() { };
let func2 = function () { };
let func3 = () => null;

function loadToDoList() {
    // localStorage.clear();

    /// Get [toDoList] from local storage.
    /// Use fallback value if it does not exist.
    const toDoListJson = localStorage.getItem('toDoList');
    console.log(`Load localStorage: ${toDoListJson}`);

    if (toDoListJson !== null) {
        toDoList = JSON.parse(toDoListJson);
        console.log(typeof toDoListJson);
        console.log(toDoListJson);
    } else {
        toDoList = [
            {
                id: '1',
                date: "2022-12-01",
                desc: "First to do",
            },
            {
                id: '2',
                date: "2022-12-03",
                desc: "Second to do",
            },
            {
                id: '3',
                date: "2022-12-03",
                desc: "Third to do",
            },
        ];
    }
}

function saveToDoList(toDolist) {
    const toDoListJson = JSON.stringify(toDoList);
    localStorage.setItem('toDoList', toDoListJson);

    console.log(`Save localStorage: ${toDoListJson}`);
}

function addToDo(date, desc) {
    const id = '' + new Date().getTime();

    toDoList.push(
        {
            id: id,
            date: date,
            desc: desc,
        }
    );

    saveToDoList();
}

function deleteToDo(id) {
    /// Filter [toDoList], delete item with [id] equal to [deleteButtonId].
    toDoList = toDoList.filter(function (item) {
        if (item.id === id) {
            return false;
        } else {
            return true;
        }
    });

    saveToDoList();
}

function resetToDo() {
    toDoList = [];

    saveToDoList();
}

/// CONTROLLER.

function onResetButtonPressed() {
    resetToDo();
    render();
}

function onSubmitButtonPressed() {
    /// Use '' to convert number to string.

    const dateField = document.getElementById("dateField");
    const descField = document.getElementById("descField");

    addToDo(dateField.value, descField.value);
    render();
}

function onDeleteButtonPressed() {
    /// Deprecated, need alternative
    const deleteButtonId = event.target.id;

    deleteToDo(deleteButtonId);
    render();
}

/// VIEW.

function render() {
    const toDoListDiv = document.getElementById("toDoListDiv");
    /// Clear toDoList before adding anything.
    toDoListDiv.innerHTML = '';

    toDoList.forEach(
        function (item) {
            const element = document.createElement("div");
            element.innerText = item.date + ' ' + item.desc;

            const deleteButton = document.createElement("button");
            deleteButton.onclick = onDeleteButtonPressed;
            deleteButton.id = item.id;
            deleteButton.innerText = "Delete";
            deleteButton.style = "margin-left: 12px";
            element.appendChild(deleteButton);

            toDoListDiv.appendChild(element);
        }
    );
}

function main() {
    loadToDoList();
    render();
}

main()