/* Weex JS Runtime 0.29.7, Build 2020-11-11 18:42. */


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WeexJSRuntime = factory());
}(this, (function () { 'use strict';

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getHookKey (componentId, type, hookName) {
  return (type + "@" + hookName + "#" + componentId)
}

/**
 * For general callback management of a certain Weex instance.
 * Because function can not passed into native, so we create callback
 * callback id for each function and pass the callback id into native
 * in fact. And when a callback called from native, we can find the real
 * callback through the callback id we have passed before.
 */
var CallbackManager = function CallbackManager (instanceId) {
  this.instanceId = String(instanceId);
  this.lastCallbackId = 0;
  this.callbacks = {};
  this.hooks = {};
};
CallbackManager.prototype.add = function add (callback) {
  this.lastCallbackId++;
  this.callbacks[this.lastCallbackId] = callback;
  return this.lastCallbackId
};
CallbackManager.prototype.remove = function remove (callbackId) {
  var callback = this.callbacks[callbackId];
  delete this.callbacks[callbackId];
  return callback
};
CallbackManager.prototype.registerHook = function registerHook (componentId, type, hookName, hookFunction) {
  // TODO: validate arguments
  var key = getHookKey(componentId, type, hookName);
  if (this.hooks[key]) {
    console.warn(("[JS Framework] Override an existing component hook \"" + key + "\"."));
  }
  this.hooks[key] = hookFunction;
};
CallbackManager.prototype.triggerHook = function triggerHook (componentId, type, hookName, args) {
  // TODO: validate arguments
  var key = getHookKey(componentId, type, hookName);
  var hookFunction = this.hooks[key];
  if (typeof hookFunction !== 'function') {
    console.error(("[JS Framework] Invalid hook function type (" + (typeof hookFunction) + ") on \"" + key + "\"."));
    return null
  }
  var result = null;
  try {
    result = hookFunction.apply(null, args || []);
  }
  catch (e) {
    console.error(("[JS Framework] Failed to execute the hook function on \"" + key + "\"."));
    throw e
  }
  return result
};
CallbackManager.prototype.consume = function consume (callbackId, data, ifKeepAlive) {
  var callback = this.callbacks[callbackId];
  if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
    delete this.callbacks[callbackId];
  }
  if (typeof callback === 'function') {
    try {
      return callback.call(null, data)
    }
    catch (error) {
      console.error(("[JS Framework] Failed to execute the callback function:\n " + (error.toString())));
      throw error
    }
  }
  return new Error(("invalid callback id \"" + callbackId + "\""))
};
CallbackManager.prototype.close = function close () {
  this.callbacks = {};
  this.hooks = {};
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Get a unique id.
 */
var nextNodeRef = 1;
function uniqueId () {
  return (nextNodeRef++).toString()
}

function typof (v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1)
}

function isPlainObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

function hasOwn (object, key) {
  return isPlainObject(object) && Object.prototype.hasOwnProperty.call(object, key)
}

function bufferToBase64 (buffer) {
  if (typeof btoa !== 'function') {
    return ''
  }
  var string = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (code) { return String.fromCharCode(code); }
  ).join('');
  return btoa(string) // eslint-disable-line no-undef
}



/**
 * Detect if the param is falsy or empty
 * @param {any} any
 */
function isEmpty (any) {
  if (!any || typeof any !== 'object') {
    return true
  }

  for (var key in any) {
    if (Object.prototype.hasOwnProperty.call(any, key)) {
      return false
    }
  }
  return true
}

var levelMap = {};

/**
 * Generate map for which types of message will be sent in a certain message level
 * as the order of LEVELS.
 */


/**
 * Reset level map to empty object,
 * then the log level can be toggled at runtime.
 */


/**
 * Check if a certain type of message will be sent in current log level of env.
 * @param  {string} type
 * @return {boolean}
 */
function checkLevel (type) {
  var logLevel = (global.WXEnvironment && global.WXEnvironment.logLevel) || 'log';
  return levelMap[logLevel] && levelMap[logLevel][type]
}

/**
 * Print debug log regardless of level check.
 *
 * This methods can avoid "double level check" compared with using wrapped console.debug
 */
function debugLog (text) {
  global.nativeLog('wxInteractionAnalyzer: [jsfm]' + text, '__DEBUG');
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var docMap = {};

/**
 * Add a document object into docMap.
 * @param {string} id
 * @param {object} document
 */
function addDoc (id, doc) {
  if (id) {
    docMap[id] = doc;
  }
}

/**
 * Get the document object by id.
 * @param {string} id
 */
function getDoc (id) {
  return docMap[id]
}

/**
 * Remove the document from docMap by id.
 * @param {string} id
 */
function removeDoc (id) {
  delete docMap[id];
}

/**
 * @deprecated
 * Get listener by document id.
 * @param {string} id
 * @return {object} listener
 */


/**
 * Get TaskCenter instance by id.
 * @param {string} id
 * @return {object} TaskCenter
 */
function getTaskCenter (id) {
  var doc = docMap[id];
  if (doc && doc.taskCenter) {
    return doc.taskCenter
  }
  return null
}

/**
 * Append body node to documentElement.
 * @param {object} document
 * @param {object} node
 * @param {object} before
 */
function appendBody (doc, node, before) {
  var documentElement = doc.documentElement;

  if (documentElement.pureChildren.length > 0 || node.parentNode) {
    return
  }
  var children = documentElement.children;
  var beforeIndex = children.indexOf(before);
  if (beforeIndex < 0) {
    children.push(node);
  }
  else {
    children.splice(beforeIndex, 0, node);
  }

  if (node.nodeType === 1) {
    if (node.role === 'body') {
      node.docId = doc.id;
      node.ownerDocument = doc;
      node.parentNode = documentElement;
      linkParent(node, documentElement);
    }
    else {
      node.children.forEach(function (child) {
        child.parentNode = node;
      });
      setBody(doc, node);
      node.docId = doc.id;
      node.ownerDocument = doc;
      linkParent(node, documentElement);
      delete doc.nodeMap[node.nodeId];
    }
    documentElement.pureChildren.push(node);
    sendBody(doc, node);
  }
  else {
    node.parentNode = documentElement;
    doc.nodeMap[node.ref] = node;
  }
}

function sendBody (doc, node) {
  var body = node.toJSON();
  if (doc && doc.taskCenter && typeof doc.taskCenter.send === 'function') {
    doc.taskCenter.send('dom', { action: 'createBody' }, [body]);
  }
}

/**
 * Set up body node.
 * @param {object} document
 * @param {object} element
 */
function setBody (doc, el) {
  el.role = 'body';
  el.depth = 1;
  delete doc.nodeMap[el.nodeId];
  el.ref = '_root';
  doc.nodeMap._root = el;
  doc.body = el;
}

/**
 * Establish the connection between parent and child node.
 * @param {object} child node
 * @param {object} parent node
 */
function linkParent (node, parent) {
  node.parentNode = parent;
  if (parent.docId) {
    node.docId = parent.docId;
    node.ownerDocument = parent.ownerDocument;
    node.ownerDocument.nodeMap[node.nodeId] = node;
    node.depth = parent.depth + 1;
  }
  node.children.forEach(function (child) {
    linkParent(child, node);
  });
}

/**
 * Get the next sibling element.
 * @param {object} node
 */
function nextElement (node) {
  while (node) {
    if (node.nodeType === 1) {
      return node
    }
    node = node.nextSibling;
  }
}

/**
 * Get the previous sibling element.
 * @param {object} node
 */
function previousElement (node) {
  while (node) {
    if (node.nodeType === 1) {
      return node
    }
    node = node.previousSibling;
  }
}

/**
 * Insert a node into list at the specified index.
 * @param {object} target node
 * @param {array} list
 * @param {number} newIndex
 * @param {boolean} changeSibling
 * @return {number} newIndex
 */
function insertIndex (target, list, newIndex, changeSibling) {
  /* istanbul ignore next */
  if (newIndex < 0) {
    newIndex = 0;
  }
  var before = list[newIndex - 1];
  var after = list[newIndex];
  list.splice(newIndex, 0, target);
  if (changeSibling) {
    before && (before.nextSibling = target);
    target.previousSibling = before;
    target.nextSibling = after;
    after && (after.previousSibling = target);
  }
  return newIndex
}

/**
 * Move the node to a new index in list.
 * @param {object} target node
 * @param {array} list
 * @param {number} newIndex
 * @param {boolean} changeSibling
 * @return {number} newIndex
 */
function moveIndex (target, list, newIndex, changeSibling) {
  var index = list.indexOf(target);
  /* istanbul ignore next */
  if (index < 0) {
    return -1
  }
  if (changeSibling) {
    var before = list[index - 1];
    var after = list[index + 1];
    before && (before.nextSibling = after);
    after && (after.previousSibling = before);
  }
  list.splice(index, 1);
  var newIndexAfter = newIndex;
  if (index <= newIndex) {
    newIndexAfter = newIndex - 1;
  }
  var beforeNew = list[newIndexAfter - 1];
  var afterNew = list[newIndexAfter];
  list.splice(newIndexAfter, 0, target);
  if (changeSibling) {
    beforeNew && (beforeNew.nextSibling = target);
    target.previousSibling = beforeNew;
    target.nextSibling = afterNew;
    afterNew && (afterNew.previousSibling = target);
  }
  if (index === newIndexAfter) {
    return -1
  }
  return newIndex
}

/**
 * Remove the node from list.
 * @param {object} target node
 * @param {array} list
 * @param {boolean} changeSibling
 */
function removeIndex (target, list, changeSibling) {
  var index = list.indexOf(target);
  /* istanbul ignore next */
  if (index < 0) {
    return
  }
  if (changeSibling) {
    var before = list[index - 1];
    var after = list[index + 1];
    before && (before.nextSibling = after);
    after && (after.previousSibling = before);
  }
  list.splice(index, 1);
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var Node = function Node () {
  this.nodeId = uniqueId();
  this.ref = this.nodeId;
  this.children = [];
  this.pureChildren = [];
  this.parentNode = null;
  this.nextSibling = null;
  this.previousSibling = null;
};

/**
* Destroy current node, and remove itself form nodeMap.
*/
Node.prototype.destroy = function destroy () {
  var doc = getDoc(this.docId);
  if (doc) {
    delete this.docId;
    delete doc.nodeMap[this.nodeId];
  }
  this.children.forEach(function (child) {
    child.destroy();
  });
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var Element$2;

function setElement (El) {
  Element$2 = El;
}

/**
 * A map which stores all type of elements.
 * @type {Object}
 */
var registeredElements = {};

/**
 * Register an extended element type with component methods.
 * @param  {string} type    component type
 * @param  {array}  methods a list of method names
 */
function registerElement (type, methods) {
  // Skip when no special component methods.
  if (!Array.isArray(methods) || !methods.length) {
    return
  }

  // Init constructor.
  var WeexElement = (function (Element) {
    function WeexElement () {
      Element.apply(this, arguments);
    }if ( Element ) WeexElement.__proto__ = Element;
    WeexElement.prototype = Object.create( Element && Element.prototype );
    WeexElement.prototype.constructor = WeexElement;

    

    return WeexElement;
  }(Element$2));

  // Add methods to prototype.
  methods.forEach(function (methodName) {
    WeexElement.prototype[methodName] = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var taskCenter = getTaskCenter(this.docId);
      if (taskCenter) {
        return taskCenter.send('component', {
          ref: this.ref,
          component: type,
          method: methodName
        }, args)
      }
    };
  });

  // Add to element type map.
  registeredElements[type] = WeexElement;
}



function getWeexElement (type) {
  return registeredElements[type]
}



/**
 * Clear all element types. Only for testing.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var DEFAULT_TAG_NAME = 'div';
var BUBBLE_EVENTS = [
  'click', 'longpress', 'touchstart', 'touchmove', 'touchend',
  'panstart', 'panmove', 'panend', 'horizontalpan', 'verticalpan', 'swipe'
];

function registerNode (docId, node) {
  var doc = getDoc(docId);
  doc.nodeMap[node.nodeId] = node;
}

var Element = (function (Node$$1) {
  function Element (type, props, isExtended) {
    if ( type === void 0 ) type = DEFAULT_TAG_NAME;

    Node$$1.call(this);

    var WeexElement = getWeexElement(type);
    if (WeexElement && !isExtended) {
      return new WeexElement(type, props, true)
    }

    props = props || {};
    this.nodeType = 1;
    this.nodeId = uniqueId();
    this.ref = this.nodeId;
    this.type = type;
    this.attr = props.attr || {};
    this.style = props.style || {};
    this.classStyle = props.classStyle || {};
    this.event = {};
    this.children = [];
    this.pureChildren = [];
  }

  if ( Node$$1 ) Element.__proto__ = Node$$1;
  Element.prototype = Object.create( Node$$1 && Node$$1.prototype );
  Element.prototype.constructor = Element;

  /**
   * Append a child node.
   * @param {object} node
   * @return {undefined | number} the signal sent by native
   */
  Element.prototype.appendChild = function appendChild (node) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    /* istanbul ignore else */
    if (!node.parentNode) {
      if (checkLevel('debug')) {
        debugLog("[appendChild](" + (this.docId) + "," + (node.type) + "," + (node.ref) + ") "
          + "Append <" + (node.type) + "> to <" + (this.type) + "> (" + (this.ref) + ").");
      }
      linkParent(node, this);
      insertIndex(node, this.children, this.children.length, true);
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        insertIndex(node, this.pureChildren, this.pureChildren.length);
        var taskCenter = getTaskCenter(this.docId);
        if (taskCenter) {
          return taskCenter.send(
            'dom',
            { action: 'addElement' },
            [this.ref, node.toJSON(), -1]
          )
        }
      }
    }
    else {
      if (checkLevel('debug')) {
        debugLog("[appendChild](" + (this.docId) + "," + (node.type) + "," + (node.ref) + ") "
          + "Move <" + (node.type) + "> to " + (this.children.length) + " of <" + (this.type) + "> (" + (this.ref) + ").");
      }
      moveIndex(node, this.children, this.children.length, true);
      if (node.nodeType === 1) {
        var index = moveIndex(node, this.pureChildren, this.pureChildren.length);
        var taskCenter$1 = getTaskCenter(this.docId);
        if (taskCenter$1 && index >= 0) {
          return taskCenter$1.send(
            'dom',
            { action: 'moveElement' },
            [node.ref, this.ref, index]
          )
        }
      }
    }
  };

  /**
   * Insert a node before specified node.
   * @param {object} node
   * @param {object} before
   * @return {undefined | number} the signal sent by native
   */
  Element.prototype.insertBefore = function insertBefore (node, before) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    if (node === before || (node.nextSibling && node.nextSibling === before)) {
      return
    }
    if (!node.parentNode) {
      if (checkLevel('debug')) {
        debugLog("[insertBefore](" + (this.docId) + "," + (node.type) + "," + (node.ref) + ") "
          + "Insert <" + (node.type) + "> to <" + (this.type) + "> (" + (this.ref) + "), before (" + (before.ref) + ").");
      }
      linkParent(node, this);
      insertIndex(node, this.children, this.children.indexOf(before), true);
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        var pureBefore = nextElement(before);
        var index = insertIndex(
          node,
          this.pureChildren,
          pureBefore
            ? this.pureChildren.indexOf(pureBefore)
            : this.pureChildren.length
        );
        var taskCenter = getTaskCenter(this.docId);
        if (taskCenter) {
          return taskCenter.send(
            'dom',
            { action: 'addElement' },
            [this.ref, node.toJSON(), index]
          )
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.indexOf(before), true);
      if (node.nodeType === 1) {
        var pureBefore$1 = nextElement(before);
        /* istanbul ignore next */
        var index$1 = moveIndex(
          node,
          this.pureChildren,
          pureBefore$1
            ? this.pureChildren.indexOf(pureBefore$1)
            : this.pureChildren.length
        );
        var taskCenter$1 = getTaskCenter(this.docId);
        if (taskCenter$1 && index$1 >= 0) {
          return taskCenter$1.send(
            'dom',
            { action: 'moveElement' },
            [node.ref, this.ref, index$1]
          )
        }
      }
    }
  };

  /**
   * Insert a node after specified node.
   * @param {object} node
   * @param {object} after
   * @return {undefined | number} the signal sent by native
   */
  Element.prototype.insertAfter = function insertAfter (node, after) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    if (node === after || (node.previousSibling && node.previousSibling === after)) {
      return
    }
    if (!node.parentNode) {
      if (checkLevel('debug')) {
        debugLog("[insertAfter](" + (this.docId) + "," + (node.type) + "," + (node.ref) + ") "
          + "Insert <" + (node.type) + "> to <" + (this.type) + "> (" + (this.ref) + "), after (" + (after.ref) + ").");
      }
      linkParent(node, this);
      insertIndex(node, this.children, this.children.indexOf(after) + 1, true);
      /* istanbul ignore else */
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        var index = insertIndex(
          node,
          this.pureChildren,
          this.pureChildren.indexOf(previousElement(after)) + 1
        );
        var taskCenter = getTaskCenter(this.docId);
        /* istanbul ignore else */
        if (taskCenter) {
          return taskCenter.send(
            'dom',
            { action: 'addElement' },
            [this.ref, node.toJSON(), index]
          )
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.indexOf(after) + 1, true);
      if (node.nodeType === 1) {
        var index$1 = moveIndex(
          node,
          this.pureChildren,
          this.pureChildren.indexOf(previousElement(after)) + 1
        );
        var taskCenter$1 = getTaskCenter(this.docId);
        if (taskCenter$1 && index$1 >= 0) {
          return taskCenter$1.send(
            'dom',
            { action: 'moveElement' },
            [node.ref, this.ref, index$1]
          )
        }
      }
    }
  };

  /**
   * Remove a child node, and decide whether it should be destroyed.
   * @param {object} node
   * @param {boolean} preserved
   */
  Element.prototype.removeChild = function removeChild (node, preserved) {
    if (node.parentNode) {
      removeIndex(node, this.children, true);
      if (node.nodeType === 1) {
        if (checkLevel('debug')) {
          debugLog("[removeChild](" + (this.docId) + "," + (node.type) + "," + (node.ref) + ") "
            + "Remove <" + (node.type) + "> from <" + (this.type) + "> (" + (this.ref) + ").");
        }
        removeIndex(node, this.pureChildren);
        var taskCenter = getTaskCenter(this.docId);
        if (taskCenter) {
          taskCenter.send(
            'dom',
            { action: 'removeElement' },
            [node.ref]
          );
        }
      }
    }
    if (!preserved) {
      node.destroy();
    }
  };

  /**
   * Clear all child nodes.
   */
  Element.prototype.clear = function clear () {
    var taskCenter = getTaskCenter(this.docId);
    /* istanbul ignore else */
    if (taskCenter) {
      this.pureChildren.forEach(function (node) {
        taskCenter.send(
          'dom',
          { action: 'removeElement' },
          [node.ref]
        );
      });
    }
    this.children.forEach(function (node) {
      node.destroy();
    });
    this.children.length = 0;
    this.pureChildren.length = 0;
  };

  /**
   * Set an attribute, and decide whether the task should be send to native.
   * @param {string} key
   * @param {string | number} value
   * @param {boolean} silent
   */
  Element.prototype.setAttr = function setAttr (key, value, silent) {
    if (this.attr[key] === value && silent !== false) {
      return
    }
    this.attr[key] = value;
    var taskCenter = getTaskCenter(this.docId);
    if (!silent && taskCenter) {
      var result = {};
      result[key] = value;
      taskCenter.send(
        'dom',
        { action: 'updateAttrs' },
        [this.ref, result]
      );
    }
  };

  /**
   * Set batched attributes.
   * @param {object} batchedAttrs
   * @param {boolean} silent
   */
  Element.prototype.setAttrs = function setAttrs (batchedAttrs, silent) {
    var this$1 = this;

    if (isEmpty(batchedAttrs)) { return }
    var mutations = {};
    for (var key in batchedAttrs) {
      if (this$1.attr[key] !== batchedAttrs[key]) {
        this$1.attr[key] = batchedAttrs[key];
        mutations[key] = batchedAttrs[key];
      }
    }
    if (!isEmpty(mutations)) {
      var taskCenter = getTaskCenter(this.docId);
      if (!silent && taskCenter) {
        taskCenter.send(
          'dom',
          { action: 'updateAttrs' },
          [this.ref, mutations]
        );
      }
    }
  };

  /**
   * Set a style property, and decide whether the task should be send to native.
   * @param {string} key
   * @param {string | number} value
   * @param {boolean} silent
   */
  Element.prototype.setStyle = function setStyle (key, value, silent) {
    if (this.style[key] === value && silent !== false) {
      return
    }
    this.style[key] = value;
    var taskCenter = getTaskCenter(this.docId);
    if (!silent && taskCenter) {
      var result = {};
      result[key] = value;
      taskCenter.send(
        'dom',
        { action: 'updateStyle' },
        [this.ref, result]
      );
    }
  };

  /**
   * Set batched style properties.
   * @param {object} batchedStyles
   * @param {boolean} silent
   */
  Element.prototype.setStyles = function setStyles (batchedStyles, silent) {
    var this$1 = this;

    if (isEmpty(batchedStyles)) { return }
    var mutations = {};
    for (var key in batchedStyles) {
      if (this$1.style[key] !== batchedStyles[key]) {
        this$1.style[key] = batchedStyles[key];
        mutations[key] = batchedStyles[key];
      }
    }
    if (!isEmpty(mutations)) {
      var taskCenter = getTaskCenter(this.docId);
      if (!silent && taskCenter) {
        taskCenter.send(
          'dom',
          { action: 'updateStyle' },
          [this.ref, mutations]
        );
      }
    }
  };

  /**
   * Set style properties from class.
   * @param {object} classStyle
   */
  Element.prototype.setClassStyle = function setClassStyle (classStyle) {
    var this$1 = this;

    // reset previous class style to empty string
    for (var key in this$1.classStyle) {
      this$1.classStyle[key] = '';
    }

    Object.assign(this.classStyle, classStyle);
    var taskCenter = getTaskCenter(this.docId);
    if (taskCenter) {
      taskCenter.send(
        'dom',
        { action: 'updateStyle' },
        [this.ref, this.toStyle()]
      );
    }
  };

  /**
   * Add an event handler.
   * @param {string} event type
   * @param {function} event handler
   */
  Element.prototype.addEvent = function addEvent (type, handler, params) {
    if (!this.event) {
      this.event = {};
    }
    if (!this.event[type]) {
      if (checkLevel('debug')) {
        debugLog("[addEvent](" + (this.docId) + "," + (this.type) + "," + (this.ref) + ") "
          + "Add \"" + type + "\" event on <" + (this.type) + "> (" + (this.ref) + ").");
      }
      this.event[type] = { handler: handler, params: params };
      var taskCenter = getTaskCenter(this.docId);
      if (taskCenter) {
        taskCenter.send(
          'dom',
          { action: 'addEvent' },
          [this.ref, type]
        );
      }
    }
  };

  /**
   * Remove an event handler.
   * @param {string} event type
   */
  Element.prototype.removeEvent = function removeEvent (type) {
    if (this.event && this.event[type]) {
      if (checkLevel('debug')) {
        debugLog("[removeEvent](" + (this.docId) + "," + (this.type) + "," + (this.ref) + ") "
          + "Remove \"" + type + "\" event on <" + (this.type) + "> (" + (this.ref) + ").");
      }
      delete this.event[type];
      var taskCenter = getTaskCenter(this.docId);
      if (taskCenter) {
        taskCenter.send(
          'dom',
          { action: 'removeEvent' },
          [this.ref, type]
        );
      }
    }
  };

  /**
   * Fire an event manually.
   * @param {string} type type
   * @param {function} event handler
   * @param {boolean} isBubble whether or not event bubble
   * @param {boolean} options
   * @return {} anything returned by handler function
   */
  Element.prototype.fireEvent = function fireEvent (type, event, isBubble, options) {
    var result = null;
    var isStopPropagation = false;
    var eventDesc = this.event[type];
    if (eventDesc && event) {
      if (checkLevel('debug')) {
        debugLog("[fireEvent](" + (this.docId) + "," + (this.type) + "," + (this.ref) + ") "
          + "Fire \"" + type + "\" event on <" + (this.type) + "> (" + (this.ref) + ").");
      }
      var handler = eventDesc.handler;
      event.stopPropagation = function () {
        isStopPropagation = true;
      };
      try {
        if (options && options.params) {
          result = handler.call.apply(handler, [ this ].concat( options.params, [event] ));
        }
        else {
          result = handler.call(this, event);
        }
      }
      catch (error) {
        console.error("[JS Framework] Failed to invoke the event handler of \"" + type + "\" "
          + "on " + (this.type) + " (" + (this.ref) + "):\n " + (error.toString()));
        throw error
      }
    }

    if (!isStopPropagation
      && isBubble
      && (BUBBLE_EVENTS.indexOf(type) !== -1)
      && this.parentNode
      && this.parentNode.fireEvent) {
      event.currentTarget = this.parentNode;
      this.parentNode.fireEvent(type, event, isBubble); // no options
    }

    return result
  };

  /**
   * Get all styles of current element.
   * @return {object} style
   */
  Element.prototype.toStyle = function toStyle () {
    return Object.assign({}, this.classStyle, this.style)
  };

  /**
   * Convert current element to JSON like object.
   * @param {boolean} ignoreChildren whether to ignore child nodes, default false
   * @return {object} element
   */
  Element.prototype.toJSON = function toJSON (ignoreChildren) {
    var this$1 = this;
    if ( ignoreChildren === void 0 ) ignoreChildren = false;

    var result = {
      ref: this.ref.toString(),
      type: this.type,
      attr: this.attr,
      style: this.toStyle()
    };
    var event = [];
    for (var type in this$1.event) {
      var ref = this$1.event[type];
      var params = ref.params;
      if (!params) {
        event.push(type);
      }
      else {
        event.push({ type: type, params: params });
      }
    }
    if (event.length) {
      result.event = event;
    }
    if (!ignoreChildren && this.pureChildren.length) {
      result.children = this.pureChildren.map(function (child) { return child.toJSON(); });
    }
    return result
  };

  /**
   * Convert to HTML element tag string.
   * @return {stirng} html
   */
  Element.prototype.toString = function toString () {
    return '<' + this.type +
    ' attr=' + JSON.stringify(this.attr) +
    ' style=' + JSON.stringify(this.toStyle()) + '>' +
    this.pureChildren.map(function (child) { return child.toString(); }).join('') +
    '</' + this.type + '>'
  };

  return Element;
}(Node));

