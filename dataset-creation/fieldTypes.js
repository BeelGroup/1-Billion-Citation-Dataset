var NAME = 1;
var NAME_LIST = 2;
var DATE = 3;
exports.NAME = 1;
exports.NAME_LIST = 2;
exports.DATE = 3;
exports.types = {
  author: NAME_LIST,
  'collection-editor': NAME_LIST,
  composer: NAME_LIST,
  'container-author': NAME_LIST,
  editor: NAME_LIST,
  'editorial-director': NAME_LIST,
  director: NAME_LIST,
  interviewer: NAME_LIST,
  illustrator: NAME_LIST,
  'original-author': NAME_LIST,
  'reviewed-author': NAME_LIST,
  recipient: NAME_LIST,
  translator: NAME_LIST,
  accessed: DATE,
  container: DATE,
  'event-date': DATE,
  issued: DATE,
  'original-date': DATE,
  submitted: DATE,
  categories: 'object',
  id: ['string', 'number'],
  type: 'string',
  language: 'string',
  journalAbbreviation: 'string',
  shortTitle: 'string',
  abstract: 'string',
  annote: 'string',
  archive: 'string',
  archive_location: 'string',
  'archive-place': 'string',
  authority: 'string',
  'call-number': 'string',
  'chapter-number': 'string',
  'citation-number': 'string',
  'citation-label': 'string',
  'collection-number': 'string',
  'collection-title': 'string',
  'container-title': 'string',
  'container-title-short': 'string',
  dimensions: 'string',
  DOI: 'string',
  edition: ['string', 'number'],
  event: 'string',
  'event-place': 'string',
  'first-reference-note-number': 'string',
  genre: 'string',
  ISBN: 'string',
  ISSN: 'string',
  issue: ['string', 'number'],
  jurisdiction: 'string',
  keyword: 'string',
  locator: 'string',
  medium: 'string',
  note: 'string',
  number: ['string', 'number'],
  'number-of-pages': 'string',
  'number-of-volumes': ['string', 'number'],
  'original-publisher': 'string',
  'original-publisher-place': 'string',
  'original-title': 'string',
  page: 'string',
  'page-first': 'string',
  PMCID: 'string',
  PMID: 'string',
  publisher: 'string',
  'publisher-place': 'string',
  references: 'string',
  'reviewed-title': 'string',
  scale: 'string',
  section: 'string',
  source: 'string',
  status: 'string',
  title: 'string',
  'title-short': 'string',
  URL: 'string',
  version: 'string',
  volume: ['string', 'number'],
  'year-suffix': 'string'
};