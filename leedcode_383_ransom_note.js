/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;
    let ransomNoteArr = ransomNote.split('');
    let oldMagazineLength = magazine.length;
    
    ransomNoteArr.forEach(item => {
        magazine = magazine.replace(item, '');
    })
    
    if(oldMagazineLength == magazine.length + ransomNote.length){
        return true;
    } else {
        return false;
    }
};
