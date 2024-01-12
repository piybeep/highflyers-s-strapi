'use strict';

/**
 * ted-talk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ted-talk.ted-talk');
