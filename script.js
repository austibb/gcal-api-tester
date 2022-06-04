$(function () {
    // constants, keys, etc.

    // DOM element variables

    // data variables

    //


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





    $('#authorize_button').on('click', handleAuthClick);
    $('#testbutton').on('click', testEventFunction);
}