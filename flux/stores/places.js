'use strict';

module.exports = {
  getInitialState() {
    return {
      isLoading: false,
      notFound: false,
      data: []
    };
  },
  handlers: {
    ADD_PLACE_TO_LIST(context, payload) {
      var newState = this.state.data.concat([payload]);
      
      this.replaceState({
        isLoading: false,
        notFound: false,
        data: newState
      });
    },
    REMOVE_PLACE_FROM_LIST(context, id) {
      var place = this.state.data.slice().filter(function(place) {
        return place.id === id;
      })[0];

      if (!place) return;

      var newState = this.state.data.slice();
      newState.splice(newState.indexOf(place), 1);
      
      this.replaceState({
        isLoading: false,
        notFound: false,
        data: newState
      });
    },
    POPULATE_PLACES_DATA(context, payload) {
      this.replaceState({
        isLoading: false,
        notFound: false,
        data: payload
      });
    },
    POPULATE_PLACES_DATA_FAIL(context, payload) {
      this.setState({
        notFound: true
      });
    }
  }
};
