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
 * The AllOfProjectResponseOwner model module.
 * @module model/AllOfProjectResponseOwner
 * @version 2.0.1
 */
export class AllOfProjectResponseOwner {
  /**
   * Constructs a new <code>AllOfProjectResponseOwner</code>.
   * The current owner of the project, may be null.
   * @alias module:model/AllOfProjectResponseOwner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AllOfProjectResponseOwner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfProjectResponseOwner} obj Optional instance to populate.
   * @return {module:model/AllOfProjectResponseOwner} The populated <code>AllOfProjectResponseOwner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfProjectResponseOwner();
    }
    return obj;
  }
}
