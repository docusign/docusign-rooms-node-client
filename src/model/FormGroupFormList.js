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
    define(['ApiClient', 'model/FormGroupForm'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FormGroupForm'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.FormGroupFormList = factory(root.DocusignRooms.ApiClient, root.DocusignRooms.FormGroupForm);
  }
}(this, function(ApiClient, FormGroupForm) {
  'use strict';


  /**
   * The FormGroupFormList model module.
   * @module model/FormGroupFormList
   */

  /**
   * Constructs a new <code>FormGroupFormList</code>.
   * @alias module:model/FormGroupFormList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FormGroupFormList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormGroupFormList} obj Optional instance to populate.
   * @return {module:model/FormGroupFormList} The populated <code>FormGroupFormList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('forms')) {
        obj['forms'] = ApiClient.convertToType(data['forms'], [FormGroupForm]);
      }
      if (data.hasOwnProperty('resultSetSize')) {
        obj['resultSetSize'] = ApiClient.convertToType(data['resultSetSize'], 'Number');
      }
      if (data.hasOwnProperty('startPosition')) {
        obj['startPosition'] = ApiClient.convertToType(data['startPosition'], 'Number');
      }
      if (data.hasOwnProperty('endPosition')) {
        obj['endPosition'] = ApiClient.convertToType(data['endPosition'], 'Number');
      }
      if (data.hasOwnProperty('nextUri')) {
        obj['nextUri'] = ApiClient.convertToType(data['nextUri'], 'String');
      }
      if (data.hasOwnProperty('priorUri')) {
        obj['priorUri'] = ApiClient.convertToType(data['priorUri'], 'String');
      }
      if (data.hasOwnProperty('totalRowCount')) {
        obj['totalRowCount'] = ApiClient.convertToType(data['totalRowCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/FormGroupForm>} forms
   */
  exports.prototype['forms'] = undefined;
  /**
   * @member {Number} resultSetSize
   */
  exports.prototype['resultSetSize'] = undefined;
  /**
   * @member {Number} startPosition
   */
  exports.prototype['startPosition'] = undefined;
  /**
   * @member {Number} endPosition
   */
  exports.prototype['endPosition'] = undefined;
  /**
   * @member {String} nextUri
   */
  exports.prototype['nextUri'] = undefined;
  /**
   * @member {String} priorUri
   */
  exports.prototype['priorUri'] = undefined;
  /**
   * @member {Number} totalRowCount
   */
  exports.prototype['totalRowCount'] = undefined;



  return exports;
}));


