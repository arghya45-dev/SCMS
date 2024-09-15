// Function to toggle between sign-in and sign-up
function toggle() {
    const container = document.getElementById('container');
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
}

// Initial class setup after a delay
setTimeout(() => {
    const container = document.getElementById('container');
    container.classList.add('sign-in');
}, 200);

// Function to submit form data based on role and redirect
function submitForm(event, formType) {
    event.preventDefault(); // Prevent the default form submission

    let role = '';
    if (formType === 'signup') {
        role = document.getElementById('role-signup').value;
    } else if (formType === 'signin') {
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

    // For sign-up, you might still want to send an email if needed
    if (formType === 'signup') {
        let name = document.querySelector('.sign-up input[placeholder="Username"]').value;
        let email = document.querySelector('.sign-up input[placeholder="Email"]').value;
        let role = document.getElementById('role-signup').value;
        sendEmail(name, email, role); // Send email after sign-up
    }
}

// Function to send an email after successful sign-up
function sendEmail(name, email, role) {
    Email.send({
        Host: "smtp.gmail.com", // Replace this with your email provider's SMTP server
        Username: "your_email@example.com", // Your email address
        Password: "your_email_password", // Use App Password if you're using Gmail (do not hardcode passwords in production)
        To: 'learnosphere2@gmail.com', // Email to receive the sign-up details
        From: email, // User's email
        Subject: "New Sign-Up Information",
        Body: `Name: ${name} <br> Email: ${email} <br> Role: ${role}`
    }).then(
        message => alert("Information sent successfully!")
    ).catch(
        error => alert("Error in sending email.")
    );
}

// Function to redirect to social media sites
function redirectTo(platform) {
    let url = '';
    switch (platform) {
        case 'facebook':
            url = 'https://www.facebook.com';
            break;
        case 'google':
            url = 'https://www.google.com';
            break;
        case 'twitter':
            url = 'https://www.twitter.com';
            break;
        case 'instagram':
            url = 'https://www.instagram.com';
            break;
        default:
            url = 'https://www.example.com';
            break;
    }
    window.open(url, '_blank');
}

// Attach the submitForm function to the forms (ensure form IDs exist in HTML)
document.getElementById('sign-up-form').addEventListener('submit', (event) => submitForm(event, 'signup'));
document.getElementById('sign-in-form').addEventListener('submit', (event) => submitForm(event, 'signin'));
