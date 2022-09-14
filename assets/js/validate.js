
(function () {

  let forms = document.querySelectorAll('.contact-email-form');

  forms.forEach(function (e) {
    e.addEventListener('submit', function (event) {
      let thisForm = this;

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');
      thisForm.reset();
    });
  });
})();
