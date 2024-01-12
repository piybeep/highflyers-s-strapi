'use strict';

/**
 * check-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::check-list.check-list');
