function $(query){ return new E(query); }
/**
 * Instantiate an Object with querySelector elements
 * @param {String} query 
 */
function E(query)
{
    if (typeof query === 'string'){
        this.query = query;
        this.el = document.querySelectorAll(query);
        return this;
    }
}

/**
 * Add an event to elements
 * @param {String} event 
 * @param {Function} callback 
 */
E.prototype.on = function(event, callback){
    if (this.el && this.el.length > 0) {
        this.el.forEach(function(element){
            element.addEventListener(event, function(event){ callback.apply(element, [event]) });
        });
    }
    return this;
}

/**
 * Remove an event to elements
 * @param {String} event 
 * @param {Function} callback 
 */
E.prototype.off = function(event, callback){
    if (this.el && this.el.length > 0) {
        this.el.forEach(function(element){
            element.removeEventListener(event, function(event){ callback.apply(element, [event]) });
        });
    }
    return this;
}

/**
 * 
 */
E.prototype.createElement = function(){

}

/**
 * 
 * @param {String} query 
 */
E.prototype.appendTo = function(query){

}

/**
 * 
 * @param {String} query 
 */
E.prototype.appendAfter = function(query){
    
}

/**
 * 
 * @param {String} query 
 */
E.prototype.appendBefore = function(query){
    
}
