import { installGlobals } from "@remix-run/node";
// const fetch = require("node-fetch");
require("dotenv").config();

const auth = process.env.AC_API_KEY,
  baseURL = process.env.AC_BASE_URL;

const subscribeHandler = async (email, context, callback) => {
  // Parse the body for the email address from the field (usually expecting a FormData object)

  const tag = 82, // <------- this variable is a set value for the VOX Souls project. Sets the interest of the subscriber.
    headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-token": auth,
    }; // <------- Sets the Bearer Token based on the env

  const addContactOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      contact: {
        email: email,
      },
    }),
  };

  // First have to try and create/update the subscriber to get the ID within the CRM

  try {
    const subResponse = await fetch(
      baseURL + "contact/sync",
      addContactOptions
    );
    if (!subResponse.ok) {
      throw new Error(
        `Error response from contact/sync: ${
          subResponse.status
        }: ${await subResponse.text()}`
      );
    }
    const contact = await subResponse.json();
    // console.log(contact);

    // Then we can add the tag to that subscriber based on their ID

    const contactTagsResponse = await fetch(baseURL + "contactTags", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        contactTag: { contact: contact.contact.id, tag: tag },
      }),
    });
    if (!contactTagsResponse.ok) {
      throw new Error(
        `Error response from contactTags: ${
          contactTagsResponse.status
        }: ${await contactTagsResponse.text()}`
      );
    }
    const responseTag = await contactTagsResponse.json();
    // console.log(responseTag);
    return {
      statusCode: 200,
      body: JSON.stringify({
        result: "Success V1",
      }),
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: error.message,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
    };
  }
};
module.exports = { subscribeHandler };
