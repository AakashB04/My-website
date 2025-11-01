window.onload = function () {
  // Optional welcome alert
  alert("Welcome to Aakash's Personal Website!");

  changeAboutMeText(); // Call the function
};

function changeAboutMeText() {
  const aboutMeTexts = ['Tech Enthusiast','Web Developer', 'Data Analyst'];
  const typingSpeed = 100;
  const eraseSpeed = 50;
  const pauseTime = 1500;
  const aboutMeElement = document.querySelector('.about-me');

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = aboutMeTexts[textIndex];

    if (!isDeleting && charIndex <= currentText.length) {
      aboutMeElement.textContent = currentText.substring(0, charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      aboutMeElement.textContent = currentText.substring(0, charIndex);
      charIndex--;
      setTimeout(type, eraseSpeed);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % aboutMeTexts.length;
      }
      setTimeout(type, pauseTime);
    }
  }

  type(); // Start typing loop
}
document.addEventListener('DOMContentLoaded',function(){
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;


    darkModeToggle.addEventListener('click',() =>{
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
       /*darkModeToggle.querySelector('i').classList.toggle('light-mode');*/
    });
});
changeAboutMeText();

document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const progressBar = entry.target.querySelector('.progress-bar');
      const progress = progressBar.dataset.progress;

      if (entry.isIntersecting) {
        progressBar.style.setProperty('--progress', `${progress}%`);
        progressBar.classList.add('animated');
      } else {
        // Reset when not in view
        progressBar.style.setProperty('--progress', `0%`);
        progressBar.classList.remove('animated');
      }
    });
  });

  const programmingLanguages = document.querySelectorAll('#programming-languages .skill');
  programmingLanguages.forEach(skill => {
    observer.observe(skill);
  });
});

function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  // Close modal if clicked outside
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }