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
import {ApiClient} from "../ApiClient";
import {CustomFieldSettingResponseArray} from '../model/CustomFieldSettingResponseArray';
import {ErrorResponse} from '../model/ErrorResponse';

/**
* CustomFieldSettings service.
* @module api/CustomFieldSettingsApi
* @version 2.0.1
*/
export class CustomFieldSettingsApi {

    /**
    * Constructs a new CustomFieldSettingsApi. 
    * @alias module:api/CustomFieldSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getCustomFieldSettingsForPortfolio operation.
     * @callback moduleapi/CustomFieldSettingsApi~getCustomFieldSettingsForPortfolioCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFieldSettingResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a portfolio&#x27;s custom fields
     * Returns a list of all of the custom fields settings on a portfolio, in compact form.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/CustomFieldSettingsApi~getCustomFieldSettingsForPortfolioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCustomFieldSettingsForPortfolio(portfolio_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'portfolio_gid' is set
      if (portfolio_gid === undefined || portfolio_gid === null) {
        throw new Error("Missing the required parameter 'portfolio_gid' when calling getCustomFieldSettingsForPortfolio");
      }

      let pathParams = {
        'portfolio_gid': portfolio_gid
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = CustomFieldSettingResponseArray;

      return this.apiClient.callApi(
        '/portfolios/{portfolio_gid}/custom_field_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCustomFieldSettingsForProject operation.
     * @callback moduleapi/CustomFieldSettingsApi~getCustomFieldSettingsForProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFieldSettingResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project&#x27;s custom fields
     * Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, &#x60;opt_fields&#x60; can be used to include more data than is returned in the compact representation. See the [documentation for input/output options](https://developers.asana.com/docs/inputoutput-options) for more information.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/CustomFieldSettingsApi~getCustomFieldSettingsForProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCustomFieldSettingsForProject(project_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'project_gid' is set
      if (project_gid === undefined || project_gid === null) {
        throw new Error("Missing the required parameter 'project_gid' when calling getCustomFieldSettingsForProject");
      }

      let pathParams = {
        'project_gid': project_gid
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = CustomFieldSettingResponseArray;

      return this.apiClient.callApi(
        '/projects/{project_gid}/custom_field_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}