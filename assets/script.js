document.getElementById('toggle-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark');
  this.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

const upload = document.getElementById('upload');
const profilePic = document.getElementById('profile-pic');

upload.addEventListener('change', () => {
  const file = upload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePic.src = reader.result;

      localStorage.setItem('profilePic', reader.result);
    };
    reader.readAsDataURL(file);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const savedPic = localStorage.getItem('profilePic');
  if (savedPic) {
    profilePic.src = savedPic;
  }
});
