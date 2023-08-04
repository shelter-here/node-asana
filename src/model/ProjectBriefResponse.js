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
import {ProjectBriefResponseProject} from './ProjectBriefResponseProject';

/**
 * The ProjectBriefResponse model module.
 * @module model/ProjectBriefResponse
 * @version 2.0.2
 */
export class ProjectBriefResponse {
  /**
   * Constructs a new <code>ProjectBriefResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *Project Brief* allows you to explain the what and why of the project to your team.
   * @alias module:model/ProjectBriefResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectBriefResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectBriefResponse} obj Optional instance to populate.
   * @return {module:model/ProjectBriefResponse} The populated <code>ProjectBriefResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectBriefResponse();
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
      if (data.hasOwnProperty('permalink_url'))
        obj.permalink_url = ApiClient.convertToType(data['permalink_url'], 'String');
      if (data.hasOwnProperty('project'))
        obj.project = ProjectBriefResponseProject.constructFromObject(data['project']);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectBriefResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectBriefResponse.prototype.resource_type = undefined;

/**
 * The title of the project brief.
 * @member {String} title
 */
ProjectBriefResponse.prototype.title = undefined;

/**
 * HTML formatted text for the project brief.
 * @member {String} html_text
 */
ProjectBriefResponse.prototype.html_text = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The plain text of the project brief.
 * @member {String} text
 */
ProjectBriefResponse.prototype.text = undefined;

/**
 * A url that points directly to the object within Asana.
 * @member {String} permalink_url
 */
ProjectBriefResponse.prototype.permalink_url = undefined;

/**
 * @member {module:model/ProjectBriefResponseProject} project
 */
ProjectBriefResponse.prototype.project = undefined;