setElement(Element);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Normalize a primitive value.
 * @param  {any}        v
 * @return {primitive}
 */
function normalizePrimitive (v) {
  var type = typof(v);

  switch (type) {
    case 'Undefined':
    case 'Null':
      return ''

    case 'RegExp':
      return v.toString()
    case 'Date':
      return v.toISOString()

    case 'Number':
    case 'String':
    case 'Boolean':
    case 'Array':
    case 'Object':
      return v

    case 'ArrayBuffer':
      return {
        '@type': 'binary',
        dataType: type,
        base64: bufferToBase64(v)
      }

    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      return {
        '@type': 'binary',
        dataType: type,
        base64: bufferToBase64(v.buffer)
      }

    default:
      return JSON.stringify(v)
  }
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var fallback = function () {};

// The API of TaskCenter would be re-design.
var TaskCenter = function TaskCenter (id, sendTasks) {
  Object.defineProperty(this, 'instanceId', {
    enumerable: true,
    value: String(id)
  });
  Object.defineProperty(this, 'callbackManager', {
    enumerable: true,
    value: new CallbackManager(id)
  });
  fallback = sendTasks || function () {};
};

TaskCenter.prototype.callback = function callback (callbackId, data, ifKeepAlive) {
  return this.callbackManager.consume(callbackId, data, ifKeepAlive)
};

TaskCenter.prototype.registerHook = function registerHook () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

  return (ref = this.callbackManager).registerHook.apply(ref, args)
    var ref;
};

