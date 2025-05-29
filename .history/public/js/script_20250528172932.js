(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

 
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.show-more-btn');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const reviewText = button.previousElementSibling;
        const isExpanded = reviewText.classList.toggle('expanded');

        if (isExpanded) {
          reviewText.style.webkitLineClamp = 'unset';
          button.textContent = 'Show Less';
        } else {
          reviewText.style.webkitLineClamp = '4';
          button.textContent = 'Show More';
        }
      });
    });
  });
