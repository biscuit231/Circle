  console.log('users.js')
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#userName').value.trim();
    const first_name = document.querySelector('#firstName').value.trim();
    const last_name = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
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
  