import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

class MDCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date};
  }

  render() {

    return(
        <ScrollView>
            <Calendar>
              <Agenda selected={'2020-05-20'} />
            </Calendar>
        </ScrollView>
    );
  }
}

export default MDCalendar;