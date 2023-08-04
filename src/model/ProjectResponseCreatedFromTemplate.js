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
 * The ProjectResponseCreatedFromTemplate model module.
 * @module model/ProjectResponseCreatedFromTemplate
 * @version 2.0.2
 */
export class ProjectResponseCreatedFromTemplate {
  /**
   * Constructs a new <code>ProjectResponseCreatedFromTemplate</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *project template* is an object that allows new projects to be created with a predefined setup, which may include tasks, sections, Rules, etc. It simplifies the process of running a workflow that involves a similar set of work every time.A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *project template* is an object that allows new projects to be created with a predefined setup, which may include tasks, sections, Rules, etc. It simplifies the process of running a workflow that involves a similar set of work every time. [Opt In](/docs/inputoutput-options). The project template from which this project was created. If the project was not created from a template, this field will be null.
   * @alias module:model/ProjectResponseCreatedFromTemplate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectResponseCreatedFromTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectResponseCreatedFromTemplate} obj Optional instance to populate.
   * @return {module:model/ProjectResponseCreatedFromTemplate} The populated <code>ProjectResponseCreatedFromTemplate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectResponseCreatedFromTemplate();
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
ProjectResponseCreatedFromTemplate.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectResponseCreatedFromTemplate.prototype.resource_type = undefined;

/**
 * Name of the project template.
 * @member {String} name
 */
ProjectResponseCreatedFromTemplate.prototype.name = undefined;

