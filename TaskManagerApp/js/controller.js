// It is a Glue B/w View and Model
window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",addTask);
    document.getElementById("sort").addEventListener("click",sortTask);
    document.getElementById("delete").addEventListener("click",deleteTask);
    document.getElementById("search").addEventListener("click",searchTask);
    document.getElementById("save").addEventListener("click",saveTask);
    document.getElementById("load").addEventListener("click",loadTask);

}
function loadTask(){
    if(window.localStorage){
      if(window.localStorage.tasks){
          var taskList = JSON.parse(localStorage.tasks);
          printList(taskList);
      }
    }
    else
    {
        alert("OOPS Your Browser Doesn't Have LocalStorage Feature....");
    }

}
function saveTask(){
    if(window.localStorage){
        localStorage.tasks = JSON.stringify(taskOperations.taskList);
        alert("Record Saved...");
    }
    else{
        alert("OOPS Your Browser Doesn't Have LocalStorage Feature....");
    }

}
function deleteTask(){
    printList(taskOperations.deleteTask());
}
function addTask(){
    var taskname = document.getElementById("taskName").value;
    var taskDesc = document.getElementById("taskDesc").value;
    var taskId = taskOperations.addTask(taskname,taskDesc);
    var ul = document.getElementById("taskList");
    var li= document.createElement("li");
    li.className="green";
    li.innerHTML=taskId+" "+taskname+ "  "+taskDesc;
    ul.appendChild(li);
    li.addEventListener("click",toogleTask);
}
function toogleTask(event){
    var currentTask = event.srcElement.innerHTML;
    var taskInfo =currentTask.split(" ");
    var taskId = taskInfo[0];
    taskOperations.toogleTask(taskId);
    console.log("LI VALUE IS "+taskId);
    event.srcElement.classList.toggle("red");
}
function searchTask(){
    document.getElementById("searchDiv").style.display="block";
    document.getElementById("taskNameSearch").addEventListener("keyup",searchTaskList);
}
function searchTaskList(){
    var taskName = document.getElementById("taskNameSearch").value;
    printList(taskOperations.searchTask(taskName));
}
function sortTask(){
    document.getElementById("sortDiv").style.display="block";
    document.getElementById("sortOptions").addEventListener("change",sortStart);
}
function sortStart(){
    var sortValue = document.getElementById("sortOptions").value;
    taskOperations.sort(sortValue);
    printList(taskOperations.taskList);

}
function printList(taskList){
    var ul = document.getElementById("taskList");
    ul.innerHTML="";
    taskList.forEach(function(taskObject){
        var li= document.createElement("li");
        li.innerHTML=taskObject.id+" "+taskObject.name+ "  "+taskObject.desc;
        li.className="green";
        ul.appendChild(li);
    });
}