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
 * The ProjectResponseProjectBrief model module.
 * @module model/ProjectResponseProjectBrief
 * @version 2.0.2
 */
export class ProjectResponseProjectBrief {
  /**
   * Constructs a new <code>ProjectResponseProjectBrief</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *Project Brief* allows you to explain the what and why of the project to your team.A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *Project Brief* allows you to explain the what and why of the project to your team. [Opt In](/docs/inputoutput-options). The project brief associated with this project.
   * @alias module:model/ProjectResponseProjectBrief
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectResponseProjectBrief</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectResponseProjectBrief} obj Optional instance to populate.
   * @return {module:model/ProjectResponseProjectBrief} The populated <code>ProjectResponseProjectBrief</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectResponseProjectBrief();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectResponseProjectBrief.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectResponseProjectBrief.prototype.resource_type = undefined;

