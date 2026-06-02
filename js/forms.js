// ============================================================
// FORMS — client-side submit handling (demo: shows success state)
// ============================================================

document.querySelectorAll('form[data-mock]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const card = form.closest('.form-card') || form.parentElement;
    const success = card.querySelector('.form-success');
    form.style.display = 'none';
    if (success) success.classList.add('show');
    card.scrollIntoView ? null : null; // avoid scrollIntoView per guidelines
  });
});
