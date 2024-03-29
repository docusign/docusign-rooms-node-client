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
    root.DocusignRooms.Envelope = factory(root.DocusignRooms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Envelope model module.
   * @module model/Envelope
   */

  /**
   * Constructs a new <code>Envelope</code>.
   * @alias module:model/Envelope
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Envelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Envelope} obj Optional instance to populate.
   * @return {module:model/Envelope} The populated <code>Envelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eSignEnvelopeId')) {
        obj['eSignEnvelopeId'] = ApiClient.convertToType(data['eSignEnvelopeId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} eSignEnvelopeId
   */
  exports.prototype['eSignEnvelopeId'] = undefined;



  return exports;
}));


