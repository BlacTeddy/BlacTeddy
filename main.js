const words = [
  'skills',
  'projects',
  'toward my first role'
];

let index = 0;
const el = document.getElementById('rotating-word');

function rotateWord(){
    // fade out
    el.classList.remove('show');
    
    setTimeout(() => {
      index = (index + 1) % words.length;
      el.textContent = words[index];
    
      // fade in
      el.classList.add('show');
    }, 600); // match transition time
}

setInterval(rotateWord, 3500);// change every 2 seconds
