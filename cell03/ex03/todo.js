
        
        document.addEventListener("DOMContentLoaded", () => {
            let tasks = getTasksFromCookies();
            tasks.forEach(task => addTaskToDOM(task));
        });

        document.getElementById("new-btn").addEventListener("click", () => {
            let taskText = prompt("Enter a new task:");
            if (taskText) {
                addTaskToDOM(taskText);
                saveTaskToCookies();
            }
        });

        function addTaskToDOM(taskText) {
            let taskDiv = document.createElement("div");
            taskDiv.className = "todo-item";
            taskDiv.textContent = taskText;
            
            
            taskDiv.addEventListener("click", () => {
                let confirmDelete = confirm("Do you want to delete this task?");
                if (confirmDelete) {
                    taskDiv.remove();
                    saveTaskToCookies();
                }
            });

            
            let taskList = document.getElementById("ft_list");
            taskList.insertBefore(taskDiv, taskList.firstChild);
        }

        function saveTaskToCookies() {
            let tasks = [];
            document.querySelectorAll(".todo-item").forEach(task => {
                tasks.push(task.textContent);
            });
            document.cookie = `tasks=${JSON.stringify(tasks)}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        }

        function getTasksFromCookies() {
            let cookies = document.cookie.split("; ");
            for (let cookie of cookies) {
                let [name, value] = cookie.split("=");
                if (name === "tasks") {
                    return JSON.parse(value);
                }
            }
            return [];
        }