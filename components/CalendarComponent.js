import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class MDCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarDay: {
        year: 2020,
        month: 1,
        day: 1,
        timestamp: 1589932800000,
        dateString: "2020-01-01"
      }
    };
  }

  handleDay = (day) =>  {
    console.log(day);
    this.setState({ calendarDay: day });
    console.log(this.state.calendarDay);
  };

  render() {

    return(
        <ScrollView>
            {/*<Calendar onDayPress={(day) => {console.log('selected day', day)}} />*/}
            <Calendar 
              onDayPress={day => {this.handleDay(day)}}
              markedDates={{
                '2020-05-16': {selected: true, marked: true, selectedColor: 'blue'},
                '2020-05-17': {marked: true},
                '2020-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                '2020-05-19': {disabled: true, disableTouchEvent: true}
              }} 
            />
            <View>
              <Text>
                {this.state.calendarDay.day}
              </Text>
            </View>
        </ScrollView>
    );
  }
}