import TodoStorage from './saveToDB.js';

class TaskStatus {
    static checkTask = () => {
      const TaskCollection = TodoStorage.loadTask();
      const checkbox = document.querySelectorAll("input[type='checkbox']");
      const edit = document.querySelectorAll('.edit');

      for (let i = 0; i < TaskCollection.length; i += 1) {
        checkbox[i].addEventListener('change', () => {
          if (checkbox[i].checked === true) {
            TaskCollection[i].completed = true;
            TodoStorage.saveTask(TaskCollection);
            edit[i].classList.add('done');
          } else if (checkbox[i].checked !== true) {
            TaskCollection[i].completed = false;
            TodoStorage.saveTask(TaskCollection);
            edit[i].classList.remove('done');
          }
        });
      }
    }
}

export default TaskStatus;