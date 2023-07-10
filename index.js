const links = document.querySelectorAll('#links-ul a');


links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    const href = this.getAttribute('data-href');
    navigateToPage(href);
  });
});

function navigateToPage(href) {
  window.location.href = href;
}

