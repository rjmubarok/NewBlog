const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
   ;

// mix.styles([
//     'resources/site/css/linearicons.css',
//     'resources/site/css/font-awesome.min.css',
//     'resources/site/css/bootstrap.css',
//     'resources/site/css/magnific-popup.css',
//     'resources/site/css/nice-select.css',
//     'resources/site/css/animate.min.css',
//     'resources/site/css/owl.carousel.css',
//     'resources/site/css/css/main.css',
// ],'public/css/style.css')

