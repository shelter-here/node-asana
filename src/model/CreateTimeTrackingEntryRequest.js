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
 * The CreateTimeTrackingEntryRequest model module.
 * @module model/CreateTimeTrackingEntryRequest
 * @version 2.0.2
 */
export class CreateTimeTrackingEntryRequest {
  /**
   * Constructs a new <code>CreateTimeTrackingEntryRequest</code>.
   * @alias module:model/CreateTimeTrackingEntryRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateTimeTrackingEntryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTimeTrackingEntryRequest} obj Optional instance to populate.
   * @return {module:model/CreateTimeTrackingEntryRequest} The populated <code>CreateTimeTrackingEntryRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateTimeTrackingEntryRequest();
      if (data.hasOwnProperty('duration_minutes'))
        obj.duration_minutes = ApiClient.convertToType(data['duration_minutes'], 'Number');
      if (data.hasOwnProperty('entered_on'))
        obj.entered_on = ApiClient.convertToType(data['entered_on'], 'Date');
    }
    return obj;
  }
}

/**
 * Time in minutes tracked by the entry. Must be greater than 0
 * @member {Number} duration_minutes
 */
CreateTimeTrackingEntryRequest.prototype.duration_minutes = undefined;

/**
 * *Optional*. The day that this entry is logged on. Defaults to today if not specified
 * @member {Date} entered_on
 */
CreateTimeTrackingEntryRequest.prototype.entered_on = undefined;

