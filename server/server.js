import express from 'express';
import path from 'path';
import lodashExpress from 'lodash-express';
import fs from 'fs';

const app = express();
const staticPath = path.join(__dirname, '../build/');

app.use(express.static(staticPath));
lodashExpress(app, 'html');
app.set('view engine', 'html');

const hash = fs.readFileSync(path.join(staticPath, 'hash'));

app.get('/', (req, res) => {
    res.redirect('/portal')
});

app.get('/portal*', (req, res) => {
    res.render('index-prod', {hash});
})

const port = +(process.env.HTTP_PORT || 3000);

app.listen(port, function() {
    console.log(`hdo-portal is listening on port ${port}`);
});
