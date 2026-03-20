export function isItFunctionObject(value) {
    if (typeof value === 'function' || typeof value === "object") {return true;}
    return false; 
}