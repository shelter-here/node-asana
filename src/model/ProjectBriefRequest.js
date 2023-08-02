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
 * The ProjectBriefRequest model module.
 * @module model/ProjectBriefRequest
 * @version 2.0.1
 */
export class ProjectBriefRequest {
  /**
   * Constructs a new <code>ProjectBriefRequest</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *Project Brief* allows you to explain the what and why of the project to your team.
   * @alias module:model/ProjectBriefRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectBriefRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectBriefRequest} obj Optional instance to populate.
   * @return {module:model/ProjectBriefRequest} The populated <code>ProjectBriefRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectBriefRequest();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('html_text'))
        obj.html_text = ApiClient.convertToType(data['html_text'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectBriefRequest.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectBriefRequest.prototype.resource_type = undefined;

/**
 * The title of the project brief.
 * @member {String} title
 */
ProjectBriefRequest.prototype.title = undefined;

/**
 * HTML formatted text for the project brief.
 * @member {String} html_text
 */
ProjectBriefRequest.prototype.html_text = undefined;

/**
 * The plain text of the project brief. When writing to a project brief, you can specify either `html_text` (preferred) or `text`, but not both.
 * @member {String} text
 */
ProjectBriefRequest.prototype.text = undefined;

