const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal-overlay');
const closeButton = modal.querySelector('i');

function showModal(modalImage, modalTitle, modalAuthor) {
  modal.classList.add('modal-active');

  modal.querySelector('img').setAttribute('src', modalImage);
  modal.querySelector('h2').innerHTML = modalTitle;
  modal.querySelector('p').innerHTML = modalAuthor;
}

function hideModal() {
  modal.classList.remove('modal-active');
}

for (let card of cards) {
  const modalImage = card.querySelector('img').getAttribute('src');
  const modalTitle = card.querySelector('h3').innerHTML;
  const modalAuthor = card.querySelector('p').innerHTML;
  console.log(modalImage, modalTitle, modalAuthor);
  card.addEventListener('click', () => {
    showModal(modalImage, modalTitle, modalAuthor);
  });
}

closeButton.addEventListener('click', hideModal);

document.addEventListener('click', e => {
  if (e.target === modal) {
    hideModal();
  }
});
