const bcrypt = require("bcrypt");

//Fake "databases"
const urlDatabase = {
  b2xVn2: {
    longURL: "https://www.lighthouselabs.ca",
    userID: "userRandomID",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  Gsm5xK: {
    longURL: "https://www.google.com",
    userID: "userRandomID",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  Qf0Ri3: {
    longURL: "https://github.com",
    userID: "user2RandomID",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  Ar6Gy7: {
    longURL: "https://www.npmjs.com",
    userID: "user2RandomID",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  b6UTxQ: {
    longURL: "https://developer.mozilla.org",
    userID: "aJ48lW",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  i3BoGr: {
    longURL: "https://www.google.ca",
    userID: "aJ48lW",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  y0Nocm: {
    longURL: "https://www.twitch.tv",
    userID: "aJ48lW",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  fglH5v: {
    longURL: "https://www.freecodecamp.org",
    userID: "aJ48lW",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  X865ft: {
    longURL: "https://instagram.com",
    userID: "aJ48lW",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  L1QoKQ: {
    longURL: "https://youtube.com",
    userID: "aJ48lW",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  bkRgD5: {
    longURL: "https://twitter.com",
    userID: "aJ48lW",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  N60v2F: {
    longURL: "https://www.spotify.com",
    userID: "aJ48lW",
    visits: 0,
    uniqueVisits: [],
    history: null
  },
  Xwp350: {
    longURL: "https://www.npmjs.com",
    userID: "aJ48lW",
    visits: 0,
    uniqueVisits: [],
    history: null
  }
};
const users = {
  userRandomID: {
    id: "userRandomID",
    email: "user@example.com",
    password: bcrypt.hashSync("purple-monkey-dinosaur", 10)
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "user2@example.com",
    password: bcrypt.hashSync("dishwasher-funk", 10)
  },
  aJ48lW: {
    id: "aJ48lW",
    email: "foo@hotmail.com",
    password: bcrypt.hashSync("123", 10)
  },
  Bl4glW: {
    id: "Bl4glW",
    email: "bar@hotmail.com",
    password: bcrypt.hashSync("asd", 10)
  }
};

module.exports = { urlDatabase, users };
