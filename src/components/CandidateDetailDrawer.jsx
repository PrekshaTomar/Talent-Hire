import VideoEvaluation from "./VideoEvaluation";
export default function CandidateDetailDrawer({ candidate, onClose, onUpdate }) {
    if (!candidate) return null;

    const handleChange = (field, value) => {
        onUpdate({ ...candidate, [field]: Number(value), reviewed: true });
    };

    return (

        <div style={{
            position: "fixed",
            right: 0,
            top: 0,
            width: "300px",
            height: "100%",
            background: "#fff",
            borderLeft: "2px solid #ccc",
            padding: "10px"
        }}>
            <button onClick={onClose}>Close</button>
            <h3>{candidate.name}</h3>

            <label>Assignment: {candidate.assignment_score}</label>
            <input type="range" min="0" max="100"
                value={candidate.assignment_score}
                onChange={(e) => handleChange("assignment_score", e.target.value)}
            />

            <label>Video: {candidate.video_score}</label>
            <input type="range" min="0" max="100"
                value={candidate.video_score}
                onChange={(e) => handleChange("video_score", e.target.value)}
            />

            <label>ATS: {candidate.ats_score}</label>
            <input type="range" min="0" max="100"
                value={candidate.ats_score}
                onChange={(e) => handleChange("ats_score", e.target.value)}
            />
            <VideoEvaluation candidate={candidate} onUpdate={onUpdate} />
            <button
                onClick={() =>
                    onUpdate({ ...candidate, shortlisted: !candidate.shortlisted })
                }
            >
                {candidate.shortlisted ? "Remove Shortlist" : "Shortlist Candidate"}
            </button>
        </div>

    );
}