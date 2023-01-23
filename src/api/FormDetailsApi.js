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
	define(['Configuration', 'ApiClient', 'model/ApiError', 'model/FormDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ApiError'), require('../model/FormDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.FormDetailsApi = factory(root.DocusignRooms.Configuration, root.DocusignRooms.ApiClient, root.DocusignRooms.ApiError, root.DocusignRooms.FormDetails);
  }
}(this, function(Configuration, ApiClient, ApiError, FormDetails) {
  'use strict';

  /**
   * FormDetails service.
   * @module api/FormDetailsApi
   */

  /**
   * Constructs a new FormDetailsApi. 
   * @alias module:api/FormDetailsApi
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
     * (Optional) Callback function to receive the result of the getFormDetails operation. If none specified a Promise will be returned.
     * @callback module:api/FormDetailsApi~getFormDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormDetails} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets form based on Id.
     * Returns details about a specific form, such as the date it was created and last updated, the number of pages, the form owner, and other information.
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {String} formId Form ID
     * @param {module:api/FormDetailsApi~getFormDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FormDetails}
     */
    this.getFormDetails = function(accountId, formId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getFormDetails");
      }

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw new Error("Missing the required parameter 'formId' when calling getFormDetails");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'formId': formId
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
      var returnType = FormDetails;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/forms/{formId}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));