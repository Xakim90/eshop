<?php

use Illuminate\Http\Request;
use App\Product;
use App\Category;

/* products */
Route::get('products', 'ProductsController@index');
Route::get('product/{product}', 'ProductsController@show');
Route::post('products','ProductsController@store');
Route::put('product/{product}','ProductsController@update');
Route::delete('product/{product}', 'ProductsController@delete');

/* catalogs */
Route::get('catalogs', 'CatalogsController@index');
Route::get('catalog/{catalog}', 'CatalogsController@show');
Route::post('catalogs','CatalogsController@store');
Route::put('catalog/{catalog}','CatalogsController@update');
Route::delete('catalog/{catalog}', 'CatalogsController@delete');

/* categories */
Route::get('categories', 'CategoriesController@index');
Route::get('category/{category}', 'CategoriesController@show');
Route::post('categories','CategoriesController@store');
Route::put('category/{category}','CategoriesController@update');
Route::delete('category/{category}', 'CategoriesController@delete');

/* brands */
Route::get('brands', 'BrandsController@index');
Route::get('brand/{brand}', 'BrandsController@show');
Route::post('brands','BrandsController@store');
Route::put('brand/{brand}','BrandsController@update');
Route::delete('brand/{brand}', 'BrandsController@delete');

/* users */
Route::get('users', 'UsersController@index');
Route::get('user/{user}', 'UsersController@show');
Route::post('user','UsersController@create');
Route::put('user/{user}','UsersController@update');
Route::delete('user/{user}', 'UsersController@delete');

// Route::get('/login', 'UsersController@login')->name('login');
Route::post('/login', 'UsersController@authenticate');
Route::get('logout', 'UsersController@logout')->name('logout'); 
Route::get('/home', 'UsersController@home')->name('home');