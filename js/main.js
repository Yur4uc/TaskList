window.addEventListener('load', () => { // завантаження сторінки
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    // const description = document.querySelector("#task-description")



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task) {
            alert("Please fill out the task");
            return;
        }


        //TASK
        const task_el = document.createElement("div");
        task_el.classList.add("task")

        //DESCRIPTION





        //CONTENT
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.classList.add("time");

        task_el.appendChild(task_content_el);

        //DATE
        let date = new Date();
        let taskDate = date.toLocaleString().slice(0, -3);
        let time = document.createTextNode(" " + taskDate);
        task_content_el.appendChild(time);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text")
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions")

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        const task_complate_el = document.createElement("button");
        task_complate_el.classList.add("done")
        task_complate_el.innerHTML = "done"

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_complate_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

        task_complate_el.addEventListener('click', () => {
            task_content_el.classList.toggle("content-through");
        })


    });

})