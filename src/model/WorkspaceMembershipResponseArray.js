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
import {WorkspaceMembershipResponse} from './WorkspaceMembershipResponse';

/**
 * The WorkspaceMembershipResponseArray model module.
 * @module model/WorkspaceMembershipResponseArray
 * @version 2.0.6
 */
export class WorkspaceMembershipResponseArray {
  /**
   * Constructs a new <code>WorkspaceMembershipResponseArray</code>.
   * @alias module:model/WorkspaceMembershipResponseArray
   * @class
   * @param data {Array.<module:model/WorkspaceMembershipResponse>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>WorkspaceMembershipResponseArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceMembershipResponseArray} obj Optional instance to populate.
   * @return {module:model/WorkspaceMembershipResponseArray} The populated <code>WorkspaceMembershipResponseArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkspaceMembershipResponseArray();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [WorkspaceMembershipResponse]);
      if (data.hasOwnProperty('next_page'))
        obj.next_page = NextPage.constructFromObject(data['next_page']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/WorkspaceMembershipResponse>} data
 */
WorkspaceMembershipResponseArray.prototype.data = undefined;

/**
 * @member {module:model/NextPage} next_page
 */
WorkspaceMembershipResponseArray.prototype.next_page = undefined;

