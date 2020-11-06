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
    root.DocusignRooms.DesignatedRegion = factory(root.DocusignRooms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DesignatedRegion model module.
   * @module model/DesignatedRegion
   */

  /**
   * Constructs a new <code>DesignatedRegion</code>.
   * @alias module:model/DesignatedRegion
   * @class
   * @param regionId {Number} 
   */
  var exports = function(regionId) {
    var _this = this;

    _this['regionId'] = regionId;
  };

  /**
   * Constructs a <code>DesignatedRegion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DesignatedRegion} obj Optional instance to populate.
   * @return {module:model/DesignatedRegion} The populated <code>DesignatedRegion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionId')) {
        obj['regionId'] = ApiClient.convertToType(data['regionId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} regionId
   */
  exports.prototype['regionId'] = undefined;



  return exports;
}));


