document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a user object
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Retrieve data from local storage (if any)
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Push new user data into array
    users.push(user);

    // Store updated array in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Send data via AJAX POST request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://your-server-endpoint.com/api/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('User data successfully posted to server!');
        }
    };
    xhr.send(JSON.stringify(user));

    // Redirect to data display page
    window.location.href = 'display.html';
});