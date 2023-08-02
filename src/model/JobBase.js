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
import {JobBaseNewProject} from './JobBaseNewProject';
import {JobBaseNewProjectTemplate} from './JobBaseNewProjectTemplate';
import {JobBaseNewTask} from './JobBaseNewTask';

/**
 * The JobBase model module.
 * @module model/JobBase
 * @version 2.0.1
 */
export class JobBase {
  /**
   * Constructs a new <code>JobBase</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *job* is an object representing a process that handles asynchronous work.
   * @alias module:model/JobBase
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>JobBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobBase} obj Optional instance to populate.
   * @return {module:model/JobBase} The populated <code>JobBase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new JobBase();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('new_project'))
        obj.new_project = JobBaseNewProject.constructFromObject(data['new_project']);
      if (data.hasOwnProperty('new_task'))
        obj.new_task = JobBaseNewTask.constructFromObject(data['new_task']);
      if (data.hasOwnProperty('new_project_template'))
        obj.new_project_template = JobBaseNewProjectTemplate.constructFromObject(data['new_project_template']);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
JobBase.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
JobBase.prototype.resource_type = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {String} resource_subtype
 */
JobBase.prototype.resource_subtype = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
JobBase.StatusEnum = {
  /**
   * value: "not_started"
   * @const
   */
  not_started: "not_started",

  /**
   * value: "in_progress"
   * @const
   */
  in_progress: "in_progress",

  /**
   * value: "succeeded"
   * @const
   */
  succeeded: "succeeded",

  /**
   * value: "failed"
   * @const
   */
  failed: "failed"
};
/**
 * The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`, or `failed`.
 * @member {module:model/JobBase.StatusEnum} status
 */
JobBase.prototype.status = undefined;

/**
 * @member {module:model/JobBaseNewProject} new_project
 */
JobBase.prototype.new_project = undefined;

/**
 * @member {module:model/JobBaseNewTask} new_task
 */
JobBase.prototype.new_task = undefined;

/**
 * @member {module:model/JobBaseNewProjectTemplate} new_project_template
 */
JobBase.prototype.new_project_template = undefined;

