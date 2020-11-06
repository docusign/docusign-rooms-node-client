/*
 * DocuSign Rooms API - v2
 * An API for an integrator to access the features of DocuSign Rooms
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13-SNAPSHOT
 *
 * Do not edit the class manually.
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
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SellerDecisionTypes = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SellerDecisionTypes model module.
   * @module model/SellerDecisionTypes
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SellerDecisionTypes</code>.
   * Contains information about a seller decision type.
   * @alias module:model/SellerDecisionTypes
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SellerDecisionTypes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SellerDecisionTypes} obj Optional instance to populate.
   * @return {module:model/SellerDecisionTypes} The populated <code>SellerDecisionTypes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('sellerDecisionTypeId'))
        obj.sellerDecisionTypeId = ApiClient.convertToType(data['sellerDecisionTypeId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * The id of the seller decision type.  Example: `appr` (for `Approved`)
   * @member {String} sellerDecisionTypeId
   */
  exports.prototype.sellerDecisionTypeId = undefined;

  /**
   * The name of the seller decision type.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  return exports;

}));
