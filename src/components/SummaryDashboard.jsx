export default function SummaryDashboard({ candidates }) {
    const total = candidates.length;
    const reviewed = candidates.filter(c => c.reviewed).length;
    const shortlisted = candidates.filter(c => c.shortlisted).length;
    const pending = total - reviewed;

    return (
        <div className="flex">
            <div className="card summary-card">Total: {total}</div>
            <div className="card summary-card">Reviewed: {reviewed}</div>
            <div className="card summary-card">Shortlisted: {shortlisted}</div>
            <div className="card summary-card">Pending: {pending}</div>
        </div>
    );
}