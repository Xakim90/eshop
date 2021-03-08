<?php

use Illuminate\Http\Request;
use App\Product;
use App\Category;

Route::get('products', 'ProductsController@index');

Route::get('product/{product}', 'ProductsController@show');

Route::post('products','ProductsController@store');

Route::put('product/{product}','ProductsController@update');

Route::delete('product/{product}', 'ProductsController@delete');


Route::get('categories', 'CategoriesController@index');

Route::get('category/{category}', 'CategoriesController@show');

Route::post('categories','CategoriesController@store');

Route::put('category/{category}','CategoriesController@update');

Route::delete('category/{category}', 'CategoriesController@delete');