window.onerror = function (msg, url, lineNo, columnNo, error) {
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1){
        alert('Script Error: See Browser Console for Detail');
    } else {
        var message = [
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error)
        ].join(' - ');

        console.error(message);
    }

    return false;
};

 // basic simple plan
let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`; 

class Vector{
      constructor(x,y){
          this.x = x;
          this.y = y;
      }
      plus(otherVector){
           return new Vector(thix.x + otherVector.x, thix.y + otherVector.y);
      }

      times(factor){
          return new Vector(this.x * factor, this.y * factor);
      }

}


class Level {
     constructor(plan){
         // rows is taking the plan strin and creates a 2 d array 
             let rows = plan.trim().split('\n').map(el=>{return [...el]});
              //get the height 
             this.height = rows.length;
             //get the width
             this.width = rows[0].length;
             //here we going to store the  gameElements like hero '@', coins '0', lava '+' , '='   
             this.gameElements = []; 
             //map over the rows and find out position of the game elements in terms of vectors x,y (mx and y are indexes from map)
             // worldElements going to be strings and 
             this.rows = rows.map((rowArray,y)=>{
                   return rowArray.map((ch,x)=>{
                       //if type 
                        let type = globalElements[ch];
                            if(typeof type === "string")
                                return type;
                            
                            this.gameElements.push(type.create(new Vector(x,y),ch));
                            return 'empty';

                   });
             });
     }
}

//simple test
let newlevel = new Level(simpleLevelPlan);
console.log(newlevel);


class State {
     constructor(level,actors, status){
          this.level = level;
          this.actors = actors;
          this.status = status;
     }

     static start(level){
         return new State(level, level.gameElements, 'gameon');
     }

     get player(){
          return this.actors.find((el)=>{ return el.type === 'player'});
     }
}

 
class Player {
     constructor(pos,speed){
         this.pos = pos;
         this.speed = speed;

     }

     get type() { return 'player'}

     static create(pos){
              return new Player(pos.plus(new Vector(0,-0.5)), new Vector(0,0));
     }

}


Player.prototype.size = new Vector(0.8, 1.5);