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
import {TaskAddTagRequest} from './TaskAddTagRequest';

/**
 * The TaskGidAddTagBody model module.
 * @module model/TaskGidAddTagBody
 * @version 2.0.2
 */
export class TaskGidAddTagBody {
  /**
   * Constructs a new <code>TaskGidAddTagBody</code>.
   * @alias module:model/TaskGidAddTagBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskGidAddTagBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskGidAddTagBody} obj Optional instance to populate.
   * @return {module:model/TaskGidAddTagBody} The populated <code>TaskGidAddTagBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskGidAddTagBody();
      if (data.hasOwnProperty('data'))
        obj.data = TaskAddTagRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TaskAddTagRequest} data
 */
TaskGidAddTagBody.prototype.data = undefined;
