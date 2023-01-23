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
	define(['Configuration', 'ApiClient', 'model/ApiError', 'model/FormProviderAssociationsSummaryList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ApiError'), require('../model/FormProviderAssociationsSummaryList'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.FormProviderAssociationsApi = factory(root.DocusignRooms.Configuration, root.DocusignRooms.ApiClient, root.DocusignRooms.ApiError, root.DocusignRooms.FormProviderAssociationsSummaryList);
  }
}(this, function(Configuration, ApiClient, ApiError, FormProviderAssociationsSummaryList) {
  'use strict';

  /**
   * FormProviderAssociations service.
   * @module api/FormProviderAssociationsApi
   */

  /**
   * Constructs a new FormProviderAssociationsApi. 
   * @alias module:api/FormProviderAssociationsApi
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
     * (Optional) Callback function to receive the result of the getFormProviderAssociations operation. If none specified a Promise will be returned.
     * @callback module:api/FormProviderAssociationsApi~getFormProviderAssociationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormProviderAssociationsSummaryList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves all Associations by provider
     * Retrieves all Associations for given provider
     * @param {String} accountId (Required) The globally unique identifier (GUID) for the account.
     * @param {String} providerId provider id like nar, nwmls etc..
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Number} optsOrCallback.count Total number of associations to be returned (default to 100)
     * @param {Number} optsOrCallback.startPosition starting position of the list (default to 0)
     * @param {module:api/FormProviderAssociationsApi~getFormProviderAssociationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FormProviderAssociationsSummaryList}
     */
    this.getFormProviderAssociations = function(accountId, providerId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getFormProviderAssociations");
      }

      // verify the required parameter 'providerId' is set
      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling getFormProviderAssociations");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'providerId': providerId
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
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = FormProviderAssociationsSummaryList;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/form_providers/{providerId}/associations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));