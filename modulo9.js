document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var taskName = document.getElementById('task-input').value;
    if (taskName.trim() === '') {
      alert('Digite um nome de tarefa válido!');
      return;
    }
  
    var listItem = document.createElement('li');
    listItem.textContent = taskName;
  
    document.getElementById('task-list').appendChild(listItem);
  
    document.getElementById('task-input').value = '';
  });
  