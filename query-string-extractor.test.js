const extractQueryParams = require('./query-string-extractor').extractQueryParams;

it('extracts a simple search string', () => {
  expect(extractQueryParams('?a=123&b=letter')).toEqual({
    a: '123',
    b: 'letter',
  });
});

it('works for a weird query string like a google search', () => {
  expect(
    extractQueryParams('?q=get+query+strings&oq=get+query+strings&aqs=chrome..69i57j69i60l5.4847j0j7&sourceid=chrome&ie=UTF-8')
  ).toEqual({
    q: 'get+query+strings',
    oq: 'get+query+strings',
    aqs: 'chrome..69i57j69i60l5.4847j0j7',
    sourceid: 'chrome',
    ie: 'UTF-8',
  });
});

it('will not fail in case of invalid or empty parameter', () => {
  expect(extractQueryParams('')).toEqual({});
  expect(extractQueryParams('random thing here')).toEqual({});
});

it('will not have problems receiving an entire basic url', () => {
  expect(extractQueryParams('https://localhost:9000/#/dialer/?q=123&t=true')).toEqual({
    q: '123',
    t: 'true',
  });
});
