'use strict';

/**
 * lesson-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lesson-plan.lesson-plan');
