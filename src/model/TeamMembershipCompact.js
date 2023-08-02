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
import {ProjectTemplateBaseTeam} from './ProjectTemplateBaseTeam';

/**
 * The TeamMembershipCompact model module.
 * @module model/TeamMembershipCompact
 * @version 2.0.1
 */
export class TeamMembershipCompact {
  /**
   * Constructs a new <code>TeamMembershipCompact</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. This object represents a user&#x27;s connection to a team.
   * @alias module:model/TeamMembershipCompact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamMembershipCompact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamMembershipCompact} obj Optional instance to populate.
   * @return {module:model/TeamMembershipCompact} The populated <code>TeamMembershipCompact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamMembershipCompact();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = CustomFieldResponsePeopleValue.constructFromObject(data['user']);
      if (data.hasOwnProperty('team'))
        obj.team = ProjectTemplateBaseTeam.constructFromObject(data['team']);
      if (data.hasOwnProperty('is_guest'))
        obj.is_guest = ApiClient.convertToType(data['is_guest'], 'Boolean');
      if (data.hasOwnProperty('is_limited_access'))
        obj.is_limited_access = ApiClient.convertToType(data['is_limited_access'], 'Boolean');
      if (data.hasOwnProperty('is_admin'))
        obj.is_admin = ApiClient.convertToType(data['is_admin'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TeamMembershipCompact.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TeamMembershipCompact.prototype.resource_type = undefined;

/**
 * @member {module:model/CustomFieldResponsePeopleValue} user
 */
TeamMembershipCompact.prototype.user = undefined;

/**
 * @member {module:model/ProjectTemplateBaseTeam} team
 */
TeamMembershipCompact.prototype.team = undefined;

/**
 * Describes if the user is a guest in the team.
 * @member {Boolean} is_guest
 */
TeamMembershipCompact.prototype.is_guest = undefined;

/**
 * Describes if the user has limited access to the team.
 * @member {Boolean} is_limited_access
 */
TeamMembershipCompact.prototype.is_limited_access = undefined;

/**
 * Describes if the user is a team admin.
 * @member {Boolean} is_admin
 */
TeamMembershipCompact.prototype.is_admin = undefined;

