function submitForm(event, type) {
    event.preventDefault(); // Prevent the form from submitting

    let role = '';
    if (type === 'signup') {
        role = document.getElementById('role-signup').value;
    } else if (type === 'signin') {
        role = document.getElementById('role-signin').value;
    }

    // Check role and redirect accordingly
    if (role === 'student') {
        window.location.href = 'studentdash.html'; // Redirect to student dashboard
    } else if (role === 'teacher') {
        window.location.href = 'teacherdash.html'; // Redirect to teacher dashboard
    } else if (role === 'admin') {
        window.location.href = 'admindash.html'; // Redirect to admin dashboard
    } else {
        alert('Please select a valid role.');
    }
}
