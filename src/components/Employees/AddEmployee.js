import  React, { Component }  from 'react';
import {
  FormGroup,
  FormControl,
  Fragment,
  Button,
  InputGroup,
  Form
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
class AddEmployee extends Component {
    render(){
    return (
      <Card style={{ width: "18rem" }}>
        <Form onSubmit={this.props.submitUserForm}> 
          <div className="form-group">
            <FormGroup>
              <FormControl
                type="text"
                ref="fullName"
                className="form-control form-control-md"
                placeholder="Enter Full Name"
                value={this.props.users.fullName}
                onChange={this.props.inputHandlerfullName.bind()}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="text"
                ref="fullAddress"
                className="form-control form-control-md"
                placeholder="Enter Address"
                value={this.props.users.fullAddress}
                onChange={this.props.inputHandlerAddress.bind()}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="text"
                ref="contactNo"
                className="form-control form-control-md"
                placeholder="Enter Contact"
                value={this.props.users.contactNo}
                onChange={this.props.inputHandlerContact}
              />{" "}
            </FormGroup>
            <FormGroup>
              <FormControl
                type="text"
                ref="emailId"
                placeholder="Enter Email"
                className="form-control form-control-md"
                value={this.props.users.emailId}
                onChange={this.props.inputHandlerEmail}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="text"
                ref="companyName"
                className="form-control form-control-md"
                placeholder="Enter CompanyDetails"
                value={this.props.users.companyName}
                onChange={this.props.inputHandlerCompany}
              />{" "}
            </FormGroup>

            <FormGroup>
              <Button type="submit"> Submit </Button>
            </FormGroup>
          </div>
        </Form>
      </Card>
    )
}
}
export default AddEmployee;