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
 * The GoalResponseTimePeriod model module.
 * @module model/GoalResponseTimePeriod
 * @version 2.0.2
 */
export class GoalResponseTimePeriod {
  /**
   * Constructs a new <code>GoalResponseTimePeriod</code>.
   * A generic Asana Resource, containing a globally unique identifier.
   * @alias module:model/GoalResponseTimePeriod
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GoalResponseTimePeriod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalResponseTimePeriod} obj Optional instance to populate.
   * @return {module:model/GoalResponseTimePeriod} The populated <code>GoalResponseTimePeriod</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalResponseTimePeriod();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('end_on'))
        obj.end_on = ApiClient.convertToType(data['end_on'], 'String');
      if (data.hasOwnProperty('start_on'))
        obj.start_on = ApiClient.convertToType(data['start_on'], 'String');
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'String');
      if (data.hasOwnProperty('display_name'))
        obj.display_name = ApiClient.convertToType(data['display_name'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
GoalResponseTimePeriod.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
GoalResponseTimePeriod.prototype.resource_type = undefined;

/**
 * The localized end date of the time period in `YYYY-MM-DD` format.
 * @member {String} end_on
 */
GoalResponseTimePeriod.prototype.end_on = undefined;

/**
 * The localized start date of the time period in `YYYY-MM-DD` format.
 * @member {String} start_on
 */
GoalResponseTimePeriod.prototype.start_on = undefined;

/**
 * Allowed values for the <code>period</code> property.
 * @enum {String}
 * @readonly
 */
GoalResponseTimePeriod.PeriodEnum = {
  /**
   * value: "FY"
   * @const
   */
  FY: "FY",

  /**
   * value: "H1"
   * @const
   */
  H1: "H1",

  /**
   * value: "H2"
   * @const
   */
  H2: "H2",

  /**
   * value: "Q1"
   * @const
   */
  Q1: "Q1",

  /**
   * value: "Q2"
   * @const
   */
  Q2: "Q2",

  /**
   * value: "Q3"
   * @const
   */
  Q3: "Q3",

  /**
   * value: "Q4"
   * @const
   */
  Q4: "Q4"
};
/**
 * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.
 * @member {module:model/GoalResponseTimePeriod.PeriodEnum} period
 */
GoalResponseTimePeriod.prototype.period = undefined;

/**
 * A string representing the cadence code and the fiscal year.
 * @member {String} display_name
 */
GoalResponseTimePeriod.prototype.display_name = undefined;

