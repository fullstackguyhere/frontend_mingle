import React, { Component } from 'react';
import { Button, Divider, Form } from 'semantic-ui-react';
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="main-landing">
          <div className="main-landing-content">
              <div className="main-landing-cell main-landing-communicationBlock">
              </div>
              <div className="main-landing-cell main-landing-utilityBlock">
                <div className="ui grid">
                  <div className="stretched row">
                    <div className="twelve wide column">
                        <Form size='large' key='large'>
                          <Form.Group widths='equal'>
                            <i className="users"></i><Form.Field control='input' placeholder='username'/>
                            <Form.Field control='input' type='password' placeholder='password'/>
                            <Button inverted color='blue'>Login</Button>
                          </Form.Group>
                          <Divider hidden />
                        </Form>
                    </div>
                  </div>
                  <div className="stretched row">
                      <div className="sixteen wide column">
                            <h1>Ready to mingle?</h1>
                      </div>
                  </div>
                  <div className="stretched row">
                      <div className="ten wide column">
                          <Form>
                            <Form.Field>
                              <input placeholder='email' />
                            </Form.Field>
                            <Form.Field>
                              <input placeholder='password' />
                            </Form.Field>
                            <Button type='submit' inverted color='blue'>Signup</Button>
                          </Form>
                      </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
