/**
 * @class
 * @desc Creates a model MVC class
 */

var game_data = (function(){

  /**
   * Represents a pattern.
   * @constructor
   * @param {string} type - Type of level.
   */
  var machinePattern = function(type) {
    var factory = new FactoryPattern();
    var newPattern = factory.createPattern(type);
    var finalPattern = newPattern.create();
    console.log(finalPattern);

    return finalPattern;
  }

  /**
   * Represents a user pattern.
   * @constructor
   */
  var userPattern = function(){
    //Se queda en el view?

  }

  /**
   *Matchs patterns
   * @function
   * @param {array} observerPattern
   */
  var matchPatterns = function(observerPattern){
    var observerAttempt = new ObserverList();
    observerAttempt.subscribe(observerPattern);
  }

  /**
   *Counts attempts
   * @function
   * @param {array} observerPattern
   */
  var attempts = function(){
    console.log('attemps');
  }

  /**
   *Counts attempts
   * @function
   * @param
   * Deberia estar en el view?
   */
  var changePegs = function(){
    var messages = {
      right: '../img/right-peg.png',
      wrong: '../img/wrong-peg.png'
    }

    return console.log(messages);
  }

  return {
    machinePattern: machinePattern,
    userPattern: userPattern,
    matchPatterns: matchPatterns,
    attempts: attempts,
    changePegs: changePegs
  }

})();

game_data.machinePattern('beginner');
game_data.changePegs();
