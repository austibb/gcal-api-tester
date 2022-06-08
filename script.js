$(function () {
    // constants, keys, etc.

    // DOM element variables

    // data variables

    //
    const CLIENT_ID = '28605827298-tl4218sn1lc3eie3e9bm6ab7vgrb02gb.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyC1Csyczu-tD3j17uP1qWT7BFEFW-Kzhwc';

    // Discovery doc URL for APIs used by the quickstart
    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = 'https://www.googleapis.com/auth/calendar';


    // ----------functions----------

    // function to handle gmail log-in (handle auth click), uses google calendar api
    // function to populate screen with calendar events from user's calendar
    // function to use holiday api
    // function to create holiday list form
    // function to handle form submission, and add holidays to users' calendars
    // function to prompt signout or view anotehr calendar




    
    function loadCalendarApi() {
        gapi.client.load('calendar', 'v3', insertEvent);
    }

    function appendPre(message) {
        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
    }

    function testEventFunction() {
        console.log('test event function console log');
        var event = {
            'summary': 'test event',
            'location': '',
            'description': 'test description',
            'start': {
                'dateTime': '2022-06-08T09:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
            },
            'end': {
                'dateTime': '2022-06-09T17:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
            },
            'reminders': {
                'useDefault': true
            }
        };

        return gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
        })
            .then(function (response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
            },
                function (err) { console.error("Execute error", err); });
    };



    $('#authorize_button').on('click', handleAuthClick);
    $('#signout_button').on('click', testEventFunction);
    $('#test_button').on('click', testEventFunction);
});