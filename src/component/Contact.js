import React, { Component } from "react";
import axios from "axios";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SubFooter from "../layout/SubFooter";
import { Input, Button, Form, message } from "antd";

const FormItem = Form.Item;

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }
  handleSubmit = e => {
    this.setState({ loading: true });
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const config = {
          header: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*"
          }
        };
        axios
          .post(
            "https://boxin-prod-notification.azurewebsites.net/api/contact",
            values,
            config
          )
          .then(res => {
            message.success(res.message);
            this.setState({ loading: false });
          })
          .catch(error => {
            this.setState({ loading: false });
            message.error(error);
          });
      }

      this.setState({ loading: false });
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Header />
        <header className="header">
          <div className="container">
            <div className="row reverse-mob align-items-center h-100">
              <div className="col-lg-6 mr-auto">
                <h1 className="fw-600">Contact Us</h1>
                <p className="lead-2">
                  Don’t hesitate to ask us anything! we are here to help you.
                </p>
                <Form className="input-round" onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <FormItem className="form-group col-md-6">
                      {getFieldDecorator("first_name", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your first name!"
                          }
                        ]
                      })(
                        <Input
                          className="form-control form-control-lg"
                          type="text"
                          size="large"
                          name="first_name"
                          placeholder="First Name"
                        />
                      )}
                    </FormItem>

                    <FormItem className="form-group col-md-6">
                      {getFieldDecorator("last_name", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your last name!"
                          }
                        ]
                      })(
                        <Input
                          className="form-control form-control-lg"
                          type="text"
                          size="large"
                          name="last_name"
                          placeholder="Last Name"
                        />
                      )}
                    </FormItem>

                    <FormItem className="form-group col-md-6">
                      {getFieldDecorator("email", {
                        rules: [
                          {
                            type: "email",
                            message: "The input is not valid E-mail!"
                          },
                          {
                            required: true,
                            message: "Please input your E-mail!"
                          }
                        ]
                      })(
                        <Input
                          className="form-control form-control-lg"
                          type="email"
                          size="large"
                          name="email"
                          placeholder="Email"
                        />
                      )}
                    </FormItem>

                    <FormItem className="form-group col-md-6">
                      {getFieldDecorator("phone", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your phone!"
                          }
                        ]
                      })(
                        <Input
                          className="form-control form-control-lg"
                          type="text"
                          size="large"
                          name="phone"
                          placeholder="Phone"
                        />
                      )}
                    </FormItem>
                  </div>
                  <FormItem className="form-group">
                    {getFieldDecorator("message", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your message!"
                        }
                      ]
                    })(
                      <textarea
                        className="form-control form-control-lg"
                        rows="4"
                        placeholder="What do you have in mind?"
                        name="message"
                      />
                    )}
                  </FormItem>
                  <Button
                    htmlType="submit"
                    className="btn btn-lg btn-primary"
                    type="primary"
                    loading={this.state.loading}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
              <div className="col-md-4">
                <img src="../../src/assets/img/boxin-img/10@3x.png" alt="..." />
              </div>
            </div>
          </div>
        </header>
        <SubFooter />
        <Footer />
      </div>
    );
  }
}
const contactForm = Form.create({ name: "contact" })(Contact);

export default contactForm;
