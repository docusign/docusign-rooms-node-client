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
    root.DocusignRooms.ContactSide = factory(root.DocusignRooms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ContactSide model module.
   * @module model/ContactSide
   */

  /**
   * Constructs a new <code>ContactSide</code>.
   * @alias module:model/ContactSide
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ContactSide</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactSide} obj Optional instance to populate.
   * @return {module:model/ContactSide} The populated <code>ContactSide</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contactSideId')) {
        obj['contactSideId'] = ApiClient.convertToType(data['contactSideId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} contactSideId
   */
  exports.prototype['contactSideId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


