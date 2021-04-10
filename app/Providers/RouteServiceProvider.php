<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Routes\Api\getApi;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::group([
        'middleware' => ['api', 'cors'],
        'namespace' => $this->namespace,
        'prefix' => 'api',
    ], function ($router) {
        
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


        Route::post('register','RegisterController@create');
    });
        // Route::prefix('api')
        //      ->middleware('api')
        //      ->namespace($this->namespace)
        //      ->group(base_path('routes/api.php'));
    }
}
