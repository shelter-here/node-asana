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
import {CustomFieldResponsePeopleValue} from './CustomFieldResponsePeopleValue';

/**
 * The Like model module.
 * @module model/Like
 * @version 2.0.2
 */
export class Like {
  /**
   * Constructs a new <code>Like</code>.
   * An object to represent a user&#x27;s like.
   * @alias module:model/Like
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Like</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Like} obj Optional instance to populate.
   * @return {module:model/Like} The populated <code>Like</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Like();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = CustomFieldResponsePeopleValue.constructFromObject(data['user']);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the object, as a string.
 * @member {String} gid
 */
Like.prototype.gid = undefined;

/**
 * @member {module:model/CustomFieldResponsePeopleValue} user
 */
Like.prototype.user = undefined;
