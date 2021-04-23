<?php

use Illuminate\Http\Request;
use App\Product;
use App\Category;

Route::get('products', 'ProductsController@index');

Route::get('product/{product}', 'ProductsController@show');

Route::post('products','ProductsController@store');

Route::put('product/{product}','ProductsController@update');

Route::delete('product/{product}', 'ProductsController@delete');

Route::get('catalogs', 'CatalogsController@index');

Route::get('catalog/{catalog}', 'CatalogsController@show');

Route::post('catalogs','CatalogsController@store');

Route::put('catalog/{catalog}','CatalogsController@update');

Route::delete('catalog/{catalog}', 'CatalogsController@delete');


Route::get('categories', 'CategoriesController@index');

Route::get('category/{category}', 'CategoriesController@show');

Route::post('categories','CategoriesController@store');

Route::put('category/{category}','CategoriesController@update');

Route::delete('category/{category}', 'CategoriesController@delete');


Route::get('brands', 'BrandsController@index');

Route::get('brand/{brand}', 'BrandsController@show');

Route::post('brands','BrandsController@store');

Route::put('brand/{brand}','BrandsController@update');

Route::delete('brand/{brand}', 'BrandsController@delete');


            /* Auth */
 Route::post('register', [PassportAuthController::class, 'register']);
 Route::post('login', [PassportAuthController::class, 'login']);
 Route::get('auth', 'MeController@me');
 Route::middleware('auth:api')->group(function () {
     Route::resource('posts', PostController::class);
     
 });