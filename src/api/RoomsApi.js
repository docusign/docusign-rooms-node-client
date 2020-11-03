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
	define(['Configuration', 'ApiClient', 'model/ApiError', 'model/AssignableRoles', 'model/Document', 'model/FieldData', 'model/FieldDataForUpdate', 'model/FieldSet', 'model/FormForAdd', 'model/Room', 'model/RoomDocument', 'model/RoomDocumentList', 'model/RoomForCreate', 'model/RoomInvite', 'model/RoomInviteResponse', 'model/RoomPicture', 'model/RoomSummaryList', 'model/RoomUser', 'model/RoomUserForUpdate', 'model/RoomUserRemovalDetail', 'model/RoomUsersResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ApiError'), require('../model/AssignableRoles'), require('../model/Document'), require('../model/FieldData'), require('../model/FieldDataForUpdate'), require('../model/FieldSet'), require('../model/FormForAdd'), require('../model/Room'), require('../model/RoomDocument'), require('../model/RoomDocumentList'), require('../model/RoomForCreate'), require('../model/RoomInvite'), require('../model/RoomInviteResponse'), require('../model/RoomPicture'), require('../model/RoomSummaryList'), require('../model/RoomUser'), require('../model/RoomUserForUpdate'), require('../model/RoomUserRemovalDetail'), require('../model/RoomUsersResult'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.RoomsApi = factory(root.DocusignRooms.Configuration, root.DocusignRooms.ApiClient, root.DocusignRooms.ApiError, root.DocusignRooms.AssignableRoles, root.DocusignRooms.Document, root.DocusignRooms.FieldData, root.DocusignRooms.FieldDataForUpdate, root.DocusignRooms.FieldSet, root.DocusignRooms.FormForAdd, root.DocusignRooms.Room, root.DocusignRooms.RoomDocument, root.DocusignRooms.RoomDocumentList, root.DocusignRooms.RoomForCreate, root.DocusignRooms.RoomInvite, root.DocusignRooms.RoomInviteResponse, root.DocusignRooms.RoomPicture, root.DocusignRooms.RoomSummaryList, root.DocusignRooms.RoomUser, root.DocusignRooms.RoomUserForUpdate, root.DocusignRooms.RoomUserRemovalDetail, root.DocusignRooms.RoomUsersResult);
  }
}(this, function(Configuration, ApiClient, ApiError, AssignableRoles, Document, FieldData, FieldDataForUpdate, FieldSet, FormForAdd, Room, RoomDocument, RoomDocumentList, RoomForCreate, RoomInvite, RoomInviteResponse, RoomPicture, RoomSummaryList, RoomUser, RoomUserForUpdate, RoomUserRemovalDetail, RoomUsersResult) {
  'use strict';

  /**
   * Rooms service.
   * @module api/RoomsApi
   */

  /**
   * Constructs a new RoomsApi. 
   * @alias module:api/RoomsApi
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
     * (Optional) Callback function to receive the result of the addDocumentToRoom operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~addDocumentToRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoomDocument} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Add a document to a room.
     * @param {Number} roomId 
     * @param {module:model/Document} document 
     * @param {String} accountId 
     * @param {module:api/RoomsApi~addDocumentToRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoomDocument}
     */
    this.addDocumentToRoom = function(document, roomId, accountId, callback) {
      var postBody = document;

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling addDocumentToRoom");
      }

      // verify the required parameter 'document' is set
      if (document === undefined || document === null) {
        throw new Error("Missing the required parameter 'document' when calling addDocumentToRoom");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling addDocumentToRoom");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RoomDocument;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/documents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the addDocumentToRoomViaFileUpload operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~addDocumentToRoomViaFileUploadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoomDocument} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Add a document to a room via file contents upload.
     * @param {String} accountId 
     * @param {Number} roomId 
     * @param {Object} file 
     * @param {module:api/RoomsApi~addDocumentToRoomViaFileUploadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoomDocument}
     */
    this.addDocumentToRoomViaFileUpload = function(accountId, roomId, file, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling addDocumentToRoomViaFileUpload");
      }

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling addDocumentToRoomViaFileUpload");
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling addDocumentToRoomViaFileUpload");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': file
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/form-data'];
      var accepts = ['application/json'];
      var returnType = RoomDocument;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/documents/contents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the addFormToRoom operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~addFormToRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoomDocument} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds a DocuSign Form to a room
     * @param {Number} roomId Id of the room to which the DocuSign Form is being added
     * @param {module:model/FormForAdd} formForAdd Contains information about the form being added
     * @param {String} accountId 
     * @param {module:api/RoomsApi~addFormToRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoomDocument}
     */
    this.addFormToRoom = function(formForAdd, roomId, accountId, callback) {
      var postBody = formForAdd;

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling addFormToRoom");
      }

      // verify the required parameter 'formForAdd' is set
      if (formForAdd === undefined || formForAdd === null) {
        throw new Error("Missing the required parameter 'formForAdd' when calling addFormToRoom");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling addFormToRoom");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RoomDocument;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/forms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createRoom operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~createRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Room} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a new Room
     * @param {module:model/RoomForCreate} roomForCreate The properties of the new room
     * @param {String} accountId 
     * @param {module:api/RoomsApi~createRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Room}
     */
    this.createRoom = function(roomForCreate, accountId, callback) {
      var postBody = roomForCreate;

      // verify the required parameter 'roomForCreate' is set
      if (roomForCreate === undefined || roomForCreate === null) {
        throw new Error("Missing the required parameter 'roomForCreate' when calling createRoom");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createRoom");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Room;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteRoom operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~deleteRoomCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the room having the given room ID.
     * @param {String} accountId 
     * @param {Number} roomId ID of the room to be deleted.
     * @param {module:api/RoomsApi~deleteRoomCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRoom = function(accountId, roomId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRoom");
      }

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling deleteRoom");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getAssignableRoles operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~getAssignableRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssignableRoles} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns the roles for which the calling user, based on their role within the room, can assign to invitees.
     * @param {String} accountId 
     * @param {Number} roomId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.assigneeEmail Optional parameter indicating to only return roles (internal/external) assignable to this user.
     * @param {String} optsOrCallback.filter 
     * @param {Number} optsOrCallback.startPosition 
     * @param {Number} optsOrCallback.count 
     * @param {module:api/RoomsApi~getAssignableRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssignableRoles}
     */
    this.getAssignableRoles = function(accountId, roomId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAssignableRoles");
      }

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling getAssignableRoles");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
        'assigneeEmail': optsOrCallback['assigneeEmail'],
        'filter': optsOrCallback['filter'],
        'startPosition': optsOrCallback['startPosition'],
        'count': optsOrCallback['count']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AssignableRoles;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/assignable_roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getDocuments operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~getDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoomDocumentList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get documents in the room accessible to the calling user.
     * @param {String} accountId 
     * @param {Number} roomId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Number} optsOrCallback.count Number of documents to return. Defaults to the maximum which is 100.
     * @param {Number} optsOrCallback.startPosition Position of the first item in the total results. Defaults to 0.
     * @param {module:api/RoomsApi~getDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoomDocumentList}
     */
    this.getDocuments = function(accountId, roomId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDocuments");
      }

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling getDocuments");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
        'count': optsOrCallback['count'],
        'startPosition': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RoomDocumentList;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRoom operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~getRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Room} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets information about the given room.
     * @param {String} accountId 
     * @param {Number} roomId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Boolean} optsOrCallback.includeFieldData Indicates if field data (a.k.a., room details) should be included in the response. Defaults to false.
     * @param {module:api/RoomsApi~getRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Room}
     */
    this.getRoom = function(accountId, roomId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRoom");
      }

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling getRoom");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
        'includeFieldData': optsOrCallback['includeFieldData']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Room;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRoomFieldData operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~getRoomFieldDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FieldData} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns the FieldData associated with the provided roomId.
     * @param {String} accountId 
     * @param {Number} roomId 
     * @param {module:api/RoomsApi~getRoomFieldDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FieldData}
     */
    this.getRoomFieldData = function(accountId, roomId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRoomFieldData");
      }

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling getRoomFieldData");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FieldData;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/field_data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRoomFieldSet operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~getRoomFieldSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FieldSet} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the field set associated with the room.
     * @param {String} accountId 
     * @param {Number} roomId 
     * @param {module:api/RoomsApi~getRoomFieldSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FieldSet}
     */
    this.getRoomFieldSet = function(accountId, roomId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRoomFieldSet");
      }

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling getRoomFieldSet");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FieldSet;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/field_set', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRoomUsers operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~getRoomUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoomUsersResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves the list of users in the given room.
     * @param {String} accountId 
     * @param {Number} roomId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Number} optsOrCallback.count Number of room users to return. Defaults to the maximum which is 100.
     * @param {Number} optsOrCallback.startPosition Position of the first item in the total results. Defaults to 0.
     * @param {String} optsOrCallback.filter Returns room users filtered by Name and Email.
     * @param {module:model/String} optsOrCallback.sort Sorts results. Options are FirstNameAsc, FirstNameDesc, LastNameAsc, LastNameDesc, EmailAsc, EmailDesc. Defaults to LastNameDesc
     * @param {module:api/RoomsApi~getRoomUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoomUsersResult}
     */
    this.getRoomUsers = function(accountId, roomId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRoomUsers");
      }

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling getRoomUsers");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
        'count': optsOrCallback['count'],
        'startPosition': optsOrCallback['startPosition'],
        'filter': optsOrCallback['filter'],
        'sort': optsOrCallback['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RoomUsersResult;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRooms operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~getRoomsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoomSummaryList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets rooms available to the calling user.
     * @param {String} accountId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Number} optsOrCallback.count Number of rooms to return. Defaults to the maximum which is 100.
     * @param {Number} optsOrCallback.startPosition Position of the first item in the total results. Defaults to 0.
     * @param {module:model/String} optsOrCallback.roomStatus Status of the rooms to return. Defaults to \"Active\".
     * @param {Number} optsOrCallback.officeId Only return rooms in this office.
     * @param {String} optsOrCallback.fieldDataChangedStartDate Fields data changed start datetime in UTC. Valid formats: yyyy-mm-dd hh:mm:ss or yyyy/mm/dd hh:mm:ss -Time is optional and will default to 00:00:00.
     * @param {String} optsOrCallback.fieldDataChangedEndDate Fields-data changed end DateTime in UTC. Valid formats: yyyy-mm-dd hh:mm:ss or yyyy/mm/dd hh:mm:ss -Time is optional and will default to 00:00:00.
     * @param {String} optsOrCallback.roomClosedStartDate Room closed start datetime in UTC. Valid formats: yyyy-mm-dd hh:mm:ss or yyyy/mm/dd hh:mm:ss -Time is optional and will default to 00:00:00.
     * @param {String} optsOrCallback.roomClosedEndDate Room closed end datetime in UTC. Valid formats: yyyy-mm-dd hh:mm:ss or yyyy/mm/dd hh:mm:ss -Time is optional and will default to 00:00:00.
     * @param {module:api/RoomsApi~getRoomsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoomSummaryList}
     */
    this.getRooms = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRooms");
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
        'count': optsOrCallback['count'],
        'startPosition': optsOrCallback['startPosition'],
        'roomStatus': optsOrCallback['roomStatus'],
        'officeId': optsOrCallback['officeId'],
        'fieldDataChangedStartDate': optsOrCallback['fieldDataChangedStartDate'],
        'fieldDataChangedEndDate': optsOrCallback['fieldDataChangedEndDate'],
        'roomClosedStartDate': optsOrCallback['roomClosedStartDate'],
        'roomClosedEndDate': optsOrCallback['roomClosedEndDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RoomSummaryList;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the inviteUser operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~inviteUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoomInviteResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Invites a user to the room by email address.
     * @param {Number} roomId 
     * @param {module:model/RoomInvite} roomInviteRequest 
     * @param {String} accountId 
     * @param {module:api/RoomsApi~inviteUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoomInviteResponse}
     */
    this.inviteUser = function(roomInviteRequest, roomId, accountId, callback) {
      var postBody = roomInviteRequest;

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling inviteUser");
      }

      // verify the required parameter 'roomInviteRequest' is set
      if (roomInviteRequest === undefined || roomInviteRequest === null) {
        throw new Error("Missing the required parameter 'roomInviteRequest' when calling inviteUser");
      }

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
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RoomInviteResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the putRoomUser operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~putRoomUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoomUser} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the specified user's role and transaction side.
     * @param {Number} roomId 
     * @param {Number} userId 
     * @param {module:model/RoomUserForUpdate} roomUserForUpdate 
     * @param {String} accountId 
     * @param {module:api/RoomsApi~putRoomUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoomUser}
     */
    this.putRoomUser = function(roomUserForUpdate, roomId, userId, accountId, callback) {
      var postBody = roomUserForUpdate;

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling putRoomUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling putRoomUser");
      }

      // verify the required parameter 'roomUserForUpdate' is set
      if (roomUserForUpdate === undefined || roomUserForUpdate === null) {
        throw new Error("Missing the required parameter 'roomUserForUpdate' when calling putRoomUser");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling putRoomUser");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RoomUser;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the restoreRoomUserAccess operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~restoreRoomUserAccessCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Restores the specified user's access to the room.
     * @param {String} accountId 
     * @param {Number} roomId The room Id to restore access
     * @param {Number} userId The user Id getting restored to the room
     * @param {module:api/RoomsApi~restoreRoomUserAccessCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.restoreRoomUserAccess = function(accountId, roomId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling restoreRoomUserAccess");
      }

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling restoreRoomUserAccess");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling restoreRoomUserAccess");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/users/{userId}/restore_access', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the revokeRoomUserAccess operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~revokeRoomUserAccessCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Revokes the specified user's access to the room.
     * @param {Number} roomId The room Id to revoke access from
     * @param {Number} userId The user Id getting revoked from the room
     * @param {String} accountId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/RoomUserRemovalDetail} optsOrCallback.roomUserRemovalDetail Contains the date on which the users room access should be revoked
     * @param {module:api/RoomsApi~revokeRoomUserAccessCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.revokeRoomUserAccess = function(roomId, userId, accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['roomUserRemovalDetail'];

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling revokeRoomUserAccess");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling revokeRoomUserAccess");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling revokeRoomUserAccess");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/users/{userId}/revoke_access', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updatePicture operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~updatePictureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoomPicture} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update the picture for a room.
     * This endpoint supports the following content types, application/json as JSON PictureForUpdate{"fileName":"string", "Base64Contents":"string"}, multipart/formdata and any other streamed binary content type (as long as either query parameter fileName or request header ContentDisposition filename is included).
     * @param {String} accountId 
     * @param {Number} roomId ID of the room the picture is for.
     * @param {module:api/RoomsApi~updatePictureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoomPicture}
     */
    this.updatePicture = function(accountId, roomId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updatePicture");
      }

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling updatePicture");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RoomPicture;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/picture', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateRoomFieldData operation. If none specified a Promise will be returned.
     * @callback module:api/RoomsApi~updateRoomFieldDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FieldData} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates room field data.
     * @param {Number} roomId 
     * @param {module:model/FieldDataForUpdate} fieldDataForUpdate 
     * @param {String} accountId 
     * @param {module:api/RoomsApi~updateRoomFieldDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FieldData}
     */
    this.updateRoomFieldData = function(fieldDataForUpdate, roomId, accountId, callback) {
      var postBody = fieldDataForUpdate;

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling updateRoomFieldData");
      }

      // verify the required parameter 'fieldDataForUpdate' is set
      if (fieldDataForUpdate === undefined || fieldDataForUpdate === null) {
        throw new Error("Missing the required parameter 'fieldDataForUpdate' when calling updateRoomFieldData");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRoomFieldData");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'roomId': roomId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FieldData;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/rooms/{roomId}/field_data', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));