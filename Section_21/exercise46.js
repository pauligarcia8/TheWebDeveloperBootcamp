// Egg Laying Exercise
//Defne an object called hen. It should have three properties:
//-Name should set to 'Helen'
//-eggCount should be set to 0
//-layAnEgg should be a method wich increments the values of egCount by 1 and returns the string "RGG". You'll need to use THIS.
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function (){
      `${this.eggCount ++}`;
      return 'EGG'; 
    }
  };