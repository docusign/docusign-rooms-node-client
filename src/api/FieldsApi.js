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
	define(['Configuration', 'ApiClient', 'model/ApiError', 'model/FieldSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ApiError'), require('../model/FieldSet'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.FieldsApi = factory(root.DocusignRooms.Configuration, root.DocusignRooms.ApiClient, root.DocusignRooms.ApiError, root.DocusignRooms.FieldSet);
  }
}(this, function(Configuration, ApiClient, ApiError, FieldSet) {
  'use strict';

  /**
   * Fields service.
   * @module api/FieldsApi
   */

  /**
   * Constructs a new FieldsApi. 
   * @alias module:api/FieldsApi
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
     * (Optional) Callback function to receive the result of the getFieldSet operation. If none specified a Promise will be returned.
     * @callback module:api/FieldsApi~getFieldSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FieldSet} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get details of a specific field set.
     * @param {String} accountId 
     * @param {String} fieldSetId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Array.<module:model/String>} optsOrCallback.fieldsCustomDataFilters 
     * @param {module:api/FieldsApi~getFieldSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FieldSet}
     */
    this.getFieldSet = function(accountId, fieldSetId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getFieldSet");
      }

      // verify the required parameter 'fieldSetId' is set
      if (fieldSetId === undefined || fieldSetId === null) {
        throw new Error("Missing the required parameter 'fieldSetId' when calling getFieldSet");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'fieldSetId': fieldSetId
      };
      var queryParams = {
        'fieldsCustomDataFilters': this.apiClient.buildCollectionParam(optsOrCallback['fieldsCustomDataFilters'], 'multi')
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
        '/v2/accounts/{accountId}/field_sets/{fieldSetId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));