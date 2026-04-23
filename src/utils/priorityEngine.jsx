export const calculatePriority = (candidate) => {
    const score =
        candidate.assignment_score * 0.30 +
        candidate.video_score * 0.25 +
        candidate.ats_score * 0.20 +
        candidate.github_score * 0.15 +
        candidate.communication_score * 0.10;

    if (score >= 80) return { level: "P0", color: "green", score };
    if (score >= 70) return { level: "P1", color: "yellow", score };
    if (score >= 55) return { level: "P2", color: "orange", score };
    return { level: "P3", color: "red", score };
};