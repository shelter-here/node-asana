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
 * The BatchResponse model module.
 * @module model/BatchResponse
 * @version 2.0.2
 */
export class BatchResponse {
  /**
   * Constructs a new <code>BatchResponse</code>.
   * A response object returned from a batch request.
   * @alias module:model/BatchResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchResponse} obj Optional instance to populate.
   * @return {module:model/BatchResponse} The populated <code>BatchResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BatchResponse();
      if (data.hasOwnProperty('status_code'))
        obj.status_code = ApiClient.convertToType(data['status_code'], 'Number');
      if (data.hasOwnProperty('headers'))
        obj.headers = ApiClient.convertToType(data['headers'], Object);
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], Object);
    }
    return obj;
  }
}

/**
 * The HTTP status code that the invoked endpoint returned.
 * @member {Number} status_code
 */
BatchResponse.prototype.status_code = undefined;

/**
 * A map of HTTP headers specific to this result. This is primarily used for returning a `Location` header to accompany a `201 Created` result.  The parent HTTP response will contain all common headers.
 * @member {Object} headers
 */
BatchResponse.prototype.headers = undefined;

/**
 * The JSON body that the invoked endpoint returned.
 * @member {Object} body
 */
BatchResponse.prototype.body = undefined;
