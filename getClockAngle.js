function getClockAngle(hh_mm) {
  const [hours, minutes] = hh_mm.split(":").map(Number);

  // convert hours in 24 to 12 for easy calculating because an analog clock has only numbers 1-12
  const hoursIn12 = hours % 12;

  /** find hour angle
   * 1 hours = 30 degrees (12 hours = 360 degrees => 360/12 = 30)
   * e.g. 14:30 = 02:30 = 2.5 hrs => 2.5 * 30 = 75 degrees */
  const hourAngle = (hoursIn12 + minutes / 60) * 30;
  /** find minute angle
   * 1 minutes = 6 degrees (60 minutes = 360 degrees => 360/60 = 6) */
  const minuteAngle = minutes * 6;

  // find difference angle ignore shorter or longer
  let angle = Math.abs(hourAngle - minuteAngle);
  // find the shorter one between 2 angles
  let shorterAngle = Math.min(angle, 360 - angle);
  return shorterAngle;
}

console.log(getClockAngle("9:00"));
console.log(getClockAngle("17:30"));
