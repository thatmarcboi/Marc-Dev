window.addEventListener('load', function() {
    var fadeElements = document.querySelectorAll('.fade');
    for (var i = 0; i < fadeElements.length; i++) {
      fadeElements[i].classList.add('fade-in');
    }
  });
  