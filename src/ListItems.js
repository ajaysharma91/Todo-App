import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { FormGroup, FormControl, Fragment, Button } from "react-bootstrap";
class ListItems extends React.Component {
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
      ]
    };
  }
  submitUserForm = e => {
    e.preventDefault();
    //const list = this.state.countries.slice();
    const user = {
      id: uuid.v4(),
      fullName: this.state.fullName,
      fullAddress: this.state.fullAddress,
      contactNo: this.state.contactNo,
      emailId: this.state.emailId,
      companyName: this.state.companyName
    };
    // console.log(country);
    this.setState({
      users: [...this.state.users, user]
    });
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
    const newData = this.state.users.filter((i) => i.id !== e.id);
    console.log(newData);
    this.setState({ users: newData });
  }
  render() {
    const cardList = this.state.users.map((user, index) => {
      return (
        <Card bg="info" text="white" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.companyName}</Card.Title>
            <Card.Subtitle
              style={{
                backgroundColor: "green",
                color: "white"
              }}
              className="mb-2 p-3"
            >
              {user.fullName}
            </Card.Subtitle>
            <ul bg="info" text="white" class="list-group list-group-flush">
              <li style={{ backgroundColor: "green" }} class="list-group-item">
                {user.fullAddress}
              </li>
              <li style={{ backgroundColor: "green" }} class="list-group-item">
                {user.contactNo}
              </li>
              <li style={{ backgroundColor: "green" }} class="list-group-item">
                {user.emailId}
              </li>
            </ul>
            {/* <Card.Text>{user.fullAddress}</Card.Text>
            <Card.Text>{user.contactNo}</Card.Text>
            <Card.Text>{user.emailId}</Card.Text> */}
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">View Details</Card.Link>
          </Card.Body>
          <button onClick={() => this.deleteCard(user)}>Delete</button>
          <button onClick={() => this.editCard(user)}>Edit</button>
        </Card>
      );
    });

    return (
      <div className="item">
        <div>
          <h1> User Details Form </h1>
        <Card style={{ width: "18rem" }}>
          <form onSubmit={this.submitUserForm}>
              <div className="form-group">
                <FormGroup>
                  <FormControl
                    type="text"
                    className="form-control form-control-md"
                    placeholder="Enter Full Name"
                    value={this.state.users.fullName}
                    onChange={this.inputHandlerfullName}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    className="form-control form-control-md"
                    placeholder="Enter Address"
                    value={this.state.users.fullAddress}
                    onChange={this.inputHandlerAddress}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    className="form-control form-control-md"
                    placeholder="Enter Contact"
                    value={this.state.users.contactNo}
                    onChange={this.inputHandlerContact}
                  /> </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Enter Email"
                    className="form-control form-control-md"
                    value={this.state.users.emailId}
                    onChange={this.inputHandlerEmail}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    className="form-control form-control-md"
                    placeholder="Enter CompanyDetails"
                    value={this.state.users.companyName}
                    onChange={this.inputHandlerCompany}
                  /> </FormGroup>

                <FormGroup>
                  <Button> Submit </Button>
                </FormGroup>
              </div>
       
          </form>
          </Card>
        </div>
        <>
          {cardList}
        </>
      </div>
    );
  }
}
export default ListItems;
