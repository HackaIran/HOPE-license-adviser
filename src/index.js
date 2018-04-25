const fs = require('fs')

const data = require('./data.license.js');

class LicenseAdviser {
    constructor(licenseDatas = null) {
      this.data = licenseDatas || data;
    }

    /**
     *
     * @param {Object} answers - An object contains some True/False fields
     *
     * @returns {Array} Array of proper licenses according to the answers will be returned
     *
     */

    advice(answers = {}) {
      return []
    }

    /**
     *
     * @param {String} name - The name of the license
     *
     * @returns {Object} An object containing properties and description of the license with the given name will be returned
     *
     */

    getLicenseInfo(name) {
      return {}
    }

}

module.exports = LicenseAdviser
