const licenseData = require('./data.license.js');

const propertyData = require("./data.property.js");

class LicenseAdviser {
  constructor(licenseDatas = null) {
    this.licenseData = licenseDatas || licenseData;
    this.propertyData = propertyData;
    this._calculateMark();
  }

  /**
   *
   * @param {Object} answers - An object contains some True/False fields
   *
   * @returns {Array} Array of proper licenses according to the answers will be returned
   * 
   * The default answers are for the MIT license
   *
   */

  advice(answers = {
    commercialUse: true,
    destribution: true,
    modification: true,
    patentUse: false,
    privateUse: true,
    discloseSource: false,
    licenseAndCopyRightNotice: true,
    sameLicense: false,
    stateChange: false,
    liability: true,
    tradeMarkUse: false,
    warranty: true
  }) {

    let result = [];

    for(let licenseName in this.licenseData){
      // push a new one to the result
      result.push({name:licenseName,mark:0});
      // let's check the property and give the marks
      for(let propertyName in this.propertyData){
        if(this.licenseData[licenseName][propertyName] == answers[propertyName]){
          result[result.length-1].mark += this.propertyData[propertyName].mark;
        }
      }
      // let's percentage it
      result[result.length-1].mark /= this.maxMark;
      result[result.length-1].mark = parseFloat(result[result.length-1].mark.toFixed(2));
    }

    // let's sort
    result.sort((a,b)=> b.mark - a.mark);

    return result;

  }

  /**
   *
   * @param {String} licenseName - The name of the license
   *
   * @returns {Object} An object containing properties of the license with the given name will be returned
   *
   */

  getLicenseInfo(licenseName) {
    return this.licenseData[licenseName];
  }

  /**
   * 
   * @param {String} licenseName - The name of the property
   * 
   * @returns {Object} An object containing mark and description of the property with the given name will be returned
   * 
   */

  getPropertyDetails(propertyName){
    return this.propertyData[propertyName];
  }

  /**
   * 
   * @description Calculates the max mark
   * 
   */

  _calculateMark(){
    let mark = 0;
    for(let propertyName in this.propertyData){
      mark += this.propertyData[propertyName].mark || 0;
    }
    this.maxMark = mark;
  }

}

module.exports = LicenseAdviser