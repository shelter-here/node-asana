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
 * The EnumOptionBase model module.
 * @module model/EnumOptionBase
 * @version 2.0.2
 */
export class EnumOptionBase {
  /**
   * Constructs a new <code>EnumOptionBase</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. Enum options are the possible values which an enum custom field can adopt. An enum custom field must contain at least 1 enum option but no more than 500.  You can add enum options to a custom field by using the &#x60;POST /custom_fields/custom_field_gid/enum_options&#x60; endpoint.  **It is not possible to remove or delete an enum option**. Instead, enum options can be disabled by updating the &#x60;enabled&#x60; field to false with the &#x60;PUT /enum_options/enum_option_gid&#x60; endpoint. Other attributes can be updated similarly.  On creation of an enum option, &#x60;enabled&#x60; is always set to &#x60;true&#x60;, meaning the enum option is a selectable value for the custom field. Setting &#x60;enabled&#x3D;false&#x60; is equivalent to “trashing” the enum option in the Asana web app within the “Edit Fields” dialog. The enum option will no longer be selectable but, if the enum option value was previously set within a task, the task will retain the value.  Enum options are an ordered list and by default new enum options are inserted at the end. Ordering in relation to existing enum options can be specified on creation by using &#x60;insert_before&#x60; or &#x60;insert_after&#x60; to reference an existing enum option. Only one of &#x60;insert_before&#x60; and &#x60;insert_after&#x60; can be provided when creating a new enum option.  An enum options list can be reordered with the &#x60;POST /custom_fields/custom_field_gid/enum_options/insert&#x60; endpoint.
   * @alias module:model/EnumOptionBase
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EnumOptionBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnumOptionBase} obj Optional instance to populate.
   * @return {module:model/EnumOptionBase} The populated <code>EnumOptionBase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EnumOptionBase();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
EnumOptionBase.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
EnumOptionBase.prototype.resource_type = undefined;

/**
 * The name of the enum option.
 * @member {String} name
 */
EnumOptionBase.prototype.name = undefined;

/**
 * Whether or not the enum option is a selectable value for the custom field.
 * @member {Boolean} enabled
 */
EnumOptionBase.prototype.enabled = undefined;

/**
 * The color of the enum option. Defaults to ‘none’.
 * @member {String} color
 */
EnumOptionBase.prototype.color = undefined;

