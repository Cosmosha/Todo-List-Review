import TodoStorage from './saveToDB.js';
import TaskList from './render.js';
import editTask from './editInput.js';
import TodoNotification from './taskNotification.js';

const itemList = document.getElementById('itemList');
const clearBtn = document.getElementById('clearAll');
class DeleteTodo {
  static removeTask(id) {
    let TaskCollection = TodoStorage.loadTask();
    TaskCollection = TaskCollection.filter((item) => item.id !== +id);
    TaskCollection = TaskCollection.map((todo, index) => ({ ...todo, id: index + 1 }));
    TodoStorage.saveTask(TaskCollection);
  }

    static reTodo = () => {
      let id = 0;
      itemList.addEventListener('click', (event) => {
        if (event.target.classList.contains('items')) {
          id = event.target.getAttribute('data-id');
          DeleteTodo.removeTask(id);
          TaskList.render();
          TodoNotification.statusBadge();
          editTask();
        }
      });
    };

    static deleteCompleted = () => {
      let TaskCol = TodoStorage.loadTask();
      clearBtn.addEventListener('click', () => {
        TaskCol = TaskCol.filter((item) => !item.completed);
        TodoStorage.saveTask(TaskCol);
        TodoNotification.statusBadge();
        editTask();
        TaskList.render();
      });
    }
}

export default DeleteTodo;