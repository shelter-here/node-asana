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
import {CustomFieldResponsePeopleValue} from './CustomFieldResponsePeopleValue';
import {PortfolioMembershipBasePortfolio} from './PortfolioMembershipBasePortfolio';

/**
 * The PortfolioMembershipCompact model module.
 * @module model/PortfolioMembershipCompact
 * @version 2.0.2
 */
export class PortfolioMembershipCompact {
  /**
   * Constructs a new <code>PortfolioMembershipCompact</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. This object determines if a user is a member of a portfolio.
   * @alias module:model/PortfolioMembershipCompact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PortfolioMembershipCompact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortfolioMembershipCompact} obj Optional instance to populate.
   * @return {module:model/PortfolioMembershipCompact} The populated <code>PortfolioMembershipCompact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PortfolioMembershipCompact();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('portfolio'))
        obj.portfolio = PortfolioMembershipBasePortfolio.constructFromObject(data['portfolio']);
      if (data.hasOwnProperty('user'))
        obj.user = CustomFieldResponsePeopleValue.constructFromObject(data['user']);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
PortfolioMembershipCompact.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
PortfolioMembershipCompact.prototype.resource_type = undefined;

/**
 * @member {module:model/PortfolioMembershipBasePortfolio} portfolio
 */
PortfolioMembershipCompact.prototype.portfolio = undefined;

/**
 * @member {module:model/CustomFieldResponsePeopleValue} user
 */
PortfolioMembershipCompact.prototype.user = undefined;
