import { useEffect, useState } from "react";
import { generateCandidates } from "./utils/dummyData";
import { calculatePriority } from "./utils/priorityEngine";

import CandidateTable from "./components/CandidateTable";
import CandidateDetailDrawer from "./components/CandidateDetailDrawer";
import SummaryDashboard from "./components/SummaryDashboard";
import FiltersPanel from "./components/FiltersPanel";
import ComparisonView from "./components/ComparisonView";
import AnalyticsCharts from "./components/AnalyticsCharts";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState(null);
  const [compareList, setCompare] = useState([]);

  const [search, setSearch] = useState("");
  const [minAssign, setMinAssign] = useState(0);
  const [minVideo, setMinVideo] = useState(0);
  const [minATS, setMinATS] = useState(0);
  const [sort, setSort] = useState("");

  const [darkMode, setDarkMode] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");

  // ✅ FIXED LOAD DATA (NEVER EMPTY)
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("candidates"));

      if (saved && saved.length > 0) {
        setCandidates(saved);
      } else {
        throw new Error("No data");
      }
    } catch {
      const data = generateCandidates(50).map((c) => ({
        ...c,
        priority: calculatePriority(c),
        shortlisted: false,
      }));
      setCandidates(data);
      localStorage.setItem("candidates", JSON.stringify(data));
    }
  }, []);

  // ✅ SAVE DATA
  useEffect(() => {
    localStorage.setItem("candidates", JSON.stringify(candidates));
  }, [candidates]);

  // ✅ UPDATE CANDIDATE
  const updateCandidate = (updated) => {
    const updatedWithPriority = {
      ...updated,
      priority: calculatePriority(updated),
    };

    setCandidates((prev) =>
      prev.map((c) =>
        c.id === updated.id ? updatedWithPriority : c
      )
    );

    setSelected(updatedWithPriority);
  };

  // ✅ SAFE FILTER
  let filtered = candidates.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    c.assignment_score >= (minAssign || 0) &&
    c.video_score >= (minVideo || 0) &&
    c.ats_score >= (minATS || 0)
  );

  // ✅ SORT
  if (sort === "priority") {
    filtered.sort((a, b) => b.priority.score - a.priority.score);
  }

  if (sort === "assignment") {
    filtered.sort((a, b) => b.assignment_score - a.assignment_score);
  }

  return (
    <div className={darkMode ? "dark" : ""} style={{ display: "flex" }}>

      {/* 🔥 SIDEBAR */}
      <div
        style={{
          width: "220px",
          background: "#0f172a",
          color: "white",
          height: "100vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2>🚀 TalentHire</h2>

        <div
          style={{ cursor: "pointer", opacity: activeView === "dashboard" ? 1 : 0.6 }}
          onClick={() => setActiveView("dashboard")}
        >
          Dashboard
        </div>

        <div
          style={{ cursor: "pointer", opacity: activeView === "candidates" ? 1 : 0.6 }}
          onClick={() => setActiveView("candidates")}
        >
          Candidates
        </div>

        <div
          style={{ cursor: "pointer", opacity: activeView === "shortlisted" ? 1 : 0.6 }}
          onClick={() => setActiveView("shortlisted")}
        >
          Shortlisted
        </div>

        <hr />
        <div style={{ fontSize: "12px", opacity: 0.6 }}>
          Recruit Smarter ⚡
        </div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>🚀 Hiring Dashboard</h1>

        {/* 🌙 DARK MODE */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* 🔀 DASHBOARD */}
        {activeView === "dashboard" && (
          <>
            <SummaryDashboard candidates={candidates} />
            <AnalyticsCharts candidates={candidates} />
            <ComparisonView selected={compareList} />
          </>
        )}

        {/* 🔀 CANDIDATES (ALWAYS SHOW TABLE) */}
        {activeView === "candidates" && (
          <>
            <FiltersPanel
              search={search}
              setSearch={setSearch}
              minAssign={minAssign}
              setMinAssign={setMinAssign}
              minVideo={minVideo}
              setMinVideo={setMinVideo}
              minATS={minATS}
              setMinATS={setMinATS}
              sort={sort}
              setSort={setSort}
            />

            {/* 🔥 ADD THIS */}
            <ComparisonView selected={compareList} />

            <CandidateTable
              candidates={filtered.length ? filtered : candidates}
              onSelect={setSelected}
              setCompare={setCompare}
            />
          </>
        )}
        {/* 🔀 SHORTLISTED */}
        {activeView === "shortlisted" && (
          <CandidateTable
            candidates={candidates.filter((c) => c.shortlisted)}
            onSelect={setSelected}
            setCompare={setCompare}
          />
        )}
      </div>

      {/* 🔥 DRAWER */}
      <CandidateDetailDrawer
        candidate={selected}
        onClose={() => setSelected(null)}
        onUpdate={updateCandidate}
      />
    </div>
  );
}

export default App;