const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const anonymous = document.getElementById('anonymous');
const questionName = document.getElementById('questionName');
anonymous?.addEventListener('change', () => {
  questionName.disabled = anonymous.checked;
  if (anonymous.checked) questionName.value = '';
});
if (anonymous && questionName) questionName.disabled = anonymous.checked;

// These forms are deliberately front-end prototypes. They do not transmit or persist user data.
function setStatus(id, message) {
  const target = document.getElementById(id);
  if (target) target.textContent = message;
}
document.getElementById('questionForm')?.addEventListener('submit', event => {
  event.preventDefault();
  setStatus('questionStatus', 'Demo only: your question has not been sent or saved. A secure submission service must be connected before launch.');
});
document.getElementById('volunteerForm')?.addEventListener('submit', event => {
  event.preventDefault();
  setStatus('volunteerStatus', 'Demo only: your volunteer request has not been sent or saved. A submission service must be connected before launch.');
});
document.getElementById('feedbackForm')?.addEventListener('submit', event => {
  event.preventDefault();
  setStatus('feedbackStatus', 'Demo only: your feedback has not been sent or saved. A submission service must be connected before launch.');
});
const questionForm = document.getElementById(‘questionForm’);

if (questionForm) {
const questionCard = document.createElement(‘div’);
questionCard.className = ‘form-card’;

questionCard.innerHTML = <h3>Ask a Health Question</h3> <p class="form-intro">Have a health question? Submit it through our secure questionnaire.</p> <a class="button button-primary full-width" href="https://docs.google.com/forms/d/e/1FAIpQLSdHnnnuYnUepSlAhta5d1hSaOL12DPOTgFXLH6B6gTw8DX1Ig/viewform" target="_blank" rel="noopener noreferrer"> Submit Your Question ↗ </a> <p class="form-footnote">Please avoid including personal or identifying medical information.</p>;

questionForm.replaceWith(questionCard);
}
