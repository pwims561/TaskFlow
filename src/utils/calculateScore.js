// TaskFlow "What's Next?" Scoring Utility
// Calculates which task is most urgent based on priority and deadline

export function calculateScore(priorityValue, hoursUntilDeadline) {
  if (hoursUntilDeadline <= 0) return 0; // overdue = highest urgency
  return priorityValue / hoursUntilDeadline;
}
