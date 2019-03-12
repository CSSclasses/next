(function() {
  var openbtn = document.getElementById('open-button'),
      closebtn = document.getElementById('close-button'),
      menu = document.getElementById('js-main-nav'),
      isOpen = false;

  function initEvents() {
    openbtn.addEventListener('click', toggleMenu);
    closebtn.addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    if(isOpen) {
      menu.classList.remove('show-menu');
    } else {
      menu.classList.add('show-menu');
    }
    isOpen = !isOpen;
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    initEvents();
  });

})();
