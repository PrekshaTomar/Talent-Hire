export default function CandidateTable({ candidates, onSelect, setCompare }) {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Compare</th>
                        <th>Name</th>
                        <th>College</th>
                        <th>Assignment</th>
                        <th>Video</th>
                        <th>ATS</th>
                        <th>Priority</th>
                    </tr>
                </thead>

                <tbody>
                    {candidates.map((c) => (
                        <tr
                            key={c.id}
                            onClick={() => onSelect(c)}
                            style={{
                                cursor: "pointer",
                                background:
                                    c.priority.level === "P0"
                                        ? "#dcfce7"
                                        : c.shortlisted
                                            ? "#e0f2fe"
                                            : "white"
                            }}
                        >
                            {/* Compare Checkbox */}
                            <td onClick={(e) => e.stopPropagation()}>
                                <input
                                    type="checkbox"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setCompare((prev) => [...prev, c]);
                                        } else {
                                            setCompare((prev) =>
                                                prev.filter((x) => x.id !== c.id)
                                            );
                                        }
                                    }}
                                />
                            </td>

                            <td>{c.name}</td>
                            <td>{c.college}</td>
                            <td>{c.assignment_score}</td>
                            <td>{c.video_score}</td>
                            <td>{c.ats_score}</td>

                            <td>
                                <span className={`priority-badge ${c.priority.color}`}>
                                    {c.priority.level}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}