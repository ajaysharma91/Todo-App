import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
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
        </Card>
      );
    });

    return (
      <div className="item">
        <br></br>
        <div>
          <h1> User Details Form </h1>
          <form onSubmit={this.submitUserForm}>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={this.state.users.fullName}
              onChange={this.inputHandlerfullName}
            />
            <input
              type="text"
              placeholder="Enter Address"
              value={this.state.users.fullAddress}
              onChange={this.inputHandlerAddress}
            />
            <br></br>
            <input
              type="text"
              placeholder="Enter Contact"
              value={this.state.users.contactNo}
              onChange={this.inputHandlerContact}
            />
            <input
              type="text"
              placeholder="Enter Email"
              value={this.state.users.emailId}
              onChange={this.inputHandlerEmail}
            />
            <br></br>
            <input
              type="text"
              placeholder="Enter CompanyDetails"
              value={this.state.users.companyName}
              onChange={this.inputHandlerCompany}
            />
            <br></br>
            <button> Submit </button>
          </form>
        </div>
        <>
          {cardList}
          <br />
        </>
      </div>
    );
  }
}
export default ListItems;
