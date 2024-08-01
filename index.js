const inputBox = document.getElementById("task");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");   
const taskContainer = document.getElementById("task-container");
const noTask = document.getElementById("no-task");
let priority = "";

function changeValue(selectedPriority) {
    document.getElementById("urgent").classList.remove("active");
    document.getElementById("important").classList.remove("active");
    document.getElementById("non-priority").classList.remove("active");

    priority = selectedPriority;

    let mybtn = document.getElementById(selectedPriority);
    mybtn.classList.add("active");
}

function addTask() {
    if (inputBox.value === '' || day.value === '' || month.value === '' || year.value === '' ) {
        alert("Boxes cannot be empty, please write inputs");
    }
    else if((day.value > 31 || day.value < 1) || (month.value < 0 || month.value > 12) || (year.value < 1)) {
        alert("Date must be proper formatting")
    }
    else if(priority === "") {
        alert("Please select priority!")
    }
    else {
        let task = document.createElement("li");
        task.innerHTML = inputBox.value;
        task.className = "m-3 p-3 rounded-pill"
        
        let date = document.createElement("button");
        date.innerHTML = "Due: " + day.value + "." + month.value + "." + year.value; 
        date.className = "mx-3 rounded-pill";
        date.style.pointerEvents = "none";
        task.appendChild(date);

        let prio = document.createElement("button");
        prio.innerHTML = priority;
        prio.style.pointerEvents = "none";
        if (priority === "urgent") {
            prio.className = "btn btn-danger rounded-pill mx-3 ";
        }
        else if (priority === "important") {
            prio.className = "btn btn-warning rounded-pill mx-3 ";
        }
        else if (priority === "non-priority") {
            prio.className = "btn btn-info rounded-pill mx-3 ";
        }
        task.appendChild(prio);

        let btn_suc = document.createElement("button");
        btn_suc.className = "btn btn-success px-3 rounded-pill mx-3 ";
        btn_suc.textContent = String.fromCharCode(0x2713);

        btn_suc.addEventListener("click", function() {
            
            task.removeChild(btn_suc);
            let finished = document.getElementById("finished-container");
            finished.appendChild(task);
            taskContainer.removeChild(task);

        })

        task.appendChild(btn_suc);

        let btn_rmv = document.createElement("button");
        btn_rmv.className = "btn btn-danger px-3 rounded-pill mx-3 ";
        btn_rmv.textContent = "X";
        
        btn_rmv.addEventListener("click", function() {
            if (task.parentElement === document.getElementById("task-container")) {
                document.getElementById("task-container").removeChild(task);
            }
            else if (task.parentElement === document.getElementById("finished-container")) {
                document.getElementById("finished-container").removeChild(task);
            }
        })

        task.appendChild(btn_rmv);

        taskContainer.append(task);
    }

    inputBox.value = '';
    day.value = '';
    month.value = '';
    year.value = '';
} 

