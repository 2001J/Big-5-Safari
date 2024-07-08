document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.getElementById('highContrastToggle');
  var linkElement = null;
  var firstFocusableElement = document.querySelector('.skip-link');
  var justToggled = false;

  toggleButton.addEventListener('click', function () {
    if (document.body.classList.contains('high-contrast')) {
      document.body.classList.remove('high-contrast');
      if (linkElement) {
        document.head.removeChild(linkElement);
        linkElement = null;
      }
      toggleButton.textContent = 'Enable High Contrast';
    } else {
      document.body.classList.add('high-contrast');
      linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = '../CSS_files/more-contrast_css_files/safari-high-contrast.css';
      document.head.appendChild(linkElement);
      toggleButton.textContent = 'Disable High Contrast';
    }
    justToggled = true;
    firstFocusableElement = document.querySelector('.skip-link');
  });

  document.addEventListener('keydown', function (event) {
    if (justToggled && event.key === 'Tab') {
      var style = window.getComputedStyle(firstFocusableElement);
      if (style.display !== 'none') {
        firstFocusableElement.focus();
        justToggled = false;
        event.preventDefault();
      }
    }
  });
});