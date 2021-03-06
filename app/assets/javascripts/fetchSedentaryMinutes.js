/*
    A00107408 20-02-17.
    Get Oauth 2.0 token and fetch data from cloud.
    Code seed taken from FitBit resources:
    https://dev.fitbit.com/docs/community-resources/   *Javascript*
    https://github.com/jeremiahlee/fitbit-web-demo
*/

//var fitbitAccessToken;

// Get FitBit OAuth 2.0 token.
// Using my app id = 2282KN.
// Request access to all data entry points and redirect to localhost/dashboard.
// If user hasn't authed with Fitbit, redirect to Fitbit OAuth Implicit Grant Flow
/*if (!window.location.hash) {
    window.location.replace('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=2282KN&redirect_uri=http%3A%2F%2Flocalhost:9000/dashboard&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800');
} else {
    var fragmentQueryParameters = {};
    window.location.hash.slice(1).replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) { fragmentQueryParameters[$1] = $3; }
    );

    fitbitAccessToken = fragmentQueryParameters.access_token;
}*/

// Check for response from the cloud.
// Ensure Json body content.
/*var processResponse = function(res) {

    if (!res.ok) {
        throw new Error('Fitbit API request failed: ' + res);
    }
    var contentType = res.headers.get('content-type');
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return res.json();
    } else {
        throw new Error('JSON expected but received ' + contentType);
    }
};*/

// Extract BPM and time from JSon recieved.
/*var formatSedentary = function(timeSeries) {

    var bla = JSON.stringify(timeSeries);
    console.log("SEDEN: " +bla);

    return timeSeries['summary'].sedentaryMinutes;
   (
        function(measurement) {
            return [
                ("{ \"sedentaryMinutes\":\"" +measurement.sedentaryMinutes + "\"")//,
                //(measurement.efficiency)
            ];
        }
    );


};*/

/*var wrapSendJson = function(timeSeries){

    // My server expects well formed JSon
    // to write to MongoDB.
    // Use JSRouter to POST JSon via AJAX.
 /*   var JsonString = "[";
    JsonString = JsonString.concat(timeSeries);
    JsonString = JsonString.concat("]");*/

   // var x = JSON.stringify(timeSeries);
   // console.log("Jsonstring:  " +x);

    // POST JSon to MongoDB
 //   var r = jsRoutes.controllers.HRController.createBulkFromJson();
 //   $.ajax({url: r.url, type: r.type, contentType: "application/json", data: JsonString });

    //Once JSon sent to MongoDB, fetch it back out and Graph it.
    //Defined in HRSpline.js. Wait 4 seconds to allow write to Mongo.
   // window.setTimeout(getMongoHR(),9000);
//};

//$.when(wrapSendJson()).getMongoHR(function2());

// Use new fetch API to GET Heart Rates from cloud.
// fetch not compatible with IE.
// Use token in header for OAuth 2.0 authentication.
/*fetch(
    'https://api.fitbit.com/1/user/-/activities/date/today.json',
    {
        headers: new Headers({
            'Authorization': 'Bearer ' + fitbitAccessToken
        }),
        mode: 'cors',
        method: 'GET'
    }
).then(processResponse)             //Currying of functions
.then(formatSedentary)              //returns Json response
.then(wrapSendJson)               //to next function for
.catch(function(error) {            //processing, catches
    console.log(error);             //any errors.
});*/
