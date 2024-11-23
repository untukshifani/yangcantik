// script.js (update)
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('passwords.json');
        const data = await response.json();
        
        if (password === data.password) {
            alert('YEYYYY BENERR');
            window.location.href = 'dashboard.html'; // Redirect ke halaman dashboard
        } else {
            alert('YAHH KAMU LUPAA YAA');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
    }
});