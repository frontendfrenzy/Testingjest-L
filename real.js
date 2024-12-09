
class Todo{
    constructor(){
        this.tasks = [];
    }

    addTask(task){
        if(!task) return false;
        this.tasks.push({id:Date.now(),task,completed:false});
        return true;
    }

    editTask(id,updatedTask){
        const task = this.tasks.find((t) => t.id === id);

        if(task){
            task.task = updatedTask;
            return true;
        }
        return false;
    }

    deleteTask(id){
        const index = this.tasks.findIndex((t) => t.id === id);

        if(index !== -1){
            this.tasks.splice(index,1);
            return true;
        }
        return false;
    }

    getTask(){
        return this.tasks;
    }
}

module.exports = Todo;

