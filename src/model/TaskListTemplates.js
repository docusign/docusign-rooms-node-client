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
    root.Docusign.TaskListTemplates = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaskListTemplates model module.
   * @module model/TaskListTemplates
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TaskListTemplates</code>.
   * A task list template is a custom task list that can be added to rooms. 
   * @alias module:model/TaskListTemplates
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaskListTemplates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskListTemplates} obj Optional instance to populate.
   * @return {module:model/TaskListTemplates} The populated <code>TaskListTemplates</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('taskListTemplateId'))
        obj.taskListTemplateId = ApiClient.convertToType(data['taskListTemplateId'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('taskCount'))
        obj.taskCount = ApiClient.convertToType(data['taskCount'], 'Number');
      if (data.hasOwnProperty('tasksWithDocumentsCount'))
        obj.tasksWithDocumentsCount = ApiClient.convertToType(data['tasksWithDocumentsCount'], 'Number');
    }
    return obj;
  }

  /**
   * The id of the task list template.
   * @member {Number} taskListTemplateId
   */
  exports.prototype.taskListTemplateId = undefined;

  /**
   * The name of the office.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The total number of tasks in the task list template.
   * @member {Number} taskCount
   */
  exports.prototype.taskCount = undefined;

  /**
   * The number of tasks in the task list template that have documents associated with them.
   * @member {Number} tasksWithDocumentsCount
   */
  exports.prototype.tasksWithDocumentsCount = undefined;

  return exports;

}));
