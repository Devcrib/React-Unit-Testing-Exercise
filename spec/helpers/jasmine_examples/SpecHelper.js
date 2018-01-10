beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    },
    toBeOfType: function() {
      return {
          compare: function(actual, expected) {
              return {
                  pass: typeof(actual) === expected
              }
          }
      }
    },
  
    toBeEmpty: function() {
      return {
        // actual - fib  expected = arg
        compare: function(actual, expected) {

          return {
            pass: typeof(actual) !== 'integer'
          }
        }
      };
    },

    toBePositive: function() {
      return {
        compare: function(actual, expected) {
          return {
            pass: expected > 0
          }
        }
      }
    }, 
    toHaveThrown: function() {
      return {
          compare: function(actual) {
             actual(arguments)
              let res = false;
              try {
                  actual(...arguments.slice(1))
              } catch (e) {
                  res = true
              }
              return {
                  pass: res
              }
          }
      }
    }
  });
});
