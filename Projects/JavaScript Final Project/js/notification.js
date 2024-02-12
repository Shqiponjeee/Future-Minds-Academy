function updateNotifications() {
    let notificationsDropdown = document.getElementById('notifications');
    let notificationCountElement = notificationsDropdown.querySelector('.nr-notification');
    let notifications = JSON.parse(localStorage.getItem('notifications')) || [];

    notificationCountElement.textContent = notifications.length;
    notificationsDropdown.querySelector('.notifications-dropdown').innerHTML = '';

    notifications.forEach(notification => {
        let notificationItem = document.createElement('p');
        notificationItem.classList.add('notification-item');
        notificationItem.textContent = notification;
        notificationsDropdown.querySelector('.notifications-dropdown').appendChild(notificationItem);
    });
}

let defaultNotifications = [
    "John Doe sent a message",
    "Someone viewed your profile",
    "Another notification",
    "Someone viewed your profile",
    "John Doe sent a message"
];


localStorage.setItem('notifications', JSON.stringify(defaultNotifications));
updateNotifications();

let notificationIcon = document.getElementById('notifications');
let notificationsDropdown = notificationIcon.querySelector('.notifications-dropdown');

notificationIcon.addEventListener('click', () => {
    notificationsDropdown.style.display = (notificationsDropdown.style.display === 'block') ? 'none' : 'block';
});
