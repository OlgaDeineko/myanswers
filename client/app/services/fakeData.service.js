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
          "answer": "<p>sdgsdfgdfg</p>",
          "slug": "dsdgdsfg",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": {id: '12345', full_name: 'Oleg Skiba'},
          "status": 'draft',
          "lang": 'en',
          "algolia_object_id": "379636340",
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "categories": [{"id": "1", "name": "Uncategorized", "slug": null, "description": "", "lang": "en"}],
          "tags": [{"tag_id": "1", "name": "test"},{"tag_id": "2", "name": "new tag"},],
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
          "created_at": "1487850724",
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
          "created_at": "1487851132",
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
          "created_at": "1487851727",
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
          "created_at": "1487854965",
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
          "lang": "en",
          "algolia_object_id": "357316872",
          "created_at": "1487925920",
          "updated_at": "1487925920",
          "categories": [{"id": "1", "name": "Uncategorized", "slug": null, "description": "", "lang": "en"}],
          "tags": [{"tag_id": "1", "name": "test"}],
          "remarks": []
        }
      ],
      categories: [
        {"id": "1", "parent_id": "0", "name": "Uncategorized", "lang": "en"},
        {"id": "2", "parent_id": "1", "name": "Keyboard", "lang": "en"},
        {"id": "3", "parent_id": "1", "name": "Phone", "lang": "en"},
        {"id": "4", "parent_id": "2", "name": "test1", "lang": "en"},
        {"id": "5", "parent_id": "4", "name": "test2", "lang": "en"},
        {"id": "6", "parent_id": "15", "name": "test3", "lang": "en"},
        {"id": "7", "parent_id": "1", "name": "new", "lang": "en"}
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
          "role": [],
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
      }
    };
    console.info('getLocalData', url);

    let reg = /\/?[\d]+$/; //regexp if url ends id etc: 'faq/54'
    let regUserId = /(users)\/.*/  //regexp for replace user id

    if(regUserId.test(url)){
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
      case 'auth/check-subdomain':
        return data.checkSubdomain;
        break;
      case 'auth/login':
        return data.login;
        break;
    }
  };

  return {
    getData
  }
}
export default FakeDataService;
