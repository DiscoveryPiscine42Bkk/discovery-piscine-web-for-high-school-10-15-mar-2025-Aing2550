
        
    $(document).ready(function() {
        let tasks = getTasksFromCookies();
        tasks.forEach(task => addTaskToDOM(task));
    
        $("#new-btn").on("click", function() {
            let taskText = prompt("Enter a new task:");
            if (taskText) {
                addTaskToDOM(taskText);
                saveTaskToCookies();
            }
        });
    
        function addTaskToDOM(taskText) {
            let $taskDiv = $("<div>").addClass("todo-item").text(taskText);
    
            $taskDiv.on("click", function() {
                let confirmDelete = confirm("Do you want to delete this task?");
                if (confirmDelete) {
                    $(this).remove();
                    saveTaskToCookies();
                }
            });
    
            $("#ft_list").prepend($taskDiv); // Add to the top of the list
        }
    
        function saveTaskToCookies() {
            let tasks = [];
            $(".todo-item").each(function() {
                tasks.push($(this).text());
            });
            document.cookie = `tasks=${encodeURIComponent(JSON.stringify(tasks))}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        }
    
        function getTasksFromCookies() {
            let cookies = document.cookie.split("; ");
            for (let cookie of cookies) {
                let [name, value] = cookie.split("=");
                if (name === "tasks") {
                    try {
                        return JSON.parse(decodeURIComponent(value));
                    } catch (e) {
                        console.error("Error parsing cookie:", e);
                        return [];
                    }
                }
            }
            return [];
        }
    });
    