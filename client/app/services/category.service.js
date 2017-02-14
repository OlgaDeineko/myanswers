function CategoryService() {

  let getAll = () => {
    return new Promise((resolve, reject) => {
      resolve([{
          "id": 2,
          "title": "node2",
          "nodrop": true,
          "nodes": [
            {
              "id": 21,
              "title": "node2.1",
              "nodes": [
                {
                  "id": 210,
                  "title": "node2.1.1",
                  "nodes": [
                    {
                      "id": 2100,
                      "title": "node2.1.1.1",
                      "nodes": []
                    },
                    {
                      "id": 2101,
                      "title": "node2.1.1.2",
                      "nodes": []
                    },
                    {
                      "id": 2102,
                      "title": "node2.1.1.3",
                      "nodes": []
                    },
                    {
                      "id": 2103,
                      "title": "node2.1.1.4",
                      "nodes": []
                    },
                    {
                      "id": 2104,
                      "title": "node2.1.1.5",
                      "nodes": []
                    },
                    {
                      "id": 2105,
                      "title": "node2.1.1.6",
                      "nodes": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 22,
              "title": "node2.2",
              "nodes": [
                {
                  "id": 220,
                  "title": "node2.2.1",
                  "nodes": []
                }
              ]
            },
            {
              "id": 22,
              "title": "node2.3",
              "nodes": []
            },
            {
              "id": 23,
              "title": "node2.4",
              "nodes": []
            }
          ]
        },
        {
          "id": 3,
          "title": "node3",
          "nodes": [
            {
              "id": 31,
              "title": "node3.1",
              "nodes": []
            }
          ]
        }
      ]);
    });
  }

  return {
    getAll
  }
}

export default CategoryService;
