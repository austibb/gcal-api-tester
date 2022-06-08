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
    function testEventFunction() {

    };
    var event = {
        'summary': 'test event',
        'location': '',
        'description': 'test description',
        'start': {
            'dateTime': '2022-06-7T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
        },
        'end': {
            'dateTime': '2015-05-28T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
        },
        'reminders': {
            'useDefault': true
        }
    };

    var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    });

    request.execute(function (event) {
        appendPre('Event created: ' + event.htmlLink);
    });

    function handleAuthClick() {
        console.log("clicked");
        tokenClient.callback = async (resp) => {
            if (resp.error !== undefined) {
            throw (resp);
            }
            document.getElementById('signout_button').style.visibility = 'visible';
            document.getElementById('authorize_button').innerText = 'Refresh';
            await listUpcomingEvents();
        };
        
        if (gapi.client.getToken() === null) {
            // Prompt the user to select a Google Account and ask for consent to share their data
            // when establishing a new session.
            tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
            // Skip display of account chooser and consent dialog for an existing session.
            tokenClient.requestAccessToken({prompt: ''});
        }
    };



    $('#authorize_button').on('click', function() {console.log('sdlfkjsd')});
    $('#testbutton').on('click', testEventFunction);
});