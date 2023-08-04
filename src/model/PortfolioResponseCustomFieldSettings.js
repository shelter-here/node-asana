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
import {CustomFieldSettingResponseCustomField} from './CustomFieldSettingResponseCustomField';
import {CustomFieldSettingResponseParent} from './CustomFieldSettingResponseParent';
import {CustomFieldSettingResponseProject} from './CustomFieldSettingResponseProject';

/**
 * The PortfolioResponseCustomFieldSettings model module.
 * @module model/PortfolioResponseCustomFieldSettings
 * @version 2.0.2
 */
export class PortfolioResponseCustomFieldSettings {
  /**
   * Constructs a new <code>PortfolioResponseCustomFieldSettings</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
   * @alias module:model/PortfolioResponseCustomFieldSettings
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PortfolioResponseCustomFieldSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortfolioResponseCustomFieldSettings} obj Optional instance to populate.
   * @return {module:model/PortfolioResponseCustomFieldSettings} The populated <code>PortfolioResponseCustomFieldSettings</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PortfolioResponseCustomFieldSettings();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('project'))
        obj.project = CustomFieldSettingResponseProject.constructFromObject(data['project']);
      if (data.hasOwnProperty('is_important'))
        obj.is_important = ApiClient.convertToType(data['is_important'], 'Boolean');
      if (data.hasOwnProperty('parent'))
        obj.parent = CustomFieldSettingResponseParent.constructFromObject(data['parent']);
      if (data.hasOwnProperty('custom_field'))
        obj.custom_field = CustomFieldSettingResponseCustomField.constructFromObject(data['custom_field']);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
PortfolioResponseCustomFieldSettings.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
PortfolioResponseCustomFieldSettings.prototype.resource_type = undefined;

/**
 * @member {module:model/CustomFieldSettingResponseProject} project
 */
PortfolioResponseCustomFieldSettings.prototype.project = undefined;

/**
 * `is_important` is used in the Asana web application to determine if this custom field is displayed in the list/grid view of a project or portfolio.
 * @member {Boolean} is_important
 */
PortfolioResponseCustomFieldSettings.prototype.is_important = undefined;

/**
 * @member {module:model/CustomFieldSettingResponseParent} parent
 */
PortfolioResponseCustomFieldSettings.prototype.parent = undefined;

/**
 * @member {module:model/CustomFieldSettingResponseCustomField} custom_field
 */
PortfolioResponseCustomFieldSettings.prototype.custom_field = undefined;
