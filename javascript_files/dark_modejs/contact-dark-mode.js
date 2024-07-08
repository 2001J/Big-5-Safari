document.addEventListener('DOMContentLoaded', function () {
  var darkModeToggleButton = document.getElementById('darkModeToggle');
  var darkModeLinkElement = null;
  var firstFocusableElement = document.querySelector('.skip-link');
  var justToggled = false;

  darkModeToggleButton.addEventListener('click', function () {
    if (document.body.classList.contains('high-contrast')) {
      alert('Please disable High Contrast mode before enabling Dark Mode.');
      return;
    }

    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      if (darkModeLinkElement) {
        document.head.removeChild(darkModeLinkElement);
        darkModeLinkElement = null;
      }
      darkModeToggleButton.textContent = 'Enable Dark Mode';
    } else {
      document.body.classList.add('dark-mode');
      darkModeLinkElement = document.createElement('link');
      darkModeLinkElement.rel = 'stylesheet';
      darkModeLinkElement.href = '../CSS_files/dark-mode_css_files/contact-dark-mode.css';
      document.head.appendChild(darkModeLinkElement);
      darkModeToggleButton.textContent = 'Disable Dark Mode';
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