TaskCenter.prototype.triggerHook = function triggerHook () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

  return (ref = this.callbackManager).triggerHook.apply(ref, args)
    var ref;
};

TaskCenter.prototype.updateData = function updateData (componentId, newData, callback) {
  this.send('module', {
    module: 'dom',
    method: 'updateComponentData'
  }, [componentId, newData, callback]);
};

TaskCenter.prototype.destroyCallback = function destroyCallback () {
  return this.callbackManager.close()
};

/**
 * Normalize a value. Specially, if the value is a function, then generate a function id
 * and save it to `CallbackManager`, at last return the function id.
 * @param{any}      v
 * @return {primitive}
 */
TaskCenter.prototype.normalize = function normalize (v, deep) {
    var this$1 = this;
    if ( deep === void 0 ) deep = false;

  var type = typof(v);
  if (v && v instanceof Element) {
    return v.ref
  }
  if (v && v._isVue && v.$el instanceof Element) {
    return v.$el.ref
  }
  if (type === 'Function') {
    return this.callbackManager.add(v).toString()
  }
  if (deep) {
    if (type === 'Object') {
      var object = {};
      for (var key in v) {
        object[key] = this$1.normalize(v[key], true);
      }
      return object
    }
    if (type === 'Array') {
      return v.map(function (item) { return this$1.normalize(item, true); })
    }
  }
  if (v && v.ref && v['[[VirtualElement]]']) {
    return v.ref
  }
  return normalizePrimitive(v)
};

