document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signinForm');

    form.addEventListener('submit', (e) => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            e.preventDefault();
            alert('Please fill in all fields.');
            return;
        }
    });
});