import React,{Component} from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'

import { readEvents } from '../actions/index';

class EventsIndex extends Component{
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events,event=>(
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }


  render(){

    return(

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>

        <tbody>
          {this.renderEvents()}
        </tbody>
        
      </table>
      )
  }
}
const mapStatetoProps=state=>({events:state.events} )
const mapDispatchToProps = ({readEvents})
export default connect(mapStatetoProps,mapDispatchToProps)(EventsIndex)

