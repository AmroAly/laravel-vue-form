webpackJsonp([0],{

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
	template: '<h1>HELLO WORLD</h1>'
};

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(29);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
	function Form(data) {
		_classCallCheck(this, Form);

		this.originalData = data;
		for (var field in data) {
			this[field] = data[field];
		}

		this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
	}

	_createClass(Form, [{
		key: 'reset',
		value: function reset() {
			for (var field in this.originalData) {
				this[field] = '';
			}

			this.errors.clear();
		}
	}, {
		key: 'data',
		value: function data() {
			// let data = Object.assign({}, this);

			// delete data.originalData;
			// delete data.errors;
			var data = {};

			for (var property in this.originalData) {
				// so we are saying data.name = this.name i hope that makes sense :)
				data[property] = this[property];
			}

			return data;
		}
	}, {
		key: 'submit',
		value: function submit(requestType, url) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				axios[requestType](url, _this.data()).then(function (response) {
					_this.onSuccess(response.data);

					resolve(response.data);
				}).catch(function (error) {
					_this.onFail(error.response.data);

					reject(error.response.data);
				});
			});
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess(data) {
			alert(data.message);
			app.successMsg = 'You have registered successfully';
			this.reset();
		}
	}, {
		key: 'onFail',
		value: function onFail(errors) {
			this.errors.record(errors);
		}
	}]);

	return Form;
}();

/* harmony default export */ exports["a"] = Form;

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
	function Errors() {
		_classCallCheck(this, Errors);

		this.errors = {};
	}

	_createClass(Errors, [{
		key: "any",
		value: function any() {
			return Object.keys(this.errors).length > 0;
		}
	}, {
		key: "has",
		value: function has(field) {
			return this.errors.hasOwnProperty(field);
		}
	}, {
		key: "get",
		value: function get(field) {
			if (this.errors[field]) {
				return this.errors[field][0];
			}
		}
	}, {
		key: "record",
		value: function record(errors) {
			this.errors = errors;
		}
	}, {
		key: "clear",
		value: function clear(field) {
			if (field) {
				// this.errors[field] = null
				delete this.errors[field];

				return;
			}
			this.errors = {};
		}
	}]);

	return Errors;
}();

/* harmony default export */ exports["a"] = Errors;

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Form__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Example__ = __webpack_require__(10);






window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
window.Form = __WEBPACK_IMPORTED_MODULE_2__core_Form__["a" /* default */];

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	el: '#app',

	components: {
		'my-example': __WEBPACK_IMPORTED_MODULE_3__components_Example__["a" /* default */]
	},

	data: {
		form: new __WEBPACK_IMPORTED_MODULE_2__core_Form__["a" /* default */]({
			name: '',
			description: ''
		}),
		successMsg: '',
		isLoading: false
	},

	methods: {
		onSubmit: function onSubmit() {
			this.form.submit('post', '/projects').then(function (data) {
				return console.log(data);
			}).catch(function (errors) {
				return console.log(errors);
			});
		}
	}
});

/***/ }

},[31]);