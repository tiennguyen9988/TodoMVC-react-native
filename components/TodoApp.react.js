/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @jsx React.DOM
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

//var Footer = require('./Footer.react');
var Header = require('./Header.react');
//var MainSection = require('./MainSection.react');
var React = require('react-native');
var TodoStore = require('../stores/TodoStore');
var FluxyMixin = require('alt/mixins/FluxyMixin');

var {
  View,
  Text,
  StyleSheet,
} = React;

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getState().todos,
    areAllComplete: TodoStore.areAllComplete()
  };
}

var TodoApp = React.createClass({
  mixins: [FluxyMixin],

  statics: {
    storeListeners: {
      _onChange: TodoStore
    }
  },

  getInitialState: function() {
    return getTodoState();
  },

  /**
   * @return {object}
   */
  render: function() {
    console.log('state',this.state);
  	return (
      <View style={styles.container}>
        <Header />
      {/*}

        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
        {*/}
      </View>
  	);
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


module.exports = TodoApp;
