const extractQueryParams = require('./query-string-extractor').extractQueryParams;

it('works', () => {
  expect(extractQueryParams('?q=get+query+strings&oq=get+query+strings&aqs=chrome..69i57j69i60l5.4847j0j7&sourceid=chrome&ie=UTF-8')).toEqual({q: 'get+query+strings',
  oq: 'get+query+strings',
  aqs: 'chrome..69i57j69i60l5.4847j0j7',
  sourceid: 'chrome'});
});

