self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (error) {
    payload = {};
  }

  const notification = payload.notification || {};
  const data = payload.data || {};
  const title = notification.title || data.title || 'Luna priminimas';
  const options = {
    body: notification.body || data.body || 'Luna laukia dėmesio.',
    icon: '/PUBLIC/luna-family-app-web/icons/Icon-192.png',
    badge: '/PUBLIC/luna-family-app-web/icons/Icon-192.png',
    data: {
      ...data,
      url: data.url || 'https://ponkuz.github.io/PUBLIC/luna-family-app-web/',
    },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data && event.notification.data.url
    ? event.notification.data.url
    : 'https://ponkuz.github.io/PUBLIC/luna-family-app-web/';
  event.waitUntil(clients.openWindow(url));
});
