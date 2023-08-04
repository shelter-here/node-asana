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
 * The AttachmentRequest model module.
 * @module model/AttachmentRequest
 * @version 2.0.2
 */
export class AttachmentRequest {
  /**
   * Constructs a new <code>AttachmentRequest</code>.
   * @alias module:model/AttachmentRequest
   * @class
   * @param parent {String} Required identifier of the parent task, project, or project_brief, as a string. 
   */
  constructor(parent) {
    this.parent = parent;
  }

  /**
   * Constructs a <code>AttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachmentRequest} obj Optional instance to populate.
   * @return {module:model/AttachmentRequest} The populated <code>AttachmentRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttachmentRequest();
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('file'))
        obj.file = ApiClient.convertToType(data['file'], 'Blob');
      if (data.hasOwnProperty('parent'))
        obj.parent = ApiClient.convertToType(data['parent'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('connect_to_app'))
        obj.connect_to_app = ApiClient.convertToType(data['connect_to_app'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
AttachmentRequest.ResourceSubtypeEnum = {
  /**
   * value: "asana"
   * @const
   */
  asana: "asana",

  /**
   * value: "dropbox"
   * @const
   */
  dropbox: "dropbox",

  /**
   * value: "gdrive"
   * @const
   */
  gdrive: "gdrive",

  /**
   * value: "onedrive"
   * @const
   */
  onedrive: "onedrive",

  /**
   * value: "box"
   * @const
   */
  box: "box",

  /**
   * value: "vimeo"
   * @const
   */
  vimeo: "vimeo",

  /**
   * value: "external"
   * @const
   */
  external: "external"
};
/**
 * The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided. 
 * @member {module:model/AttachmentRequest.ResourceSubtypeEnum} resource_subtype
 */
AttachmentRequest.prototype.resource_subtype = undefined;

/**
 * Required for `asana` attachments. 
 * @member {Blob} file
 */
AttachmentRequest.prototype.file = undefined;

/**
 * Required identifier of the parent task, project, or project_brief, as a string. 
 * @member {String} parent
 */
AttachmentRequest.prototype.parent = undefined;

/**
 * The URL of the external resource being attached. Required for attachments of type `external`. 
 * @member {String} url
 */
AttachmentRequest.prototype.url = undefined;

/**
 * The name of the external resource being attached. Required for attachments of type `external`. 
 * @member {String} name
 */
AttachmentRequest.prototype.name = undefined;

/**
 * *Optional*. Only relevant for external attachments with a parent task. A boolean indicating whether the current app should be connected with the attachment for the purposes of showing an app components widget. Requires the app to have been added to a project the parent task is in. 
 * @member {Boolean} connect_to_app
 */
AttachmentRequest.prototype.connect_to_app = undefined;

