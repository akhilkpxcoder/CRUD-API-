module.exports = {
    // operation's method
    get: {
      tags: ["User CRUD operations"], // operation's tag.
      description: "Get a User", // operation's desc.
      operationId: "getUser", // unique operation username
      parameters: [
        // expected params.
        {
          name: "username", // name of the param
          in: "path", // location of the param
          schema: {
            $ref: "#/components/schemas/username", // data model of the param
          },
          required: true, // Mandatory param
          description: "Username",
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "User is obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User", // User data model
              },
            },
          },
        },
        // response code
        404: {
          description: "User is not found", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error", // error data model
              },
            },
          },
        },
      },
      security: {
        bearerAuth:{
             write:"users",
             read:"users"
        }
      }
    },
  };