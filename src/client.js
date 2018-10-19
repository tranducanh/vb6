import 'todomvc-common';
import TodoStore from './stores/TodoStore';
import ViewStore from './stores/ViewStore';
import ControlStore from './stores/ControlStore';
import PropertyStore from './stores/PropertyStore'
import TodoApp from './components/todoApp.js';
import React from 'react';
import ReactDOM from 'react-dom';

const initialState = window.initialState && JSON.parse(window.initialState) || {};

var todoStore = TodoStore.fromJS(initialState.todos || []);
var controlStore = ControlStore.fromJS(initialState.controls || []);
var viewStore = new ViewStore();
var propertyStore = new PropertyStore();

todoStore.subscribeServerToStore();
controlStore.subscribeServerToStore();

ReactDOM.render(
	<TodoApp todoStore={todoStore} viewStore={viewStore} controlStore={controlStore} propertyStore={propertyStore}/>,
	document.getElementById('todoapp')
);

if (module.hot) {
  module.hot.accept('./components/todoApp', () => {
    var NewTodoApp = require('./components/todoApp').default;
    ReactDOM.render(
      <NewTodoApp todoStore={todoStore} viewStore={viewStore} controlStore ={controlStore} propertyStore={propertyStore}/>,
      document.getElementById('todoapp')
    );
  });
}

