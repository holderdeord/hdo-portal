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

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});
