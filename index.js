let toDoList = [
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

function onResetButtonPressed() {
    toDoList = [];
    render();
}

function onSubmitButtonPressed() {
    /// Use '' to convert number to string.
    const id = '' + new Date().getTime();
    const dateField = document.getElementById("dateField");
    const descField = document.getElementById("descField");

    toDoList.push(
        {
            id: id,
            date: dateField.value,
            desc: descField.value,
        }
    );

    render();
}

function onDeleteButtonPressed() {
    // Deprecated, need alternative
    const deleteButtonId = event.target.id;

    /// Filter [toDoList], delete item with [id] equal to [deleteButtonId].
    toDoList = toDoList.filter(function (item) {
        if (item.id === deleteButtonId) {
            return false;
        } else {
            return true;
        }
    });

    render();
}

function render() {
    const toDoListDiv = document.getElementById("toDoListDiv");
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
    render();
}

main()