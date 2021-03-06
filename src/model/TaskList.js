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
    define(['ApiClient', 'model/TaskSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignRooms) {
      root.DocusignRooms = {};
    }
    root.DocusignRooms.TaskList = factory(root.DocusignRooms.ApiClient, root.DocusignRooms.TaskSummary);
  }
}(this, function(ApiClient, TaskSummary) {
  'use strict';


  /**
   * The TaskList model module.
   * @module model/TaskList
   */

  /**
   * Constructs a new <code>TaskList</code>.
   * @alias module:model/TaskList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TaskList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskList} obj Optional instance to populate.
   * @return {module:model/TaskList} The populated <code>TaskList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('taskListId')) {
        obj['taskListId'] = ApiClient.convertToType(data['taskListId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('taskListTemplateId')) {
        obj['taskListTemplateId'] = ApiClient.convertToType(data['taskListTemplateId'], 'Number');
      }
      if (data.hasOwnProperty('submittedForReviewDate')) {
        obj['submittedForReviewDate'] = ApiClient.convertToType(data['submittedForReviewDate'], 'Date');
      }
      if (data.hasOwnProperty('approvalDate')) {
        obj['approvalDate'] = ApiClient.convertToType(data['approvalDate'], 'Date');
      }
      if (data.hasOwnProperty('rejectedDate')) {
        obj['rejectedDate'] = ApiClient.convertToType(data['rejectedDate'], 'Date');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
      }
      if (data.hasOwnProperty('approvedByUserId')) {
        obj['approvedByUserId'] = ApiClient.convertToType(data['approvedByUserId'], 'Number');
      }
      if (data.hasOwnProperty('rejectedByUserId')) {
        obj['rejectedByUserId'] = ApiClient.convertToType(data['rejectedByUserId'], 'Number');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('tasks')) {
        obj['tasks'] = ApiClient.convertToType(data['tasks'], [TaskSummary]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} taskListId
   */
  exports.prototype['taskListId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} taskListTemplateId
   */
  exports.prototype['taskListTemplateId'] = undefined;
  /**
   * @member {Date} submittedForReviewDate
   */
  exports.prototype['submittedForReviewDate'] = undefined;
  /**
   * @member {Date} approvalDate
   */
  exports.prototype['approvalDate'] = undefined;
  /**
   * @member {Date} rejectedDate
   */
  exports.prototype['rejectedDate'] = undefined;
  /**
   * @member {Date} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * @member {Number} approvedByUserId
   */
  exports.prototype['approvedByUserId'] = undefined;
  /**
   * @member {Number} rejectedByUserId
   */
  exports.prototype['rejectedByUserId'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {Array.<module:model/TaskSummary>} tasks
   */
  exports.prototype['tasks'] = undefined;



  return exports;
}));


