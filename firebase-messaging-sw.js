importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js');

firebase.initializeApp({"apiKey": "AIzaSyBfdmyPCD_3JypcSl31Zmi1IPzNCCHrptc", "appId": "1:135103656863:web:3fac07246866040ab383aa", "authDomain": "luna-family-app.firebaseapp.com", "messagingSenderId": "135103656863", "projectId": "luna-family-app", "storageBucket": "luna-family-app.firebasestorage.app", "measurementId": "G-NJHLME77MZ"});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  const data = payload.data || {};
  const title = notification.title || data.title || 'Luna priminimas';
  const options = {
    body: notification.body || data.body || 'Luna laukia dėmesio.',
    icon: '/PUBLIC/luna-family-app-web/icons/Icon-192.png',
    badge: '/PUBLIC/luna-family-app-web/icons/Icon-192.png',
    data,
  };
  self.registration.showNotification(title, options);
});
