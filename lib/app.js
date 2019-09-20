const express = require('express');
const app = express();

app.use(require('cors')());
app.use(require('./middleware/logger'));
app.use(express.json());

app.use('/api/v1/NPC', require('./routes/NPC'));

app.use(require('./middleware/error'));
app.use(require('./middleware/notFound'));
module.exports = app;
