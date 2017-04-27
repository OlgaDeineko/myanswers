/**
 * @typedef {Object} Article
 * @property {number} id - article id
 * @property {string} question - article question (title)
 * @property {string} answer - faq answer (text)
 * @property {string} slug - article slug
 * @property {string} visibility - article visibility (public | internal | private)
 * @property {number} is_open_comments
 * @property {string} lang - code article language
 * @property {string} author - author full name
 * @property {string} author_href - author stormpath href
 * @property {string} status - article status (draft, publish, etc.)
 * @property {number} algolia_object_id - algolia id
 * @property {timestamp} created_at
 * @property {timestamp} updated_at
 * @property {object[]} tags - article tags
 * @property {number} tags.id - tag id
 * @property {string} tags.name - tag name
 * @property {number} hits_count - count article views
 * @property {string} remarks - article internal comment
 * @property {Attachment[]} attachments - article internal comment
 * @property {number} sort_order - number of order in category
 * @property {CategoryResponse[]} categories - categories article. now in array one element
 * @property {string[]} granted_access - user ids who can see this faq
 *
 * @property {Category} category - category article. remove array :)
 * @property {number} categoryId - ID category article
 * @property {object} language - language object
 * @property {string} language.code - language code
 * @property {string} language.name - language name
 * @property {string} answerWithoutTags - answer without tag
 * @property {number} countWords - count answer words
 * @property {number} countChars - count answer chars
 * @property {string} timeReads - time to read the answer
 * @property {number} likes - count article likes
 * @property {number} dislikes - count article dislikes
 * @property {string} authorId - author id
 * @property {boolean} isOwner - current user is owner
 */
/**
 * @typedef {Object} ArticleResponse
 * @property {number} id - article id
 * @property {string} question - article question (title)
 * @property {string} answer - faq answer (text)
 * @property {string} slug - article slug
 * @property {string} visibility - article visibility (public | internal | private)
 * @property {number} is_open_comments
 * @property {string} lang - code article language
 * @property {string} author - author full name
 * @property {string} author_href - author stormpath href
 * @property {string} status - article status (draft, publish, etc.)
 * @property {number} algolia_object_id - algolia id
 * @property {timestamp} created_at
 * @property {timestamp} updated_at
 * @property {object[]} tags - article tags
 * @property {number} tags.id - tag id
 * @property {string} tags.name - tag name
 * @property {number} hits_count - count article views
 * @property {string} remarks - article internal comment
 * @property {AttachmentResponse} attachments - article internal comment
 * @property {number} sort_order - number of order in category
 * @property {CategoryResponse[]} categories - categories article. now in array one element
 * @property {string[]} granted_access - user ids who can see this faq
 */
/**
 * @typedef {Object} ArticleRequest
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
 * @property {string} remarks - article internal comment
 * @property {string} author_href - user stormpath href
 * @property {string[]} granted_access - user ids who can see this faq
 */

function FaqHelper($rootScope, fileHelper, categoryHelper, UserService) {
  'ngInject';

  /**
   * Prepare article
   * @param {ArticleResponse} faq
   * @returns {Article}
   */
  let responseToData = (faq) => {
    faq.category = {};
    if (Array.isArray(faq.categories)) {
      faq.category = categoryHelper.responseToData(faq.categories[0]);
    }
    faq.categoryId = faq.category.id;

    if ($rootScope.settings) {
      faq.language = $rootScope.settings.languages.find((l) => l.code == faq.lang);
    }

    if (Array.isArray(faq.attachments)) {
      faq.attachments.map(fileHelper.responseToData);
    }

    //replace all new line symbol to <br>
    faq.answer = String(faq.answer).replace(/(\r\n|\n)/g, '<br>');

    //counting words and character in article answer
    faq.answerWithoutTags = String(faq.answer).replace(/<[^>]+>/gm, ' ');
    faq.answerWithoutTags = faq.answerWithoutTags.replace(/\s{2,}/g, ' ');
    faq.answerWithoutTags = faq.answerWithoutTags.replace(/^\s+|\s+$/g, '');
    faq.countWords = faq.answerWithoutTags.trim().split(/\s+/).length;
    faq.countChars = (faq.answerWithoutTags.match(/\S/g) || []).length;

    //@see http://marketingland.com/estimated-reading-times-increase-engagement-79830
    let time = (faq.countWords / 200 + "").split('.');
    faq.timeReads = `${time[0]} min ${((('.' + time[1]) * 60).toFixed())} sec`;

    faq.granted_access = faq.granted_access || [];

    if (typeof faq.author_href == 'string') {
      faq.authorId = faq.author_href.replace(/(.*\/accounts\/)/g, '');
    }

    faq.isOwner = UserService.getId() == faq.authorId;

    //TODO remove this after this functional to be done on the server
    faq.likes = 0;
    faq.dislikes = 0;

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
      answer: String(faq.answer).replace(/\n/g, ''),
      visibility: faq.visibility,
      is_open_comments: faq.is_open_comments,
      lang: faq.lang,
      author: faq.author,
      status: faq.status,
      new_tags: new_tags,
      tag_ids: tag_ids,
      category_ids: category_ids,
      remarks: faq.remarks,
      author_href: '',
      granted_access: faq.granted_access
    };
  };

  /**
   * return new object of article
   * @param {number} categoryId - category id
   * @param {string} author - auuthor
   * @returns {object}
   */
  let newFaq = (categoryId, author) => {
    return {
      question: '',
      answer: '',
      categoryId: +categoryId || 1,
      tags: [],
      visibility: 'public',
      author: author || 'Unknown',
      lang: 'en',
      is_open_comments: true,
      status: 'draft',
      remarks: '',
      granted_access: []
    };
  };

  /**
   * counts types articles (publish, draft, trash, etc.)
   * @param {Article[]} faqs
   * @returns {object[].<{name: string, code: string, counts: number}>|void} counts
   */
  let countsTypes = (faqs) => {
    if (!$rootScope.settings) {
      return;
    }
    let articlesCounts = [];
    articlesCounts.push({
      name: "ALL",
      code: "all",
      counts: faqs.filter((faq) => faq.status != 'trash').length
    });

    $rootScope.settings.faq_statuses.map((status) => {
      articlesCounts.push({
        name: status.name.toUpperCase(),
        code: status.code,
        counts: faqs.filter((faq) => faq.status == status.code).length
      });
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
