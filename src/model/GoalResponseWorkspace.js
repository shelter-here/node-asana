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
 * The GoalResponseWorkspace model module.
 * @module model/GoalResponseWorkspace
 * @version 2.0.2
 */
export class GoalResponseWorkspace {
  /**
   * Constructs a new <code>GoalResponseWorkspace</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
   * @alias module:model/GoalResponseWorkspace
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GoalResponseWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalResponseWorkspace} obj Optional instance to populate.
   * @return {module:model/GoalResponseWorkspace} The populated <code>GoalResponseWorkspace</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalResponseWorkspace();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
GoalResponseWorkspace.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
GoalResponseWorkspace.prototype.resource_type = undefined;

/**
 * The name of the workspace.
 * @member {String} name
 */
GoalResponseWorkspace.prototype.name = undefined;

