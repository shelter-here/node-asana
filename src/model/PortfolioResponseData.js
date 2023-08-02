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
import {PortfolioResponse} from './PortfolioResponse';

/**
 * The PortfolioResponseData model module.
 * @module model/PortfolioResponseData
 * @version 2.0.1
 */
export class PortfolioResponseData {
  /**
   * Constructs a new <code>PortfolioResponseData</code>.
   * @alias module:model/PortfolioResponseData
   * @class
   * @param data {module:model/PortfolioResponse} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>PortfolioResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortfolioResponseData} obj Optional instance to populate.
   * @return {module:model/PortfolioResponseData} The populated <code>PortfolioResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PortfolioResponseData();
      if (data.hasOwnProperty('data'))
        obj.data = PortfolioResponse.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/PortfolioResponse} data
 */
PortfolioResponseData.prototype.data = undefined;

