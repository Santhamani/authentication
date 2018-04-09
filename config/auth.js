// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '686696400951-l1mi3rq1u1g5nkugsolhsnim3nbm1as2.apps.googleusercontent.com', // your App ID
        'clientSecret'    : 's3Yduuw7ShYUDH-F5BYaBpAl', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : '686696400951-ifloni7pk53t2hqocspgihsks1ogktoa.apps.googleusercontent.com',
        'consumerSecret'     : 'ZQ9w35DJZ-dLBZGSDyMr-g6e',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '686696400951-rt4h19fogail62aa2qlq2ec7mecgalb2.apps.googleusercontent.com',
        'clientSecret'     : 'jWCl1WXqObeZYnQPpyCxHvbb',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
