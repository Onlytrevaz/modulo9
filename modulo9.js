$(document).ready(function() {
$('#task-form').submit(function(event) {
event.preventDefault();
var taskName = $('#task-input').val();
if (taskName.trim() === '') {
alert('Digite um nome de tarefa válido!');
return;
}
var listItem = $('<li></li>').text(taskName);
listItem.click(function() {
$(this).toggleClass('completed-task');
});
$('#task-list').append(listItem);
$('#task-input').val('');
});
});
