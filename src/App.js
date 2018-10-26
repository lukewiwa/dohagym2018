/* eslint react/prop-types: 0 */

import React, { Component } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import 'moment-timezone'
import TimezonePicker from 'react-timezone'

function TzInput(props) {
  return (
    <div className="enter-time">
      <label>Enter Timezone:</label>
      <TimezonePicker
        className="timepicker"
        value={props.timezone}
        onChange={props.onTzChange}
        inputProps={{
          placeholder: 'Select Timezone...',
          name: 'timezone',
        }}
      />
    </div>
  )
}

function Day(props) {
  const rows = props.rows.map(row =>
    <Session key={row.time} tz={props.tz} time={row.time} event={row.event} gender={row.gender} />
  )
  return [
    <h2>{props.header}</h2>,
    <table className="table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  ]
}

function Session(props) {
  return (
    <tr key={props.time}>
      <td>
        <Moment
          format="DD MMM HH:mm"
          tz={props.tz}>{props.time}</Moment></td>
      <td>{props.event}</td>
      <td>{props.gender}</td>
    </tr>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.handleTimezone = this.handleTimezone.bind(this)
    this.state = {
      timezone: 'Australia/Melbourne'
    }
  }

  handleTimezone(timezone) {
    this.setState({ timezone: timezone })
  }

  render() {
    const day1 = [
      { time: "2018-10-25 08:30+3", event: "Opening Ceremony", gender: "" },
      { time: "2018-10-25 09:00+3", event: "Qualification", gender: "MAG" },
      { time: "2018-10-25 11:30+3", event: "Qualification", gender: "MAG" },
      { time: "2018-10-25 14:30+3", event: "Qualification", gender: "MAG" },
      { time: "2018-10-25 17:00+3", event: "Qualification", gender: "MAG" },
      { time: "2018-10-25 19:30+3", event: "Qualification", gender: "MAG" },
    ]
    const day2 = [
      { time: "2018-10-26 09:00+3", event: "Qualification", gender: "MAG" },
      { time: "2018-10-26 11:30+3", event: "Qualies Australia", gender: "MAG" },
      { time: "2018-10-26 14:30+3", event: "Qualification", gender: "MAG" },
      { time: "2018-10-26 17:00+3", event: "Qualification", gender: "MAG" },
      { time: "2018-10-26 19:30+3", event: "Qualification", gender: "MAG" },
    ]
    const day3 = [
      { time: "2018-10-27 09:00+3", event: "Qualification", gender: "WAG" },
      { time: "2018-10-27 11:30+3", event: "Qualification", gender: "WAG" },
      { time: "2018-10-27 14:30+3", event: "Qualification", gender: "WAG" },
      { time: "2018-10-27 17:00+3", event: "Qualification", gender: "WAG" },
      { time: "2018-10-27 19:30+3", event: "Qualification", gender: "WAG" },
    ]
    const day4 = [
      { time: "2018-10-28 09:00+3", event: "Qualification", gender: "WAG" },
      { time: "2018-10-28 11:30+3", event: "Qualification", gender: "WAG" },
      { time: "2018-10-28 14:30+3", event: "Qualification", gender: "WAG" },
      { time: "2018-10-28 17:00+3", event: "Qualification", gender: "WAG" },
      { time: "2018-10-28 19:30+3", event: "Qualification", gender: "WAG" },
    ]
    const day5 = [
      { time: "2018-10-29 16:00+3", event: "Team Final", gender: "MAG" },
    ]
    const day6 = [
      { time: "2018-10-30 16:00+3", event: "Team Final", gender: "WAG" },
    ]
    const day7 = [
      { time: "2018-10-31 16:00+3", event: "AA Final", gender: "MAG" },
    ]
    const day8 = [
      { time: "2018-11-01 16:00+3", event: "AA Final", gender: "WAG" },
    ]
    const day9 = [
      { time: "2018-11-02 16:00+3", event: "Floor", gender: "MAG" },
      { time: "2018-11-02 16:30+3", event: "Vault", gender: "WAG" },
      { time: "2018-11-02 17:30+3", event: "Pommel Horse", gender: "MAG" },
      { time: "2018-11-02 18:00+3", event: "Uneven Bars", gender: "WAG" },
      { time: "2018-11-02 18:30+3", event: "Rings", gender: "MAG" },
    ]
    const day10 = [
      { time: "2018-11-02 16:00+3", event: "Vault", gender: "WAG" },
      { time: "2018-11-02 16:30+3", event: "Balance Beam", gender: "WAG" },
      { time: "2018-11-02 17:30+3", event: "Parallel Bars", gender: "MAG" },
      { time: "2018-11-02 18:00+3", event: "Floor", gender: "WAG" },
      { time: "2018-11-02 18:30+3", event: "High Bar", gender: "MAG" },
    ]

    return [
      <TzInput timezone={this.state.timezone} onTzChange={this.handleTimezone} />,
      <Day tz={this.state.timezone} header="Day 1 Qualifications" rows={day1} />,
      <Day tz={this.state.timezone} header="Day 2 Qualifications" rows={day2} />,
      <Day tz={this.state.timezone} header="Day 3 Qualifications" rows={day3} />,
      <Day tz={this.state.timezone} header="Day 4 Qualifications" rows={day4} />,
      <Day tz={this.state.timezone} header="MAG Team Finals" rows={day5} />,
      <Day tz={this.state.timezone} header="WAG Team Finals" rows={day6} />,
      <Day tz={this.state.timezone} header="MAG AA Finals" rows={day7} />,
      <Day tz={this.state.timezone} header="WAG AA Finals" rows={day8} />,
      <Day tz={this.state.timezone} header="Event Finals" rows={day9} />,
      <Day tz={this.state.timezone} header="Event Finals" rows={day10} />,
    ]
  }
}

export default App