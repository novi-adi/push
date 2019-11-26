var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BK4ZKIJLJhJTxA_Yh2Hrlq9X16scJrXSye2cOsei4yCZtTiBkkgX98w8FAJhtB7vNqgZI67Wu1Z2md96tWQFBvY",
    "privateKey": "FR1p31biISQzca8BfcunvHJIg0nV_8-sno0wdeSC5rc"
};
 
 
webPush.setVapidDetails(
    'mailto:icambing@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cuzNsvsG1ZM:APA91bElAMbfus348iPmS1PVzJKTvDrFBMuII0whOViEy8iD3D4WV8jQv-OBEeT8mt68jl85SCrAHe7eVD1_z28fPWO49frd43iNl4p_DAbsOs6BpPBRWYbGHQRi7_TZX-BWnnNSaVPG",
    "keys": {
        "p256dh": "BKp3ujlQaOnEFGGgXV3z7tfJbrGBOicHohkhmjvrLVJdQRMgEFbqt5M0ph0NKon2FTRnanUOsNOmzGvSKkXdEnM=",
        "auth": "znO0dJu5EYWiD3Yu6BrxjQ=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '724346762154',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);
