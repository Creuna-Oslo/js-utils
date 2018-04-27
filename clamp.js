function clamp(currentValue, minimumValue, maximumValue) {
  return Math.max(Math.min(currentValue, maximumValue), minimumValue);
}

export default clamp;
