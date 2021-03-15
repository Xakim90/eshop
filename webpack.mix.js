const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react("resources/js/react/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .postCss("resources/js/react/css/app.css", "public/css", [
        require("tailwindcss"),
    ]);
mix.webpackConfig({
    devServer: {
        proxy: {
            "*": "http://localhost:8000"
        }
    }
});
mix.browserSync({
    proxy: "http://localhost:8000"
});
