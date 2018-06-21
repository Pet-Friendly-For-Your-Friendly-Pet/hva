import React, { Component } from "react";
import moment from "moment";
import classes from "./Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import BigCalendar from "react-big-calendar";
import GoogleCalendar from "../../../js/utils/GoogleCalendar";

BigCalendar.momentLocalizer(moment);

const dailyRecurrence = 700;
const weeklyRecurrence = 100;
const monthlyRecurrence = 20;

const API_KEY = process.env.REACT_APP_API_KEY;
const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

const calendars = [
  {
    name: "Hill View Arena",
    url:
      "https://calendar.google.com/calendar?cid=YzFpdmRwMGRlNTNzczFiYzl0Nml0Y2txaHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
  }
];
// export const NestedView = ({ match }) => {
//     return (
//         <Route path={`${match.url}/documents`} component={Documents} />
//     )
// }

class Calendar extends Component {
  state = {
    events: [
      {
        start: {
          dateTime: null
        },
        end: {
          dateTime: null
        },
        attendees: [{ email: null }],
        reminders: {
          useDefault: true
        }
      }
    ]
  };

  componentDidMount() {
    this.getGoogleCalendarEvents();
  }

  getGoogleCalendarEvents = () => {
    /*
         * @param {string} GOOGLE_API_KEY - your Google API key
         * @param {array} calendars - a list of key, value pairs
         *                {name: 'name of your calendar', url: 'calendar_url'}
         * @param {number} dailyRecurrence - how many times you want daily events to reoccur
         * @param {number} weeklyRecurrence - how many times you want weekly events to reoccur
         * @param {number} monthlyRecurrence - how many times you want monthly events to reoccur
         *
         * @returns {array} events - list of objects that will render on react-big-calendar
         *   e.x. event = {
         *           eventType: {string} calendar.name
         *           creator: {string}
         *           end: Datetime
         *           gLink: {string} link to event in Google Calendar,
         *           description: {string},
         *           location: {string}
         *           start: Datetime
         *           title: {string} summary
         *           meta: {object} - everything about the event Google returns
         *        }
         */
    GoogleCalendar.getAllCalendars(
      API_KEY,
      calendars,
      dailyRecurrence,
      weeklyRecurrence,
      monthlyRecurrence
    )
      .then(events => this.setState({ events }))
      .catch(err => {
        throw new Error(err);
      });
  };

  viewEventHandler = () => {
    this.setState({ modalUp: true });
  };

  cancelViewEventHandler = () => {
    this.setState({ modalUp: false });
  };

  render() {
    return (
      <div className="calendarDiv">
        <BigCalendar
          className={classes.calendarStyle}
          defaultView="month"
          defaultDate={new Date()}
          style={{ height: "800px" }}
          views={["month", "week", "day", "agenda"]}
          onSelectSlot={() => this.viewEventHandler()}
          onSelectEvent={event => alert(event.title)}
          popup
          events={this.state.events}
        />
      </div>
    );
  }
}

export default Calendar;
