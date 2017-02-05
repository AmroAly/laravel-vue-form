class Errors {
	constructor () {
		this.errors = {}
	}

	any () {
		return Object.keys(this.errors).length > 0 
	}

	has (field) {
		return this.errors.hasOwnProperty(field)
	}

	get (field) {
		if (this.errors[field]) {
			return this.errors[field][0];
		}
	}

	record (errors) {
		this.errors = errors;
	}

	clear (field) {
		if (field) {
			// this.errors[field] = null
			delete this.errors[field]

			return
		}
		this.errors = {}
	}
}

export default Errors;