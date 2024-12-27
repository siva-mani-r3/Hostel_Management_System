import React, { Component } from 'react';

class BoB extends Component {
  state = {
    data: [],
    serialNo: 1,
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    isEditing: false,
    editIndex: -1,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddRow = () => {
    const newRow = {
      serialNo: this.state.serialNo,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      salary: this.state.salary,
    };

    this.setState((prevState) => ({
      data: [...prevState.data, newRow],
      serialNo: prevState.serialNo + 1,
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
    }));
  };

  handleEditRow = (index) => {
    const editedData = [...this.state.data];
    editedData[index] = {
      serialNo: this.state.serialNo,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      salary: this.state.salary,
    };

    this.setState({
      data: editedData,
      isEditing: false,
      editIndex: -1,
      serialNo: this.state.serialNo + 1,
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
    });
  };

  handleDeleteRow = (index) => {
    const confirmDelete = window.confirm('You want to delete Student Data');
    if (confirmDelete) {
      const updatedData = [...this.state.data];
      updatedData.splice(index, 1);
      this.setState({ data: updatedData });
    }
  };

  handleEditClick = (index) => {
    this.setState({
      isEditing: true,
      editIndex: index,
      serialNo: this.state.data[index].serialNo,
      firstName: this.state.data[index].firstName,
      lastName: this.state.data[index].lastName,
      email: this.state.data[index].email,
      salary: this.state.data[index].salary,
    });
  };
  render() {
    return (
      <div style={{"marginTop":"90px"}} >
        <h2 style={{ "fontFamily": "sans-serif", "marginTop": "15px","marginLeft":"10px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}>Students Data List</h2>
        <div className='container-fluid mt-3' style={{"backgroundColor":"turquoise"}} >
          <div className='row'>
            <div className='col-md-2'>
              <div class="form-group">
                <input type="text" class="form-control" id="usr" style={{"marginTop":"10px","marginRight":"10px"}}
                  name="firstName"
                  placeholder="FirstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className='col-md-2'>
              <div class="form-group">
                <input type="text" class="form-control" id="usr"  style={{"marginTop":"10px","marginRight":"10px"}}
                  name="lastName"
                  placeholder="LastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='col-md-2'>
              <div class="form-group">
                <input type="text" class="form-control" id="usr"  style={{"marginTop":"10px","marginRight":"10px"}}
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='col-md-2'>
              <div class="form-group">
                <input type="text" class="form-control" id="usr"  style={{"marginTop":"10px","marginRight":"10px"}}
                  name="salary"
                  placeholder="Rollno"
                  value={this.state.salary}
                  onChange={this.handleInputChange} />
              </div>
              <div className='col-md-2'>
              </div>
            </div>
            <div className='col-md-2'>
              {this.state.isEditing ? (
              <button type="button" class="btn btn-success"style={{"margin":"10px"}} onClick={() => this.handleEditRow(this.state.editIndex)} >Save</button>
              ) : (
                <button type="button" class="btn btn-success" style={{"margin":"10px"}} onClick={this.handleAddRow} >Add student</button>
              )}
            </div>
          </div>
        </div>
        <div className='container-fluid mt-3'>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rollno</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((row, index) => (
                <tr key={index}>
                  <td>{row.firstName}</td>
                  <td>{row.salary}</td>

                  <td>
                    <button type="button" class="btn btn-warning" style={{"marginRight":"2px"}} onClick={() => this.handleEditClick(index)}>Edit</button>
                    <button type="button" class="btn btn-danger" onClick={() => this.handleDeleteRow(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default BoB;
