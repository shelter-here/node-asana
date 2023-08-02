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
 * The SectionRequest model module.
 * @module model/SectionRequest
 * @version 2.0.1
 */
export class SectionRequest {
  /**
   * Constructs a new <code>SectionRequest</code>.
   * @alias module:model/SectionRequest
   * @class
   * @param name {String} The text to be displayed as the section name. This cannot be an empty string.
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>SectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SectionRequest} obj Optional instance to populate.
   * @return {module:model/SectionRequest} The populated <code>SectionRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SectionRequest();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('insert_before'))
        obj.insert_before = ApiClient.convertToType(data['insert_before'], 'String');
      if (data.hasOwnProperty('insert_after'))
        obj.insert_after = ApiClient.convertToType(data['insert_after'], 'String');
    }
    return obj;
  }
}

/**
 * The text to be displayed as the section name. This cannot be an empty string.
 * @member {String} name
 */
SectionRequest.prototype.name = undefined;

/**
 * An existing section within this project before which the added section should be inserted. Cannot be provided together with insert_after.
 * @member {String} insert_before
 */
SectionRequest.prototype.insert_before = undefined;

/**
 * An existing section within this project after which the added section should be inserted. Cannot be provided together with insert_before.
 * @member {String} insert_after
 */
SectionRequest.prototype.insert_after = undefined;

