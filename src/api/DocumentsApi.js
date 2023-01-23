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
	define(['Configuration', 'ApiClient', 'model/ApiError', 'model/Document', 'model/DocumentUser', 'model/DocumentUserForCreate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ApiError'), require('../model/Document'), require('../model/DocumentUser'), require('../model/DocumentUserForCreate'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.DocumentsApi = factory(root.DocusignRooms.Configuration, root.DocusignRooms.ApiClient, root.DocusignRooms.ApiError, root.DocusignRooms.Document, root.DocusignRooms.DocumentUser, root.DocusignRooms.DocumentUserForCreate);
  }
}(this, function(Configuration, ApiClient, ApiError, Document, DocumentUser, DocumentUserForCreate) {
  'use strict';

  /**
   * Documents service.
   * @module api/DocumentsApi
   */

  /**
   * Constructs a new DocumentsApi. 
   * @alias module:api/DocumentsApi
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
     * (Optional) Callback function to receive the result of the createDocumentUser operation. If none specified a Promise will be returned.
     * @callback module:api/DocumentsApi~createDocumentUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentUser} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Grants access to a document for a user.
     * Grants a user access to a document. You specify the user's `userId` in the request body. The response is an object that specifies the access the user has.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} documentId The id of the document.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentUserForCreate} optsOrCallback.body Request body with user id that the document has to be granted to
     * @param {module:api/DocumentsApi~createDocumentUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentUser}
     */
    this.createDocumentUser = function(accountId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createDocumentUser");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling createDocumentUser");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'documentId': documentId
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
      var returnType = DocumentUser;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/documents/{documentId}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteDocument operation. If none specified a Promise will be returned.
     * @callback module:api/DocumentsApi~deleteDocumentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes a document.
     * Permanently deletes a document. To find the `documentId` of a document that you want to delete, use the Rooms::GetDocuments method.\n\nIf the document is deleted successfully, the HTTP response code is 204 (No Content), so the response body is empty.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} documentId The ID of the document.
     * @param {module:api/DocumentsApi~deleteDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDocument = function(accountId, documentId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocument");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'documentId': documentId
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
        '/v2/accounts/{accountId}/documents/{documentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getDocument operation. If none specified a Promise will be returned.
     * @callback module:api/DocumentsApi~getDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Document} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get information about the Document with the given DocumentId.
     * Returns information about a document in a room. You can optionally request the contents of the document, which is returned in base64-encoded format.\n\nTo find the `documentId` of the document that you want to retrieve, use the Rooms::GetDocuments method.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {Number} documentId The id of the document.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Boolean} optsOrCallback.includeContents When set to **true**, includes the contents of the document in the `base64Contents` property of the response. The default value is **false**. (default to false)
     * @param {module:api/DocumentsApi~getDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Document}
     */
    this.getDocument = function(accountId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocument");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'documentId': documentId
      };
      var queryParams = {
        'includeContents': optsOrCallback['includeContents']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Document;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));