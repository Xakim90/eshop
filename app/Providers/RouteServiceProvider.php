<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Routes\Api\getApi;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;


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
        
        /* products */
        Route::get('products', 'ProductsController@index');
        Route::get('product/{product}', 'ProductsController@show');
        Route::post('products','ProductsController@store');
        Route::put('product/{product}','ProductsController@update');
        Route::delete('product/{product}', 'ProductsController@delete');

        /* products */
        Route::get('products_details', 'ProductDetailsController@index');
        Route::get('product_detail/{product_detail}', 'ProductDetailsController@show');
        Route::post('products_details','ProductDetailsController@store');
        Route::put('product_detail/{product_detail}','ProductDetailsController@update');
        Route::delete('product_detail/{product_detail}', 'ProductDetailsController@delete');

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

        /* Auth */
        Route::post('register', [PassportAuthController::class, 'register']);
        Route::post('login', [PassportAuthController::class, 'login']);
        Route::post('me', [PassportAuthController::class, 'me']);
        

        Route::middleware('auth:api')->get('/user',function (Request $request) {
            return $request->user();
        });

        /* users */
        // Route::get('users', 'UsersController@index');
        // Route::get('user/{user}', 'UsersController@show');
        // Route::post('users','UsersController@create');
        // Route::put('user/{user}','UsersController@update');
        // Route::delete('user/{user}', 'UsersController@delete');

        // Route::get('/register', 'UsersController@register')->name('register');
        // Route::post('/register', 'Auth\RegisterController@create');
        // Route::get('/login', 'UsersController@login')->name('login');
        // Route::post('/login', 'Auth\AuthControllerr@authenticate');
        // Route::get('logout', 'Auth\AuthController@logout')->name('logout'); 
        // Route::get('/home', 'Auth\AuthController@home')->name('home');
    });
}
}
