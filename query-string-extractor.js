const reduce = require('lodash/reduce');

exports.extractQueryParams = (search) => {
  return reduce(search || window.location.search, (state, char) => {
    if (char === '&' || char === '?') {
      const buffer = { key: '', value: '' };
      const reading = 'key';
      const result = char === '&' ? {
        ...state.result,
        [state.buffer.key]: state.buffer.value,
      } : {};
      return { ...state, buffer, reading, result };
    } else if (char === '=') {
      const buffer = { ...state.buffer, value: '' };
      const reading = 'value';
      return { ...state, buffer, reading };
    } else {
      const buffer = {
        ...state.buffer,
        [state.reading]: state.buffer[state.reading] + char,
      };
      return { ...state, buffer };
    }
  }, { reading: 'key', buffer: {}, result: {} }).result || {};
};

