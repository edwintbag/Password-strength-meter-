// script.js
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = getPasswordStrength(password);

  // Update the strength bar width and color
  strengthBar.style.width = `${strength.percent}%`;
  strengthBar.style.backgroundColor = strength.color;

  // Update the strength text
  strengthText.textContent = `Strength: ${strength.label}`;
});

// Function to calculate password strength
function getPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[@$!%*?&#]/.test(password)) score++;

  switch (score) {
    case 1:
      return { percent: 20, color: 'red', label: 'Very Weak' };
    case 2:
      return { percent: 40, color: 'orange', label: 'Weak' };
    case 3:
      return { percent: 60, color: 'yellow', label: 'Medium' };
    case 4:
      return { percent: 80, color: 'lightgreen', label: 'Strong' };
    case 5:
      return { percent: 100, color: 'green', label: 'Very Strong' };
    default:
      return { percent: 0, color: 'gray', label: 'Too Short' };
  }
}