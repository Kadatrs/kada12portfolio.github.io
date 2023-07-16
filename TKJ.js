var overlay = document.querySelector('.overlay');

overlay.addEventListener('mousemove', function(event) {
  overlay.style.backgroundColor = '#8A8816';
});

overlay.addEventListener('mouseout', function(event) {
  overlay.style.backgroundColor = '';
});