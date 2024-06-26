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
	define(['Configuration', 'ApiClient', 'model/ApiError', 'model/DesignatedOffice', 'model/DesignatedRegion', 'model/LockedOutDetails', 'model/User', 'model/UserForUpdate', 'model/UserSummaryList', 'model/UserToInvite'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ApiError'), require('../model/DesignatedOffice'), require('../model/DesignatedRegion'), require('../model/LockedOutDetails'), require('../model/User'), require('../model/UserForUpdate'), require('../model/UserSummaryList'), require('../model/UserToInvite'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.UsersApi = factory(root.DocusignRooms.Configuration, root.DocusignRooms.ApiClient, root.DocusignRooms.ApiError, root.DocusignRooms.DesignatedOffice, root.DocusignRooms.DesignatedRegion, root.DocusignRooms.LockedOutDetails, root.DocusignRooms.User, root.DocusignRooms.UserForUpdate, root.DocusignRooms.UserSummaryList, root.DocusignRooms.UserToInvite);
  }
}(this, function(Configuration, ApiClient, ApiError, DesignatedOffice, DesignatedRegion, LockedOutDetails, User, UserForUpdate, UserSummaryList, UserToInvite) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
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
     * (Optional) Callback function to receive the result of the addUserToOffice operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~addUserToOfficeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds the user to the designated office.
     * Adds the user to the designated office.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} userId The id of the user.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DesignatedOffice} optsOrCallback.body Details of the office that the user will be added to
     * @param {module:api/UsersApi~addUserToOfficeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addUserToOffice = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling addUserToOffice");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addUserToOffice");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/add_to_office', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the addUserToRegion operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~addUserToRegionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds the user to the designated region.
     * Adds the user to the designated region.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} userId The id of the user.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DesignatedRegion} optsOrCallback.body Region that given user will be added to
     * @param {module:api/UsersApi~addUserToRegionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addUserToRegion = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling addUserToRegion");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addUserToRegion");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/add_to_region', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getUser operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves user information for the user having the given UserId.
     * Retrieves user information for the user having the given UserId.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} userId The id of the user.
     * @param {module:api/UsersApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.getUser = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUser");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = User;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getUsers operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSummaryList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a paged-list of users.
     * Retrieves a paged-list of Company Users in the User's company using the given filter and sort parameters.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.filter Filters by name and email
     * @param {module:model/String} optsOrCallback.sort Valid values are 'FirstNameAsc', 'FirstNameDesc', 'LastNameAsc', 'LastNameDesc', 'EmailAsc', 'EmailDesc'
     * @param {Number} optsOrCallback.defaultOfficeId Default office ID
     * @param {module:model/String} optsOrCallback.accessLevel Valid values are 'Company', 'Region', 'Office', 'Contributor'
     * @param {Number} optsOrCallback.titleId Only valid for classic companies
     * @param {Number} optsOrCallback.roleId Only valid for next gen companies
     * @param {Object} optsOrCallback.status Valid values are 'Active', 'Pending'
     * @param {Boolean} optsOrCallback.lockedOnly When set to true, filters for users whose accounts are locked
     * @param {Number} optsOrCallback.startPosition Defaults to 0 (default to 0)
     * @param {Number} optsOrCallback.count Defaults to 100. Must be less than or equal to 100 (default to 100)
     * @param {module:api/UsersApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSummaryList}
     */
    this.getUsers = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getUsers");
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
        'filter': optsOrCallback['filter'],
        'sort': optsOrCallback['sort'],
        'defaultOfficeId': optsOrCallback['defaultOfficeId'],
        'accessLevel': optsOrCallback['accessLevel'],
        'titleId': optsOrCallback['titleId'],
        'roleId': optsOrCallback['roleId'],
        'status': optsOrCallback['status'],
        'lockedOnly': optsOrCallback['lockedOnly'],
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
      var returnType = UserSummaryList;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the inviteUser operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~inviteUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * NON-CLASSIC COMPANY ONLY. Send an invitation to the user or non-user having the given email.
     * Invites a new user to join a company account on Rooms Version 6.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/UserToInvite} optsOrCallback.body Invitee information
     * @param {module:api/UsersApi~inviteUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.inviteUser = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling inviteUser");
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
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = User;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/invite_user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the lockUser operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~lockUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Locks the account of the user.
     * Locks the account of the user.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} userId User Id of the user attempting to be locked.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/LockedOutDetails} optsOrCallback.body Details containing the reason the user is being locked out
     * @param {module:api/UsersApi~lockUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lockUser = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling lockUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling lockUser");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
        '/v2/accounts/{accountId}/users/{userId}/lock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the reinviteUser operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~reinviteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Reinvites the pending user with the given userId.
     * Reinvites an unactivated user to join a company account. You can use this method with either Rooms Version 5 or Rooms Version 6.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} userId ID of the user to be invited
     * @param {module:api/UsersApi~reinviteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.reinviteUser = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling reinviteUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling reinviteUser");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
        '/v2/accounts/{accountId}/users/{userId}/reinvite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the removeUser operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~removeUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Removes a user from the company.
     * Removes the user. Will fail if the user owns any Rooms. 
The rooms will need to be transferred to other agents before removing.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} userId Id of the user you wish to remove.
     * @param {module:api/UsersApi~removeUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeUser = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling removeUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUser");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
        '/v2/accounts/{accountId}/users/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the removeUserFromOffice operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~removeUserFromOfficeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Removes the user from the designated office.
     * Removes the user from the designated office.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} userId The id of the user.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DesignatedOffice} optsOrCallback.body Details of the office that the user will be removed from
     * @param {module:api/UsersApi~removeUserFromOfficeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeUserFromOffice = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling removeUserFromOffice");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserFromOffice");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/remove_from_office', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the removeUserFromRegion operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~removeUserFromRegionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Removes the user from the designated region.
     * Removes the user from the designated region.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} userId The id of the user.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DesignatedRegion} optsOrCallback.body Region that given user will be removed from
     * @param {module:api/UsersApi~removeUserFromRegionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeUserFromRegion = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling removeUserFromRegion");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserFromRegion");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/remove_from_region', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the unlockUser operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~unlockUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Unlocks the account of the user.
     * Unlocks the account of the user.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} userId User Id of the user attempting to be unlocked.
     * @param {module:api/UsersApi~unlockUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.unlockUser = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling unlockUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling unlockUser");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
        '/v2/accounts/{accountId}/users/{userId}/unlock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateUser operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates user information
     * Updates user information
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} userId The id of the user.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/UserForUpdate} optsOrCallback.body Request body to update the user
     * @param {module:api/UsersApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.updateUser = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUser");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = User;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));