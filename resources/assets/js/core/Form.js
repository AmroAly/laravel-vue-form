import Errors from './Errors';

class Form {
	constructor (data) {
		this.originalData = data;
		for (let field in data) {
			this[field] = data[field];
		}
	
		this.errors = new Errors()
	}

	reset () {
		for (let field in this.originalData) {
			this[field] = ''
		}

		this.errors.clear()
	}

	data () {
		// let data = Object.assign({}, this);

		// delete data.originalData;
		// delete data.errors;
		let data = {}

		for (let property in this.originalData) {
			// so we are saying data.name = this.name i hope that makes sense :)
			data[property] = this[property]
		}

		return data;
	}

	submit (requestType, url) {
		return new Promise((resolve, reject)=> {
			
			axios[requestType](url, this.data())
			.then(response => {
				this.onSuccess(response.data)

				resolve(response.data)
			})
			.catch(error => {
				this.onFail(error.response.data)

				reject(error.response.data)
			})
		});	
	}

	onSuccess (data) {
		alert(data.message)
		app.successMsg = 'You have registered successfully'
		this.reset()
	}

	onFail (errors) {
		this.errors.record(errors)
	}
}

export default Form;