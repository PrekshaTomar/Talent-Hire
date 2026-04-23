import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

export default function AnalyticsCharts({ candidates }) {

    // 📊 Average Scores
    const avg = (key) =>
        Math.round(
            candidates.reduce((sum, c) => sum + c[key], 0) /
            (candidates.length || 1)
        );

    const barData = [
        { name: "Assignment", value: avg("assignment_score") },
        { name: "Video", value: avg("video_score") },
        { name: "ATS", value: avg("ats_score") },
        { name: "GitHub", value: avg("github_score") },
    ];

    // 📈 Priority Distribution
    const priorityCount = {
        P0: 0,
        P1: 0,
        P2: 0,
        P3: 0,
    };

    candidates.forEach((c) => {
        priorityCount[c.priority.level]++;
    });

    const pieData = Object.entries(priorityCount).map(([key, value]) => ({
        name: key,
        value,
    }));

    const COLORS = ["#22c55e", "#eab308", "#f97316", "#ef4444"];

    return (
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

            {/* 📊 Bar Chart */}
            <div className="card" style={{ width: "50%" }}>
                <h3>📊 Average Scores</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* 📈 Pie Chart */}
            <div className="card" style={{ width: "50%" }}>
                <h3>📈 Priority Distribution</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie data={pieData} dataKey="value" outerRadius={80}>
                            {pieData.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}