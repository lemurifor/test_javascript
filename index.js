let toDoList = [
    'First',
    'Second',
    'Third',
];

function onResetButtonPressed() {
    toDoList = [];
    render();
}

function onSubmitButtonPressed() {
    const dateField = document.getElementById("dateField");
    const descField = document.getElementById("descField");
    toDoList.push(descField.value);
    render();

    // const element = document.createElement("div");
    // element.innerText = dateField.value;
    // document.body.appendChild(element);
}

function render() {
    const toDoListDiv = document.getElementById("toDoListDiv");
    toDoListDiv.innerHTML = '';

    toDoList.forEach(
        function (item) {
            const element = document.createElement("div");
            element.innerText = item;
            toDoListDiv.appendChild(element);
        }
    );
}

function main() {
    render();
}

main()