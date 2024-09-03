const fetch = require("node-fetch");

exports.handler = async (event) => {
  const url = event.queryStringParameters.url;
  if (!url) {
    return { statusCode: 400, body: "URL parameter is required" };
  }

  const response = await fetch(url);
  const data = await response.text();

  return {
    statusCode: response.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": response.headers.get("Content-Type"),
    },
    body: data,
  };
};
