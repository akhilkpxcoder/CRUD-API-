module.exports = {
    // operation's method
    post: {
      tags: ["Login operations"], // operation's tag
      description: "Login User", // short desc
      operationId: "loginUser", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginInput", // User input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Login successfully", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };