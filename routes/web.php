<?php


Route::get('/', function () {
    return view('welcome');
});

// Route::get('skills', function () {
// 	return ['Laravel', 'Vue', 'PHP', 'JavaScript'];	
// });

Route::get('projects/create', 'ProjectsController@create');
Route::post('projects', 'ProjectsController@store');