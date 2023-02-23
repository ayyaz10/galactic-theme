let mix = require("laravel-mix");
// mix.js('resources/js/header.js', 'public/js/header.js');
mix.js("src/js/app.js", "assets").sass("src/scss/app.scss", "assets");
