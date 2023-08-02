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
import {ProjectMembershipCompact} from './ProjectMembershipCompact';

/**
 * The ProjectMembershipCompactArray model module.
 * @module model/ProjectMembershipCompactArray
 * @version 2.0.1
 */
export class ProjectMembershipCompactArray {
  /**
   * Constructs a new <code>ProjectMembershipCompactArray</code>.
   * @alias module:model/ProjectMembershipCompactArray
   * @class
   * @param data {Array.<module:model/ProjectMembershipCompact>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>ProjectMembershipCompactArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectMembershipCompactArray} obj Optional instance to populate.
   * @return {module:model/ProjectMembershipCompactArray} The populated <code>ProjectMembershipCompactArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectMembershipCompactArray();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [ProjectMembershipCompact]);
      if (data.hasOwnProperty('next_page'))
        obj.next_page = NextPage.constructFromObject(data['next_page']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ProjectMembershipCompact>} data
 */
ProjectMembershipCompactArray.prototype.data = undefined;

/**
 * @member {module:model/NextPage} next_page
 */
ProjectMembershipCompactArray.prototype.next_page = undefined;

