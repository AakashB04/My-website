
 function changeProjectTitle() {
    const titles = ['Engineering Mini Projects'];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const element = document.querySelector('.project-typewriter');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const current = titles[textIndex];

      if (!isDeleting && charIndex <= current.length) {
        element.textContent = current.substring(0, charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else if (isDeleting && charIndex >= 0) {
        element.textContent = current.substring(0, charIndex);
        charIndex--;
        setTimeout(type, eraseSpeed);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          textIndex = (textIndex + 1) % titles.length;
        }
        setTimeout(type, pauseTime);
      }
    }

    type();
  }

  window.onload = changeProjectTitle;