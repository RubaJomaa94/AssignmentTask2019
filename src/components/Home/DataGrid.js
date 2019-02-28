import React, { Component } from 'react';

class DataGrid extends Component {

  render() {
    return (
      <div className="col-12 table-container">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Caption</th>
              <th scope="col">Type</th>
              <th scope="col">Is-Active</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, i) => {
              return [
                  <tr key={i}>
                    <td className="title">
                      {item.title}
                    </td>
                    <td>{item.caption}</td>
                    <td>{item.type}</td>
                    <td>{item.isActive ? "Active" : "Not Active"}</td>
                  </tr>
              ];
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default DataGrid;
