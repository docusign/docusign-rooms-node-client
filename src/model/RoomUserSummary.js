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
    root.DocusignRooms.RoomUserSummary = factory(root.DocusignRooms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RoomUserSummary model module.
   * @module model/RoomUserSummary
   */

  /**
   * Constructs a new <code>RoomUserSummary</code>.
   * @alias module:model/RoomUserSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RoomUserSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoomUserSummary} obj Optional instance to populate.
   * @return {module:model/RoomUserSummary} The populated <code>RoomUserSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('transactionSideId')) {
        obj['transactionSideId'] = ApiClient.convertToType(data['transactionSideId'], 'String');
      }
      if (data.hasOwnProperty('roleId')) {
        obj['roleId'] = ApiClient.convertToType(data['roleId'], 'Number');
      }
      if (data.hasOwnProperty('titleId')) {
        obj['titleId'] = ApiClient.convertToType(data['titleId'], 'Number');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('roleName')) {
        obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} transactionSideId
   */
  exports.prototype['transactionSideId'] = undefined;
  /**
   * @member {Number} roleId
   */
  exports.prototype['roleId'] = undefined;
  /**
   * @member {Number} titleId
   */
  exports.prototype['titleId'] = undefined;
  /**
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * @member {String} roleName
   */
  exports.prototype['roleName'] = undefined;



  return exports;
}));


