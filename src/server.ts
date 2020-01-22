import express from 'express';
import path from 'path';
import secure from 'ssl-express-www';

const app = express();
const port = process.env.PORT || 3001;

// app.use(secure);
app.use('/', express.static(path.join(__dirname, '../public')));
app.get('*', (_request, response) => response.sendFile(path.resolve(`${__dirname}/../public/index.html`)))
app.listen(port, () => console.log(`server listening on ${port}.`));