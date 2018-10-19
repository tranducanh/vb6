import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import escape from 'jsesc';


// import { renderToString } from 'react-dom/server'
//
// import TodoStore from '../src/stores/TodoStore';
// import ViewStore from '../src/stores/ViewStore';
// import TodoApp from '../src/components/todoApp.js';
// import React from 'react';

const app = express();
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')))

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

const renderFullPage = html => {
	const initialState = { controls };
	const initialStateJSON = escape( // So safe!
		JSON.stringify(initialState),
		{ wrap: true, isScriptContext: true, json: true }
	);
	return `
	<!doctype html>
	<html lang="utf-8">
		<head>
			<link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
			
			<script>
				window.initialState = ${initialStateJSON}
			</script>
		</head>
		<body>
			<div id="todoapp" class="todoapp ">${html}</div>
			<script src="/static/bundle.js"></script>			
		</body>
	</html>
	`
};

let todos = []; // Todos are stored here
let controls = [];

app.use(bodyParser.json());

app.get('/', function(req, res) {
	// const todoStore = TodoStore.fromJS(todos);
	// const viewStore = new ViewStore();
  //
	// const initView = renderToString((
	// 	<TodoApp todoStore={todoStore} viewStore={viewStore} />
	// ));
  //
	const page = renderFullPage('');

	res.status(200).send(page);
});

app.post('/api/todos', function(req, res) {
	todos = req.body.todos;
	if (Array.isArray(todos)) {
		console.log(`Updated todos (${todos.length})`);
		res.status(201).send(JSON.stringify({ success: true }));
	} else {
		res.status(200).send(JSON.stringify({ success: false, error: "expected `todos` to be array" }));
	}
});

app.post('/api/controls', function(req, res) {
	controls = req.body.controls;
	if (Array.isArray(controls)) {
		console.log(`Updated controls (${controls.length})`);
		res.status(201).send(JSON.stringify({ success: true }));
	} else {
		res.status(200).send(JSON.stringify({ success: false, error: "expected `controls` to be array" }));
	}
});

app.get('*', function(req, res) {
	res.status(404).send('Server.js > 404 - Page Not Found');
});

app.use((err, req, res, next) => {
	console.error("Error on request %s %s", req.method, req.url);
	console.error(err.stack);
	res.status(500).send("Server error");
});

process.on('uncaughtException', evt => {
	console.log('uncaughtException: ', evt);
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
