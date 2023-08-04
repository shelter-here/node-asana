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
 * The ProjectSectionInsertRequest model module.
 * @module model/ProjectSectionInsertRequest
 * @version 2.0.2
 */
export class ProjectSectionInsertRequest {
  /**
   * Constructs a new <code>ProjectSectionInsertRequest</code>.
   * @alias module:model/ProjectSectionInsertRequest
   * @class
   * @param section {String} The section to reorder.
   */
  constructor(section) {
    this.section = section;
  }

  /**
   * Constructs a <code>ProjectSectionInsertRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectSectionInsertRequest} obj Optional instance to populate.
   * @return {module:model/ProjectSectionInsertRequest} The populated <code>ProjectSectionInsertRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectSectionInsertRequest();
      if (data.hasOwnProperty('section'))
        obj.section = ApiClient.convertToType(data['section'], 'String');
      if (data.hasOwnProperty('before_section'))
        obj.before_section = ApiClient.convertToType(data['before_section'], 'String');
      if (data.hasOwnProperty('after_section'))
        obj.after_section = ApiClient.convertToType(data['after_section'], 'String');
    }
    return obj;
  }
}

/**
 * The section to reorder.
 * @member {String} section
 */
ProjectSectionInsertRequest.prototype.section = undefined;

/**
 * Insert the given section immediately before the section specified by this parameter.
 * @member {String} before_section
 */
ProjectSectionInsertRequest.prototype.before_section = undefined;

/**
 * Insert the given section immediately after the section specified by this parameter.
 * @member {String} after_section
 */
ProjectSectionInsertRequest.prototype.after_section = undefined;

