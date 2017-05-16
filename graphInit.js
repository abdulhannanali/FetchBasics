/**
 * graphInit.js
 * Initializes the Graph API, using an ACCESS_TOKEN
 * 
 * @flow
 */
require('dotenv').config();
const { FB_PAGE_ACCESS_TOKEN } = process.env;

const graph = require('fbgraph');

graph.setAccessToken(FB_PAGE_ACCESS_TOKEN);

module.exports = graph;
