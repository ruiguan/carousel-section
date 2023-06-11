const scrollCheckbox = document.getElementById('scrollCheckbox');
const content = document.querySelector('.content');

scrollCheckbox.addEventListener('change', () => {
  if (scrollCheckbox.checked) {
    content.classList.add('scroll-right');
  } else {
    content.classList.remove('scroll-right');
  }
});