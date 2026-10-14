// ========================================
// OOU STUDENTS' UNION HEALTH HUB
// Main JavaScript
// ========================================


// MOBILE NAVIGATION
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


// CURRENT YEAR
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ANONYMOUS HEALTH QUESTIONS
const anonymous = document.getElementById('anonymous');
const questionName = document.getElementById('questionName');

if (anonymous && questionName) {
  const updateNameField = () => {
    questionName.disabled = anonymous.checked;

    if (anonymous.checked) {
      questionName.value = '';
    }
  };

  anonymous.addEventListener('change', updateNameField);
  updateNameField();
}


// FORM STATUS HELPER
function setStatus(id, message) {
  const target = document.getElementById(id);

  if (target) {
    target.textContent = message;
  }
}


// VOLUNTEER FORM
const volunteerForm = document.getElementById('volunteerForm');

if (volunteerForm) {
  volunteerForm.addEventListener('submit', event => {
    event.preventDefault();

    if (!volunteerForm.checkValidity()) {
      volunteerForm.reportValidity();
      return;
    }

    const volunteerRegistrationURL =
      'https://docs.google.com/forms/d/e/1FAIpQLSda9c1UzmERy723ai97EELrW3LhWBeqC2zk_rj8OFdWHzVl_g/viewform';

    setStatus(
      'volunteerStatus',
      'Opening the official volunteer registration form...'
    );

    window.open(
      volunteerRegistrationURL,
      '_blank',
      'noopener,noreferrer'
    );
  });
}


// FEEDBACK FORM
const feedbackForm = document.getElementById('feedbackForm');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    if (!feedbackForm.checkValidity()) {
      feedbackForm.reportValidity();
      return;
    }

    const feedbackURL =
      'https://docs.google.com/forms/d/e/1FAIpQLSecsrHM8x17EAo1fsCKNOodg-H_EUNUP13UI2HPVycmS3Emfg/viewform';

    setStatus(
      'feedbackStatus',
      'Opening the official feedback form...'
    );

    window.open(
      feedbackURL,
      '_blank',
      'noopener,noreferrer'
    );
  });
}
