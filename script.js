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

    setStatus(
      'volunteerStatus',
      'This demonstration form does not send or save your details. Please use the official volunteer registration link on this page.'
    );
  });
}

// FEEDBACK FORM
const feedbackForm = document.getElementById('feedbackForm');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    setStatus(
      'feedbackStatus',
      'This demonstration form does not send or save your feedback. Please use the official feedback link on this page.'
    );
  });
}
