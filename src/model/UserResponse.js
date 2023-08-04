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
import {GoalResponseWorkspace} from './GoalResponseWorkspace';
import {UserBaseResponsePhoto} from './UserBaseResponsePhoto';

/**
 * The UserResponse model module.
 * @module model/UserResponse
 * @version 2.0.2
 */
export class UserResponse {
  /**
   * Constructs a new <code>UserResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
   * @alias module:model/UserResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UserResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserResponse} obj Optional instance to populate.
   * @return {module:model/UserResponse} The populated <code>UserResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserResponse();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('photo'))
        obj.photo = UserBaseResponsePhoto.constructFromObject(data['photo']);
      if (data.hasOwnProperty('workspaces'))
        obj.workspaces = ApiClient.convertToType(data['workspaces'], [GoalResponseWorkspace]);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
UserResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
UserResponse.prototype.resource_type = undefined;

/**
 * *Read-only except when same user as requester*. The user’s name.
 * @member {String} name
 */
UserResponse.prototype.name = undefined;

/**
 * The user's email address.
 * @member {String} email
 */
UserResponse.prototype.email = undefined;

/**
 * @member {module:model/UserBaseResponsePhoto} photo
 */
UserResponse.prototype.photo = undefined;

/**
 * Workspaces and organizations this user may access. Note\\: The API will only return workspaces and organizations that also contain the authenticated user.
 * @member {Array.<module:model/GoalResponseWorkspace>} workspaces
 */
UserResponse.prototype.workspaces = undefined;
