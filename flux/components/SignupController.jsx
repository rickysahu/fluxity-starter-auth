'use strict';

var React = require('react');
var qs = require('qs');
var apiUrl = process.env.API_URL;
var successRedirect = 'http://localhost:3000/places';

var SignupView = require('./SignupView.jsx');

var SignUpController = React.createClass({
  contextTypes: {
    Flux: React.PropTypes.object.isRequired,
    RouterState: React.PropTypes.object.isRequired
  },

  propTypes: {
    State: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <SignupView
        data={{
          apiUrl: apiUrl,
          alerts: this.props.State.Alerts,
          serverRedirect: qs.stringify({
            redirect: successRedirect
          })
        }}
        actions={{
          attemptSignup: this.context.Flux.Actions.AttemptSignup,
          dismissAlerts: this.context.Flux.Actions.DismissAlerts
        }}
      />
    );
  }
});

module.exports = SignUpController;
