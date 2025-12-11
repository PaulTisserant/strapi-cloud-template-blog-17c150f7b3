'use strict';
const bootstrap = require("./bootstrap");

module.exports = {
  bootstrap({ strapi }) {
    // e.g. 30 minutes
    strapi.server.httpServer.requestTimeout = 30 * 60 * 1000;
  },
};
