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
import {EmptyResponseData} from '../model/EmptyResponseData';
import {ErrorResponse} from '../model/ErrorResponse';
import {UserBaseResponseData} from '../model/UserBaseResponseData';
import {WorkspaceGidAddUserBody} from '../model/WorkspaceGidAddUserBody';
import {WorkspaceGidRemoveUserBody} from '../model/WorkspaceGidRemoveUserBody';
import {WorkspaceResponseArray} from '../model/WorkspaceResponseArray';
import {WorkspaceResponseData} from '../model/WorkspaceResponseData';
import {WorkspacesWorkspaceGidBody} from '../model/WorkspacesWorkspaceGidBody';

/**
* Workspaces service.
* @module api/WorkspacesApi
* @version 2.0.1
*/
export class WorkspacesApi {

    /**
    * Constructs a new WorkspacesApi. 
    * @alias module:api/WorkspacesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addUserForWorkspace operation.
     * @callback moduleapi/WorkspacesApi~addUserForWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserBaseResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a user to a workspace or organization
     * Add a user to a workspace or organization. The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.
     * @param {module:model/WorkspaceGidAddUserBody} body The user to add to the workspace.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/WorkspacesApi~addUserForWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addUserForWorkspace(body, workspace_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addUserForWorkspace");
      }
      // verify the required parameter 'workspace_gid' is set
      if (workspace_gid === undefined || workspace_gid === null) {
        throw new Error("Missing the required parameter 'workspace_gid' when calling addUserForWorkspace");
      }

      let pathParams = {
        'workspace_gid': workspace_gid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = UserBaseResponseData;

      return this.apiClient.callApi(
        '/workspaces/{workspace_gid}/addUser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getWorkspace operation.
     * @callback moduleapi/WorkspacesApi~getWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkspaceResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a workspace
     * Returns the full workspace record for a single workspace.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/WorkspacesApi~getWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getWorkspace(workspace_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'workspace_gid' is set
      if (workspace_gid === undefined || workspace_gid === null) {
        throw new Error("Missing the required parameter 'workspace_gid' when calling getWorkspace");
      }

      let pathParams = {
        'workspace_gid': workspace_gid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = WorkspaceResponseData;

      return this.apiClient.callApi(
        '/workspaces/{workspace_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getWorkspaces operation.
     * @callback moduleapi/WorkspacesApi~getWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkspaceResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get multiple workspaces
     * Returns the compact records for all workspaces visible to the authorized user.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/WorkspacesApi~getWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getWorkspaces(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
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
      let returnType = WorkspaceResponseArray;

      return this.apiClient.callApi(
        '/workspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the removeUserForWorkspace operation.
     * @callback moduleapi/WorkspacesApi~removeUserForWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a user from a workspace or organization
     * Remove a user from a workspace or organization. The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address. Returns an empty data record.
     * @param {module:model/WorkspaceGidRemoveUserBody} body The user to remove from the workspace.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {module:api/WorkspacesApi~removeUserForWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    removeUserForWorkspace(body, workspace_gid, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling removeUserForWorkspace");
      }
      // verify the required parameter 'workspace_gid' is set
      if (workspace_gid === undefined || workspace_gid === null) {
        throw new Error("Missing the required parameter 'workspace_gid' when calling removeUserForWorkspace");
      }

      let pathParams = {
        'workspace_gid': workspace_gid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = EmptyResponseData;

      return this.apiClient.callApi(
        '/workspaces/{workspace_gid}/removeUser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateWorkspace operation.
     * @callback moduleapi/WorkspacesApi~updateWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkspaceResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a workspace
     * A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged. Currently the only field that can be modified for a workspace is its name. Returns the complete, updated workspace record.
     * @param {module:model/WorkspacesWorkspaceGidBody} body The workspace object with all updated properties.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/WorkspacesApi~updateWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateWorkspace(body, workspace_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWorkspace");
      }
      // verify the required parameter 'workspace_gid' is set
      if (workspace_gid === undefined || workspace_gid === null) {
        throw new Error("Missing the required parameter 'workspace_gid' when calling updateWorkspace");
      }

      let pathParams = {
        'workspace_gid': workspace_gid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = WorkspaceResponseData;

      return this.apiClient.callApi(
        '/workspaces/{workspace_gid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}