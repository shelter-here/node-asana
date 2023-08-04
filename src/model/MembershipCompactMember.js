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
 * The MembershipCompactMember model module.
 * @module model/MembershipCompactMember
 * @version 2.0.2
 */
export class MembershipCompactMember {
  /**
   * Constructs a new <code>MembershipCompactMember</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *member* object represents either a team or user.
   * @alias module:model/MembershipCompactMember
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MembershipCompactMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MembershipCompactMember} obj Optional instance to populate.
   * @return {module:model/MembershipCompactMember} The populated <code>MembershipCompactMember</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MembershipCompactMember();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
MembershipCompactMember.prototype.gid = undefined;

/**
 * The type of the member (team or user)
 * @member {String} resource_type
 */
MembershipCompactMember.prototype.resource_type = undefined;

/**
 * The name of the member
 * @member {String} name
 */
MembershipCompactMember.prototype.name = undefined;

