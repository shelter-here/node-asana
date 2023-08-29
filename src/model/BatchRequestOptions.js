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
 * The BatchRequestOptions model module.
 * @module model/BatchRequestOptions
 * @version 2.0.6
 */
export class BatchRequestOptions {
  /**
   * Constructs a new <code>BatchRequestOptions</code>.
   * Pagination (&#x60;limit&#x60; and &#x60;offset&#x60;) and output options (&#x60;fields&#x60; or &#x60;expand&#x60;) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
   * @alias module:model/BatchRequestOptions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BatchRequestOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchRequestOptions} obj Optional instance to populate.
   * @return {module:model/BatchRequestOptions} The populated <code>BatchRequestOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BatchRequestOptions();
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('fields'))
        obj.fields = ApiClient.convertToType(data['fields'], ['String']);
    }
    return obj;
  }
}

/**
 * Pagination limit for the request.
 * @member {Number} limit
 */
BatchRequestOptions.prototype.limit = undefined;

/**
 * Pagination offset for the request.
 * @member {Number} offset
 */
BatchRequestOptions.prototype.offset = undefined;

/**
 * The fields to retrieve in the request.
 * @member {Array.<String>} fields
 */
BatchRequestOptions.prototype.fields = undefined;

