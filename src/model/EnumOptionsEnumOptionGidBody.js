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
import {EnumOptionBase} from './EnumOptionBase';

/**
 * The EnumOptionsEnumOptionGidBody model module.
 * @module model/EnumOptionsEnumOptionGidBody
 * @version 2.0.2
 */
export class EnumOptionsEnumOptionGidBody {
  /**
   * Constructs a new <code>EnumOptionsEnumOptionGidBody</code>.
   * @alias module:model/EnumOptionsEnumOptionGidBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EnumOptionsEnumOptionGidBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnumOptionsEnumOptionGidBody} obj Optional instance to populate.
   * @return {module:model/EnumOptionsEnumOptionGidBody} The populated <code>EnumOptionsEnumOptionGidBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EnumOptionsEnumOptionGidBody();
      if (data.hasOwnProperty('data'))
        obj.data = EnumOptionBase.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/EnumOptionBase} data
 */
EnumOptionsEnumOptionGidBody.prototype.data = undefined;

