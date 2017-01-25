// It only Contain Logic

function Task(id,name,desc){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.isCompleted = false;
}

var taskOperations={
    taskList:[],
    taskId :1,
    addTask:function(name,desc){
        var taskObject = new Task(this.taskId,name,desc);
        this.taskList.push(taskObject);
        var taskId = this.taskId;
        this.taskId++;
        return taskId;
    },
    sort:function(sortvalue){
        this.taskList.sort(function(taskObjectOne, taskObjectTwo){
            return taskObjectOne[sortvalue].localeCompare(taskObjectTwo[sortvalue]);
        });
    },
    toogleTask:function(taskId){
        this.taskList[taskId-1].isCompleted=!this.taskList[taskId-1].isCompleted;
    },
    deleteTask:function(){
        return this.taskList=this.taskList.filter(function(taskObject){
            return taskObject.isCompleted==false;
        });
    },
    searchTask:function(taskName){
        return this.taskList.filter(function(taskObject){
            return taskObject.name.indexOf(taskName)>=0;
        });
    }
}