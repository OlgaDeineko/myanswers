function FakeDataService() {
  "ngInject";
  let _toFormatResponse = (data) => {
    return {data: {data: data}};
  };

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
          "question": "id-1_cat-1_published",
          "answer": "<p style='color: red'>aaaaaaaaa</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "slug-slug",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'User1 admin',
          "author_href": "https://api.stormpath.com/v1/accounts/u1",
          "status": 'published',
          "lang": 'en',
          "remarks": "internal comment",
          "algolia_object_id": "379636340",
          "hits_count": 13,
          "sort_order": null,
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [
            {
              "id": "1",
              "name": "Root",
              "slug": "root",
              "description": "",
              "author": 'User1 admin',
              "author_href": "https://api.stormpath.com/v1/accounts/u1",
              "lang": "en",
              "sort_order": "0",
              "created_at": "1487850702",
              "updated_at": "1487850702"
            }
          ],
          "tags": [
            {"tag_id": "1", "name": "test"},
            {"tag_id": "2", "name": "new tag"},
          ],
          "attachments": [
            {
              "id": "3",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            },
            {
              "id": "4",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            }
          ],
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "2",
          "question": "id-2_cat-4_published",
          "answer": "<p style='color: red'>aaaaaaaaa</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "slug-slug",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'User1 admin',
          "author_href": "https://api.stormpath.com/v1/accounts/u1",
          "status": 'published',
          "lang": 'en',
          "remarks": "internal comment",
          "algolia_object_id": "379636340",
          "hits_count": 13,
          "sort_order": null,
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [
            {
              "id": "4",
              "name": "id-4_pid-2_cat",
              "slug": "root",
              "description": "",
              "author": 'User1 admin',
              "author_href": "https://api.stormpath.com/v1/accounts/u1",
              "lang": "en",
              "sort_order": "0",
              "created_at": "1487850702",
              "updated_at": "1487850702"
            }
          ],
          "tags": [
            {"tag_id": "1", "name": "test"},
            {"tag_id": "2", "name": "new tag"},
          ],
          "attachments": [
            {
              "id": "3",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            },
            {
              "id": "4",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            }
          ],
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "3",
          "question": "id-3_cat-4_published",
          "answer": "<p style='color: red'>aaaaaaaaa</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "slug-slug",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'User1 admin',
          "author_href": "https://api.stormpath.com/v1/accounts/u1",
          "status": 'published',
          "lang": 'en',
          "remarks": "internal comment",
          "algolia_object_id": "379636340",
          "hits_count": 13,
          "sort_order": null,
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [
            {
              "id": "4",
              "name": "id-4_pid-2_cat",
              "slug": "root",
              "description": "",
              "author": 'User1 admin',
              "author_href": "https://api.stormpath.com/v1/accounts/u1",
              "lang": "en",
              "sort_order": "0",
              "created_at": "1487850702",
              "updated_at": "1487850702"
            }
          ],
          "tags": [
            {"tag_id": "1", "name": "test"},
            {"tag_id": "2", "name": "new tag"},
          ],
          "attachments": [
            {
              "id": "3",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            },
            {
              "id": "4",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            }
          ],
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "4",
          "question": "id-4_cat-4_published",
          "answer": "<p style='color: red'>aaaaaaaaa</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "slug-slug",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'User1 admin',
          "author_href": "https://api.stormpath.com/v1/accounts/u1",
          "status": 'published',
          "lang": 'en',
          "remarks": "internal comment",
          "algolia_object_id": "379636340",
          "hits_count": 13,
          "sort_order": null,
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [
            {
              "id": "4",
              "name": "id-4_pid-2_cat",
              "slug": "root",
              "description": "",
              "author": 'User1 admin',
              "author_href": "https://api.stormpath.com/v1/accounts/u1",
              "lang": "en",
              "sort_order": "0",
              "created_at": "1487850702",
              "updated_at": "1487850702"
            }
          ],
          "tags": [
            {"tag_id": "1", "name": "test"},
            {"tag_id": "2", "name": "new tag"},
          ],
          "attachments": [
            {
              "id": "3",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            },
            {
              "id": "4",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            }
          ],
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "5",
          "question": "id-5_cat-1_published",
          "answer": "<p style='color: red'>aaaaaaaaa</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "slug-slug",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'User1 admin',
          "author_href": "https://api.stormpath.com/v1/accounts/u1",
          "status": 'published',
          "lang": 'en',
          "remarks": "internal comment",
          "algolia_object_id": "379636340",
          "hits_count": 13,
          "sort_order": null,
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [
            {
              "id": "1",
              "name": "Root",
              "slug": "root",
              "description": "",
              "author": 'User1 admin',
              "author_href": "https://api.stormpath.com/v1/accounts/u1",
              "lang": "en",
              "sort_order": "0",
              "created_at": "1487850702",
              "updated_at": "1487850702"
            }
          ],
          "tags": [
            {"tag_id": "1", "name": "test"},
            {"tag_id": "2", "name": "new tag"},
          ],
          "attachments": [
            {
              "id": "3",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            },
            {
              "id": "4",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            }
          ],
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "6",
          "question": "id-6_cat-1_published",
          "answer": "<p style='color: red'>aaaaaaaaa</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "slug-slug",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'User1 admin',
          "author_href": "https://api.stormpath.com/v1/accounts/u1",
          "status": 'published',
          "lang": 'en',
          "remarks": "internal comment",
          "algolia_object_id": "379636340",
          "hits_count": 13,
          "sort_order": null,
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [
            {
              "id": "1",
              "name": "Root",
              "slug": "root",
              "description": "",
              "author": 'User1 admin',
              "author_href": "https://api.stormpath.com/v1/accounts/u1",
              "lang": "en",
              "sort_order": "0",
              "created_at": "1487850702",
              "updated_at": "1487850702"
            }
          ],
          "tags": [
            {"tag_id": "1", "name": "test"},
            {"tag_id": "2", "name": "new tag"},
          ],
          "attachments": [
            {
              "id": "3",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            },
            {
              "id": "4",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            }
          ],
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "7",
          "question": "id-7_cat-4_draft",
          "answer": "<p style='color: red'>aaaaaaaaa</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "slug-slug",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'User1 admin',
          "author_href": "https://api.stormpath.com/v1/accounts/u1",
          "status": 'draft',
          "lang": 'en',
          "remarks": "internal comment",
          "algolia_object_id": "379636340",
          "hits_count": 13,
          "sort_order": null,
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [
            {
              "id": "4",
              "name": "id-4_pid-2_cat",
              "slug": "root",
              "description": "",
              "author": 'User1 admin',
              "author_href": "https://api.stormpath.com/v1/accounts/u1",
              "lang": "en",
              "sort_order": "0",
              "created_at": "1487850702",
              "updated_at": "1487850702"
            }
          ],
          "tags": [
            {"tag_id": "1", "name": "test"},
            {"tag_id": "2", "name": "new tag"},
          ],
          "attachments": [
            {
              "id": "3",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            },
            {
              "id": "4",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            }
          ],
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "8",
          "question": "id-8_cat-1_draft",
          "answer": "<p style='color: red'>aaaaaaaaa</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "slug-slug",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'User1 admin',
          "author_href": "https://api.stormpath.com/v1/accounts/u1",
          "status": 'draft',
          "lang": 'en',
          "remarks": "internal comment",
          "algolia_object_id": "379636340",
          "hits_count": 13,
          "sort_order": null,
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [
            {
              "id": "1",
              "name": "Root",
              "slug": "root",
              "description": "",
              "author": 'User1 admin',
              "author_href": "https://api.stormpath.com/v1/accounts/u1",
              "lang": "en",
              "sort_order": "0",
              "created_at": "1487850702",
              "updated_at": "1487850702"
            }
          ],
          "tags": [
            {"tag_id": "1", "name": "test"},
            {"tag_id": "2", "name": "new tag"},
          ],
          "attachments": [
            {
              "id": "3",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            },
            {
              "id": "4",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            }
          ],
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "9",
          "question": "id-9_cat-1_draft",
          "answer": "<p style='color: red'>aaaaaaaaa</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "slug-slug",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'User1 admin',
          "author_href": "https://api.stormpath.com/v1/accounts/u1",
          "status": 'draft',
          "lang": 'en',
          "remarks": "internal comment",
          "algolia_object_id": "379636340",
          "hits_count": 13,
          "sort_order": null,
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [
            {
              "id": "1",
              "name": "Root",
              "slug": "root",
              "description": "",
              "author": 'User1 admin',
              "author_href": "https://api.stormpath.com/v1/accounts/u1",
              "lang": "en",
              "sort_order": "0",
              "created_at": "1487850702",
              "updated_at": "1487850702"
            }
          ],
          "tags": [
            {"tag_id": "1", "name": "test"},
            {"tag_id": "2", "name": "new tag"},
          ],
          "attachments": [
            {
              "id": "3",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            },
            {
              "id": "4",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            }
          ],
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "10",
          "question": "id-10_cat-1_trash",
          "answer": "<p style='color: red'>aaaaaaaaa</p><h3>ssssss</h3><div>qqqqqqqq</div>",
          "slug": "slug-slug",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": 'User1 admin',
          "author_href": "https://api.stormpath.com/v1/accounts/u1",
          "status": 'trash',
          "lang": 'en',
          "remarks": "internal comment",
          "algolia_object_id": "379636340",
          "hits_count": 13,
          "sort_order": null,
          "created_at": "1487884302",
          "updated_at": "1487850702",
          "categories": [
            {
              "id": "1",
              "name": "Root",
              "slug": "root",
              "description": "",
              "author": 'User1 admin',
              "author_href": "https://api.stormpath.com/v1/accounts/u1",
              "lang": "en",
              "sort_order": "0",
              "created_at": "1487850702",
              "updated_at": "1487850702"
            }
          ],
          "tags": [
            {"tag_id": "1", "name": "test"},
            {"tag_id": "2", "name": "new tag"},
          ],
          "attachments": [
            {
              "id": "3",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            },
            {
              "id": "4",
              "model": "faq",
              "model_id": "1",
              "attachment_url": "https://s3.eu-central-1.amazonaws.com/myanswers/skiba/faq/6/Common_structure.pdf",
              "size": 35761,
              "type": "pdf",
              "mime": "application/pdf"
            }
          ],
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
      ],
      categories: [
        {
          "id": "1",
          "parent_id": "0",
          "name": "Root",
          "sort_order": "0",
          "lang": "en",
          "author": 'User1 admin',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": []
        },
        {
          "id": "2",
          "parent_id": "1",
          "name": "id-2_pid-1_cat",
          "sort_order": "0",
          "lang": "en",
          "author": 'User1 admin',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "3",
          "parent_id": "1",
          "name": "id-3_pid-1_cat",
          "sort_order": "4",
          "lang": "fr",
          "author": 'User1 admin',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "4",
          "parent_id": "2",
          "name": "id-4_pid-2_sub",
          "sort_order": "1",
          "lang": "en",
          "author": 'User1 admin',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": [
            "u1",
            "u2",
            "u3",
          ]
        },
        {
          "id": "5",
          "parent_id": "2",
          "name": "id-5_pid-2_sub",
          "sort_order": "1",
          "lang": "en",
          "author": 'User1 admin',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": [
            "u1",
          ]
        },
        {
          "id": "6",
          "parent_id": "2",
          "name": "id-6_pid-2_sub",
          "sort_order": "2",
          "lang": "en",
          "author": 'User1 admin',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
          ]
        },
        {
          "id": "7",
          "parent_id": "2",
          "name": "id-7_pid-2_sub",
          "sort_order": "3",
          "lang": "en",
          "author": 'User1 admin',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "8",
          "parent_id": "3",
          "name": "id-8_pid-3_sub",
          "sort_order": "0",
          "lang": "en",
          "author": 'User1 admin',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        },
        {
          "id": "9",
          "parent_id": "3",
          "name": "id-9_pid-3_sub",
          "sort_order": "0",
          "lang": "en",
          "author": 'User1 admin',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": [
            "u1",
            "u2",
            "u3",
            "u4",
            "u5",
          ]
        }
      ],
      settings: {
        "languages": [
          {"code": "en", "name": "English"},
          {"code": "nl", "name": "Dutch"},
          {"code": "de", "name": "German"},
          {"code": "fr", "name": "French"}
        ],
        "roles": [
          {"code": "admin", "name": "admin"},
          {"code": "editor", "name": "editor"},
          {"code": "visitor", "name": "visitor"},
          {"code": "contributor", "name": "contributor"}
        ],
        "faq_statuses": [
          {"code": "published", "name": "Published"},
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
          "id": "u1",
          "email": "user1@yanpix.com",
          "username": "user1@yanpix.com",
          "first_name": "User1",
          "last_name": "admin",
          "role": ["admin"],
          "subdomains": ["skiba"]
        },
        {
          "id": "u2",
          "email": "user2@yanpix.com",
          "username": "user2@yanpix.com",
          "first_name": "User2",
          "last_name": "editor",
          "role": ["editor"],
          "subdomains": ["skiba"]
        },
        {
          "id": "u3",
          "email": "user3@yanpix.com",
          "username": "user3@yanpix.com",
          "first_name": "User3",
          "last_name": "visitor",
          "role": ["visitor"],
          "subdomains": ["skiba"]
        },
        {
          "id": "u4",
          "email": "user4@yanpix.com",
          "username": "user4@yanpix.com",
          "first_name": "User4",
          "last_name": "contributor",
          "role": ["contributor"],
          "subdomains": ["skiba"]
        },
        {
          "id": "u5",
          "email": "user5@yanpix.com",
          "username": "user5@yanpix.com",
          "first_name": "User5",
          "last_name": "editor",
          "role": ["editor"],
          "subdomains": ["skiba"]
        }
      ],
      checkSubdomain: {"subdomain": "exist"},
      login: {
        "access_token": "eyJraWQiOiIyT0pZNzVDOVNIRTFISEhXUkFCRzY2MzZTIiwic3R0IjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiIzMVRoOE5NZXQ3R3VCT0R4dDRsTkU0IiwiaWF0IjoxNDg4MjA5NzM4LCJpc3MiOiJodHRwczovL2FwaS5zdG9ybXBhdGguY29tL3YxL2FwcGxpY2F0aW9ucy83Nm9oQnJHUVlLYnhQRERzeGlrZlQ3Iiwic3ViIjoiaHR0cHM6Ly9hcGkuc3Rvcm1wYXRoLmNvbS92MS9hY2NvdW50cy83OEZzcm5NZFlIQWNKRVdVUG80Z1FlIiwiZXhwIjoxNDg4MjEzMzM4LCJydGkiOiIzMVRjb0s0VFhDbmhDcm5wVzZ4WFZVIn0.XgsGFDduqHdezCOGKr_JD7taQ5ao_Ozwz2ARfwgQNcA",
        "refresh_token": "eyJraWQiOiIyT0pZNzVDOVNIRTFISEhXUkFCRzY2MzZTIiwic3R0IjoicmVmcmVzaCIsImFsZyI6IkhTMjU2In0.eyJqdGkiOiIzMVRjb0s0VFhDbmhDcm5wVzZ4WFZVIiwiaWF0IjoxNDg4MjA5NzM4LCJpc3MiOiJodHRwczovL2FwaS5zdG9ybXBhdGguY29tL3YxL2FwcGxpY2F0aW9ucy83Nm9oQnJHUVlLYnhQRERzeGlrZlQ3Iiwic3ViIjoiaHR0cHM6Ly9hcGkuc3Rvcm1wYXRoLmNvbS92MS9hY2NvdW50cy83OEZzcm5NZFlIQWNKRVdVUG80Z1FlIiwiZXhwIjoxNDkzMzkzNzM4fQ.nfSz9RXMFyJh7kzDuVpRFjbVNaoVrBPUwppb3_iVfEA",
        "token_type": "Bearer",
        "expires_in": 3600,
        "stormpath_access_token_href": "https://api.stormpath.com/v1/accessTokens/3M93ZjEOfT5mLBIPJxKJv5",
        "role": ["admin"],
        "id": "2WW8fzUSZNjQ1qV2EZDxJJ",
        "email": "oleg.skiba@yanpix.com",
        "username": "oleg.skiba@yanpix.com",
        "first_name": "Oleg",
        "last_name": "Skiba",
        "subdomains": ["skiba"],
        "status": "ENABLED"
      },
      superAdmin: {
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
      },
      attachments: [
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
      ],
      domains: {
        "subdomains": [
          {"code": "annatest", "name": "annatest"},
          {"code": "skiba", "name": "skiba"},
          {"code": "skiba2", "name": "skiba2"},
          {"code": "annam", "name": "annam"},
          {"code": "max-oni", "name": "max-oni"},
          {"code": "anna1", "name": "anna1"}]
      },
      KBSettings: {
        "lang": {"code": "en"},
        "filter": {"sort_by": "NAME_ASC"},
        "shared_resources": {
          "faq": [
            "445271402",
            "445271392",
            "481539921",
            "481539941"
          ]
        }
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
          return _toFormatResponse(data.categories[0]);
        }
        return _toFormatResponse(data.categories);
        break;
      case 'faq':
      case 'faq/algolia':
        if (reg.test(url) || method != 'GET') {
          return _toFormatResponse(data.articles[0]);
        }
        return _toFormatResponse(data.articles);
        break;
      case 'users':
        if (reg.test(url) || method != 'GET') {
          return _toFormatResponse(data.users[0]);
        }
        return _toFormatResponse(data.users);
        break;
      case 'settings/common':
        return _toFormatResponse(data.settings);
        break;
      case 'settings/advanced':
        return _toFormatResponse(data.domains);
        break;
      case 'settings/dashboard':
        return _toFormatResponse(data.KBSettings);
        break;
      case 'auth/check-subdomain':
        return _toFormatResponse(data.checkSubdomain);
        break;
      case 'auth/login':
        return _toFormatResponse(data.login);
        // return _toFormatResponse(data.superAdmin);
        break;
      case 'attachments/faq':
        if (method != 'GET') {
          return _toFormatResponse(data.attachments[0]);
        }
        return _toFormatResponse(data.attachments);
        break;
    }
    return _toFormatResponse([]);
  };

  return {
    getData
  }
}
export default FakeDataService;
