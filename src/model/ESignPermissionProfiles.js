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
    define(['ApiClient', 'model/ESignAccountRoleSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ESignAccountRoleSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ESignPermissionProfiles = factory(root.Docusign.ApiClient, root.Docusign.ESignAccountRoleSettings);
  }
}(this, function(ApiClient, ESignAccountRoleSettings) {
  'use strict';

  /**
   * The ESignPermissionProfiles model module.
   * @module model/ESignPermissionProfiles
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ESignPermissionProfiles</code>.
   * When you create or invite a new member in Rooms, the system creates an eSignature account for the member at the same time.
   * @alias module:model/ESignPermissionProfiles
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ESignPermissionProfiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ESignPermissionProfiles} obj Optional instance to populate.
   * @return {module:model/ESignPermissionProfiles} The populated <code>ESignPermissionProfiles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('eSignPermissionProfileId'))
        obj.eSignPermissionProfileId = ApiClient.convertToType(data['eSignPermissionProfileId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('settings'))
        obj.settings = ESignAccountRoleSettings.constructFromObject(data['settings']);
    }
    return obj;
  }

  /**
   * When an administrator or authorized member invites a new user to become an account member, the system also creates an eSignature account for the invitee at the same time. The `eSignPermissionProfileId` is the id of the eSignature permission set to assign to the member.
   * @member {String} eSignPermissionProfileId
   */
  exports.prototype.eSignPermissionProfileId = undefined;

  /**
   * The name of the eSignature permission profile.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The settings associated with the eSignature permission profile.
   * @member {module:model/ESignAccountRoleSettings} settings
   */
  exports.prototype.settings = undefined;

  return exports;

}));
