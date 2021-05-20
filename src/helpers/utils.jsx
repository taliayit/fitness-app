function getFormatTime(time) {
    let hours = Math.floor(time/60);
    let fhours = '0' + hours;
    let minutes = time % 60;
    let fminutes = minutes.toString().length === 1 ?  '0' + minutes : minutes;
    return fhours + ":" + fminutes;    
}

function getLevelString(level) {
    switch(level) {
        case 1: return "Beginner";
        case 2: return "Intermediate";
        case 3: return "Advanced";
    }
}

export default {getFormatTime, getLevelString};