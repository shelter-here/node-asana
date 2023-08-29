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
 * The ModifyDependenciesRequest model module.
 * @module model/ModifyDependenciesRequest
 * @version 2.0.6
 */
export class ModifyDependenciesRequest {
  /**
   * Constructs a new <code>ModifyDependenciesRequest</code>.
   * @alias module:model/ModifyDependenciesRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModifyDependenciesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModifyDependenciesRequest} obj Optional instance to populate.
   * @return {module:model/ModifyDependenciesRequest} The populated <code>ModifyDependenciesRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModifyDependenciesRequest();
      if (data.hasOwnProperty('dependencies'))
        obj.dependencies = ApiClient.convertToType(data['dependencies'], ['String']);
    }
    return obj;
  }
}

/**
 * An array of task gids that a task depends on.
 * @member {Array.<String>} dependencies
 */
ModifyDependenciesRequest.prototype.dependencies = undefined;

