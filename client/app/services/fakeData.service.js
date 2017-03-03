function FakeDataService() {
  "ngInject";
  /**
   *  get data
   * @param {string} url - request url after ...api/v1/
   * @param {string} method - request method (POST|GET|PUT|DELETE)
   * @returns {*}
   */
  let getData = (url, method) => {
    const data = {
      articles: [
        {
          "id": "1",
          "question": "dsdgdsfg",
          "answer": "<p style='color: red'>sdgsdfgdfg</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "dsdgdsfg",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'Oleg Skiba',
          "status": 'draft',
          "lang": 'en',
          "algolia_object_id": "379636340",
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [{"id": "1", "name": "Uncategorized", "slug": null, "description": "", "lang": "en"}],
          "tags": [{"tag_id": "1", "name": "test"}, {"tag_id": "2", "name": "new tag"},],
          "remarks": []
        }, {
          "id": "2",
          "question": "fdhdfhfd",
          "answer": "<p>hfdhfgh</p>",
          "slug": "fdhdfhfd",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": "Test User",
          "status": 'published',
          "lang": 'en',
          "algolia_object_id": "379636380",
          "created_at": "1486540724",
          "updated_at": "1487850724",
          "categories": [],
          "tags": [],
          "remarks": []
        }, {
          "id": "3",
          "question": "wwwwwwwwww",
          "answer": "<p>sdgdfgdgsdg</p>",
          "slug": "wwwwwwwwww",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": "Test User",
          "status": 'trash',
          "lang": "en",
          "algolia_object_id": "379636710",
          "created_at": "1487654332",
          "updated_at": "1487927683",
          "categories": [{"id": "1", "name": "Uncategorized", "slug": null, "description": "", "lang": "en"}],
          "tags": [],
          "remarks": []
        }, {
          "id": "4",
          "question": "sdfsdf",
          "answer": "<p>sdfsdfsd</p>",
          "slug": "sdfsdf",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": "Test User",
          "status": "draft",
          "lang": "en",
          "algolia_object_id": "379636980",
          "created_at": "1487866627",
          "updated_at": "1487930293",
          "categories": [{"id": "1", "name": "Uncategorized", "slug": null, "description": "", "lang": "en"}],
          "tags": [],
          "remarks": []
        }, {
          "id": "5",
          "question": "cat2",
          "answer": "<p>dfgdsfg</p>",
          "slug": "cat2",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": "Test User",
          "status": 'published',
          "lang": "en",
          "algolia_object_id": "354285312",
          "created_at": "1487333465",
          "updated_at": "1487854965",
          "categories": [{"id": "2", "name": "Keyboard", "slug": "keyboard", "description": "", "lang": "en"}],
          "tags": [],
          "remarks": []
        }, {
          "id": "6",
          "question": "test new",
          "answer": "<p>dfsdgsdfgsdfg sfdgsdf&nbsp;</p>",
          "slug": "test-new",
          "visibility": "Public",
          "is_open_comments": "1",
          "author": "Test User",
          "status": 'published',
          "lang": "fr",
          "algolia_object_id": "357316872",
          "created_at": "1487925920",
          "updated_at": "1487925920",
          "categories": [{"id": "1", "name": "Uncategorized", "slug": null, "description": "", "lang": "en"}],
          "tags": [{"tag_id": "1", "name": "test"}],
          "remarks": []
        }
      ],
      categories: [
        {
          "id": "1",
          "parent_id": "0",
          "name": "Uncategorized",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
        },
        {
          "id": "2",
          "parent_id": "1",
          "name": "Keyboard",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
        },
        {
          "id": "3",
          "parent_id": "1",
          "name": "Phone",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
        },
        {
          "id": "4",
          "parent_id": "2",
          "name": "test1 sd dgfdsfg dsgdsgs  sdgdfgdg  sggsd sdgsd ds dsfd fgsd ds fg",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
        },
        {
          "id": "5",
          "parent_id": "4",
          "name": "test2  sdgdfg sd dfsg ss dgdsf gsdgdsf gdsfgsd gdfg",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
        },
        {
          "id": "6",
          "parent_id": "5",
          "name": "test3 dfgdfgsd sd fgds gsddsdsfg sd sdgd sgd sgdfg s dfgsdg sdg d sdg ds sddsfgsd  g",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
        },
        {
          "id": "7",
          "parent_id": "1",
          "name": "new",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
        }
      ],
      settings: {
        "languages": [
          {"code": "en", "name": "English"},
          {"code": "nl", "name": "Dutch"},
          {"code": "fr", "name": "French"}
        ],
        "roles": [
          {"code": "admin", "name": "admin"},
          {"code": "user", "name": "user"},
          {"code": "visitor", "name": "visitor"},
          {"code": "contributor", "name": "contributor"}
        ],
        "faq_statuses": [
          {"code": "published", "name": "Published"},
          {"code": "unpublished", "name": "Unpublished"},
          {"code": "draft", "name": "Draft"},
          {"code": "trash", "name": "Trash"}
        ],
        "faq_visibility": [
          {"code": "public", "name": "Public"},
          {"code": "internal", "name": "Internal"},
          {"code": "private", "name": "Private"}
        ]
      },
      users: [
        {
          "id": "78FsrnMdYHAcJEWUPo4gQe",
          "email": "oleg.skiba@yanpix.com",
          "username": "oleg.skiba@yanpix.com",
          "first_name": "Oleg",
          "last_name": "Skiba",
          "role": ["admin"],
          "subdomains": ["skiba"]
        }, {
          "id": "2n0Y6dzxevGvKVppiU9BhR",
          "email": "test4@test.com",
          "username": "test4@test.com",
          "first_name": "sdfsfsd",
          "last_name": "dfgdsgsd",
          "role": ["user"],
          "subdomains": ["skiba"]
        }, {
          "id": "NwUQypbQRtd5485POk7Nh",
          "email": "wwwww@dfgdf.dfg",
          "username": "fsfsdf@dfgdf.dfg",
          "first_name": "dgdfsd",
          "last_name": "dsgsdfg",
          "role": ["visitor"],
          "subdomains": ["skiba"]
        }, {
          "id": "5G0kKHSP10OICd4MRAr6cO",
          "email": "test@test.com",
          "username": "test@test.com",
          "first_name": "Test2",
          "last_name": "User",
          "role": ["user"],
          "subdomains": ["skiba"]
        }, {
          "id": "3wGzBu2ikq85AFLaToYsTU",
          "email": "test@test.ww",
          "username": "test@test.ww",
          "first_name": "Test",
          "last_name": "User",
          "role": ["user"],
          "subdomains": ["skiba"]
        }
      ],
      checkSubdomain: {"data": {"subdomain": "exist"}},
      login: {
        "data": {
          "access_token": "eyJraWQiOiIyT0pZNzVDOVNIRTFISEhXUkFCRzY2MzZTIiwic3R0IjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiIzMVRoOE5NZXQ3R3VCT0R4dDRsTkU0IiwiaWF0IjoxNDg4MjA5NzM4LCJpc3MiOiJodHRwczovL2FwaS5zdG9ybXBhdGguY29tL3YxL2FwcGxpY2F0aW9ucy83Nm9oQnJHUVlLYnhQRERzeGlrZlQ3Iiwic3ViIjoiaHR0cHM6Ly9hcGkuc3Rvcm1wYXRoLmNvbS92MS9hY2NvdW50cy83OEZzcm5NZFlIQWNKRVdVUG80Z1FlIiwiZXhwIjoxNDg4MjEzMzM4LCJydGkiOiIzMVRjb0s0VFhDbmhDcm5wVzZ4WFZVIn0.XgsGFDduqHdezCOGKr_JD7taQ5ao_Ozwz2ARfwgQNcA",
          "refresh_token": "eyJraWQiOiIyT0pZNzVDOVNIRTFISEhXUkFCRzY2MzZTIiwic3R0IjoicmVmcmVzaCIsImFsZyI6IkhTMjU2In0.eyJqdGkiOiIzMVRjb0s0VFhDbmhDcm5wVzZ4WFZVIiwiaWF0IjoxNDg4MjA5NzM4LCJpc3MiOiJodHRwczovL2FwaS5zdG9ybXBhdGguY29tL3YxL2FwcGxpY2F0aW9ucy83Nm9oQnJHUVlLYnhQRERzeGlrZlQ3Iiwic3ViIjoiaHR0cHM6Ly9hcGkuc3Rvcm1wYXRoLmNvbS92MS9hY2NvdW50cy83OEZzcm5NZFlIQWNKRVdVUG80Z1FlIiwiZXhwIjoxNDkzMzkzNzM4fQ.nfSz9RXMFyJh7kzDuVpRFjbVNaoVrBPUwppb3_iVfEA",
          "token_type": "Bearer",
          "expires_in": 3600,
          "stormpath_access_token_href": "https://api.stormpath.com/v1/accessTokens/31Th8NMet7GuBODxt4lNE4",
          "role": ["admin"],
          "id": "78FsrnMdYHAcJEWUPo4gQe",
          "email": "oleg.skiba@yanpix.com",
          "username": "oleg.skiba@yanpix.com",
          "first_name": "Oleg",
          "last_name": "Skiba",
          "subdomains": ["skiba"]
        }
      },
      superAdmin: {
        "data": {
          "access_token": "eyJraWQiOiIxUEdWOFZEVk5BSkZRRVRMWTkzS1JBUUE4Iiwic3R0IjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiI2anhGTjVJRHNHaU9JSU1FMktaOU9XIiwiaWF0IjoxNDg4NDcyNzk0LCJpc3MiOiJodHRwczovL2FwaS5zdG9ybXBhdGguY29tL3YxL2FwcGxpY2F0aW9ucy8xTThIaGZibjIxd29vQVU1b0pqcWd1Iiwic3ViIjoiaHR0cHM6Ly9hcGkuc3Rvcm1wYXRoLmNvbS92MS9hY2NvdW50cy81alQ4UWY3a3d1NUp0V1Zka1hub1ZnIiwiZXhwIjoxNDg4NDc2Mzk0LCJvcmciOiJodHRwczovL2FwaS5zdG9ybXBhdGguY29tL3YxL29yZ2FuaXphdGlvbnMvNXRQREc3UUpIZzJ3ZEhUc3JVNTBvdyIsInJ0aSI6IjZqeEZOMXk4eGdQUGZUR01xNGhzbVMifQ.yUSo_Pe27ZEbArjdjE4toerMA_eKmz7C5H57CBAClqk",
          "refresh_token": "eyJraWQiOiIxUEdWOFZEVk5BSkZRRVRMWTkzS1JBUUE4Iiwic3R0IjoicmVmcmVzaCIsImFsZyI6IkhTMjU2In0.eyJqdGkiOiI2anhGTjF5OHhnUFBmVEdNcTRoc21TIiwiaWF0IjoxNDg4NDcyNzk0LCJpc3MiOiJodHRwczovL2FwaS5zdG9ybXBhdGguY29tL3YxL2FwcGxpY2F0aW9ucy8xTThIaGZibjIxd29vQVU1b0pqcWd1Iiwic3ViIjoiaHR0cHM6Ly9hcGkuc3Rvcm1wYXRoLmNvbS92MS9hY2NvdW50cy81alQ4UWY3a3d1NUp0V1Zka1hub1ZnIiwiZXhwIjoxNDkzNjU2Nzk0LCJvcmciOiJodHRwczovL2FwaS5zdG9ybXBhdGguY29tL3YxL29yZ2FuaXphdGlvbnMvNXRQREc3UUpIZzJ3ZEhUc3JVNTBvdyJ9.n8-1EagLfrWzbQfPXLJ5mCg4-o9VoYMDun6Qv1tXDBE",
          "token_type": "Bearer",
          "expires_in": 3600,
          "stormpath_access_token_href": "https://api.stormpath.com/v1/accessTokens/6jxFN5IDsGiOIIME2KZ9OW",
          "role": ["Super Admin"],
          "id": "5jT8Qf7kwu5JtWVdkXnoVg",
          "email": "onyshchenko.max@gmail.com",
          "username": "onyshchenko.max@gmail.com",
          "first_name": "Max",
          "last_name": "Oni",
          "subdomains": null
        }
      },
      attachments: {
        "data": [
          {
            "model": "faq",
            "model_id": "11",
            "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/11/1488301972qoy5qVpnJf26yA7cITwV.pdf",
            "size": 35761,
            "type": "pdf",
            "mime": "application/pdf"
          },
          {
            "model": "faq",
            "model_id": "11",
            "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/11/1488301972qoy5qVpnJf26yA7cITwV.pdf",
            "size": 35761,
            "type": "pdf",
            "mime": "application/pdf"
          }
        ]
      },
      domains: {
          "subdomains": [
            {"code": "annatest", "name": "annatest"},
            {"code": "skiba", "name": "skiba"},
            {"code": "skiba2", "name": "skiba2"},
            {"code": "annam", "name": "annam"},
            {"code": "max-oni", "name": "max-oni"},
            {"code": "anna1", "name": "anna1"}]
        }
    };
    console.info('getLocalData', url);

    let reg = /\/?[\d]+$/; //regexp if url ends id etc: 'faq/54'
    let regUserId = /(users)\/.*/  //regexp for replace user id

    if (regUserId.test(url)) {
      url = url.replace(/\/.*/, '/23');
    }

    switch (url.replace(reg, '')) {
      case 'categories':
        //if get one item or update/delete return one item
        if (reg.test(url) || method != 'GET') {
          return {data: {data: data.categories[0]}};
        }
        return {data: {data: data.categories}};
        break;
      case 'faq':
      case 'faq/algolia':
        if (reg.test(url) || method != 'GET') {
          return {data: {data: data.articles[0]}};
        }
        return {data: {data: data.articles}};
        break;
      case 'users':
        if (reg.test(url) || method != 'GET') {
          return {data: {data: data.users[0]}};
        }
        return {data: {data: data.users}};
        break;
      case 'settings/common':
        return {data: {data: data.settings}};
        break;
      case 'settings/advanced':
        return {data: {data: data.domains}};
        break;
      case 'auth/check-subdomain':
        return data.checkSubdomain;
        break;
      case 'auth/login':
        return {data: data.login};
        break;
      case 'attachments/faq':
        if (method != 'GET') {
          return {data: {data: data.attachments.data[0]}};
        }
        return {data: data.attachments};
        break;
    }
  };

  return {
    getData
  }
}
export default FakeDataService;
