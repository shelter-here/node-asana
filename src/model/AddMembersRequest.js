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
 * The AddMembersRequest model module.
 * @module model/AddMembersRequest
 * @version 2.0.1
 */
export class AddMembersRequest {
  /**
   * Constructs a new <code>AddMembersRequest</code>.
   * @alias module:model/AddMembersRequest
   * @class
   * @param members {String} An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.
   */
  constructor(members) {
    this.members = members;
  }

  /**
   * Constructs a <code>AddMembersRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddMembersRequest} obj Optional instance to populate.
   * @return {module:model/AddMembersRequest} The populated <code>AddMembersRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddMembersRequest();
      if (data.hasOwnProperty('members'))
        obj.members = ApiClient.convertToType(data['members'], 'String');
    }
    return obj;
  }
}

/**
 * An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.
 * @member {String} members
 */
AddMembersRequest.prototype.members = undefined;

