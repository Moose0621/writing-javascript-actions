const request = require("request-promise");

const options = {
  method: "GET",
  uri: "http://icanhazdadjoke.com",
  headers: {
    Accept: "application/json",
    "User-Agent":
    " Writing JavaScript action GitHub Learning Lab Course. Visit lab.github.com"
  },
  json: true
};

async function getJoke() {
  const rest = await request(options);
  return res.joke;
}

module.exports = getJoke;
