export default (timeString, type) => {
  const oldTime = new Date(timeString)
  const currTime = new Date()

  const hm = oldTime.toLocaleTimeString(navigator.language, {
    hour: 'numeric',
    minute: '2-digit',
  });
  const dayDiff = currTime.getDate() - oldTime.getDate();
  if (type === "comment") {
    const msTime = currTime.getTime() - oldTime.getTime();
    if (msTime / (1000 * 60 * 60 * 24 * 7 * 52) >= 1) return Math.floor(msTime / (1000 * 60 * 60 * 24 * 7 * 52)).toString()+ "y";
    else if (msTime / (1000 * 60 * 60 * 24 * 7) >= 1) return Math.floor(msTime / (1000 * 60 * 60 * 24 * 7)).toString() + "w";
    else if (msTime / (1000 * 60 * 60 * 24) >= 1) return Math.floor(msTime / (1000 * 60 * 60 * 24)).toString() + "d";
    else if (msTime / (1000 * 60 * 60) >= 1) return Math.floor(msTime / (1000 * 60 * 60)).toString() + "h";
    else return Math.floor(msTime / (1000 * 60)).toString() + "m";
  }
  if (dayDiff >= 2 || dayDiff < 0) {
    const options = currTime.getFullYear === oldTime.getFullYear ? {
      month: 'long',
      day: 'numeric',
    } : {
      month: 'long',
      day: 'numeric',
      year: '2-digit',
    }
    return (oldTime.toLocaleDateString(navigator.language, options) + " at " + hm);
  }
  else if (dayDiff === 1) {
    return ("Yesterday at "+ hm);
  }
  else {
    const msTime = currTime.getTime() - oldTime.getTime();
    const msTimehr = msTime / (1000 * 60 * 60);
    if (msTimehr >= 1 ) { 
      return Math.floor(msTimehr).toString()+ (msTimehr === 1 ? " hr" : " hrs");
    }
    else {
      return Math.floor(msTime/(1000*60)).toString()+ "m"
    }
  }
}