TaskCenter.prototype.send = function send (type, params, args, options) {
    var this$1 = this;

  var action = params.action;
    var component = params.component;
    var ref = params.ref;
    var module = params.module;
    var method = params.method;

  // normalize args and options
  args = args.map(function (arg) { return this$1.normalize(arg); });
  if (typof(options) === 'Object') {
    options = this.normalize(options, true);
  }

  switch (type) {
    case 'dom': {
      if (checkLevel('debug')) {
        debugLog(("[task](" + (this.instanceId) + "," + (this.type) + "," + action + ") " + (JSON.stringify(args))));
      }
      return this[action](this.instanceId, args)
    }
    case 'component':
      return this.componentHandler(this.instanceId, ref, method, args, Object.assign({ component: component }, options))
    default: {
      if (checkLevel('debug')) {
        debugLog(("[task](" + (this.instanceId) + "," + module + "," + method + ") " + (JSON.stringify(args))));
      }
      return this.moduleHandler(this.instanceId, module, method, args, options)
    }
  }
};

TaskCenter.prototype.callDOM = function callDOM (action, args) {
  return this[action](this.instanceId, args)
};

TaskCenter.prototype.callComponent = function callComponent (ref, method, args, options) {
  return this.componentHandler(this.instanceId, ref, method, args, options)
};

