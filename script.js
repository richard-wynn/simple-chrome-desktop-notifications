$(document).ready(function () {
  $(document).on('DOMContentLoaded', function () {
    // Request desktop notifications permission on page load
    if (!Notification) {
      console.log('Desktop notifications are not available in your browser.');
      return;
    }

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  });

  function showNotification() {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
      const options = {
        body: 'Simple Chrome Desktop Notification',
        dir: 'ltr',
        image: 'image.jpg',
      };
      const notification = new Notification('Notification', options);

      notification.onclick = function () {
        window.open('https://www.google.com');
      };
    }
  }

  $('#btn-show-notification').on('click', showNotification);
});
