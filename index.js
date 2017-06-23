/* ഓം ബ്രഹ്മാർപ്പണം. */

/*
 * index.js
 * Created: Fri Jun 23 2017 11:08:48 GMT+0530 (IST)
 * Copyright 2017 Harish.K<harish2704@gmail.com>
 */


/*
Adds a catchIf method to Promise.
*/
function addCatchIf ( promiseClass ){
  promiseClass.prototype.catchIf = function(){
    const args = [];
    let i = arguments.length;
    if( i === 1 ){
      return this.catch( arguments[ 0 ] );
    }

    while( i-- ){
      args[ i ] = arguments[ i ];
    }
    const handler = args.pop();
    return this.catch(function(err){
      let i;
      const l = args.length;
      for ( i = 0; i < l; i++ ) {
        if( err instanceof args[ i ] ){
          return handler( err );
        }
      }
      return promiseClass.reject(err);
    });
  };
}

module.exports = addCatchIf;
