'use strict';

var React = require('react');
var DocumentTitle = require('react-document-title');
var { Link } = require('react-router');

var AlertBox = require('./AlertBox.jsx');
var SignUpForm = require('./SignUpForm.jsx');

var SignUpView = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      alerts: React.PropTypes.array.isRequired,
      apiUrl: React.PropTypes.string.isRequired,
      serverRedirect: React.PropTypes.string.isRequired
    }),
    actions: React.PropTypes.shape({
      attemptSignup: React.PropTypes.func.isRequired,
      dismissAlerts: React.PropTypes.func.isRequired
    })
  },

  render() {
    return (
      <DocumentTitle title={'Signup'}>
        <div className='container'>
          <div className='row'>
            <h1>Signup page</h1>

            <SignUpForm
              data={{
                apiUrl: this.props.data.apiUrl,
                serverRedirect: this.props.data.serverRedirect
              }}
              actions={{
                attemptSignup: this.props.actions.attemptSignup
              }}
            />

            <p><Link to='landing'>{'Go back to landing!'}</Link></p>
            <p><Link to='login'>{'Go to login!'}</Link></p>
          </div>

          <div className='row'>
            <AlertBox
              data={{
                alerts: this.props.data.alerts
              }}
              actions={{
                dismissAlerts:this.props.actions.dismissAlerts
              }}
            />
          </div>

        </div>
      </DocumentTitle>
    );
  }
});

module.exports = SignUpView;
