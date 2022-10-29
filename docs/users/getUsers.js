module.exports = {
    // method of operation
    get: {
        security: [
            {
              bearerAuth: [],
            },
          ],
      tags: ["User CRUD operations"], // operation's tag.
      description: "Get Users", // operation's desc.
      operationId: "getusers", // unique operation username.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Users were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User", // User model
              },
            },
          },
        },
      },
    },
  };