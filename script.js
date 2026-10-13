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

// HEALTH QUESTION FORM
const questionForm = document.getElementById('questionForm');

if (questionForm) {
  questionForm.addEventListener('submit', event => {
    event.preventDefault();

    setStatus(
      'questionStatus',
      'This demonstration form does not send or save your question. Please use the official health-question link on this page.'
    );
  });
}

// VOLUNTEER FORM
const volunteerForm = document.getElementById('volunteerForm');
if (volunteerForm) {
  volunteerForm.addEventListener('submit', event => {
    event.preventDefault();
    // Check that all required fields are completed
    if (!volunteerForm.checkValidity()) {
      volunteerForm.reportValidity();
      return;
    }
    // Official volunteer registration form
    const volunteerRegistrationURL =
      'https://docs.google.com/forms/d/e/1FAIpQLSda9c1UzmERy723ai97EELrW3LhWBeqC2zk_rj8OFdWHzVl_g/viewform';
    // Inform the volunteer before opening the registration form
    setStatus(
      'volunteerStatus',
      'Your details are ready. Opening the official volunteer registration form...'
    );
    // Open the official form in a new tab
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
