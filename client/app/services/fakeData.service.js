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
          "categories": [
            {
              "id": "1",
              "parent_id": "0",
              "name": "Root",
              "sort_order": "0",
              "lang": "en",
              "author": 'Oleg Skiba',
              "created_at": "1487850702",
              "updated_at": "1487850702",
              "granted_access": []
            }
          ],
          "tags": [{"tag_id": "1", "name": "test"}, {"tag_id": "2", "name": "new tag"},],
          "remarks": "internal comment",
          "hits_count": 13,
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
          "granted_access": ['2n0Y6dzxevGvKVppiU9BhR']
        },
        {
          "id": "2",
          "question": "fdhdfhfd",
          "answer": "Einen Moment bitte. Ich schau mal kurz nach.\n\nSuchen Sie eine bestimmte Lagerhalle?\n\nBij alle producten: Welche Maße brauchen Sie?\nBij Lagerzelte ook: Aus welchem Material soll die Plane bestehen? PVC oder PE?\n\nAuf welchen Untergrund möchten Sie die Halle stellen?\n\n\n\nMöchten Sie ein unverbindliches Angebot empfangen?\nDanke. Darf ich bitte Ihre Kontaktdaten notieren, so daß mein Kollege mit Ihnen Kontakt aufnehmen kann?\n\nDanke. Darf ich bitte Ihre Kontaktdaten notieren, so daß mein Kollege Ihnen ein unverbindliches Angebot schicken kann?\n\nIch möchte auch gern Ihre Telefonnummer und E-Mail-Adresse notieren.\n\nIch hätte auch gerne Ihren Namen, den Firmennamen, die PLZ und Telefonnummer.\n\nDann hätte ich gerne Ihren Namen, den Firmennamen, die PLZ, Telefonnummer und E-Mail-Adresse.\n\nDanke schön! Wie ist der Firmenname?\n\nDann hätte ich auch noch gerne Ihren eigenen Namen.\n\nWie ist Ihr Name?\n\nUnd wie ist Ihr eigener Name?\n\nWie lautet Ihre PLZ? [PLZ is postcode in het Duits]\n\nDann hätte ich gerne Ihren Firmennamen und die PLZ.\n\nVielen Dank. Mein Kollege wird Sie innerhalb von 2 Werktagen kontaktieren.\n\nHaben Sie noch weitere Fragen?\n\nIch wünsche Ihnen einen schönen Tag/Abend!\n\nIch wünsche Ihnen ein schönes Wochenende!\n\nWenn Sie keine weiteren Fragen haben, beende ich diesen Chat.\n\nJa, schauen Sie sich in aller Ruhe um.\n\nWenn Sie Preisinformationen brauchen, dann helfe ich Ihnen gerne weiter.\n\nWenn Sie unverbindliche Preisinformationen brauchen, dann können Sie sich gerne wieder bei mir melden.\n\nFalls Sie später noch Fragen haben, zögern Sie nicht um mit uns über den Chat in Kontakt zu treten. Wir sind täglich bis 23 Uhr online.Sollten Sie später doch noch eine Frage haben, wir sind hier täglich von 7.00 - 23.00 Uhr über den Chat zu erreichen.\n\nDas weiß ich nicht. Ich werde meinen Kollegen fragen. Darf ich bitte Ihre Kontaktdaten notieren? Er wird Sie dann kontaktieren.\n\nDie Frage kann ich Ihnen leider nicht beantworten. Ich kann es aber gerne für Sie nachfragen. Dürfte ich Ihre Kontaktdaten notieren? Mein Kollege wird sich dann mit Ihnen in Verbindung setzen.\n\nGern geschehen!\n\nKeine Ursache!\n\nWünschen Sie ein Angebot inkl. Transportkosten?\n\nMöchten Sie ein Angebot inkl. Transport- und Montagekosten erhalten?\n\nBauen Sie die Lagerhalle selbst auf?\n\nWollen Sie die Lagerhalle selbst aufbauen, oder sollen wir Ihnen auch ein Angebot machen für die Montagekosten?\n\nWie wollen Sie die Lagerhalle am Boden befestigen? Mit Erdnägeln oder mit Betonankern?\n\n(Wenn Kunde es nicht weiß)\nAuf welchen Untergrund wollen Sie die Lagerhalle stellen?\n\nFundament = Betonanker\n\nSchotter, Asphalt oder Pflastersteine, zeitlich begrenzter Aufbau, Fliegender Bau = Erdnägel",
          "slug": "fdhdfhfd",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": "Test User",
          "status": 'published',
          "lang": 'en',
          "algolia_object_id": "379636380",
          "created_at": "1486540724",
          "updated_at": "1487850724",
          "categories": [{"id": "2", "name": "Keyboard", "slug": null, "description": "", "lang": "en"}],
          "tags": [],
          "remarks": "internal comment",
          "hits_count": 547,
          "granted_access": ['78FsrnMdYHAcJEWUPo4gQe']
        },
        {
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
          "categories": [{"id": "2", "name": "Keyboard", "slug": null, "description": "", "lang": "en"}],
          "tags": [],
          "remarks": "internal comment",
          "hits_count": 676,
          "granted_access": []
        },
        {
          "id": "4",
          "question": "sdfsdf",
          "answer": "<p>sdfsdfsd</p>",
          "slug": "sdfsdf",
          "visibility": 'public',
          "is_open_comments": "1",
          "author": "Test User",
          "status": "published",
          "lang": "en",
          "algolia_object_id": "379636980",
          "created_at": "1487866627",
          "updated_at": "1487930293",
          "categories": [{"id": "4", "name": "test1", "slug": null, "description": "", "lang": "en"}],
          "tags": [],
          "remarks": "internal comment",
          "hits_count": 11,
          "granted_access": []
        },
        {
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
          "categories": [{"id": "4", "name": "test1", "slug": "keyboard", "description": "", "lang": "en"}],
          "tags": [],
          "remarks": "internal comment",
          "hits_count": 0,
          "granted_access": []
        },
        {
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
          "categories": [{"id": "5", "name": "test2", "slug": null, "description": "", "lang": "en"}],
          "tags": [{"tag_id": "1", "name": "test"}],
          "remarks": "internal comment",
          "hits_count": 45,
          "granted_access": []
        }
      ],
      categories: [
        {
          "id": "1",
          "parent_id": "0",
          "name": "Root",
          "sort_order": "0",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": []
        },
        {
          "id": "2",
          "parent_id": "1",
          "name": "Keyboard",
          "sort_order": "0",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": [
            "78FsrnMdYHAcJEWUPo4gQe",
            "2n0Y6dzxevGvKVppiU9BhR",
            "NwUQypbQRtd5485POk7Nh",
            "5G0kKHSP10OICd4MRAr6cO"
          ]
        },
        {
          "id": "12",
          "parent_id": "2",
          "name": "Keyboard FR",
          "sort_order": "4",
          "lang": "fr",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": ["78FsrnMdYHAcJEWUPo4gQe"]
        },
        {
          "id": "3",
          "parent_id": "1",
          "name": "Phone",
          "sort_order": "1",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": ["78FsrnMdYHAcJEWUPo4gQe"]
        },
        {
          "id": "4",
          "parent_id": "2",
          "name": "test1",
          "sort_order": "1",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": ["78FsrnMdYHAcJEWUPo4gQe"]
        },
        {
          "id": "5",
          "parent_id": "2",
          "name": "test2",
          "sort_order": "2",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": ["78FsrnMdYHAcJEWUPo4gQe"]
        },
        {
          "id": "6",
          "parent_id": "2",
          "name": "test3",
          "sort_order": "3",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": ["78FsrnMdYHAcJEWUPo4gQe"]
        },
        {
          "id": "7",
          "parent_id": "1",
          "name": "new",
          "sort_order": "0",
          "lang": "en",
          "author": 'Oleg Skiba',
          "created_at": "1487850702",
          "updated_at": "1487850702",
          "granted_access": ["78FsrnMdYHAcJEWUPo4gQe"]
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
          {"code": "user", "name": "user"},
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
          "id": "78FsrnMdYHAcJEWUPo4gQe",
          "email": "oleg.skiba@yanpix.com",
          "username": "oleg.skiba@yanpix.com",
          "first_name": "Oleg",
          "last_name": "Skiba",
          "role": ["admin"],
          "subdomains": ["skiba"]
        },
        {
          "id": "2n0Y6dzxevGvKVppiU9BhR",
          "email": "test4@test.com",
          "username": "test4@test.com",
          "first_name": "sdfsfsd",
          "last_name": "dfgdsgsd",
          "role": ["user"],
          "subdomains": ["skiba"]
        },
        {
          "id": "NwUQypbQRtd5485POk7Nh",
          "email": "wwwww@dfgdf.dfg",
          "username": "fsfsdf@dfgdf.dfg",
          "first_name": "dgdfsd",
          "last_name": "dsgsdfg",
          "role": ["visitor"],
          "subdomains": ["skiba"]
        },
        {
          "id": "5G0kKHSP10OICd4MRAr6cO",
          "email": "test@test.com",
          "username": "test@test.com",
          "first_name": "Test2",
          "last_name": "User",
          "role": ["user"],
          "subdomains": ["skiba"]
        },
        {
          "id": "3wGzBu2ikq85AFLaToYsTU",
          "email": "test@test.ww",
          "username": "test@test.ww",
          "first_name": "Test",
          "last_name": "User",
          "role": ["user"],
          "subdomains": ["skiba"]
        }
      ],
      checkSubdomain: {"subdomain": "exist"},
      login: {
        "access_token": "eyJraWQiOiIyT0pZNzVDOVNIRTFISEhXUkFCRzY2MzZTIiwic3R0IjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiIzMVRoOE5NZXQ3R3VCT0R4dDRsTkU0IiwiaWF0IjoxNDg4MjA5NzM4LCJpc3MiOiJodHRwczovL2FwaS5zdG9ybXBhdGguY29tL3YxL2FwcGxpY2F0aW9ucy83Nm9oQnJHUVlLYnhQRERzeGlrZlQ3Iiwic3ViIjoiaHR0cHM6Ly9hcGkuc3Rvcm1wYXRoLmNvbS92MS9hY2NvdW50cy83OEZzcm5NZFlIQWNKRVdVUG80Z1FlIiwiZXhwIjoxNDg4MjEzMzM4LCJydGkiOiIzMVRjb0s0VFhDbmhDcm5wVzZ4WFZVIn0.XgsGFDduqHdezCOGKr_JD7taQ5ao_Ozwz2ARfwgQNcA",
        "refresh_token": "eyJraWQiOiIyT0pZNzVDOVNIRTFISEhXUkFCRzY2MzZTIiwic3R0IjoicmVmcmVzaCIsImFsZyI6IkhTMjU2In0.eyJqdGkiOiIzMVRjb0s0VFhDbmhDcm5wVzZ4WFZVIiwiaWF0IjoxNDg4MjA5NzM4LCJpc3MiOiJodHRwczovL2FwaS5zdG9ybXBhdGguY29tL3YxL2FwcGxpY2F0aW9ucy83Nm9oQnJHUVlLYnhQRERzeGlrZlQ3Iiwic3ViIjoiaHR0cHM6Ly9hcGkuc3Rvcm1wYXRoLmNvbS92MS9hY2NvdW50cy83OEZzcm5NZFlIQWNKRVdVUG80Z1FlIiwiZXhwIjoxNDkzMzkzNzM4fQ.nfSz9RXMFyJh7kzDuVpRFjbVNaoVrBPUwppb3_iVfEA",
        "token_type": "Bearer",
        "expires_in": 3600,
        "stormpath_access_token_href": "https://api.stormpath.com/v1/accessTokens/31Th8NMet7GuBODxt4lNE4",
        "role": ["contributor"],
        "id": "78FsrnMdYHAcJEWUPo4gQe",
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
        "filter": {"sort_by": "NAME_ASC"}
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
      case 'settings':
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
