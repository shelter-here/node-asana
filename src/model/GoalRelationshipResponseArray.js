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
import {GoalRelationshipResponse} from './GoalRelationshipResponse';
import {NextPage} from './NextPage';

/**
 * The GoalRelationshipResponseArray model module.
 * @module model/GoalRelationshipResponseArray
 * @version 2.0.1
 */
export class GoalRelationshipResponseArray {
  /**
   * Constructs a new <code>GoalRelationshipResponseArray</code>.
   * @alias module:model/GoalRelationshipResponseArray
   * @class
   * @param data {Array.<module:model/GoalRelationshipResponse>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>GoalRelationshipResponseArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalRelationshipResponseArray} obj Optional instance to populate.
   * @return {module:model/GoalRelationshipResponseArray} The populated <code>GoalRelationshipResponseArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalRelationshipResponseArray();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [GoalRelationshipResponse]);
      if (data.hasOwnProperty('next_page'))
        obj.next_page = NextPage.constructFromObject(data['next_page']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/GoalRelationshipResponse>} data
 */
GoalRelationshipResponseArray.prototype.data = undefined;

/**
 * @member {module:model/NextPage} next_page
 */
GoalRelationshipResponseArray.prototype.next_page = undefined;

