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
import {NextPage} from './NextPage';
import {UserResponse} from './UserResponse';

/**
 * The UserResponseArray model module.
 * @module model/UserResponseArray
 * @version 2.0.1
 */
export class UserResponseArray {
  /**
   * Constructs a new <code>UserResponseArray</code>.
   * @alias module:model/UserResponseArray
   * @class
   * @param data {Array.<module:model/UserResponse>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>UserResponseArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserResponseArray} obj Optional instance to populate.
   * @return {module:model/UserResponseArray} The populated <code>UserResponseArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserResponseArray();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [UserResponse]);
      if (data.hasOwnProperty('next_page'))
        obj.next_page = NextPage.constructFromObject(data['next_page']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/UserResponse>} data
 */
UserResponseArray.prototype.data = undefined;

/**
 * @member {module:model/NextPage} next_page
 */
UserResponseArray.prototype.next_page = undefined;

