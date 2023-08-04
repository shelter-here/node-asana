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
 * The RemoveCustomFieldSettingRequest model module.
 * @module model/RemoveCustomFieldSettingRequest
 * @version 2.0.2
 */
export class RemoveCustomFieldSettingRequest {
  /**
   * Constructs a new <code>RemoveCustomFieldSettingRequest</code>.
   * @alias module:model/RemoveCustomFieldSettingRequest
   * @class
   * @param custom_field {String} The custom field to remove from this portfolio.
   */
  constructor(custom_field) {
    this.custom_field = custom_field;
  }

  /**
   * Constructs a <code>RemoveCustomFieldSettingRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveCustomFieldSettingRequest} obj Optional instance to populate.
   * @return {module:model/RemoveCustomFieldSettingRequest} The populated <code>RemoveCustomFieldSettingRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RemoveCustomFieldSettingRequest();
      if (data.hasOwnProperty('custom_field'))
        obj.custom_field = ApiClient.convertToType(data['custom_field'], 'String');
    }
    return obj;
  }
}

/**
 * The custom field to remove from this portfolio.
 * @member {String} custom_field
 */
RemoveCustomFieldSettingRequest.prototype.custom_field = undefined;

