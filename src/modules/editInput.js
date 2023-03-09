import TodoStorage from './saveToDB.js';

const task = TodoStorage.loadTask();
const editTask = () => {
  const editInput = document.querySelectorAll('.edit');
  const trash = document.querySelectorAll('.fa-trash');
  const listMenu = document.querySelectorAll('.fa-ellipsis-v');

  for (let i = 0; i < editInput.length; i += 1) {
    editInput[i].addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        task[i].description = editInput[i].value;
        TodoStorage.saveTask(task);
      }
    });
    editInput[i].addEventListener('focus', () => {
      editInput[i].parentElement.style.backgroundColor = 'rgb(231, 227, 142) ';
      listMenu[i].style.display = 'none';
      trash[i].style.display = 'block';
    });
    editInput[i].addEventListener('blur', () => {
      editInput[i].parentElement.style.backgroundColor = 'white';
      listMenu[i].style.display = 'block';
      trash[i].style.display = 'none';
    });
  }
};

export default editTask;