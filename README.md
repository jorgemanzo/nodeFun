## nodeFun
doing things in node

If you want to use this, this app should be hosted on something like a 
Digital Ocean droplet. Then just type `npm install` then `npm start` and
the node server should start up fine.

This app also expects a mysql server to be running on said dropplet with a DB called `Tokens`.

Make sure to setup `query.js` and pass in your DB username and password as env vars `DB_USERNAME='username' and DB_PASSWORD='secret' npm start`

This app can also be used with a super simple but cool (to me) macOS app I made which communicates with this exact express node server and extracts the `forId` and `message` from the DB matching on a provided `forId`. That app is [here](https://github.com/jorgemanzo/nodeFunMacOS).