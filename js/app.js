// Initialize DisClone App
document.addEventListener("DOMContentLoaded", () => {
  const userId = "demo-user"; // Replace with Firebase Auth UID in real app
  Servers.init(userId);

  // Message send handler
  const msgForm = document.getElementById('message-form');
  msgForm.addEventListener('submit', e => {
    e.preventDefault();
    Messages.send(document.getElementById('message-input').value);
    document.getElementById('message-input').value = '';
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', UI.closeModal);
});
