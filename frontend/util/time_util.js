export default (timeString) => {
  const oldTime = new Date(timeString)
  const currTime = new Date()

  let hm = oldTime.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  });
  let dayDiff = currTime.getDate() - oldTime.getDate();
  
  if (dayDiff> 2 || dayDiff < 0) {
    return (oldTime.toLocaleDateString() + " at " + hm);
  }
  else if (dayDiff === 1) {
    return ("Yesterday at "+ hm);
  }
  else {
    return ("Today at "+ hm);
  }
}