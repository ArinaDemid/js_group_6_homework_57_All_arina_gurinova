const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const subtask1 = tasks.filter(task => task.category === 'Frontend')
.reduce((sum, cur) => sum + cur.timeSpent, 0);
console.log(subtask1);

const subtask2 = tasks.filter(task => task.type === 'bug')
.reduce((sum, cur) => sum + cur.timeSpent, 0);
console.log(subtask2);

const subtask3 = tasks.filter(task => {
    return task.title.toUpperCase().indexOf('UI') > -1;
}).length;
console.log(subtask3);

const subtask4 = tasks.reduce((acc, task) => {
    acc[task.category] = (acc[task.category] || 0) + 1;
    return acc;
}, {});
console.log(subtask4);

const subtask5 = tasks.filter(task => task.timeSpent > 4)
.map(name => {
    return ({title: name.title, category: name.category});
});
console.log(subtask5);
