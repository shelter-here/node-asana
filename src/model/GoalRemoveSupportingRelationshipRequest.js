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
 * The GoalRemoveSupportingRelationshipRequest model module.
 * @module model/GoalRemoveSupportingRelationshipRequest
 * @version 2.0.1
 */
export class GoalRemoveSupportingRelationshipRequest {
  /**
   * Constructs a new <code>GoalRemoveSupportingRelationshipRequest</code>.
   * @alias module:model/GoalRemoveSupportingRelationshipRequest
   * @class
   * @param supporting_resource {String} The gid of the supporting resource to remove from the parent goal. Must be the gid of a goal, project, or portfolio.
   */
  constructor(supporting_resource) {
    this.supporting_resource = supporting_resource;
  }

  /**
   * Constructs a <code>GoalRemoveSupportingRelationshipRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalRemoveSupportingRelationshipRequest} obj Optional instance to populate.
   * @return {module:model/GoalRemoveSupportingRelationshipRequest} The populated <code>GoalRemoveSupportingRelationshipRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalRemoveSupportingRelationshipRequest();
      if (data.hasOwnProperty('supporting_resource'))
        obj.supporting_resource = ApiClient.convertToType(data['supporting_resource'], 'String');
    }
    return obj;
  }
}

/**
 * The gid of the supporting resource to remove from the parent goal. Must be the gid of a goal, project, or portfolio.
 * @member {String} supporting_resource
 */
GoalRemoveSupportingRelationshipRequest.prototype.supporting_resource = undefined;

