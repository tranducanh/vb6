import {observable, computed, reaction} from 'mobx';
import ControlModel from '../models/ControlModel'
import * as Utils from '../utils';


export default class ControlStore {
	@observable controls = [];

	// @computed get activeTodoCount() {
	// 	return this.todos.reduce(
	// 		(sum, todo) => sum + (todo.completed ? 0 : 1),
	// 		0
	// 	)
	// }

	// @computed get completedCount() {
	// 	return this.todos.length - this.activeTodoCount;
	// }

	subscribeServerToStore() {
		reaction(
			() => this.toJS(),
			controls => window.fetch && fetch('/api/controls', {
				method: 'post',
				body: JSON.stringify({ controls }),
				headers: new Headers({ 'Content-Type': 'application/json' })
			})
		);
	}

	subscribeLocalstorageToStore() {
		reaction(
			() => this.toJS(),
			controls => localStorage.setItem('mobx-react-todomvc-controls', JSON.stringify({ controls }))
		);
	}

	addControl (name) {
		this.controls.push(new ControlModel(this, Utils.uuid(), name, [{name:name},{height:"16"}]));
	}

	// toggleAll (checked) {
	// 	this.todos.forEach(
	// 		todo => todo.completed = checked
	// 	);
	// }

	// clearCompleted () {
	// 	this.todos = this.todos.filter(
	// 		todo => !todo.completed
	// 	);
	// }

	toJS() {
		return this.controls.map(control => control.toJS());
	}

	static fromJS(array) {
		const controlStore = new ControlStore();
		controlStore.controls = array.map(item => ControlModel.fromJS(controlStore, item));
		return controlStore;
	}
}
