export default function ComparisonView({ selected }) {
    if (selected.length < 2) return null;

    return (
        <div className="card">
            <h3>⚔️ Candidate Comparison</h3>

            {selected.map((c) => (
                <div key={c.id} style={{ marginBottom: "10px" }}>
                    <b>{c.name}</b>
                    <p>Assignment: {c.assignment_score}</p>
                    <p>Video: {c.video_score}</p>
                    <p>ATS: {c.ats_score}</p>
                    <p>Priority: {c.priority.level}</p>
                </div>
            ))}
        </div>
    );
}