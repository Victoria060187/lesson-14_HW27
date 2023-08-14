const textField = document.getElementById('text-field');
const messageDiv = document.getElementById('message-div');

textField.addEventListener('focus', () => {
    messageDiv.style.display = 'block';
});

textField.addEventListener('blur', () => {
    messageDiv.style.display = 'none';
});