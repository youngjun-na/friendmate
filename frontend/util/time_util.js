export default (timeString) => {
  const oldTime = new Date(timeString)
  const currTime = new Date()

  let hm = oldTime.toLocaleTimeString(navigator.language, {
    hour: 'numeric',
    minute: '2-digit',
  });
  let dayDiff = currTime.getDate() - oldTime.getDate();
  
  if (dayDiff >= 2 || dayDiff < 0) {
    let options = currTime.getFullYear === oldTime.getFullYear ? {
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
    return ("Today at "+ hm);
  }
}