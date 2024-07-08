document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.getElementById('highContrastToggle');
  var linkElement = null;
  // Get the first focusable element
  var firstFocusableElement = document.querySelector('.skip-link');
  // Add a flag that indicates whether the high contrast mode was just toggled
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
      linkElement.href = '../CSS_files/more-contrast_css_files/contact-high-contrast.css';
      document.head.appendChild(linkElement);
      toggleButton.textContent = 'Disable High Contrast';
    }
    // Set the flag to true
    justToggled = true;
    // Update the reference to the first focusable element
    firstFocusableElement = document.querySelector('.skip-link');
  });

  // Listen for the Tab key
  document.addEventListener('keydown', function (event) {
    if (justToggled && event.key === 'Tab') {
      // Check if the skip link is visible
      var style = window.getComputedStyle(firstFocusableElement);
      if (style.display !== 'none') {
        // Set focus to the first focusable element
        firstFocusableElement.focus();
        // Set the flag to false
        justToggled = false;
        event.preventDefault();
      }
    }
  });
});