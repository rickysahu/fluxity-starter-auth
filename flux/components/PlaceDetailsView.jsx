'use strict';

var React = require('react');
var DocumentTitle = require('react-document-title');

var PlaceDetailsView = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired
    })
  },

  render() {
    return (
      <DocumentTitle title={this.props.data.name}>
        <div className='place-details-box'>
          <h2>{this.props.data.name}</h2>
          <img src={'/images/' + this.props.data.id + '.jpg'}/>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = PlaceDetailsView;
