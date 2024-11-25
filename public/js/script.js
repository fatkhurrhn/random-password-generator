document.getElementById('generate-btn').addEventListener('click', async () => {
    const length = document.getElementById('length').value;
    const response = await fetch(`/generate?length=${length}`);
    const data = await response.json();
    document.getElementById('password-output').textContent = data.password;
});
