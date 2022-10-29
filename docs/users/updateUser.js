module.exports = {
    // operation's method
    put: {
      tags: ["User CRUD operations"], // operation's tag
      description: "Update User", // short desc
      operationId: "updateUser", // unique operation username
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UpdateInput", // User input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        200: {
          description: "User updated successfully", // response desc.
        },
        // response code
        404: {
          description: "User not found", // response desc.
        },
        // response code
        500: {
          description: "Server error", // response desc.
        },
      },
    },
  };