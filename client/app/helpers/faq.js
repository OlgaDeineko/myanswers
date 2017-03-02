function faqHelper() {

  let responseToData = (faq) => {

    faq.category = faq.categories[0];
    if(faq.categories.length)
    faq.categoryId = faq.categories[0].id+"";

    //counting words and character in article answer
    faq.answerWithoutTags = String(faq.answer).replace(/<[^>]+>/gm, ' ');
    faq.countWords = faq.answerWithoutTags.trim().split(/\s+/).length;
    faq.countChars = (faq.answerWithoutTags.match(/\S/g)).length;
    //@see http://marketingland.com/estimated-reading-times-increase-engagement-79830
    let time = (faq.countWords/200+"").split('.');
    faq.timeReads = `${time[0]} min ${((('.'+time[1])*60).toFixed())} sec`;

    return faq;
  };

  let dataToRequest = (faq) => {
    /*
     * {string[]} new_tags - array of new tags
     * {integer[]} tag_ids - array of old tags
     * */
    faq.new_tags = [];
    faq.tag_ids = [];

    faq.tags.map((i) => {
      if (i.tag_id) {
        faq.tag_ids.push(i.tag_id);
      } else {
        faq.new_tags.push(i.name);
      }
    });

    faq.category_ids = [faq.categoryId];

    return faq
  };

  let countsTypes = (faqs, statuses) => {
    let articlesCounts = {
      All: faqs.length,
    };

    statuses.map(status => {
      articlesCounts[status.name] = faqs.filter(faq => faq.status == status.code).length;
    });

    return articlesCounts;

  }

  return {
    responseToData,
    dataToRequest,
    countsTypes
  }
}

export default faqHelper();
