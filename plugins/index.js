const didEncounterErrors = require("./error");

const requestDidStart = () => {
  return {
    didEncounterErrors
  }
}

module.exports = [{ requestDidStart }]