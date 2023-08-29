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
 * The TaskAddProjectRequest model module.
 * @module model/TaskAddProjectRequest
 * @version 2.0.6
 */
export class TaskAddProjectRequest {
  /**
   * Constructs a new <code>TaskAddProjectRequest</code>.
   * @alias module:model/TaskAddProjectRequest
   * @class
   * @param project {String} The project to add the task to.
   */
  constructor(project) {
    this.project = project;
  }

  /**
   * Constructs a <code>TaskAddProjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskAddProjectRequest} obj Optional instance to populate.
   * @return {module:model/TaskAddProjectRequest} The populated <code>TaskAddProjectRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskAddProjectRequest();
      if (data.hasOwnProperty('project'))
        obj.project = ApiClient.convertToType(data['project'], 'String');
      if (data.hasOwnProperty('insert_after'))
        obj.insert_after = ApiClient.convertToType(data['insert_after'], 'String');
      if (data.hasOwnProperty('insert_before'))
        obj.insert_before = ApiClient.convertToType(data['insert_before'], 'String');
      if (data.hasOwnProperty('section'))
        obj.section = ApiClient.convertToType(data['section'], 'String');
    }
    return obj;
  }
}

/**
 * The project to add the task to.
 * @member {String} project
 */
TaskAddProjectRequest.prototype.project = undefined;

/**
 * A task in the project to insert the task after, or `null` to insert at the beginning of the list.
 * @member {String} insert_after
 */
TaskAddProjectRequest.prototype.insert_after = undefined;

/**
 * A task in the project to insert the task before, or `null` to insert at the end of the list.
 * @member {String} insert_before
 */
TaskAddProjectRequest.prototype.insert_before = undefined;

/**
 * A section in the project to insert the task into. The task will be inserted at the bottom of the section.
 * @member {String} section
 */
TaskAddProjectRequest.prototype.section = undefined;

