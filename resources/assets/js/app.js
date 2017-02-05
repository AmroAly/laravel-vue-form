import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';

import Example from './components/Example';

window.axios = axios;
window.Form = Form;

new Vue({
	el: '#app',

	components: {
		'my-example': Example
	},

	data: {
		form: new Form({
			name: '',
			description: '',
		}),
		successMsg : '',
		isLoading: false
	},

	methods: {
		onSubmit () {
			this.form.submit('post', '/projects').then(data => console.log(data))
			.catch(errors => console.log(errors));
		}
	}
})