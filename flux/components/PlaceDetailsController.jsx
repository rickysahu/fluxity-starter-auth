'use strict';

var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var NotFoundView = require('./NotFoundView.jsx');
var LoadingView = require('./LoadingView.jsx');
var PlaceDetailsView = require('./PlaceDetailsView.jsx');

var PlaceDetailsController = React.createClass({
  contextTypes: {
    RouterState: React.PropTypes.object.isRequired,
    Flux: React.PropTypes.object.isRequired
  },

  propTypes: {
    State: React.PropTypes.object.isRequired
  },

  statics: {
    willTransitionTo(transition, params, query, done) {
      if (!transition.context.shouldUpdate) return done();
      
      transition.context.Actions.PopulateSelectedPlaceData({
        params: params,
        query: query
      }, done);
    }
  },

  render() {
    if (this.props.State.PlaceDetails.notFound)
      return <NotFoundView/>;
    
    if (this.props.State.PlaceDetails.isLoading)
      return <LoadingView/>;

    return (
      <PlaceDetailsView
        data={{
          name: this.props.State.PlaceDetails.data.name,
          id: this.props.State.PlaceDetails.data.id
        }}
      />
    );
  }
});

module.exports = PlaceDetailsController;
