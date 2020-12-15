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
    root.DocusignRooms.FieldsCustomDataFilterType = factory(root.DocusignRooms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class FieldsCustomDataFilterType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "None"
     * @const
     */
    "none": "None",
    /**
     * value: "IsRequiredOnCreate"
     * @const
     */
    "isRequiredOnCreate": "IsRequiredOnCreate",
    /**
     * value: "IsRequiredOnSubmit"
     * @const
     */
    "isRequiredOnSubmit": "IsRequiredOnSubmit"  };

  /**
   * Returns a <code>FieldsCustomDataFilterType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/FieldsCustomDataFilterType} The enum <code>FieldsCustomDataFilterType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  };

  return exports;
}));


