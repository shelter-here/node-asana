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
import {GoalResponseWorkspace} from './GoalResponseWorkspace';
import {WorkspaceMembershipResponseUserTaskList} from './WorkspaceMembershipResponseUserTaskList';
import {WorkspaceMembershipResponseVacationDates} from './WorkspaceMembershipResponseVacationDates';

/**
 * The WorkspaceMembershipResponse model module.
 * @module model/WorkspaceMembershipResponse
 * @version 2.0.2
 */
export class WorkspaceMembershipResponse {
  /**
   * Constructs a new <code>WorkspaceMembershipResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. This object determines if a user is a member of a workspace.
   * @alias module:model/WorkspaceMembershipResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>WorkspaceMembershipResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceMembershipResponse} obj Optional instance to populate.
   * @return {module:model/WorkspaceMembershipResponse} The populated <code>WorkspaceMembershipResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkspaceMembershipResponse();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = CustomFieldResponsePeopleValue.constructFromObject(data['user']);
      if (data.hasOwnProperty('workspace'))
        obj.workspace = GoalResponseWorkspace.constructFromObject(data['workspace']);
      if (data.hasOwnProperty('user_task_list'))
        obj.user_task_list = WorkspaceMembershipResponseUserTaskList.constructFromObject(data['user_task_list']);
      if (data.hasOwnProperty('is_active'))
        obj.is_active = ApiClient.convertToType(data['is_active'], 'Boolean');
      if (data.hasOwnProperty('is_admin'))
        obj.is_admin = ApiClient.convertToType(data['is_admin'], 'Boolean');
      if (data.hasOwnProperty('is_guest'))
        obj.is_guest = ApiClient.convertToType(data['is_guest'], 'Boolean');
      if (data.hasOwnProperty('vacation_dates'))
        obj.vacation_dates = WorkspaceMembershipResponseVacationDates.constructFromObject(data['vacation_dates']);
      if (data.hasOwnProperty('created_at'))
        obj.created_at = ApiClient.convertToType(data['created_at'], 'Date');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
WorkspaceMembershipResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
WorkspaceMembershipResponse.prototype.resource_type = undefined;

/**
 * @member {module:model/CustomFieldResponsePeopleValue} user
 */
WorkspaceMembershipResponse.prototype.user = undefined;

/**
 * @member {module:model/GoalResponseWorkspace} workspace
 */
WorkspaceMembershipResponse.prototype.workspace = undefined;

/**
 * @member {module:model/WorkspaceMembershipResponseUserTaskList} user_task_list
 */
WorkspaceMembershipResponse.prototype.user_task_list = undefined;

/**
 * Reflects if this user still a member of the workspace.
 * @member {Boolean} is_active
 */
WorkspaceMembershipResponse.prototype.is_active = undefined;

/**
 * Reflects if this user is an admin of the workspace.
 * @member {Boolean} is_admin
 */
WorkspaceMembershipResponse.prototype.is_admin = undefined;

/**
 * Reflects if this user is a guest of the workspace.
 * @member {Boolean} is_guest
 */
WorkspaceMembershipResponse.prototype.is_guest = undefined;

/**
 * @member {module:model/WorkspaceMembershipResponseVacationDates} vacation_dates
 */
WorkspaceMembershipResponse.prototype.vacation_dates = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
WorkspaceMembershipResponse.prototype.created_at = undefined;

