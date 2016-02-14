import express from 'express';
import path from 'path';
import lodashExpress from 'lodash-express';
import fs from 'fs';

const app = express();
const staticPath = path.join(__dirname, '../build/');

app.use(express.static(staticPath));
lodashExpress(app, 'html');
app.set('view engine', 'html');
app.set('etag', false);

app.use((req, res, next) => {
    if (!res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', 'public, max-age=30');
    }

    next();
});

const hash = fs.readFileSync(path.join(staticPath, 'hash'));

app.get('/', (req, res) => {
    res.redirect('/portal')
});

app.get('/portal*', (req, res) => {
    res.render('index-prod', {hash});
});

app.get('/robots.txt', (req, res) => {
    res.render('robots');
});

const oldPaths = /^\/(admin|api|categories|committees|districts|docs|healthz|home|info|issues|parliament-issues|parties|promises|propositions|questions|representative|representatives|search|users|votes|widgets).*/
app.get(oldPaths, (req, res) => res.redirect(`https://data.holderdeord.no${req.path}`));

const port = +(process.env.HTTP_PORT || 3000);

app.listen(port, function() {
    console.log(`hdo-portal is listening on port ${port}`);
});
