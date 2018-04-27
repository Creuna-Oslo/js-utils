export default function(val, inMin, inMax, outMin, outMax) {
  return (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
