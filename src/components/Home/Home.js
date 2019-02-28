import React, { Component } from 'react';
import axios from 'axios';
import FormContainer from './FormContainer';
import DataGrid from './DataGrid';

class Home extends Component {

  state={
    AllData: [],
    isLoading: false,
  }

  addToFormData = (data) => {
    this.setState({AllData: [...this.state.AllData, data]});
  }

  saveData = () => {
    const requestBody = this.state.AllData;
    var bodyData = [];
    for(var i = 0; i< requestBody.length; i++) {
      const formInput = JSON.stringify(requestBody[i]);
      bodyData.push(formInput);
    }
    this.setState({isLoading: true});
    axios.post(`http://demo9606913.mockable.io/save`, bodyData)
     .then(response => {
       this.setState({isLoading: false});
      alert("Data Saved Successfully");
     })
 }

  render() {
    return (
       <div className="col-10 main-content">
         <FormContainer addData={this.addToFormData}/>
         <DataGrid data={this.state.AllData}/>
         <footer>
          <button onClick={this.saveData} className={`btn btn-primary mb-2 save-button ${this.state.isLoading ? 'disabled' : ''}`}>Save</button>
         </footer>
       </div>
    )
  }
}
export default Home;
