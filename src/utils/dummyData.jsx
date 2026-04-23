export const generateCandidates = (count = 100) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `Student ${i + 1}`,
        college: `College ${i % 10}`,
        assignment_score: Math.floor(Math.random() * 100),
        video_score: Math.floor(Math.random() * 100),
        ats_score: Math.floor(Math.random() * 100),
        github_score: Math.floor(Math.random() * 100),
        communication_score: Math.floor(Math.random() * 100),
        reviewed: false,
        shortlisted: false,
    }));
};