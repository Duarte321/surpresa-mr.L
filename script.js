document.addEventListener('DOMContentLoaded', () => {
    const rejectBtn = document.getElementById('reject-btn');
    const acceptBtn = document.getElementById('accept-btn');
    const container = document.querySelector('.container');
    const engagedMessage = document.getElementById('engaged-message');

    rejectBtn.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = rejectBtn.getBoundingClientRect();

        const randomX = Math.random() * (containerRect.width - buttonRect.width);
        const randomY = Math.random() * (containerRect.height - buttonRect.height);

        rejectBtn.style.left = `${randomX}px`;
        rejectBtn.style.top = `${randomY}px`;
    });

    acceptBtn.addEventListener('click', () => {
        engagedMessage.style.display = 'block';
        acceptBtn.style.display = 'none';
        rejectBtn.style.display = 'none';
    });
});
