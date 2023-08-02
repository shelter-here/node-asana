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
import {PortfolioResponseCustomFieldSettings} from './PortfolioResponseCustomFieldSettings';
import {PortfolioResponseCustomFields} from './PortfolioResponseCustomFields';
import {ProjectBaseCurrentStatus} from './ProjectBaseCurrentStatus';
import {ProjectBaseCurrentStatusUpdate} from './ProjectBaseCurrentStatusUpdate';
import {ProjectResponseCompletedBy} from './ProjectResponseCompletedBy';
import {ProjectResponseCreatedFromTemplate} from './ProjectResponseCreatedFromTemplate';
import {ProjectResponseProjectBrief} from './ProjectResponseProjectBrief';
import {ProjectResponseTeam} from './ProjectResponseTeam';
import {ProjectResponseWorkspace} from './ProjectResponseWorkspace';

/**
 * The ProjectResponse model module.
 * @module model/ProjectResponse
 * @version 2.0.1
 */
export class ProjectResponse {
  /**
   * Constructs a new <code>ProjectResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
   * @alias module:model/ProjectResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectResponse} obj Optional instance to populate.
   * @return {module:model/ProjectResponse} The populated <code>ProjectResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectResponse();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('archived'))
        obj.archived = ApiClient.convertToType(data['archived'], 'Boolean');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.created_at = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('current_status'))
        obj.current_status = ProjectBaseCurrentStatus.constructFromObject(data['current_status']);
      if (data.hasOwnProperty('current_status_update'))
        obj.current_status_update = ProjectBaseCurrentStatusUpdate.constructFromObject(data['current_status_update']);
      if (data.hasOwnProperty('custom_field_settings'))
        obj.custom_field_settings = ApiClient.convertToType(data['custom_field_settings'], [PortfolioResponseCustomFieldSettings]);
      if (data.hasOwnProperty('default_view'))
        obj.default_view = ApiClient.convertToType(data['default_view'], 'String');
      if (data.hasOwnProperty('due_date'))
        obj.due_date = ApiClient.convertToType(data['due_date'], 'Date');
      if (data.hasOwnProperty('due_on'))
        obj.due_on = ApiClient.convertToType(data['due_on'], 'Date');
      if (data.hasOwnProperty('html_notes'))
        obj.html_notes = ApiClient.convertToType(data['html_notes'], 'String');
      if (data.hasOwnProperty('members'))
        obj.members = ApiClient.convertToType(data['members'], [CustomFieldResponsePeopleValue]);
      if (data.hasOwnProperty('modified_at'))
        obj.modified_at = ApiClient.convertToType(data['modified_at'], 'Date');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], 'String');
      if (data.hasOwnProperty('public'))
        obj._public = ApiClient.convertToType(data['public'], 'Boolean');
      if (data.hasOwnProperty('start_on'))
        obj.start_on = ApiClient.convertToType(data['start_on'], 'Date');
      if (data.hasOwnProperty('custom_fields'))
        obj.custom_fields = ApiClient.convertToType(data['custom_fields'], [PortfolioResponseCustomFields]);
      if (data.hasOwnProperty('completed'))
        obj.completed = ApiClient.convertToType(data['completed'], 'Boolean');
      if (data.hasOwnProperty('completed_at'))
        obj.completed_at = ApiClient.convertToType(data['completed_at'], 'Date');
      if (data.hasOwnProperty('completed_by'))
        obj.completed_by = ProjectResponseCompletedBy.constructFromObject(data['completed_by']);
      if (data.hasOwnProperty('followers'))
        obj.followers = ApiClient.convertToType(data['followers'], [CustomFieldResponsePeopleValue]);
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], Object);
      if (data.hasOwnProperty('team'))
        obj.team = ProjectResponseTeam.constructFromObject(data['team']);
      if (data.hasOwnProperty('icon'))
        obj.icon = ApiClient.convertToType(data['icon'], 'String');
      if (data.hasOwnProperty('permalink_url'))
        obj.permalink_url = ApiClient.convertToType(data['permalink_url'], 'String');
      if (data.hasOwnProperty('project_brief'))
        obj.project_brief = ProjectResponseProjectBrief.constructFromObject(data['project_brief']);
      if (data.hasOwnProperty('created_from_template'))
        obj.created_from_template = ProjectResponseCreatedFromTemplate.constructFromObject(data['created_from_template']);
      if (data.hasOwnProperty('default_access_level'))
        obj.default_access_level = ApiClient.convertToType(data['default_access_level'], 'String');
      if (data.hasOwnProperty('workspace'))
        obj.workspace = ProjectResponseWorkspace.constructFromObject(data['workspace']);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectResponse.prototype.resource_type = undefined;

/**
 * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
ProjectResponse.prototype.name = undefined;

/**
 * True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
 * @member {Boolean} archived
 */
ProjectResponse.prototype.archived = undefined;

/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
ProjectResponse.ColorEnum = {
  /**
   * value: "dark-pink"
   * @const
   */
  dark_pink: "dark-pink",

  /**
   * value: "dark-green"
   * @const
   */
  dark_green: "dark-green",

  /**
   * value: "dark-blue"
   * @const
   */
  dark_blue: "dark-blue",

  /**
   * value: "dark-red"
   * @const
   */
  dark_red: "dark-red",

  /**
   * value: "dark-teal"
   * @const
   */
  dark_teal: "dark-teal",

  /**
   * value: "dark-brown"
   * @const
   */
  dark_brown: "dark-brown",

  /**
   * value: "dark-orange"
   * @const
   */
  dark_orange: "dark-orange",

  /**
   * value: "dark-purple"
   * @const
   */
  dark_purple: "dark-purple",

  /**
   * value: "dark-warm-gray"
   * @const
   */
  dark_warm_gray: "dark-warm-gray",

  /**
   * value: "light-pink"
   * @const
   */
  light_pink: "light-pink",

  /**
   * value: "light-green"
   * @const
   */
  light_green: "light-green",

  /**
   * value: "light-blue"
   * @const
   */
  light_blue: "light-blue",

  /**
   * value: "light-red"
   * @const
   */
  light_red: "light-red",

  /**
   * value: "light-teal"
   * @const
   */
  light_teal: "light-teal",

  /**
   * value: "light-brown"
   * @const
   */
  light_brown: "light-brown",

  /**
   * value: "light-orange"
   * @const
   */
  light_orange: "light-orange",

  /**
   * value: "light-purple"
   * @const
   */
  light_purple: "light-purple",

  /**
   * value: "light-warm-gray"
   * @const
   */
  light_warm_gray: "light-warm-gray",

  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "null"
   * @const
   */
  _null: "null"
};
/**
 * Color of the project.
 * @member {module:model/ProjectResponse.ColorEnum} color
 */
ProjectResponse.prototype.color = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
ProjectResponse.prototype.created_at = undefined;

/**
 * @member {module:model/ProjectBaseCurrentStatus} current_status
 */
ProjectResponse.prototype.current_status = undefined;

/**
 * @member {module:model/ProjectBaseCurrentStatusUpdate} current_status_update
 */
ProjectResponse.prototype.current_status_update = undefined;

/**
 * Array of Custom Field Settings (in compact form).
 * @member {Array.<module:model/PortfolioResponseCustomFieldSettings>} custom_field_settings
 */
ProjectResponse.prototype.custom_field_settings = undefined;

/**
 * Allowed values for the <code>default_view</code> property.
 * @enum {String}
 * @readonly
 */
ProjectResponse.DefaultViewEnum = {
  /**
   * value: "list"
   * @const
   */
  list: "list",

  /**
   * value: "board"
   * @const
   */
  board: "board",

  /**
   * value: "calendar"
   * @const
   */
  calendar: "calendar",

  /**
   * value: "timeline"
   * @const
   */
  timeline: "timeline"
};
/**
 * The default view (list, board, calendar, or timeline) of a project.
 * @member {module:model/ProjectResponse.DefaultViewEnum} default_view
 */
ProjectResponse.prototype.default_view = undefined;

/**
 * *Deprecated: new integrations should prefer the `due_on` field.*
 * @member {Date} due_date
 */
ProjectResponse.prototype.due_date = undefined;

/**
 * The day on which this project is due. This takes a date with format YYYY-MM-DD.
 * @member {Date} due_on
 */
ProjectResponse.prototype.due_on = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The notes of the project with formatting as HTML.
 * @member {String} html_notes
 */
ProjectResponse.prototype.html_notes = undefined;

/**
 * Array of users who are members of this project.
 * @member {Array.<module:model/CustomFieldResponsePeopleValue>} members
 */
ProjectResponse.prototype.members = undefined;

/**
 * The time at which this project was last modified. *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.*
 * @member {Date} modified_at
 */
ProjectResponse.prototype.modified_at = undefined;

/**
 * Free-form textual information associated with the project (ie., its description).
 * @member {String} notes
 */
ProjectResponse.prototype.notes = undefined;

/**
 * True if the project is public to its team.
 * @member {Boolean} _public
 */
ProjectResponse.prototype._public = undefined;

/**
 * The day on which work for this project begins, or null if the project has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*
 * @member {Date} start_on
 */
ProjectResponse.prototype.start_on = undefined;

/**
 * Array of Custom Fields.
 * @member {Array.<module:model/PortfolioResponseCustomFields>} custom_fields
 */
ProjectResponse.prototype.custom_fields = undefined;

/**
 * True if the project is currently marked complete, false if not.
 * @member {Boolean} completed
 */
ProjectResponse.prototype.completed = undefined;

/**
 * The time at which this project was completed, or null if the project is not completed.
 * @member {Date} completed_at
 */
ProjectResponse.prototype.completed_at = undefined;

/**
 * @member {module:model/ProjectResponseCompletedBy} completed_by
 */
ProjectResponse.prototype.completed_by = undefined;

/**
 * Array of users following this project. Followers are a subset of members who have opted in to receive \"tasks added\" notifications for a project.
 * @member {Array.<module:model/CustomFieldResponsePeopleValue>} followers
 */
ProjectResponse.prototype.followers = undefined;

/**
 * The current owner of the project, may be null.
 * @member {Object} owner
 */
ProjectResponse.prototype.owner = undefined;

/**
 * @member {module:model/ProjectResponseTeam} team
 */
ProjectResponse.prototype.team = undefined;

/**
 * Allowed values for the <code>icon</code> property.
 * @enum {String}
 * @readonly
 */
ProjectResponse.IconEnum = {
  /**
   * value: "list"
   * @const
   */
  list: "list",

  /**
   * value: "board"
   * @const
   */
  board: "board",

  /**
   * value: "timeline"
   * @const
   */
  timeline: "timeline",

  /**
   * value: "calendar"
   * @const
   */
  calendar: "calendar",

  /**
   * value: "rocket"
   * @const
   */
  rocket: "rocket",

  /**
   * value: "people"
   * @const
   */
  people: "people",

  /**
   * value: "graph"
   * @const
   */
  graph: "graph",

  /**
   * value: "star"
   * @const
   */
  star: "star",

  /**
   * value: "bug"
   * @const
   */
  bug: "bug",

  /**
   * value: "light_bulb"
   * @const
   */
  light_bulb: "light_bulb",

  /**
   * value: "globe"
   * @const
   */
  globe: "globe",

  /**
   * value: "gear"
   * @const
   */
  gear: "gear",

  /**
   * value: "notebook"
   * @const
   */
  notebook: "notebook",

  /**
   * value: "computer"
   * @const
   */
  computer: "computer",

  /**
   * value: "check"
   * @const
   */
  check: "check",

  /**
   * value: "target"
   * @const
   */
  target: "target",

  /**
   * value: "html"
   * @const
   */
  html: "html",

  /**
   * value: "megaphone"
   * @const
   */
  megaphone: "megaphone",

  /**
   * value: "chat_bubbles"
   * @const
   */
  chat_bubbles: "chat_bubbles",

  /**
   * value: "briefcase"
   * @const
   */
  briefcase: "briefcase",

  /**
   * value: "page_layout"
   * @const
   */
  page_layout: "page_layout",

  /**
   * value: "mountain_flag"
   * @const
   */
  mountain_flag: "mountain_flag",

  /**
   * value: "puzzle"
   * @const
   */
  puzzle: "puzzle",

  /**
   * value: "presentation"
   * @const
   */
  presentation: "presentation",

  /**
   * value: "line_and_symbols"
   * @const
   */
  line_and_symbols: "line_and_symbols",

  /**
   * value: "speed_dial"
   * @const
   */
  speed_dial: "speed_dial",

  /**
   * value: "ribbon"
   * @const
   */
  ribbon: "ribbon",

  /**
   * value: "shoe"
   * @const
   */
  shoe: "shoe",

  /**
   * value: "shopping_basket"
   * @const
   */
  shopping_basket: "shopping_basket",

  /**
   * value: "map"
   * @const
   */
  map: "map",

  /**
   * value: "ticket"
   * @const
   */
  ticket: "ticket",

  /**
   * value: "coins"
   * @const
   */
  coins: "coins"
};
/**
 * The icon for a project.
 * @member {module:model/ProjectResponse.IconEnum} icon
 */
ProjectResponse.prototype.icon = undefined;

/**
 * A url that points directly to the object within Asana.
 * @member {String} permalink_url
 */
ProjectResponse.prototype.permalink_url = undefined;

/**
 * @member {module:model/ProjectResponseProjectBrief} project_brief
 */
ProjectResponse.prototype.project_brief = undefined;

/**
 * @member {module:model/ProjectResponseCreatedFromTemplate} created_from_template
 */
ProjectResponse.prototype.created_from_template = undefined;

/**
 * Allowed values for the <code>default_access_level</code> property.
 * @enum {String}
 * @readonly
 */
ProjectResponse.DefaultAccessLevelEnum = {
  /**
   * value: "admin"
   * @const
   */
  admin: "admin",

  /**
   * value: "editor"
   * @const
   */
  editor: "editor",

  /**
   * value: "commenter"
   * @const
   */
  commenter: "commenter",

  /**
   * value: "viewer"
   * @const
   */
  viewer: "viewer"
};
/**
 * The default access users for users who join or are added as members to the project.
 * @member {module:model/ProjectResponse.DefaultAccessLevelEnum} default_access_level
 */
ProjectResponse.prototype.default_access_level = undefined;

/**
 * @member {module:model/ProjectResponseWorkspace} workspace
 */
ProjectResponse.prototype.workspace = undefined;

