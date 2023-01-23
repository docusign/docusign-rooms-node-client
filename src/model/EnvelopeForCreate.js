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
    root.DocusignRooms.EnvelopeForCreate = factory(root.DocusignRooms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EnvelopeForCreate model module.
   * @module model/EnvelopeForCreate
   */

  /**
   * Constructs a new <code>EnvelopeForCreate</code>.
   * @alias module:model/EnvelopeForCreate
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeForCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeForCreate} obj Optional instance to populate.
   * @return {module:model/EnvelopeForCreate} The populated <code>EnvelopeForCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeName')) {
        obj['envelopeName'] = ApiClient.convertToType(data['envelopeName'], 'String');
      }
      if (data.hasOwnProperty('documentIds')) {
        obj['documentIds'] = ApiClient.convertToType(data['documentIds'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {String} envelopeName
   */
  exports.prototype['envelopeName'] = undefined;
  /**
   * @member {Array.<Number>} documentIds
   */
  exports.prototype['documentIds'] = undefined;



  return exports;
}));


