'use strict';

/**
 * kpi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::kpi.kpi", ({ strapi }) => ({
  async findOne(ctx) {
    const { date } = ctx.params;

    const query = {
      filters: { date },
      ...ctx.query,
    };

    const conference = await strapi.entityService.findMany("api::kpi.kpi", query);

    const sanitizedEntity = await this.sanitizeOutput(conference);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
