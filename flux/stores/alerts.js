'use strict';

var uuid = require('node-uuid');

module.exports = {
  getInitialState() {
    return [];
  },
  handlers: {
    DISMISS_ALL_ALERTS(context) {
      this.replaceState([]);
    },
    ADD_ALERT(context, alert) {
      if (!alert) return;

      alert.id = uuid.v4();
      var newState = this.state.concat([alert]);
      this.replaceState(newState);
    }
  }
};
