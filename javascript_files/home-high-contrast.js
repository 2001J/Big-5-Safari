
document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.getElementById('highContrastToggle');
  var linkElement = null;
  var firstFocusableElement = document.querySelector('.skip-link');
  var justToggled = false;

  toggleButton.addEventListener('click', function () {
    if (document.body.classList.contains('high-contrast')) {
      document.body.classList.remove('high-contrast');
      toggleButton.textContent = 'Enable High Contrast';
      if (linkElement) {
        document.head.removeChild(linkElement);
        linkElement = null;
      }
    } else {
      document.body.classList.add('high-contrast');
      toggleButton.textContent = 'Disable High Contrast';
      linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = '../CSS_files/more-contrast_css_files/home-high-contrast.css';
      document.head.appendChild(linkElement);
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
