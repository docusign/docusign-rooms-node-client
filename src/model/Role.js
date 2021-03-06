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
    define(['ApiClient', 'model/Permissions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Permissions'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.Role = factory(root.DocusignRooms.ApiClient, root.DocusignRooms.Permissions);
  }
}(this, function(ApiClient, Permissions) {
  'use strict';


  /**
   * The Role model module.
   * @module model/Role
   */

  /**
   * Constructs a new <code>Role</code>.
   * @alias module:model/Role
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Role} obj Optional instance to populate.
   * @return {module:model/Role} The populated <code>Role</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('roleId')) {
        obj['roleId'] = ApiClient.convertToType(data['roleId'], 'Number');
      }
      if (data.hasOwnProperty('legacyRoleId')) {
        obj['legacyRoleId'] = ApiClient.convertToType(data['legacyRoleId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('isDefaultForAdmin')) {
        obj['isDefaultForAdmin'] = ApiClient.convertToType(data['isDefaultForAdmin'], 'Boolean');
      }
      if (data.hasOwnProperty('isExternal')) {
        obj['isExternal'] = ApiClient.convertToType(data['isExternal'], 'Boolean');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
      }
      if (data.hasOwnProperty('isAssigned')) {
        obj['isAssigned'] = ApiClient.convertToType(data['isAssigned'], 'Boolean');
      }
      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = Permissions.constructFromObject(data['permissions']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} roleId
   */
  exports.prototype['roleId'] = undefined;
  /**
   * @member {String} legacyRoleId
   */
  exports.prototype['legacyRoleId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} isDefaultForAdmin
   */
  exports.prototype['isDefaultForAdmin'] = undefined;
  /**
   * @member {Boolean} isExternal
   */
  exports.prototype['isExternal'] = undefined;
  /**
   * @member {Date} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * @member {Boolean} isAssigned
   */
  exports.prototype['isAssigned'] = undefined;
  /**
   * @member {module:model/Permissions} permissions
   */
  exports.prototype['permissions'] = undefined;



  return exports;
}));


