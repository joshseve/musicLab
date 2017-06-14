
   FB.getLoginStatus(function(response) {
       statusChangeCallback(response);
   });


   {
       status: 'connected',
       authResponse:{
           accessToken: '...',
           expiresIn:'...',
           signedRequest:'...',
           userID:'...'
       }
   }


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
  }
});

FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
});
