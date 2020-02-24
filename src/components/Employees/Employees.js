/*eslint no-unused-expressions: [
  "error", { 
    "allowShortCircuit": true
  }]*/
import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee/Employee';
//import AddEmployee from "./AddEmployee";
import {
  FormGroup,
  FormControl,
  Fragment,
  Button,
  InputGroup,
  Form
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: uuid.v4(),
          fullName: "Ajay Sharma",
          fullAddress: "Gwalior",
          contactNo: 9826182195,
          emailId: "ajparashar111@gmail.com",
          companyName: "HappLabs Software  LLP"
        }
      ],
      isEdited: false,
      index: null
    };
  }
  submitUserForm = e => {
    e.preventDefault();
    //const list = this.state.countries.slice();

    if (!this.state.index) {
      console.log("adddddddddddd");
      const user = {
        id: uuid.v4(),
        fullName: this.refs.fullName.value,
        fullAddress: this.refs.fullAddress.value,
        contactNo: this.refs.contactNo.value,
        emailId: this.refs.emailId.value,
        companyName: this.refs.companyName.value
      };
      // console.log(country);
      this.setState({
        users: [...this.state.users, user]
      });
    } else {
      console.log("edittttt");

      let index = this.state.index;
      const usere = {
        id: index,
        fullName: this.refs.fullName.value,
        fullAddress: this.refs.fullAddress.value,
        contactNo: this.refs.contactNo.value,
        emailId: this.refs.emailId.value,
        companyName: this.refs.companyName.value
      };
      const updateData = this.state.users.map(u =>
        u.id === index ? usere : u
      );
      console.log(updateData);
      this.setState({ users: updateData, isEdit: false, index: "" });
    }

    e.target.reset();
    //e.reset();
  };

  inputHandlerfullName = e => {
    console.log("fullname");
    console.log(e.target.value);
    const fullName = e.target.value;
    this.setState({
      fullName: fullName
    });
  };

  inputHandlerAddress = e => {
    console.log("address");
    const address = e.target.value;
    this.setState({
      fullAddress: address
    });
    console.log(address);
  };

  inputHandlerCompany = e => {
    console.log(e.target.value);
    const companyName = e.target.value;
    this.setState({
      companyName: companyName
    });
  };

  inputHandlerContact = e => {
    console.log(e.target.value);
    const contactNo = e.target.value;
    this.setState({
      contactNo: contactNo
    });
  };

  inputHandlerEmail = e => {
    console.log(e.target.value);
    const emailId = e.target.value;
    this.setState({
      emailId: emailId
    });
  };

  deleteCard = e => {
    console.log("delete");
    const newData = this.state.users.filter(i => i.id !== e.id);
    console.log(newData);
    this.setState({ users: newData });
  };

  editCard = user => {
    //console.log(user);
    const data = this.state.users.filter(u => u.id === user.id);
    console.log(data);
    this.refs.fullName.value = data[0].fullName;
    this.refs.fullAddress.value = data[0].fullAddress;
    this.refs.emailId.value = data[0].emailId;
    this.refs.contactNo.value = data[0].contactNo;
    this.refs.companyName.value = data[0].companyName;
    //console.log(this.state.isEdited);
    this.setState({
      isEdited: !this.state.isEdited,
      index: user.id
    });
  };
  render() {
    return (
      <div className="item">
        <div>
          <h1> User Details Form </h1>
          {/* <AddEmployee
            users={this.state.users}
            inputHandlerEmail={this.inputHandlerEmail}
            inputHandlerContact={this.inputHandlerContact}
            inputHandlerCompany={this.inputHandlerCompany}
            inputHandlerAddress={this.inputHandlerAddress}
            inputHandlerfullName={this.inputHandlerfullName}
            submitUserForm={this.submitUserForm}
          /> */}
          <Card style={{ width: "18rem" }}>
            <Form onSubmit={this.submitUserForm}>
              <div className="form-group">
                <FormGroup>
                  <FormControl
                    type="text"
                    ref="fullName"
                    className="form-control form-control-md"
                    placeholder="Enter Full Name"
                    value={this.state.users.fullName}
                    onChange={this.inputHandlerfullName.bind()}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    ref="fullAddress"
                    className="form-control form-control-md"
                    placeholder="Enter Address"
                    value={this.state.users.fullAddress}
                    onChange={this.inputHandlerAddress.bind()}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    ref="contactNo"
                    className="form-control form-control-md"
                    placeholder="Enter Contact"
                    value={this.state.users.contactNo}
                    onChange={this.inputHandlerContact}
                  />{" "}
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    ref="emailId"
                    placeholder="Enter Email"
                    className="form-control form-control-md"
                    value={this.state.users.emailId}
                    onChange={this.inputHandlerEmail}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    ref="companyName"
                    className="form-control form-control-md"
                    placeholder="Enter CompanyDetails"
                    value={this.state.users.companyName}
                    onChange={this.inputHandlerCompany}
                  />{" "}
                </FormGroup>

                <FormGroup>
                  <Button type="submit"> Submit </Button>
                </FormGroup>
              </div>
            </Form>
          </Card>
        </div>
        <>
          <Employee
            cardList={this.state.users}
            deleteCard={this.deleteCard}
            editCard={this.editCard}
          />
        </>
      </div>
    );
  }
}
export default Employees
    ;
