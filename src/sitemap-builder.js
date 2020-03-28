require('babel-register');
 
const router = require('./routes').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://anal-virus.info')
        .save('./sitemap.xml')
);