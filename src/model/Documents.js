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
    root.Docusign.Documents = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Documents model module.
   * @module model/Documents
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Documents</code>.
   * Information about a document. This object is read-only when used as a response.
   * @alias module:model/Documents
   * @class
   * @param name {String} The name of the document.
   * @param base64Contents {String} In a response, when the query parameter `includeContents` is **true**, the base64-encoded contents of the document.  In a request, the base64-encoded contents of the document to add.
   */
  var exports = function(name, base64Contents) {
    this.name = name;
    this.base64Contents = base64Contents;
  };

  /**
   * Constructs a <code>Documents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Documents} obj Optional instance to populate.
   * @return {module:model/Documents} The populated <code>Documents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('documentId'))
        obj.documentId = ApiClient.convertToType(data['documentId'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('roomId'))
        obj.roomId = ApiClient.convertToType(data['roomId'], 'Number');
      if (data.hasOwnProperty('ownerId'))
        obj.ownerId = ApiClient.convertToType(data['ownerId'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('folderId'))
        obj.folderId = ApiClient.convertToType(data['folderId'], 'Number');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'Date');
      if (data.hasOwnProperty('isSigned'))
        obj.isSigned = ApiClient.convertToType(data['isSigned'], 'Boolean');
      if (data.hasOwnProperty('base64Contents'))
        obj.base64Contents = ApiClient.convertToType(data['base64Contents'], 'String');
    }
    return obj;
  }

  /**
   * The ID of the document.
   * @member {Number} documentId
   */
  exports.prototype.documentId = undefined;

  /**
   * The name of the document.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The id of the room the document belongs to.
   * @member {Number} roomId
   */
  exports.prototype.roomId = undefined;

  /**
   * The id of the user who owns the document.
   * @member {Number} ownerId
   */
  exports.prototype.ownerId = undefined;

  /**
   * The size of the document in bytes. This is the number of bytes in the _decoded_ document, not the size of `base64Contents`.
   * @member {Number} size
   */
  exports.prototype.size = undefined;

  /**
   * The id of the folder the document is in.
   * @member {Number} folderId
   */
  exports.prototype.folderId = undefined;

  /**
   * The UTC DateTime when the document was created.   Example: `2019-07-25T22:18:56.95Z`
   * @member {Date} createdDate
   */
  exports.prototype.createdDate = undefined;

  /**
   * **True** if the document is signed.
   * @member {Boolean} isSigned
   */
  exports.prototype.isSigned = undefined;

  /**
   * In a response, when the query parameter `includeContents` is **true**, the base64-encoded contents of the document.  In a request, the base64-encoded contents of the document to add.
   * @member {String} base64Contents
   */
  exports.prototype.base64Contents = undefined;

  return exports;

}));
