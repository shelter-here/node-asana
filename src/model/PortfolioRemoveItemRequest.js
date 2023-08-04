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
 * The PortfolioRemoveItemRequest model module.
 * @module model/PortfolioRemoveItemRequest
 * @version 2.0.2
 */
export class PortfolioRemoveItemRequest {
  /**
   * Constructs a new <code>PortfolioRemoveItemRequest</code>.
   * @alias module:model/PortfolioRemoveItemRequest
   * @class
   * @param item {String} The item to remove from the portfolio.
   */
  constructor(item) {
    this.item = item;
  }

  /**
   * Constructs a <code>PortfolioRemoveItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortfolioRemoveItemRequest} obj Optional instance to populate.
   * @return {module:model/PortfolioRemoveItemRequest} The populated <code>PortfolioRemoveItemRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PortfolioRemoveItemRequest();
      if (data.hasOwnProperty('item'))
        obj.item = ApiClient.convertToType(data['item'], 'String');
    }
    return obj;
  }
}

/**
 * The item to remove from the portfolio.
 * @member {String} item
 */
PortfolioRemoveItemRequest.prototype.item = undefined;

