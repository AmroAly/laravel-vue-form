<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Create Project</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.css">

	<style>
		body {
			padding-top: 50px;
		}
	</style>
</head>
<body>
	@include('projects.list')
	<div id="app" class="container">
	<my-example></my-example>	
	<span class="help is-success" v-if="successMsg" v-text="successMsg"></span>
		<form action="/projects" method="post" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
			<div class="control">
				<label for="name" class="label">Project Name: </label>

				<input type="text" id="name" name="name" class="input" v-model="form.name">

				<span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
			</div>

			<div class="control">
				<label for="description" class="label">Project Description: </label>

				<input type="text" id="description" name="description" class="input" v-model="form.description">

				<span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
			</div>

			<div class="control">
				<button class="button is-primary" :disabled="form.errors.any()">Create</button>
			</div>
		</form>
	</div>

    	<script src="{{ url('js/vendor.js') }}"></script>
    	<script src="{{ url('js/app.js') }}"></script>
</body>
</html>