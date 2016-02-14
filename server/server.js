var express = require('express');
var path = require('path');
var lodashExpress = require('lodash-express');
var fs = require('fs');

var app = express();
var staticPath = path.join(__dirname, '../build/');

app.use(express.static(staticPath));
lodashExpress(app, 'html');
app.set('view engine', 'html');
app.set('etag', false);

app.use(function(req, res, next) {
    if (!res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', 'public, max-age=30');
    }

    next();
});

var hash = fs.readFileSync(path.join(staticPath, 'hash'));

app.get('/', function(req, res) {
    res.redirect('/portal')
});

app.get('/portal*', function(req, res) {
    res.render('index-prod', {hash: hash});
});

app.get('/robots.txt', function(req, res) {
    res.render('robots');
});

var oldPaths = /^\/(admin|api|categories|committees|districts|docs|healthz|home|info|issues|parliament-issues|parties|promises|propositions|questions|representative|representatives|search|users|votes|widgets).*/
app.get(oldPaths, function(req, res) {
    res.redirect('https://data.holderdeord.no' + req.path)
});

var port = +(process.env.HTTP_PORT || 3000);

app.listen(port, function() {
    console.log('hdo-portal is listening on port ' + port);
});
