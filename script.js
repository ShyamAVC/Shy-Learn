document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('Log in') ;

    form.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the username and password values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform validation or any other actions here
        if (email && password) {
            // For demonstration, we will just save the credentials to localStorage
            // Note: This is NOT secure and should not be used for sensitive data
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            
            // Notify the user
            alert('Login successful!');

            // Optionally, redirect the user to another page or perform other actions
            // window.location.href = 'homepage.html';
        } else {
            alert('Please fill in both fields.');
        }
    });
});

function good()
{
   
}
