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
    define(['ApiClient', 'model/Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.GlobalCountries = factory(root.DocusignRooms.ApiClient, root.DocusignRooms.Country);
  }
}(this, function(ApiClient, Country) {
  'use strict';


  /**
   * The GlobalCountries model module.
   * @module model/GlobalCountries
   */

  /**
   * Constructs a new <code>GlobalCountries</code>.
   * @alias module:model/GlobalCountries
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GlobalCountries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GlobalCountries} obj Optional instance to populate.
   * @return {module:model/GlobalCountries} The populated <code>GlobalCountries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('countries')) {
        obj['countries'] = ApiClient.convertToType(data['countries'], [Country]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Country>} countries
   */
  exports.prototype['countries'] = undefined;



  return exports;
}));


