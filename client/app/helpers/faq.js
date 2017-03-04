/**
 * @name Article
 * @property {integer} id - article id
 * @property {string} question - article question (title)
 * @property {string} answer - faq answer (text)
 * @property {string} slug - article slug
 * @property {string} visibility - article visibility (public | internal | private)
 * @property {integer} is_open_comments
 * @property {string} lang - code article language
 * @property {string} author - author full name
 * @property {string} status - article status (draft, publish, etc.)
 * @property {integer} algolia_object_id - algolia id
 * @property {timestamp} created_at
 * @property {timestamp} updated_at
 * @property {object[]} tags - article tags
 * @property {integer} tags.tag_id - tag id
 * @property {string} tags.name - tag name
 * @property {integer} hits_count - count article views
 * @property {object[]} categories - categories article. now in array one element
 *
 * @property {object} category - category article. remove array :)
 * @property {integer} categoryId - ID category article
 * @property {object} language - language object
 * @property {string} language.code - language code
 * @property {string} language.name - language name
 * @property {string} answerWithoutTags - answer without tag
 * @property {integer} countWords - count answer words
 * @property {integer} countChars - count answer chars
 * @property {string} timeReads - time to read the answer
 * @property {string[]} remarks - answer remarks
 */
/**
 * @name ArticleResponse
 * @property {integer} id - article id
 * @property {string} question - article question (title)
 * @property {string} answer - faq answer (text)
 * @property {string} slug - article slug
 * @property {string} visibility - article visibility (public | internal | private)
 * @property {integer} is_open_comments
 * @property {string} lang - code article language
 * @property {string} author - author full name
 * @property {string} status - article status (draft, publish, etc.)
 * @property {integer} algolia_object_id - algolia id
 * @property {timestamp} created_at
 * @property {timestamp} updated_at
 * @property {object[]} tags - article tags
 * @property {integer} tags.id - tag id
 * @property {string} tags.name - tag name
 * @property {integer} hits_count - count article views
 * @property {object[]} categories - categories article. now in array one element
 */
/**
 * @name ArticleRequest
 * @property {string} question - article question (title)
 * @property {string} answer - faq answer (text)
 * @property {string} visibility - article visibility (public | internal | private)
 * @property {boolean} is_open_comments
 * @property {string} lang - code article language
 * @property {string} author - author full name
 * @property {string} status - article status (draft, publish, etc.)
 * @property {string[]} new_tags - array of new tags
 * @property {integer[]} tag_ids - array of old tags
 * @property {integer[]} category_ids - category ids
 */

//TODO change doc: {object[]} categories =>  {category[]} categories

function FaqHelper($rootScope) {
  'ngInject';

  /**
   * Prepare article
   * @param {ArticleResponse} faq
   * @returns {Article}
   */
  let responseToData = (faq) => {

    faq.category = (faq.categories && faq.categories.length) ? faq.categories[0] : '';
    //TODO remove convert to string
    faq.categoryId = (faq.categories && faq.categories.length) ? faq.categories[0].id + '' : '';

    if ($rootScope.settings) {
      faq.language = $rootScope.settings.languages.find((l) => l.code == faq.lang);
    }

    //counting words and character in article answer
    faq.answerWithoutTags = String(faq.answer).replace(/<[^>]+>/gm, ' ');
    faq.countWords = faq.answerWithoutTags.trim().split(/\s+/).length;
    faq.countChars = (faq.answerWithoutTags.match(/\S/g)).length;

    //@see http://marketingland.com/estimated-reading-times-increase-engagement-79830
    let time = (faq.countWords / 200 + "").split('.');
    faq.timeReads = `${time[0]} min ${((('.' + time[1]) * 60).toFixed())} sec`;
    faq.remarks = []

    return faq;
  };

  /**
   * Prepare article to request
   * @param {Article} faq
   * @returns {ArticleRequest}
   */
  let dataToRequest = (faq) => {
    let new_tags = [];
    let tag_ids = [];

    faq.tags.map((i) => {
      if (i.tag_id) {
        tag_ids.push(i.tag_id);
      } else {
        new_tags.push(i.name);
      }
    });

    let category_ids = [faq.categoryId];

    return {
      question: faq.question,
      answer: faq.answer,
      visibility: faq.visibility,
      is_open_comments: faq.is_open_comments,
      lang: faq.lang,
      author: faq.author,
      status: faq.status,
      new_tags: new_tags,
      tag_ids: tag_ids,
      category_ids: category_ids,
    };
  };

  /**
   * return new object of article
   * @param {integer} categoryId - category id
   * @param {string} author - auuthor
   * @returns {object}
   */
  let newFaq = (categoryId, author) => {
    return {
      question: '',
      answer: '',
      categoryId: categoryId || '1',
      tags: [],
      visibility: 'public',
      author: author || 'Unknown',
      lang: 'en',
      is_open_comments: true,
      status: 'draft',
      remarks: []
    };
  };

  /**
   * counts types articles (publish, draft, trash, etc.)
   * @param {Article[]} faqs
   * @returns {object<string, number>} counts
   */
  let countsTypes = (faqs) => {
    let articlesCounts = {
      All: faqs.length,
    };

    $rootScope.settings.faq_statuses.map((status) => {
      articlesCounts[status.name] = faqs.filter((faq) => faq.status == status.code).length;
    });

    return articlesCounts;
  };

  return {
    responseToData,
    dataToRequest,
    countsTypes,
    newFaq
  }
}

export default FaqHelper;
