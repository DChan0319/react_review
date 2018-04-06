import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import path from 'path';

import db from '../db/index';

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/game', function(res, req){

});//post request to find a game and add top streamers for that game to list 

app.get('/streamers', function(res, req){

});//get request to get list of top streamers for a game from db


