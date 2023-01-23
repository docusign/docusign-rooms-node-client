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
    root.DocusignRooms.ListingType = factory(root.DocusignRooms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class ListingType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "PublicRecords"
     * @const
     */
    "publicRecords": "PublicRecords",
    /**
     * value: "MLS"
     * @const
     */
    "MLS": "MLS"  };

  /**
   * Returns a <code>ListingType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ListingType} The enum <code>ListingType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  };

  return exports;
}));


