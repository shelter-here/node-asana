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
import {CustomFieldSettingResponse} from './CustomFieldSettingResponse';

/**
 * The CustomFieldSettingResponseData model module.
 * @module model/CustomFieldSettingResponseData
 * @version 2.0.6
 */
export class CustomFieldSettingResponseData {
  /**
   * Constructs a new <code>CustomFieldSettingResponseData</code>.
   * @alias module:model/CustomFieldSettingResponseData
   * @class
   * @param data {module:model/CustomFieldSettingResponse} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CustomFieldSettingResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomFieldSettingResponseData} obj Optional instance to populate.
   * @return {module:model/CustomFieldSettingResponseData} The populated <code>CustomFieldSettingResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomFieldSettingResponseData();
      if (data.hasOwnProperty('data'))
        obj.data = CustomFieldSettingResponse.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CustomFieldSettingResponse} data
 */
CustomFieldSettingResponseData.prototype.data = undefined;

