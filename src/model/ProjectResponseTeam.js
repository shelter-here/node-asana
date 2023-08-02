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
 * The ProjectResponseTeam model module.
 * @module model/ProjectResponseTeam
 * @version 2.0.1
 */
export class ProjectResponseTeam {
  /**
   * Constructs a new <code>ProjectResponseTeam</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team. The team that this project is shared with.
   * @alias module:model/ProjectResponseTeam
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectResponseTeam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectResponseTeam} obj Optional instance to populate.
   * @return {module:model/ProjectResponseTeam} The populated <code>ProjectResponseTeam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectResponseTeam();
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
ProjectResponseTeam.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectResponseTeam.prototype.resource_type = undefined;

/**
 * The name of the team.
 * @member {String} name
 */
ProjectResponseTeam.prototype.name = undefined;

