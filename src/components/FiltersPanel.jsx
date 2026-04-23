export default function FiltersPanel({
    search, setSearch,
    minAssign, setMinAssign,
    minVideo, setMinVideo,
    minATS, setMinATS,
    sort, setSort
}) {
    return (
        <div className="filters">
            <input
                placeholder="Search name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <input
                type="number"
                placeholder="Min Assignment"
                value={minAssign}
                onChange={(e) => setMinAssign(e.target.value)}
            />

            <input
                type="number"
                placeholder="Min Video"
                value={minVideo}
                onChange={(e) => setMinVideo(e.target.value)}
            />

            <input
                type="number"
                placeholder="Min ATS"
                value={minATS}
                onChange={(e) => setMinATS(e.target.value)}
            />

            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Sort</option>
                <option value="priority">Priority</option>
                <option value="assignment">Assignment</option>
            </select>
        </div>
    );
}