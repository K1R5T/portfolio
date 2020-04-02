import React, {Component} from 'react';


class ToDo extends Component {
  state = {
      lists: [
          {content: "make to do list" },
      ],
      dates:[
          {date: "09/03/2020"}
      ],
      currentList: {content: "" },
      currentDate: {date: ""}
  }

  recordListHandler = (e) => {
      this.setState({
          currentList: {content: e.target.value }
      })
  }

  recordDateHandler = (e) => {
    this.setState({
        currentDate: {content: e.target.value }
    })
}

  addListHandler = () => {
      this.setState({
          lists: [...this.state.lists, this.state.currentList],
          currentList: {content: "" }
      })
  }

  addDateHandler = () => {
    this.setState({
        dates: [...this.state.dates, this.state.currentDate],
        currentDate: {content: "" }
    })
}

  render() {
      const fullList = this.state.lists.map((lists, dates, index) => {
          return <ul key={index}>
          <p>{lists.content}</p>
          <p>{dates.content}</p>
          </ul>
          }
      )

      return (
      <div className="viewlist">
          <div>
            <input onChange={this.recordListHandler} value={this.state.currentList.content} placeholder="Task"></input>
            <button onClick={this.addListHandler}>Submit</button>
          </div>
          <div>
            <input onChange={this.recordDateHandler} value={this.state.currentDate.content} placeholder="DD/MM/YYYY"></input> 
            <button onClick={this.addDateHandler}>Add Date</button>
          </div>
          <div className="fullList">
            <ul>
                {fullList}
            </ul>
          </div>
      </div>
      )
  }

}

export default ToDo;