TaskCenter.prototype.callModule = function callModule (module, method, args, options) {
  return this.moduleHandler(this.instanceId, module, method, args, options)
};

function init$1 () {
  var DOM_METHODS = {
    createFinish: global.callCreateFinish,
    updateFinish: global.callUpdateFinish,
    refreshFinish: global.callRefreshFinish,

    createBody: global.callCreateBody,

    addElement: global.callAddElement,
    removeElement: global.callRemoveElement,
    moveElement: global.callMoveElement,
    updateAttrs: global.callUpdateAttrs,
    updateStyle: global.callUpdateStyle,

    addEvent: global.callAddEvent,
    removeEvent: global.callRemoveEvent,
    __updateComponentData: global.__updateComponentData
  };
  var proto = TaskCenter.prototype;

  var loop = function ( name ) {
    var method = DOM_METHODS[name];
    proto[name] = method ?
      function (id, args) { return method.apply(void 0, [ id ].concat( args )); } :
      function (id, args) { return fallback(id, [{ module: 'dom', method: name, args: args }], '-1'); };
  };

  for (var name in DOM_METHODS) loop( name );

  proto.componentHandler = global.callNativeComponent ||
    (function (id, ref, method, args, options) { return fallback(id, [{ component: options.component, ref: ref, method: method, args: args }]); });

  proto.moduleHandler = global.callNativeModule ||
    (function (id, module, method, args) { return fallback(id, [{ module: module, method: method, args: args }]); });
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function fireEvent (document, nodeId, type, event, domChanges, params) {
  var el = document.getRef(nodeId);
  if (el) {
    return document.fireEvent(el, type, event, domChanges, params)
  }
  else if (event) {
    event._nodeId = nodeId;
    return document.fireEvent(document.getRef('_documentElement'), type, event, domChanges, params)
  }
}

function callback (document, callbackId, data, ifKeepAlive) {
  return document.taskCenter.callback(callbackId, data, ifKeepAlive)
}

function componentHook (document, componentId, type, hook, args) {
  if (!document || !document.taskCenter) {
    console.error("[JS Framework] Can't find \"document\" or \"taskCenter\".");
    return null
  }
  var result = null;
  try {
    result = document.taskCenter.triggerHook(componentId, type, hook, args);
  }
  catch (e) {
    console.error(("[JS Framework] Failed to trigger the \"" + type + "@" + hook + "\" hook on " + componentId + "."));

    // Still throw the exception anyway, it should be caught
    // and processed by the native for consistent error collecting.
    throw e
  }
  return result
}

/**
 * Accept calls from native (event or callback).
 *
 * @param  {string} id
 * @param  {array} tasks list with `method` and `args`
 */
function receiveTasks (id, tasks) {
  var document = getDoc(id);
  if (!document) {
    return new Error("[JS Framework] Failed to receiveTasks, "
      + "instance (" + id + ") is not available.")
  }
  if (Array.isArray(tasks)) {
    return tasks.map(function (task) {
      switch (task.method) {
        case 'callback': return callback.apply(void 0, [ document ].concat( task.args ))
        case 'fireEventSync':
        case 'fireEvent': return fireEvent.apply(void 0, [ document ].concat( task.args ))
        case 'componentHook': return componentHook.apply(void 0, [ document ].concat( task.args ))
      }
    })
  }
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var weexModules = {};

/**
 * Register native modules information.
 * @param {object} newModules
 */
function registerModules (newModules) {
  if ( newModules === void 0 ) newModules = {};

  var loop = function ( name ) {
    if (!hasOwn(weexModules, name)) {
      weexModules[name] = {};
    }
    if (Array.isArray(newModules[name])) {
      newModules[name].forEach(function (method) {
        if (typeof method === 'string') {
          weexModules[name][method] = true;
        }
        else if (isPlainObject(method) && typeof method.name === 'string') {
          weexModules[name][method.name] = method.args || [];
        }
      });
    }
  };

  for (var name in newModules) loop( name );
}

/**
 * Check whether the module or the method has been registered.
 * @param {String} module name
 * @param {String} method name (optional)
 */
function isRegisteredModule (name, method) {
  if (typeof method === 'string') {
    return !!(weexModules[name] && weexModules[name][method])
  }
  return !!weexModules[name]
}

function getModuleDescription (name) {
  return weexModules[name]
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var weexComponents = {};

/**
 * Register native components information.
 * @param {array} newComponents
 */
function registerComponents(newComponents) {
  if (Array.isArray(newComponents)) {
    newComponents.forEach(function (component) {
      if (!component) {
        return
      }
      if (typeof component === 'string') {
        weexComponents[component] = true;
      }
      else if (isPlainObject(component) && typeof component.type === 'string') {
        weexComponents[component.type] = component;
        registerElement(component.type, component.methods);
      }
    });
  }
  return 'wtf'
}

/**
 * Check whether the component has been registered.
 * @param {String} component name
 */
function isRegisteredComponent(name) {
  return !!weexComponents[name]
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// JS Services

var services = [];

/**
 * Register a JavaScript service.
 * A JavaScript service options could have a set of lifecycle methods
 * for each Weex instance. For example: create, refresh, destroy.
 * For the JS framework maintainer if you want to supply some features
 * which need to work well in different Weex instances, even in different
 * frameworks separately. You can make a JavaScript service to init
 * its variables or classes for each Weex instance when it's created
 * and recycle them when it's destroyed.
 * @param {object} options Could have { create, refresh, destroy }
 *                         lifecycle methods. In create method it should
 *                         return an object of what variables or classes
 *                         would be injected into the Weex instance.
 */
function register (name, options) {
  if (has(name)) {
    console.warn(("Service \"" + name + "\" has been registered already!"));
  }
  else {
    options = Object.assign({}, options);
    services.push({ name: name, options: options });
  }
}

/**
 * Unregister a JavaScript service by name
 * @param {string} name
 */
function unregister (name) {
  services.some(function (service, index) {
    if (service.name === name) {
      services.splice(index, 1);
      return true
    }
  });
}

/**
 * Check if a JavaScript service with a certain name existed.
 * @param  {string}  name
 * @return {Boolean}
 */
function has (name) {
  return indexOf(name) >= 0
}

/**
 * Find the index of a JavaScript service by name
 * @param  {string} name
 * @return {number}
 */
function indexOf (name) {
  return services.map(function (service) { return service.name; }).indexOf(name)
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var Comment = (function (Node$$1) {
  function Comment (value) {
    Node$$1.call(this);

    this.nodeType = 8;
    this.nodeId = uniqueId();
    this.ref = this.nodeId;
    this.type = 'comment';
    this.value = value;
    this.children = [];
    this.pureChildren = [];
  }

  if ( Node$$1 ) Comment.__proto__ = Node$$1;
  Comment.prototype = Object.create( Node$$1 && Node$$1.prototype );
  Comment.prototype.constructor = Comment;

  /**
  * Convert to HTML comment string.
  * @return {stirng} html
  */
  Comment.prototype.toString = function toString () {
    return '<!-- ' + this.value + ' -->'
  };

  return Comment;
}(Node));

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
* Create the action object.
* @param {string} name
* @param {array} arguments
* @return {object} action
*/
function createAction (name, args) {
  if ( args === void 0 ) args = [];

  return { module: 'dom', method: name, args: args }
}

var Listener = function Listener (id, handler) {
  this.id = id;
  this.batched = false;
  this.updates = [];
  if (typeof handler === 'function') {
    Object.defineProperty(this, 'handler', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: handler
    });
  }
  else {
    console.error('[JS Runtime] invalid parameter, handler must be a function');
  }
};

/**
 * Send the "createFinish" signal.
 * @param {function} callback
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.createFinish = function createFinish (callback) {
  var handler = this.handler;
  return handler([createAction('createFinish')], callback)
};

/**
 * Send the "updateFinish" signal.
 * @param {function} callback
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.updateFinish = function updateFinish (callback) {
  var handler = this.handler;
  return handler([createAction('updateFinish')], callback)
};

/**
 * Send the "refreshFinish" signal.
 * @param {function} callback
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.refreshFinish = function refreshFinish (callback) {
  var handler = this.handler;
  return handler([createAction('refreshFinish')], callback)
};

/**
 * Send the "createBody" signal.
 * @param {object} element
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.createBody = function createBody (element) {
  var body = element.toJSON();
  var children = body.children;
  delete body.children;
  var actions = [createAction('createBody', [body])];
  if (children) {
    actions.push.apply(actions, children.map(function (child) {
      return createAction('addElement', [body.ref, child, -1])
    }));
  }
  return this.addActions(actions)
};

/**
 * Send the "addElement" signal.
 * @param {object} element
 * @param {stirng} reference id
 * @param {number} index
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.addElement = function addElement (element, ref, index) {
  if (!(index >= 0)) {
    index = -1;
  }
  return this.addActions(createAction('addElement', [ref, element.toJSON(), index]))
};

/**
 * Send the "removeElement" signal.
 * @param {stirng} reference id
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.removeElement = function removeElement (ref) {
  if (Array.isArray(ref)) {
    var actions = ref.map(function (r) { return createAction('removeElement', [r]); });
    return this.addActions(actions)
  }
  return this.addActions(createAction('removeElement', [ref]))
};

/**
 * Send the "moveElement" signal.
 * @param {stirng} target reference id
 * @param {stirng} parent reference id
 * @param {number} index
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.moveElement = function moveElement (targetRef, parentRef, index) {
  return this.addActions(createAction('moveElement', [targetRef, parentRef, index]))
};

/**
 * Send the "updateAttrs" signal.
 * @param {stirng} reference id
 * @param {stirng} key
 * @param {stirng} value
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.setAttr = function setAttr (ref, key, value) {
  var result = {};
  result[key] = value;
  return this.addActions(createAction('updateAttrs', [ref, result]))
};

/**
 * Send the "updateStyle" signal, update a sole style.
 * @param {stirng} reference id
 * @param {stirng} key
 * @param {stirng} value
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.setStyle = function setStyle (ref, key, value) {
  var result = {};
  result[key] = value;
  return this.addActions(createAction('updateStyle', [ref, result]))
};

/**
 * Send the "updateStyle" signal.
 * @param {stirng} reference id
 * @param {object} style
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.setStyles = function setStyles (ref, style) {
  return this.addActions(createAction('updateStyle', [ref, style]))
};

/**
 * Send the "addEvent" signal.
 * @param {stirng} reference id
 * @param {string} event type
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.addEvent = function addEvent (ref, type) {
  return this.addActions(createAction('addEvent', [ref, type]))
};

/**
 * Send the "removeEvent" signal.
 * @param {stirng} reference id
 * @param {string} event type
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.removeEvent = function removeEvent (ref, type) {
  return this.addActions(createAction('removeEvent', [ref, type]))
};

/**
 * Default handler.
 * @param {object | array} actions
 * @param {function} callback
 * @return {} anything returned by callback function
 */
Listener.prototype.handler = function handler (actions, cb) {
  return cb && cb()
};

/**
 * Add actions into updates.
 * @param {object | array} actions
 * @return {undefined | number} the signal sent by native
 */
Listener.prototype.addActions = function addActions (actions) {
  var updates = this.updates;
  var handler = this.handler;

  if (!Array.isArray(actions)) {
    actions = [actions];
  }

  if (this.batched) {
    updates.push.apply(updates, actions);
  }
  else {
    return handler(actions)
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileOverview
 * Task handler for communication between javascript and native.
 */

var handlerMap = {
  createBody: 'callCreateBody',
  addElement: 'callAddElement',
  removeElement: 'callRemoveElement',
  moveElement: 'callMoveElement',
  updateAttrs: 'callUpdateAttrs',
  updateStyle: 'callUpdateStyle',
  addEvent: 'callAddEvent',
  removeEvent: 'callRemoveEvent'
};

/**
 * Create a task handler.
 * @param {string} id
 * @param {function} handler
 * @return {function} taskHandler
 */
function createHandler (id, handler) {
  var defaultHandler = handler || global.callNative;

  /* istanbul ignore if */
  if (typeof defaultHandler !== 'function') {
    console.error('[JS Runtime] no default handler');
  }

  return function taskHandler (tasks) {
    /* istanbul ignore if */
    if (!Array.isArray(tasks)) {
      tasks = [tasks];
    }
    for (var i = 0; i < tasks.length; i++) {
      var returnValue = dispatchTask(id, tasks[i], defaultHandler);
      if (returnValue === -1) {
        return returnValue
      }
    }
  }
}

/**
 * Check if there is a corresponding available handler in the environment.
 * @param {string} module
 * @param {string} method
 * @return {boolean}
 */
function hasAvailableHandler (module, method) {
  return module === 'dom'
    && handlerMap[method]
    && typeof global[handlerMap[method]] === 'function'
}

/**
 * Dispatch the task to the specified handler.
 * @param {string} id
 * @param {object} task
 * @param {function} defaultHandler
 * @return {number} signal returned from native
 */
function dispatchTask (id, task, defaultHandler) {
  var module = task.module;
  var method = task.method;
  var args = task.args;

  if (hasAvailableHandler(module, method)) {
    return global[handlerMap[method]].apply(global, [ id ].concat( args, ['-1'] ))
  }

  return defaultHandler(id, [task], '-1')
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Update all changes for an element.
 * @param {object} element
 * @param {object} changes
 */
function updateElement (el, changes) {
  var attrs = changes.attrs || {};
  for (var name in attrs) {
    el.setAttr(name, attrs[name], true);
  }
  var style = changes.style || {};
  for (var name$1 in style) {
    el.setStyle(name$1, style[name$1], true);
  }
}

var Document = function Document (id, url, handler) {
  id = id ? id.toString() : '';
  this.id = id;
  this.URL = url;

  addDoc(id, this);
  this.nodeMap = {};
  var L = Document.Listener || Listener;
  this.listener = new L(id, handler || createHandler(id, Document.handler)); // deprecated
  this.taskCenter = new TaskCenter(id, handler ? function (id) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return handler.apply(void 0, args);
  } : Document.handler);
  this.createDocumentElement();
};

/**
* Get the node from nodeMap.
* @param {string} reference id
* @return {object} node
*/
Document.prototype.getRef = function getRef (ref) {
  return this.nodeMap[ref]
};

/**
* Turn on batched updates.
*/
Document.prototype.open = function open () {
  this.listener.batched = false;
};

/**
* Turn off batched updates.
*/
Document.prototype.close = function close () {
  this.listener.batched = true;
};

/**
* Create the document element.
* @return {object} documentElement
*/
Document.prototype.createDocumentElement = function createDocumentElement () {
    var this$1 = this;

  if (!this.documentElement) {
    var el = new Element('document');
    el.docId = this.id;
    el.ownerDocument = this;
    el.role = 'documentElement';
    el.depth = 0;
    el.ref = '_documentElement';
    this.nodeMap._documentElement = el;
    this.documentElement = el;

    Object.defineProperty(el, 'appendChild', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function (node) {
        appendBody(this$1, node);
      }
    });

    Object.defineProperty(el, 'insertBefore', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function (node, before) {
        appendBody(this$1, node, before);
      }
    });

    if (checkLevel('debug')) {
      debugLog(("Create document element (id: \"" + (el.docId) + "\", ref: \"" + (el.ref) + "\")"));
    }
  }

  return this.documentElement
};

/**
* Create the body element.
* @param {string} type
* @param {objct} props
* @return {object} body element
*/
Document.prototype.createBody = function createBody (type, props) {
  if (!this.body) {
    var el = new Element(type, props);
    setBody(this, el);
    if (checkLevel('debug')) {
      debugLog("[createBody](" + (this.id) + "," + (el.type) + "," + (el.ref) + ") "
        + "(" + (JSON.stringify(el.toJSON(true))) + ").");
    }
  }

  return this.body
};

/**
* Create an element.
* @param {string} tagName
* @param {objct} props
* @return {object} element
*/
Document.prototype.createElement = function createElement (tagName, props) {
  var el = new Element(tagName, props);
  if (checkLevel('debug')) {
    debugLog("[createElement](" + (this.id) + "," + (el.type) + "," + (el.ref) + ") "
      + "(" + (JSON.stringify(el.toJSON(true))) + ").");
  }
  return el
};

/**
* Create an comment.
* @param {string} text
* @return {object} comment
*/
Document.prototype.createComment = function createComment (text) {
  return new Comment(text)
};

/**
* Fire an event on specified element manually.
* @param {object} element
* @param {string} event type
* @param {object} event object
* @param {object} dom changes
* @param {object} options
* @return {} anything returned by handler function
*/
Document.prototype.fireEvent = function fireEvent (el, type, event, domChanges, options) {
  if (!el) {
    return
  }
  event = event || {};
  event.type = event.type || type;
  event.target = el;
  event.currentTarget = el;
  event.timestamp = Date.now();
  if (domChanges) {
    updateElement(el, domChanges);
  }
  var isBubble;
  var $root = this.getRef('_root');
  if ($root && $root.attr) {
    isBubble = $root.attr['bubble'] === 'true';
  }
  return el.fireEvent(type, event, isBubble, options)
};

/**
* Destroy current document, and remove itself form docMap.
*/
Document.prototype.destroy = function destroy () {
  if (checkLevel('debug')) {
    debugLog("[destroy](" + (this.id) + ",document," + (this.ref) + ") "
      + "Destroy document (id: \"" + (this.id) + "\", URL: \"" + (this.URL) + "\")");
  }
  this.taskCenter.destroyCallback();
  delete this.listener;
  delete this.nodeMap;
  delete this.taskCenter;
  removeDoc(this.id);
};

// default task handler
Document.handler = null;

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function setId (weex, id) {
  Object.defineProperty(weex, '[[CurrentInstanceId]]', { value: id });
}

function getId (weex) {
  return weex['[[CurrentInstanceId]]']
}

function moduleGetter (id, module, method) {
  var taskCenter = getTaskCenter(id);
  if (!taskCenter || typeof taskCenter.send !== 'function') {
    console.error(("[JS Framework] Failed to find taskCenter (" + id + ")."));
    return null
  }
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return taskCenter.send('module', { module: module, method: method }, args);
  }
}

function moduleSetter (id, module, method, fn) {
  var taskCenter = getTaskCenter(id);
  if (!taskCenter || typeof taskCenter.send !== 'function') {
    console.error(("[JS Framework] Failed to find taskCenter (" + id + ")."));
    return null
  }
  if (typeof fn !== 'function') {
    console.error(("[JS Framework] " + module + "." + method + " must be assigned as a function."));
    return null
  }
  return function (fn) { return taskCenter.send('module', { module: module, method: method }, [fn]); }
}

var WeexInstance = function WeexInstance (id, config, data) {
  setId(this, String(id));
  this.config = config || {};
  this._nativeData = data || {};
  this.document = new Document(id, this.config.bundleUrl);
  this.requireModule = this.requireModule.bind(this);
  this.importScript = this.importScript.bind(this);
  this.isRegisteredModule = isRegisteredModule;
  this.isRegisteredComponent = isRegisteredComponent;
};

WeexInstance.prototype.requireModule = function requireModule (moduleName) {
  var id = getId(this);
  if (!(id && this.document && this.document.taskCenter)) {
    console.error("[JS Framework] Failed to requireModule(\"" + moduleName + "\"), "
      + "instance (" + id + ") doesn't exist anymore.");
    return
  }

  // warn for unknown module
  if (!isRegisteredModule(moduleName)) {
    console.warn(("[JS Framework] using unregistered weex module \"" + moduleName + "\""));
    return
  }

  // create registered module apis
  var moduleProxy = {};
  var moduleDefine = getModuleDescription(moduleName);
  var loop = function ( methodName ) {
    Object.defineProperty(moduleProxy, methodName, {
      enumerable: true,
      configurable: true,
      get: function () { return moduleGetter(id, moduleName, methodName); },
      set: function (fn) { return moduleSetter(id, moduleName, methodName, fn); }
    });
  };

    for (var methodName in moduleDefine) loop( methodName );

  return moduleProxy
};

WeexInstance.prototype.supports = function supports (condition) {
  if (typeof condition !== 'string') { return null }

  var res = condition.match(/^@(\w+)\/([\w-]+)(\.(\w+))?$/i);
  if (res) {
    var type = res[1];
    var name = res[2];
    var method = res[4];
    switch (type) {
      case 'module': return isRegisteredModule(name, method)
      case 'component': return isRegisteredComponent(name)
    }
  }

  return null
};

WeexInstance.prototype.importScript = function importScript (src, options) {
    if ( options === void 0 ) options = {};

  var id = getId(this);
  var taskCenter = getTaskCenter(id);
  return new Promise(function (resolve, reject) {
    if (!taskCenter || typeof taskCenter.send !== 'function') {
      reject(new Error("[JS Framework] Failed to import script \"" + src + "\", "
        + "no taskCenter (" + id + ") matched."));
    }
    try {
      taskCenter.send('module', {
        module: 'script',
        method: 'importScript'
      }, [src, options], {
        callback: [
          function (result) { return resolve(result); },
          function (error) { return reject(error); }
        ]
      });
    }
    catch (e) {
      reject(e);
    }
  })
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var frameworks;
var runtimeConfig;

var versionRegExp = /^\s*\/\/ *(\{[^}]*\}) *\r?\n/;

/**
 * Detect a JS Bundle code and make sure which framework it's based to. Each JS
 * Bundle should make sure that it starts with a line of JSON comment and is
 * more that one line.
 * @param  {string} code
 * @return {object}
 */
function getBundleType (code) {
  var result = versionRegExp.exec(code);
  if (result) {
    try {
      var info = JSON.parse(result[1]);
      return info.framework
    }
    catch (e) {}
  }

  // default bundle type
  return 'Weex'
}

/**
 * Get js framework version at runtime.
 */
function getJSFMVersion () {
  // It will be converted into a version string at build time
  return "0.29.7" // eslint-disable-line
}

function createServices (id, env, config) {
  // Init JavaScript services for this instance.
  var serviceMap = Object.create(null);
  serviceMap.service = Object.create(null);
  services.forEach(function (ref) {
    var name = ref.name;
    var options = ref.options;

    {
      console.debug(("[JS Runtime] create service " + name + "."));
    }
    var create = options.create;
    if (create) {
      try {
        var result = create(id, env, config);
        Object.assign(serviceMap.service, result);
        Object.assign(serviceMap, result.instance);
      }
      catch (e) {
        console.error(("[JS Runtime] Failed to create service " + name + "."));
      }
    }
  });
  delete serviceMap.service.instance;
  Object.freeze(serviceMap.service);
  return serviceMap
}

var instanceTypeMap = {};
function getFrameworkType (id) {
  return instanceTypeMap[id]
}

function createInstanceContext (id, options, data) {
  if ( options === void 0 ) options = {};

  var weex = new WeexInstance(id, options, data);

  var bundleType = options.bundleType || 'Vue';
  instanceTypeMap[id] = bundleType;
  var framework = runtimeConfig.frameworks[bundleType];
  if (!framework) {
    return new Error(("[JS Framework] Invalid bundle type \"" + bundleType + "\"."))
  }

  // prepare js service
  var services$$1 = createServices(id, {
    weex: weex,
    config: options,
    created: Date.now(),
    framework: bundleType,
    bundleType: bundleType
  }, runtimeConfig);
  Object.freeze(services$$1);

  // prepare runtime context
  var runtimeContext = Object.create(null);
  Object.assign(runtimeContext, services$$1, {
    weex: weex,
    getJSFMVersion: getJSFMVersion,
    requireModule: function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return weex.requireModule.apply(weex, args);
  },
    __WEEX_CALL_JAVASCRIPT__: receiveTasks,
    services: services$$1 // Temporary compatible with some legacy APIs in Rax
  });
  Object.freeze(runtimeContext);

  // prepare instance context
  var instanceContext = Object.assign({}, runtimeContext);
  if (typeof framework.createInstanceContext === 'function') {
    Object.assign(instanceContext, framework.createInstanceContext(id, runtimeContext, data));
  }
  Object.freeze(instanceContext);
  return instanceContext
}

/**
 * Check which framework a certain JS Bundle code based to. And create instance
 * by this framework.
 * @param {string} id
 * @param {string} code
 * @param {object} config
 * @param {object} data
 */
function createInstance (id, code, config, data) {
  if (instanceTypeMap[id]) {
    return new Error(("The instance id \"" + id + "\" has already been used!"))
  }

  // Init instance info.
  var bundleType = getBundleType(code);
  instanceTypeMap[id] = bundleType;

  // Init instance config.
  config = JSON.parse(JSON.stringify(config || {}));
  config.env = JSON.parse(JSON.stringify(global.WXEnvironment || {}));
  config.bundleType = bundleType;

  var framework = runtimeConfig.frameworks[bundleType];
  if (!framework) {
    return new Error(("[JS Framework] Invalid bundle type \"" + bundleType + "\"."))
  }
  if (bundleType === 'Weex') {
    console.error("[JS Framework] COMPATIBILITY WARNING: "
      + "Weex DSL 1.0 (.we) framework is no longer supported! "
      + "It will be removed in the next version of WeexSDK, "
      + "your page would be crash if you still using the \".we\" framework. "
      + "Please upgrade it to Vue.js or Rax.");
  }

  var instanceContext = createInstanceContext(id, config, data);
  if (typeof framework.createInstance === 'function') {
    // Temporary compatible with some legacy APIs in Rax,
    // some Rax page is using the legacy ".we" framework.
    if (bundleType === 'Rax' || bundleType === 'Weex') {
      var raxInstanceContext = Object.assign({
        config: config,
        created: Date.now(),
        framework: bundleType
      }, instanceContext);
      return framework.createInstance(id, code, config, data, raxInstanceContext)
    }
    return framework.createInstance(id, code, config, data, instanceContext)
  }
  // console.error(`[JS Framework] Can't find available "createInstance" method in ${bundleType}!`)
  runInContext(code, instanceContext);
}

/**
 * Run js code in a specific context.
 * @param {string} code
 * @param {object} context
 */
function runInContext (code, context) {
  var keys = [];
  var args = [];
  for (var key in context) {
    keys.push(key);
    args.push(context[key]);
  }

  var bundle = "\n    (function (global) {\n      " + code + "\n    })(Object.create(this))\n  ";

  return (new (Function.prototype.bind.apply( Function, [ null ].concat( keys, [bundle]) ))).apply(void 0, args)
}

/**
 * Get the JSON object of the root element.
 * @param {string} instanceId
 */
function getRoot (instanceId) {
  var document = getDoc(instanceId);
  try {
    if (document && document.body) {
      return document.body.toJSON()
    }
  }
  catch (e) {
    console.error("[JS Framework] Failed to get the virtual dom tree.");
    return
  }
}

var methods = {
  createInstance: createInstance,
  createInstanceContext: createInstanceContext,
  getRoot: getRoot,
  getJSFMVersion: getJSFMVersion,
  getDocument: getDoc,
  registerService: register,
  unregisterService: unregister,
  callJS: function callJS (id, tasks) {
    var framework = frameworks[getFrameworkType(id)];
    if (framework && typeof framework.receiveTasks === 'function') {
      return framework.receiveTasks(id, tasks)
    }
    return receiveTasks(id, tasks)
  }
};

/**
 * Register methods which will be called for each instance.
 * @param {string} methodName
 */
function genInstance (methodName) {
  methods[methodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var id = args[0];
    var type = getFrameworkType(id);
    if (type && frameworks[type]) {
      var result = (ref = frameworks[type])[methodName].apply(ref, args);
      var info = { framework: type };

      // Lifecycle methods
      if (methodName === 'refreshInstance') {
        services.forEach(function (service) {
          var refresh = service.options.refresh;
          if (refresh) {
            refresh(id, { info: info, runtime: runtimeConfig });
          }
        });
      }
      else if (methodName === 'destroyInstance') {
        services.forEach(function (service) {
          var destroy = service.options.destroy;
          if (destroy) {
            destroy(id, { info: info, runtime: runtimeConfig });
          }
        });
        delete instanceTypeMap[id];
      }

      return result
    }
    return new Error("[JS Framework] Using invalid instance id "
      + "\"" + id + "\" when calling " + methodName + ".")
    var ref;
  };
}

/**
 * Register methods which init each frameworks.
 * @param {string} methodName
 * @param {function} sharedMethod
 */
function adaptMethod (methodName, sharedMethod) {
  methods[methodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (typeof sharedMethod === 'function') {
      sharedMethod.apply(void 0, args);
    }

    // TODO: deprecated
    for (var name in runtimeConfig.frameworks) {
      var framework = runtimeConfig.frameworks[name];
      if (framework && framework[methodName]) {
        framework[methodName].apply(framework, args);
      }
    }
  };
}

function init$$1 (config) {
  runtimeConfig = config || {};
  frameworks = runtimeConfig.frameworks || {};
  init$1();

  // Init each framework by `init` method and `config` which contains three
  // virtual-DOM Class: `Document`, `Element` & `Comment`, and a JS bridge method:
  // `sendTasks(...args)`.
  for (var name in frameworks) {
    var framework = frameworks[name];
    if (typeof framework.init === 'function') {
      try {
        framework.init(config);
      }
      catch (e) {}
    }
  }

  adaptMethod('registerComponents', registerComponents);
  adaptMethod('registerModules', registerModules);
  adaptMethod('registerMethods')

  ; ['destroyInstance', 'refreshInstance'].forEach(genInstance);

  return methods
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var config = {
  Document: Document, Element: Element, Comment: Comment, Listener: Listener,
  TaskCenter: TaskCenter,
  sendTasks: function sendTasks () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (typeof callNative === 'function') {
      return callNative.apply(void 0, args)
    }
    return (global.callNative || (function () {})).apply(void 0, args)
  }
};

Document.handler = config.sendTasks;

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* istanbul ignore next */
function freezePrototype () {
  // Object.freeze(config.Element)
  Object.freeze(config.Comment);
  Object.freeze(config.Listener);
  Object.freeze(config.Document.prototype);
  // Object.freeze(config.Element.prototype)
  Object.freeze(config.Comment.prototype);
  Object.freeze(config.Listener.prototype);
}

var index = {
  service: { register: register, unregister: unregister, has: has },
  freezePrototype: freezePrototype,
  init: init$$1,
  config: config
}

return index;

})));
//# sourceMappingURL=index.js.map
