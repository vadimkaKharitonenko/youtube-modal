window.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.js-modal');

  window.addEventListener('mouseup', (e) => {
    if (!e.target.closest('.js-open-modal')) return;
    
    modal.classList.remove('hidden');
  });

  window.addEventListener('mouseup', (e) => {
    if (!e.target.closest('.js-close-modal')) return;
    
    modal.classList.add('hidden');
  });
});