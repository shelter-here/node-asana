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
 * The CreateMembershipRequest model module.
 * @module model/CreateMembershipRequest
 * @version 2.0.2
 */
export class CreateMembershipRequest {
  /**
   * Constructs a new <code>CreateMembershipRequest</code>.
   * @alias module:model/CreateMembershipRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateMembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateMembershipRequest} obj Optional instance to populate.
   * @return {module:model/CreateMembershipRequest} The populated <code>CreateMembershipRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateMembershipRequest();
      if (data.hasOwnProperty('is_active'))
        obj.is_active = ApiClient.convertToType(data['is_active'], 'Boolean');
      if (data.hasOwnProperty('member'))
        obj.member = ApiClient.convertToType(data['member'], 'String');
      if (data.hasOwnProperty('parent'))
        obj.parent = ApiClient.convertToType(data['parent'], 'String');
    }
    return obj;
  }
}

/**
 * *Optional*. Denotes if a member is active. Applies to all memberships
 * @member {Boolean} is_active
 */
CreateMembershipRequest.prototype.is_active = undefined;

/**
 * The gid of the user or team
 * @member {String} member
 */
CreateMembershipRequest.prototype.member = undefined;

/**
 * The gid of the `goal`
 * @member {String} parent
 */
CreateMembershipRequest.prototype.parent = undefined;

