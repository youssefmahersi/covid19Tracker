require('babel-register');
 
const router = require('./routes').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('http://my-site.ru')
        .save('./sitemap.xml')
);