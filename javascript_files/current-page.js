document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname;
  var links = document.querySelectorAll('.navbar a');

  links.forEach(function (link) {
    // Get the pathname from the href attribute
    var href = new URL(link.href).pathname;

    // Compare the pathnames directly
    if (path === href) {
      link.classList.add('active');
    }
  });
});
