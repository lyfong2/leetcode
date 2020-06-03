/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    typed = typed.split('');
    
    for(let i = 0; i < typed.length; i++){
        if(typed[i] === name[i]){
            continue;
        }
        if(typed[i - 1] && typed[i] === typed[i - 1]){
            typed.splice(i, 1);
            i--;
        }        
    }
    return name === typed.join('');
};
