var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BB8RiKnUIuquyB-S5sxfN5Kua-cOR7cjOWZtcWhe8wxYA26g5hxV-dTIE4rvFDfMTG2grXMa-Uj_7J4UdCpM7W4",
   "privateKey": "O6f9MmtFNefeTa3VEh5rUMkqKyVaoUB0tPhtGZ2Jbcw"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/e8_qyyUIppI:APA91bGpsfrWrLC19ql1-ln_RgLABC5e3l9weC8AWA30rjleD8HiItwaURSNY7AeMtAGZSECEu2seGXQlJ9MYi8fFXl4D7p9GhK9DM47PigYidWBeGch3pEH319gOdZyswdYHNDiank2",
   "keys": {
       "p256dh": "BHvcmZWGbtgPBmZG0ZKETwMGuymIsX63cceYADedKs6Oc1/U0KQtMsJZoIVA2k1Mk/mm0+ztrNeahu4byGunrys=",
       "auth": "HP7BAgc8oSax++lhdP8hZg=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '739595475445',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);
