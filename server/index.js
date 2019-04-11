/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const port = 3000;
const app = express();
app.listen(port, () => console.log(`listening on port ${port}`));

app.use(express.static(`${__dirname}/../public`));
app.use(morgan('dev'));
app.use(cors());
