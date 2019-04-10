"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reduce = require('lodash/reduce');

exports.extractQueryParams = function () {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;
  return reduce(search, function (state, _char, index) {
    if (index === search.length - 1 && (state.reading === 'value' || state.buffer.value)) {
      var result = _objectSpread({}, state.result, _defineProperty({}, state.buffer.key, state.buffer.value + _char));

      return {
        result: result
      };
    }

    if (_char === '&' || _char === '?') {
      var buffer = {
        key: '',
        value: ''
      };
      var reading = 'key';

      var _result = _char === '&' ? _objectSpread({}, state.result, _defineProperty({}, state.buffer.key, state.buffer.value)) : {};

      return _objectSpread({}, state, {
        buffer: buffer,
        reading: reading,
        result: _result
      });
    } else if (_char === '=') {
      var _buffer = _objectSpread({}, state.buffer, {
        value: ''
      });

      var _reading = 'value';
      return _objectSpread({}, state, {
        buffer: _buffer,
        reading: _reading
      });
    } else {
      var _buffer2 = _objectSpread({}, state.buffer, _defineProperty({}, state.reading, state.buffer[state.reading] + _char));

      return _objectSpread({}, state, {
        buffer: _buffer2
      });
    }
  }, {
    reading: 'key',
    buffer: {},
    result: {}
  }).result || {};
};
