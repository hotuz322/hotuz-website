const modal = document.getElementById('install-modal');
const closeBtn = document.getElementById('modal-close');
const okBtn = document.getElementById('modal-ok');

function showModal() {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function hideModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('.download-hit').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(showModal, 150);
  });
});

closeBtn.addEventListener('click', hideModal);
okBtn.addEventListener('click', hideModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) hideModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hidden) hideModal();
});
