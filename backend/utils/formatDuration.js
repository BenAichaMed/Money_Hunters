module.exports = function formatDuration(seconds) {
  if (!seconds) return "00:00";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const parts = [];

  if (hours > 0) {
    parts.push(String(hours).padStart(2, "0"));
  }

  parts.push(String(minutes).padStart(2, "0"));
  parts.push(String(remainingSeconds).padStart(2, "0"));

  return parts.join(":");
};
