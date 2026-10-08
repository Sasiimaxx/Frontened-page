document.addEventListener('DOMContentLoaded', () => {
  const signUpButton = document.getElementById('signUpBtn');
  const signInButton = document.getElementById('signInBtn');
  const container = document.getElementById('container');
  const togglePasswordIcons = document.querySelectorAll('.toggle-password');

  // Toggle Panel Animation
  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });

  // Password Visibility Toggle
  togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const targetId = icon.getAttribute('data-target');
      const passwordInput = document.getElementById(targetId);

      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });

  // Form Handling (Client-side submit handling)
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');

  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    console.log('Logging in with:', { email, password });
    alert(`Sign In Successful for: ${email}`);
  });

  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    console.log('Signing up with:', { name, email, password });
    alert(`Account Created Successfully for: ${name}`);
  });
});