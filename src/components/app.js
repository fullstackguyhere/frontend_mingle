import React, { Component } from 'react';
import { Button, Divider, Form, Segment} from 'semantic-ui-react';

export default class App extends Component {
  render() {
    return (
              <div className="columnsContainer">
              
              <div className="leftColumn">
                <div className="ui grid " id="mymingle0">
                  <div className="stretched row " id="mymingle1">
                    <div className="twelve wide column" id="mymingle2">
                        <Form size='large' key='large'>
                          <Form.Group widths='equal'>
                            <i className="users" />
                            <Form.Field control='input' placeholder='Username'/>
                            <Form.Field control='input' type='password' placeholder='Password'/>
                            <Button inverted color='blue'>Login</Button>
                            </Form.Group>
                            <Divider hidden />
                        </Form>
                    </div>
                  </div>

                  <div className="stretched row" id="mymingle4">
                      <div className="sixteen wide column">
                            <h1>Ready to mingle?</h1>
                      </div>
                  </div>

                  <div className="stretched row" >
                      <div className="ten wide column" id="mymingle5">

                          <Form size='large' key='large'>
                            <Form.Field control='input' placeholder='Email'/>
                            <Form.Field control='input' type='password' placeholder='Password'/>
                            <button className="ui inverted blue button">Signup</button>
                          <Divider hidden />
                          </Form>

                      </div>
                  </div>

                </div>
              </div>

              <div className="rightColumn">
                  <div className="ui grid " id="mymingle0">
                    <div className="stretched row" id="mymingle4">
                        <div className="sixteen wide column">
                        </div>
                    </div>
                  </div>
              </div>


        </div>

    );
  }
}
