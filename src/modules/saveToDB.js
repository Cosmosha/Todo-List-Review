const getName = 'TaskCollection';
class TodoStorage {
    static taskName = `${getName}`;

    static saveTask = (TaskCollection) => {
      window.localStorage.setItem(this.taskName, JSON.stringify(TaskCollection));
    };

    static loadTask = () => {
      const TaskCollection = JSON.parse(localStorage.getItem(this.taskName)) || [];
      return TaskCollection;
    }
}

export default TodoStorage;