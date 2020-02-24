import React, { Components } from 'react';
import Card from "react-bootstrap/Card";
const Employee = (props) => {
    const cardList = props.cardList.map((user, index) => {
      return (
        <div
          class="col-sm-6 col-md-4 col-lg-3"
          style={{ flexWrap: "wrap", "margin-bottom": "15px" }}
        >
          <Card bg="info" text="white">
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
                <li
                  style={{ backgroundColor: "green" }}
                  class="list-group-item"
                >
                  {user.fullAddress}
                </li>
                <li
                  style={{ backgroundColor: "green" }}
                  class="list-group-item"
                >
                  {user.contactNo}
                </li>
                <li
                  style={{ backgroundColor: "green" }}
                  class="list-group-item"
                >
                  {user.emailId}
                </li>
              </ul>
              {/* <Card.Text>{user.fullAddress}</Card.Text>
            <Card.Text>{user.contactNo}</Card.Text>
            <Card.Text>{user.emailId}</Card.Text> */}
              <Card.Link href="#">Edit</Card.Link>
              <Card.Link href="#">View Details</Card.Link>
            </Card.Body>
            <button onClick={() => props.deleteCard(user)}>Delete</button>
            <button onClick={() => props.editCard(user)}>Edit</button>
          </Card>
        </div>
      );
    });
    return (
          <>
          <div class="row" style={{ display: "flex", flexWrap: "wrap" }}>
            {cardList}
            </div>
            </>
    );
}
 export default Employee;