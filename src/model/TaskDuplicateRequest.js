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
 * The TaskDuplicateRequest model module.
 * @module model/TaskDuplicateRequest
 * @version 2.0.2
 */
export class TaskDuplicateRequest {
  /**
   * Constructs a new <code>TaskDuplicateRequest</code>.
   * @alias module:model/TaskDuplicateRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskDuplicateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskDuplicateRequest} obj Optional instance to populate.
   * @return {module:model/TaskDuplicateRequest} The populated <code>TaskDuplicateRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskDuplicateRequest();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('include'))
        obj.include = ApiClient.convertToType(data['include'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the new task.
 * @member {String} name
 */
TaskDuplicateRequest.prototype.name = undefined;

/**
 * A comma-separated list of fields that will be duplicated to the new task. ##### Fields - assignee - attachments - dates - dependencies - followers - notes - parent - projects - subtasks - tags
 * @member {String} include
 */
TaskDuplicateRequest.prototype.include = undefined;
