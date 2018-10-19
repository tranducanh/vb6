import {observable} from 'mobx';

export default class ControlModel {
	store;
	id;
	@observable name;
	@observable properties;

	constructor(store, id, name, properties) {
		this.store = store;
		this.id = id;
		this.name = name;
		this.properties = properties;
	}

	destroy() {
		this.store.controls.remove(this);
	}

	setProperty(name,newvalue) {
		this.properties[name] = newvalue;
	}

	toJS() {
		return {
			id: this.id,
			name: this.name,
			properties: this.properties
		};
	}

	static fromJS(store, object) {
		return new ControlModel(store, object.id, object.name, object.properties);
	}
}
