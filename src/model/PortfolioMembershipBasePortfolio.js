/*
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The PortfolioMembershipBasePortfolio model module.
 * @module model/PortfolioMembershipBasePortfolio
 * @version 2.0.1
 */
export class PortfolioMembershipBasePortfolio {
  /**
   * Constructs a new <code>PortfolioMembershipBasePortfolio</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/reference/project-statuses) update. Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a max of 20 custom fields.
   * @alias module:model/PortfolioMembershipBasePortfolio
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PortfolioMembershipBasePortfolio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortfolioMembershipBasePortfolio} obj Optional instance to populate.
   * @return {module:model/PortfolioMembershipBasePortfolio} The populated <code>PortfolioMembershipBasePortfolio</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PortfolioMembershipBasePortfolio();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
PortfolioMembershipBasePortfolio.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
PortfolioMembershipBasePortfolio.prototype.resource_type = undefined;

/**
 * The name of the portfolio.
 * @member {String} name
 */
PortfolioMembershipBasePortfolio.prototype.name = undefined;

