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
 * The SectionTaskInsertRequest model module.
 * @module model/SectionTaskInsertRequest
 * @version 2.0.6
 */
export class SectionTaskInsertRequest {
  /**
   * Constructs a new <code>SectionTaskInsertRequest</code>.
   * @alias module:model/SectionTaskInsertRequest
   * @class
   * @param task {String} The task to add to this section.
   */
  constructor(task) {
    this.task = task;
  }

  /**
   * Constructs a <code>SectionTaskInsertRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SectionTaskInsertRequest} obj Optional instance to populate.
   * @return {module:model/SectionTaskInsertRequest} The populated <code>SectionTaskInsertRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SectionTaskInsertRequest();
      if (data.hasOwnProperty('task'))
        obj.task = ApiClient.convertToType(data['task'], 'String');
      if (data.hasOwnProperty('insert_before'))
        obj.insert_before = ApiClient.convertToType(data['insert_before'], 'String');
      if (data.hasOwnProperty('insert_after'))
        obj.insert_after = ApiClient.convertToType(data['insert_after'], 'String');
    }
    return obj;
  }
}

/**
 * The task to add to this section.
 * @member {String} task
 */
SectionTaskInsertRequest.prototype.task = undefined;

/**
 * An existing task within this section before which the added task should be inserted. Cannot be provided together with insert_after.
 * @member {String} insert_before
 */
SectionTaskInsertRequest.prototype.insert_before = undefined;

/**
 * An existing task within this section after which the added task should be inserted. Cannot be provided together with insert_before.
 * @member {String} insert_after
 */
SectionTaskInsertRequest.prototype.insert_after = undefined;

