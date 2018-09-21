'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onerror = function (msg, url, lineNo, columnNo, error) {
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1) {
        alert('Script Error: See Browser Console for Detail');
    } else {
        var message = ['Message: ' + msg, 'URL: ' + url, 'Line: ' + lineNo, 'Column: ' + columnNo, 'Error object: ' + JSON.stringify(error)].join(' - ');

        console.error(message);
    }

    return false;
};

// basic simple plan
var simpleLevelPlan = '\n......................\n..#................#..\n..#..............=.#..\n..#.........o.o....#..\n..#.@......#####...#..\n..#####............#..\n......#++++++++++++#..\n......##############..\n......................';

var Vector = function () {
    function Vector(x, y) {
        _classCallCheck(this, Vector);

        this.x = x;
        this.y = y;
    }

    _createClass(Vector, [{
        key: 'plus',
        value: function plus(otherVector) {
            return new Vector(thix.x + otherVector.x, thix.y + otherVector.y);
        }
    }, {
        key: 'times',
        value: function times(factor) {
            return new Vector(this.x * factor, this.y * factor);
        }
    }]);

    return Vector;
}();

var Level = function Level(plan) {
    var _this = this;

    _classCallCheck(this, Level);

    // rows is taking the plan strin and creates a 2 d array 
    var rows = plan.trim().split('\n').map(function (el) {
        return [].concat(_toConsumableArray(el));
    });
    //get the height 
    this.height = rows.length;
    //get the width
    this.width = rows[0].length;
    //here we going to store the  gameElements like hero '@', coins '0', lava '+' , '='   
    this.gameElements = [];
    //map over the rows and find out position of the game elements in terms of vectors x,y (mx and y are indexes from map)
    // worldElements going to be strings and 
    this.rows = rows.map(function (rowArray, y) {
        return rowArray.map(function (ch, x) {
            //if type 
            var type = globalElements[ch];
            if (typeof type === "string") return type;

            _this.gameElements.push(type.create(new Vector(x, y), ch));
            return 'empty';
        });
    });
};

//simple test


var newlevel = new Level(simpleLevelPlan);
console.log(newlevel);

var State = function () {
    function State(level, actors, status) {
        _classCallCheck(this, State);

        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    _createClass(State, [{
        key: 'player',
        get: function get() {
            return this.actors.find(function (el) {
                return el.type === 'player';
            });
        }
    }], [{
        key: 'start',
        value: function start(level) {
            return new State(level, level.gameElements, 'gameon');
        }
    }]);

    return State;
}();