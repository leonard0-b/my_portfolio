let mix = require('laravel-mix');
mix.sass('src/scss/master.scss', 'assets/css/')
    .js("src/js/main.js", "assets/js/")
    .options({ processCssUrls: false});