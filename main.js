let addButton = document.querySelector(".add-button");
let addNewButton = document.querySelector("#add-new");
let addNewCancel = document.querySelector("#add-new-cancel");
let addNewSection = document.querySelector(".add-new");
let editTaskButtons = document.querySelectorAll(".edit-task");
let changeTaskStatusButtons = document.querySelectorAll(".change-status");
let deleteTaskButtons = document.querySelectorAll(".delete-task");
let editDoneButtons = document.querySelectorAll(".edit-done i");
let editCancelButtons = document.querySelectorAll(".edit-cancel i");

addButton.addEventListener("click", (e) => {
    addButton.style.display = "none";
    addNewSection.querySelector("input").value = "";
    addNewSection.style.display = "flex";
    addNewSection.querySelector("input").value = "";
});

const hideAddNewSection = () => {
    addButton.style.display = "flex";
    addNewSection.style.display = "none";
};

addNewButton.addEventListener("click", (e) => {
    hideAddNewSection();
    let new_task = addNewSection.querySelector("input").value;
    document.querySelector(".tasks").innerHTML =
        `
        <div class="task">
            <div class="ready-view">
                <span class="name">
                    <span>${new_task}</span>
                    <i
                        onclick="editTask(event)"
                        class="material-icons edit-task"
                        >edit</i
                    >
                </span>
                <i
                    class="material-icons change-status"
                    onclick="changeTaskStatus(event)"
                    >check_box_outline_blank</i
                >
                <i
                    class="material-icons delete-task"
                    onclick="deleteTask(event)"
                    >delete_forever</i
                >
            </div>
            <div class="edit-view">
                <input type="text" name="" id="" />
                <button class="edit-done">
                    <i class="material-icons" onclick="editDone(event)"
                        >check_circle</i
                    >
                </button>
                <button class="edit-cancel">
                    <i
                        class="material-icons"
                        onclick="editCancel(event)"
                        >cancel</i
                    >
                </button>
            </div>
        </div>
    ` + document.querySelector(".tasks").innerHTML;
});

addNewCancel.addEventListener("click", (e) => {
    hideAddNewSection();
});

const editTask = (e) => {
    let taskEle = e.target.parentElement.parentElement.parentElement;
    taskEle.querySelector(".ready-view").style.display = "none";
    taskEle.querySelector(".edit-view input").value = taskEle.querySelector(
        ".ready-view .name span"
    ).innerHTML;
    taskEle.querySelector(".edit-view").style.display = "flex";
};

const editCancel = (e) => {
    let taskEle = e.target.parentElement.parentElement.parentElement;
    taskEle.querySelector(".edit-view").style.display = "none";
    taskEle.querySelector(".ready-view").style.display = "flex";
};

const editDone = (e) => {
    let taskEle = e.target.parentElement.parentElement.parentElement;
    taskEle.querySelector(".edit-view").style.display = "none";
    taskEle.querySelector(
        ".ready-view .name span"
    ).innerHTML = taskEle.querySelector(".edit-view input").value;
    taskEle.querySelector(".ready-view").style.display = "flex";
};

const changeTaskStatus = (e) => {
    let taskEle = e.target.parentElement;
    if (e.target.innerHTML == "check_box_outline_blank") {
        taskEle.querySelector(".name span").style.color = "rgb(150, 150, 150)";
        taskEle.querySelector(".name span").style.fontStyle = "italic";
        taskEle.querySelector(".name span").style.textDecoration =
            "line-through";
        taskEle.querySelector(".name i").style.display = "none";
        e.target.innerHTML = "check_box";
        taskEle.style.opacity = 0.7;
    } else {
        taskEle.querySelector(".name span").style.color = "rgb(70, 70, 70)";
        taskEle.querySelector(".name span").style.fontStyle = "normal";
        taskEle.querySelector(".name span").style.textDecoration = "none";
        taskEle.querySelector(".name i").style.display = "inline-block";
        e.target.innerHTML = "check_box_outline_blank";
        taskEle.style.opacity = 1;
    }
};

const deleteTask = (e) => {
    let taskEle = e.target.parentElement.parentElement;
    taskEle.remove();
};
