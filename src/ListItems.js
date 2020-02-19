import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
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
      ],
      countries: [
        {
          id: uuid.v4(),
          name: "India",
          currency: "INR"
        },
        {
          id: uuid.v4(),
          name: "Australia",
          currency: "Austin"
        },
        {
          id: uuid.v4(),
          name: "America",
          currency: "US Doller"
        }
      ],
      id: 0,
      name: "",
      currency: ""
    };
  }
  submitUserForm = e => {
    e.preventDefault();
    //const list = this.state.countries.slice();
    const user = {
      id: uuid.v4(),
      fullName: this.state.fullName,
      address: this.state.fullAddress,
      contactNo: this.state.contactNo,
      emailId: this.state.emailId,
      companyName: this.state.companyName
    };
    // console.log(country);
    this.setState({
      users: [...this.state.users, user]
    });
    console.log();
    //e.reset();
  };
  submitForm = e => {
    e.preventDefault();
    //const list = this.state.countries.slice();
    const country = {
      id: uuid.v4(),
      name: this.state.name,
      currency: this.state.currency
    };
    console.log(country);
    this.setState({
      countries: [...this.state.countries, country],
      id: "",
      name: "",
      currency: ""
    });

    e.target.reset();
  };

  inputHandlerfullName = e => {
    console.log(e.target.value);
    const fullName = e.target.value;
    this.setState({
      fullName: fullName
    });
  };

  inputHandlerAddress = e => {
    console.log(e.target.value);
    const address = e.target.value;
    this.setState({
      fullAddress: address
    });
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

  inputHandlerName = e => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    });
  };

  inputHandlerCurrency = e => {
    console.log(e.target.value);
    this.setState({
      currency: e.target.value
    });
  };
  render() {
    const list = this.state.countries.map((item, index) => {
      return (
        <tr key={index}>
          <td> {index} </td> <td> {item.name} </td> <td> {item.currency} </td>
        </tr>
      );
    });
    const cardList = this.state.users.map((user, index) => {
      return (
        <Card bg="info" text="white" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.companyName}</Card.Title>
            <Card.Subtitle
              style={{ backgroundColor: "green" }}
              className="mb-2 text-muted"
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
        <h1> Hello Gues!!This Is List Items </h1>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="Enter Country Name"
            value={this.state.countries.name}
            onChange={this.inputHandlerName}
          />
          <input
            type="text"
            placeholder="Enter Currency"
            value={this.state.countries.currency}
            onChange={this.inputHandlerCurrency}
          />
          <button> Save It </button>
        </form>

        <br></br>
        <div>
          <h1> User Details Form </h1>
          <form onSubmit={this.submitUserForm}>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={this.state.users.fullName}
              onChange={this.inputHandlerFullName}
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

        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col"> # </th> <th scope="col"> Name </th>
              <th scope="col"> Action </th>
            </tr>
          </thead>
          <tbody> {list} </tbody>
        </table>

        <>
          {cardList}
          <br />
        </>
      </div>
    );
  }
}
export default ListItems;
