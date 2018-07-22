import React from 'react';
import Schedule from '../components/Schedule';

class ScheduleContainer extends React.Component {
  state = {
    exampleScheduleList: [
      { key: '1',
        date: 'November 1',
        agendaList: [{ key: '11', title: 'Registration and Sign In', location: 'Table #1', startTime: '12:00', startZone: 'PM', endTime: '1:30', endZone: 'PM', starred: true },
          { key: '12', title: 'Meet and Greet', location: 'Atrium', startTime: '1:30', startZone: 'PM', endTime: '3:00', endZone: 'PM', starred: true },
          { key: '13', title: 'Keynote Speaker', location: 'Lecture Hall', startTime: '3:00', startZone: 'PM', endTime: '4:30', endZone: 'PM', starred: true },
          { key: '14', title: 'Dinner', location: 'Assigned Table', startTime: '4:30', startZone: 'PM', endTime: '6:00', endZone: 'PM', starred: false },
          { key: '15', title: 'Award Ceremony', location: 'Main Auditorium', startTime: '6:00', startZone: 'PM', endTime: '7:30', endZone: 'PM', starred: true }] },
      { key: '2',
        date: 'November 2',
        agendaList: [{ key: '21', title: 'Lunch', location: 'Dining Area', startTime: '12:00', startZone: 'PM', endTime: '1:30', endZone: 'PM', starred: true },
          { key: '22', title: 'Workshop', location: 'Lecture Hall', startTime: '3:30', startZone: 'PM', endTime: '4:30', endZone: 'PM', starred: false },
          { key: '23', title: 'Movie', location: 'Main Auditorium', startTime: '6:30', startZone: 'PM', endTime: '9:30', endZone: 'PM', starred: true }] },
      { key: '3',
        date: 'November 3',
        agendaList: [{ key: '31', title: 'Registration and Sign In', location: 'Table #1', startTime: '12:00', startZone: 'PM', endTime: '1:30', endZone: 'PM', starred: false },
          { key: '32', title: 'Meet and Greet', location: 'Atrium', startTime: '1:30', startZone: 'PM', endTime: '3:00', endZone: 'PM', starred: false }] },

      { key: '4',
        date: 'November 4',
        agendaList: [{ key: '41', title: 'Registration and Sign In', location: 'Table #1', startTime: '12:00', startZone: 'PM', endTime: '1:30', endZone: 'PM', starred: true },
          { key: '42', title: 'Meet and Greet', location: 'Atrium', startTime: '1:30', startZone: 'PM', endTime: '3:00', endZone: 'PM', starred: true },
          { key: '43', title: 'Keynote Speaker', location: 'Lecture Hall', startTime: '3:00', startZone: 'PM', endTime: '4:30', endZone: 'PM', starred: false }] },
    ],
    agenda: true,
    selectDateScheduleList: [],
    date: '1',
  }
  componentWillMount() {
    this.setState({ selectDateScheduleList: this.state.exampleScheduleList[0].agendaList });
  }

  switchStarIcon = (value) => {
    const dayNum = Number(value.key.charAt(0)) - 1;
    const listNum = Number(value.key.charAt(1)) - 1;
    const listCopy = this.state.exampleScheduleList;
    listCopy[dayNum].agendaList[listNum].starred = !listCopy[dayNum].agendaList[listNum].starred;
    this.setState({ exampleScheduleList: listCopy });
    this.setState({ selectDateScheduleList: this.state.exampleScheduleList[dayNum].agendaList });
  }

  showAgenda = () => {
    this.setState({ agenda: true });
  }

  showMyAgenda = () => {
    this.setState({ agenda: false });
  }

  selectDate = (myKey) => {
    this.setState({ selectDateScheduleList: this.state.exampleScheduleList[Number(myKey) - 1].agendaList });
    this.setState({ date: myKey });
  }

  render() {
    return (<Schedule
      switchStarIcon={this.switchStarIcon}
      exampleScheduleList={this.state.exampleScheduleList}
      selectDateScheduleList={this.state.selectDateScheduleList}
      showAgenda={this.showAgenda}
      showMyAgenda={this.showMyAgenda}
      selectDate={this.selectDate}
      agenda={this.state.agenda}
      date={this.state.date}
            />);
  }
}

export default ScheduleContainer;

