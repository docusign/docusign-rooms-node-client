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
    root.DocusignRooms.FormSummary = factory(root.DocusignRooms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The FormSummary model module.
   * @module model/FormSummary
   */

  /**
   * Constructs a new <code>FormSummary</code>.
   * @alias module:model/FormSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FormSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormSummary} obj Optional instance to populate.
   * @return {module:model/FormSummary} The populated <code>FormSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('libraryFormId')) {
        obj['libraryFormId'] = ApiClient.convertToType(data['libraryFormId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('lastUpdatedDate')) {
        obj['lastUpdatedDate'] = ApiClient.convertToType(data['lastUpdatedDate'], 'Date');
      }
      if (data.hasOwnProperty('viewingUserHasAccess')) {
        obj['viewingUserHasAccess'] = ApiClient.convertToType(data['viewingUserHasAccess'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} libraryFormId
   */
  exports.prototype['libraryFormId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Date} lastUpdatedDate
   */
  exports.prototype['lastUpdatedDate'] = undefined;
  /**
   * @member {Boolean} viewingUserHasAccess
   */
  exports.prototype['viewingUserHasAccess'] = undefined;



  return exports;
}));


