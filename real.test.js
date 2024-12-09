const Todo = require('./real');

describe('Todo list application',() => {
    let todo;

    beforeEach(() => {
        todo = new Todo;
    });


test('should add a new task',() => {
    const result = todo.addTask('learn jest');
    expect(result).toBe(true);

    expect(todo.getTask()).toHaveLength(1);
    expect(todo.getTask()[0].task).toBe('learn jest');
})

test('should not add an empty task',() => {
    const result = todo.addTask('');
    expect(result).toBe(false);

    expect(todo.getTask()).toHaveLength(0);
});

test('should edit on existing task',() => {
    todo.addTask('learn jest');
    const taskid = todo.getTask()[0].id;
    const result = todo.editTask(taskid,'learn jest testing');

    expect(result).toBe(true);
    expect(todo.getTask()[0].task).toBe('learn jest testing');
});

test('should not edit a task if id is not found',() => {
    const result = todo.editTask(123,'newtask');
    expect(result).toBe(false);
});

test('shoul delete a task',() => {
    todo.addTask('learn jest');
    const taskid = todo.getTask()[0].id;
    const result = todo.deleteTask(taskid);
    expect(result).toBe(true);

    expect(todo.getTask()).toHaveLength(0);
});

test('should not delete a task if id is not found',() => {
    const result = todo.deleteTask(123);
    expect(result).toBe(false);
});

});

