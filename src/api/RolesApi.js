/**
 * DocuSign Rooms API - v2
 * An API for an integrator to access the features of DocuSign Rooms
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/ApiError', 'model/Role', 'model/RoleForCreate', 'model/RoleForUpdate', 'model/RoleSummaryList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ApiError'), require('../model/Role'), require('../model/RoleForCreate'), require('../model/RoleForUpdate'), require('../model/RoleSummaryList'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.RolesApi = factory(root.DocusignRooms.Configuration, root.DocusignRooms.ApiClient, root.DocusignRooms.ApiError, root.DocusignRooms.Role, root.DocusignRooms.RoleForCreate, root.DocusignRooms.RoleForUpdate, root.DocusignRooms.RoleSummaryList);
  }
}(this, function(Configuration, ApiClient, ApiError, Role, RoleForCreate, RoleForUpdate, RoleSummaryList) {
  'use strict';

  /**
   * Roles service.
   * @module api/RolesApi
   */

  /**
   * Constructs a new RolesApi. 
   * @alias module:api/RolesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * (Optional) Callback function to receive the result of the createRole operation. If none specified a Promise will be returned.
     * @callback module:api/RolesApi~createRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Role} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a role.
     * Creates a new company role in Rooms
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/RoleForCreate} optsOrCallback.body Name and permission details of the role to be created
     * @param {module:api/RolesApi~createRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Role}
     */
    this.createRole = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createRole");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json', 'application/xml', 'text/xml', 'application/_*+xml'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Role;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/roles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteRole operation. If none specified a Promise will be returned.
     * @callback module:api/RolesApi~deleteRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the role with the given roleId.
     * Deletes a role from a company account in Rooms
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} roleId The id of the role.
     * @param {module:api/RolesApi~deleteRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRole = function(accountId, roleId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRole");
      }

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling deleteRole");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roleId': roleId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/roles/{roleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRole operation. If none specified a Promise will be returned.
     * @callback module:api/RolesApi~getRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Role} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get information about the role with the given roleId.
     * Get information about the role with the given roleId.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} roleId The id of the role.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Boolean} optsOrCallback.includeIsAssigned When set to true, the response includes the `isAssigned` property, which specifies whether the role is currently assigned to any users. The default is false. (default to false)
     * @param {module:api/RolesApi~getRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Role}
     */
    this.getRole = function(accountId, roleId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRole");
      }

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling getRole");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roleId': roleId
      };
      var queryParams = {
        'includeIsAssigned': optsOrCallback['includeIsAssigned']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Role;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/roles/{roleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRoles operation. If none specified a Promise will be returned.
     * @callback module:api/RolesApi~getRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoleSummaryList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a paged-list of roles in your company
     * Returns a list of roles associated with a company account
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Boolean} optsOrCallback.onlyAssignable Returns assignable roles based on calling user's company permissions.               DEPRECATED: Please use filterContext parameter to get the assignable roles. AssignableRolesBasedOnCompanyPermissions returns same results as onlyAssignable=true (default to false)
     * @param {module:model/String} optsOrCallback.filterContext Attribute establishing filter context for roles being returned - AllRoles, AssignableRolesBasedOnCompanyPermissions, AssignableRolesBasedOnAllPermissions
     * @param {String} optsOrCallback.filter A search filter that returns roles by the beginning of the role name. You can enter the beginning of the role name only to return all of the roles that begin with the text that you entered.
     * @param {Number} optsOrCallback.startPosition The starting zero-based index position of the result set. The default value is 0. (default to 0)
     * @param {Number} optsOrCallback.count The number of results to return. This value must be a number between `1` and `100` (default). (default to 100)
     * @param {module:api/RolesApi~getRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoleSummaryList}
     */
    this.getRoles = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRoles");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'onlyAssignable': optsOrCallback['onlyAssignable'],
        'filterContext': optsOrCallback['filterContext'],
        'filter': optsOrCallback['filter'],
        'startPosition': optsOrCallback['startPosition'],
        'count': optsOrCallback['count']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RoleSummaryList;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateRole operation. If none specified a Promise will be returned.
     * @callback module:api/RolesApi~updateRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Role} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the role with the given roleId.
     * Updates the role with the given roleId.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} roleId The id of the role.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/RoleForUpdate} optsOrCallback.body Name and permission details of the role to be updated
     * @param {module:api/RolesApi~updateRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Role}
     */
    this.updateRole = function(accountId, roleId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRole");
      }

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling updateRole");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roleId': roleId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json', 'application/xml', 'text/xml', 'application/_*+xml'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Role;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/roles/{roleId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));