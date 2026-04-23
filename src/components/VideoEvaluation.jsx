import { useState } from "react";

export default function VideoEvaluation({ candidate, onUpdate }) {
    const [notes, setNotes] = useState("");

    const handleScore = (field, value) => {
        onUpdate({ ...candidate, [field]: Number(value) });
    };

    return (
        <div className="card" style={{ marginTop: "15px" }}>
            <h3>🎥 Video Analysis</h3>

            <label>Clarity: {candidate.video_score}</label>
            <input
                type="range"
                min="0"
                max="100"
                value={candidate.video_score}
                onChange={(e) => handleScore("video_score", e.target.value)}
            />

            <label>Confidence</label>
            <input type="range" min="0" max="100" />

            <label>Communication</label>
            <input
                type="range"
                min="0"
                max="100"
                value={candidate.communication_score}
                onChange={(e) =>
                    handleScore("communication_score", e.target.value)
                }
            />

            <textarea
                placeholder="Add timestamp notes (e.g., 02:10 – good explanation)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{ width: "100%", marginTop: "10px" }}
            />
        </div>
    );
}