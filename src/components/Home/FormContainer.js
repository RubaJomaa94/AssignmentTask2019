import React, { Component } from 'react';

class FormContainer extends Component {

  state = {
    title: "",
    caption: "",
    type: "Main",
    isActive: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addData(this.state);

    this.setState({title: "", caption: "", type: "Main", isActive: false});
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleCaptionChange = (event) => {
    this.setState({caption: event.target.value});
  }

  handleTypeChange = (event) => {
    this.setState({type: event.target.value});
  }

  handleCheckBoxChange = (event) => {
    this.setState({isActive: event.target.checked});
  }

  render() {
    return (
      <form className="data-form" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <label>Title</label>
          <input type="text" className="form-control col-3 " id="title" name="title" placeholder="Title..." maxLength="20" onChange={this.handleTitleChange} value={this.state.title} required/>
          <label>Caption</label>
          <input type="text" className="form-control col-3" id="caption" name="caption" placeholder="Caption..." maxLength="20" onChange={this.handleCaptionChange} value={this.state.caption} required/>
          <br/>
          <select id="type" className="form-control col-2" value={this.state.type} onChange={this.handleTypeChange} value={this.state.type}>
            <option value="main"> Main </option>
            <option value="sub"> Sub </option>
            <option value="secondary"> Secondary </option>
          </select>
          <span className="is-active-container">
          <label> Is-Active: </label>
          <input type="checkbox" className="is-active" name="isActive" id="is-active" onChange={this.handleCheckBoxChange} checked={this.state.isActive}/>
          </span>
          <br/>
        </div>
        <input className="btn btn-primary mb-2 add-data" type="submit" value="Add Data" />
      </form>
    )
  }
}
export default FormContainer;
