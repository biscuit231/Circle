  console.log('users.js')
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#userName-signup').value.trim();
    const first_name = document.querySelector('#firstName-signup').value.trim();
    const last_name = document.querySelector('#lastName-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (user_name && first_name && last_name && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ user_name, first_name, last_name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
    
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  