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


  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".review-text").forEach(p => {
      const btn = p.parentElement.querySelector(".show-more-btn");

      if (p.scrollHeight > p.clientHeight + 1) {
        btn.classList.remove("d-none");

        btn.addEventListener("click", () => {
          const expanded = p.classList.toggle("expanded");
          btn.textContent = expanded ? "Show Less" : "Show More";
        });
      }
    });
  });


