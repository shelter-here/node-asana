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
import {PortfolioMembershipResponse} from './PortfolioMembershipResponse';

/**
 * The PortfolioMembershipResponseData model module.
 * @module model/PortfolioMembershipResponseData
 * @version 2.0.6
 */
export class PortfolioMembershipResponseData {
  /**
   * Constructs a new <code>PortfolioMembershipResponseData</code>.
   * @alias module:model/PortfolioMembershipResponseData
   * @class
   * @param data {module:model/PortfolioMembershipResponse} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>PortfolioMembershipResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortfolioMembershipResponseData} obj Optional instance to populate.
   * @return {module:model/PortfolioMembershipResponseData} The populated <code>PortfolioMembershipResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PortfolioMembershipResponseData();
      if (data.hasOwnProperty('data'))
        obj.data = PortfolioMembershipResponse.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/PortfolioMembershipResponse} data
 */
PortfolioMembershipResponseData.prototype.data = undefined;

