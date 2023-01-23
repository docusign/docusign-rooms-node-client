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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.FormProviderAssociationSummary = factory(root.DocusignRooms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The FormProviderAssociationSummary model module.
   * @module model/FormProviderAssociationSummary
   */

  /**
   * Constructs a new <code>FormProviderAssociationSummary</code>.
   * @alias module:model/FormProviderAssociationSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FormProviderAssociationSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormProviderAssociationSummary} obj Optional instance to populate.
   * @return {module:model/FormProviderAssociationSummary} The populated <code>FormProviderAssociationSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('associationId')) {
        obj['associationId'] = ApiClient.convertToType(data['associationId'], 'String');
      }
      if (data.hasOwnProperty('providerId')) {
        obj['providerId'] = ApiClient.convertToType(data['providerId'], 'String');
      }
      if (data.hasOwnProperty('lastUpdateDate')) {
        obj['lastUpdateDate'] = ApiClient.convertToType(data['lastUpdateDate'], 'Date');
      }
      if (data.hasOwnProperty('formProviderAssociationGuid')) {
        obj['formProviderAssociationGuid'] = ApiClient.convertToType(data['formProviderAssociationGuid'], 'String');
      }
      if (data.hasOwnProperty('formProviderAssociationName')) {
        obj['formProviderAssociationName'] = ApiClient.convertToType(data['formProviderAssociationName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} associationId
   */
  exports.prototype['associationId'] = undefined;
  /**
   * @member {String} providerId
   */
  exports.prototype['providerId'] = undefined;
  /**
   * @member {Date} lastUpdateDate
   */
  exports.prototype['lastUpdateDate'] = undefined;
  /**
   * @member {String} formProviderAssociationGuid
   */
  exports.prototype['formProviderAssociationGuid'] = undefined;
  /**
   * @member {String} formProviderAssociationName
   */
  exports.prototype['formProviderAssociationName'] = undefined;



  return exports;
}));


