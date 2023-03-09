import TodoStorage from './saveToDB.js';

class TodoNotification {
  static statusBadge() {
    const notification = document.querySelector('.badge');
    const TaskCollection = TodoStorage.loadTask();

    notification.innerHTML = TaskCollection.length;
  }
}

export default TodoNotification;