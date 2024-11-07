// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDCXhv7VT_Oe1gJ_axB615H-r7hF9cE-CI",
    authDomain: "busan1107.firebaseapp.com",
    projectId: "busan1107",
    storageBucket: "busan1107.firebasestorage.app",
    messagingSenderId: "995058420353",
    appId: "1:995058420353:web:a904e39bb039ba07261b80",
    measurementId: "G-QF2BB23S23"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});


