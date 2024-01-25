document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('content');

  let percent = 0;
  
  overlay.style.opacity = 1;
  content.style.opacity = 1;
  
  setTimeout(function() {
    let interval = setInterval(function() {
      content.textContent = `${percent}%`;
      overlay.style.filter = `blur(${10 - percent * 0.1}px)`;
      overlay.style.opacity = percent / 100;
      if (percent === 100) {
        clearInterval(interval);
      }
      percent++;
    }, 20);
  }, 2000);
});