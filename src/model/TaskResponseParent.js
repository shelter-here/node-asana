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
 * The TaskResponseParent model module.
 * @module model/TaskResponseParent
 * @version 2.0.1
 */
export class TaskResponseParent {
  /**
   * Constructs a new <code>TaskResponseParent</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. The *task* is the basic object around which many operations in Asana are centered.A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. The *task* is the basic object around which many operations in Asana are centered. The parent of this task, or &#x60;null&#x60; if this is not a subtask. This property cannot be modified using a PUT request but you can change it with the &#x60;setParent&#x60; endpoint. You can create subtasks by using the subtasks endpoint.
   * @alias module:model/TaskResponseParent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskResponseParent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskResponseParent} obj Optional instance to populate.
   * @return {module:model/TaskResponseParent} The populated <code>TaskResponseParent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskResponseParent();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TaskResponseParent.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TaskResponseParent.prototype.resource_type = undefined;

/**
 * The name of the task.
 * @member {String} name
 */
TaskResponseParent.prototype.name = undefined;

/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
TaskResponseParent.ResourceSubtypeEnum = {
  /**
   * value: "default_task"
   * @const
   */
  default_task: "default_task",

  /**
   * value: "milestone"
   * @const
   */
  milestone: "milestone",

  /**
   * value: "section"
   * @const
   */
  section: "section",

  /**
   * value: "approval"
   * @const
   */
  approval: "approval"
};
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 * @member {module:model/TaskResponseParent.ResourceSubtypeEnum} resource_subtype
 */
TaskResponseParent.prototype.resource_subtype = undefined;

