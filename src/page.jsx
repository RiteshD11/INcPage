
/*
// import { useState, useEffect } from "react";

// /* ─── Google Fonts ─── */
// const fontLink = document.createElement("link");
// fontLink.rel = "stylesheet";
// fontLink.href = "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap";
// document.head.appendChild(fontLink);

// /* ─── Static Data ─── */
// const LABS = ["Lab 101", "Lab 102", "Lab 103", "Lab 104", "Lab 105"];
// const DAYS = ["27 Mar 2026", "28 Mar 2026", "29 Mar 2026"];
// const SESSIONS = ["Session 1", "Session 2", "Session 3"];

// const PROJECT_NAMES = ["Smart Irrigation System", "AI Chatbot Platform", "Blockchain Voting App", "AR Navigation System", "IoT Health Monitor", "Cloud File Manager", "ML Fraud Detection", "Smart Parking System", "Drone Logistics"];
// const JUDGE_NAMES = ["Dr. Ravi Sharma", "Prof. Meena Iyer", "Dr. Arjun Patel", "Prof. Sunita Rao", "Dr. Vikram Nair"];

// function generateData() {
//   const data = {};
//   LABS.forEach((lab) => {
//     data[lab] = {};
//     DAYS.forEach((day) => {
//       data[lab][day] = {};
//       SESSIONS.forEach((session) => {
//         const rows = [];
//         for (let i = 0; i < 8; i++) {
//           rows.push({
//             id: `${lab}-${day}-${session}-${i}`,
//             pid: `P${Math.floor(Math.random() * 900) + 100}`,
//             projectName: PROJECT_NAMES[Math.floor(Math.random() * PROJECT_NAMES.length)],
//             jid: `J${Math.floor(Math.random() * 90) + 10}`,
//             judgeName: JUDGE_NAMES[Math.floor(Math.random() * JUDGE_NAMES.length)],
//             teamPresent: Math.random() > 0.3,
//             judgePresent: Math.random() > 0.2,
//             allocated: Math.random() > 0.15,
//           });
//         }
//         data[lab][day][session] = rows;
//       });
//     });
//   });
//   return data;
// }

// /* ─── The Master Toggle Component ─── */
// const HighVisToggle = ({ value, onChange, disabled, activeLabel, inactiveLabel }) => (
//   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
//     <button
//       onClick={() => !disabled && onChange(!value)}
//       style={{
//         width: "64px",
//         height: "32px",
//         borderRadius: "20px",
//         background: value ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
//         border: `2px solid ${value ? "#10b981" : "#ef4444"}`,
//         position: "relative",
//         cursor: disabled ? "not-allowed" : "pointer",
//         transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//         boxShadow: value ? "0 0 15px rgba(16, 185, 129, 0.3)" : "0 0 15px rgba(239, 68, 68, 0.3)",
//         opacity: disabled ? 0.6 : 1,
//       }}
//     >
//       <div style={{
//         position: "absolute",
//         top: "4px",
//         left: value ? "34px" : "4px",
//         width: "20px",
//         height: "20px",
//         borderRadius: "50%",
//         background: value ? "#10b981" : "#ef4444",
//         transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//         boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
//       }} />
//     </button>
//     <span style={{ 
//       fontSize: "9px", 
//       fontWeight: "800", 
//       textTransform: "uppercase", 
//       color: value ? "#10b981" : "#ef4444",
//       letterSpacing: "0.05em"
//     }}>
//       {value ? activeLabel : inactiveLabel}
//     </span>
//   </div>
// );

// export default function EvaluationPage() {
//   const [allData] = useState(generateData);
//   const [pending, setPending] = useState({ lab: LABS[0], day: DAYS[0], session: SESSIONS[0] });
//   const [active, setActive] = useState({ lab: null, day: null, session: null });
//   const [tableData, setTableData] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [draft, setDraft] = useState(null);

//   const handleLoad = () => {
//     setActive({ ...pending });
//     setTableData([...(allData[pending.lab][pending.day][pending.session])]);
//   };

//   const isDirty = pending.lab !== active.lab || pending.day !== active.day || pending.session !== active.session;

//   return (
//     <div style={{ minHeight: "100vh", background: "#07080c", color: "#f1f5f9", fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "2vw" }}>
      
//       {/* Background Ambience */}
//       <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "400px", background: "linear-gradient(to bottom, #111827, transparent)", zIndex: 0 }} />

//       <div style={{ width: "100%", maxWidth: "1800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
//         {/* Header */}
//         <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
//           <div>
//             <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 4vw, 40px)", margin: 0, fontWeight: 800 }}>
//               Evaluation <span style={{ color: "#8b5cf6" }}>Live Tracker</span>
//             </h1>
//             <p style={{ color: "#4b5563", fontWeight: "600", marginTop: "5px", fontSize: "14px" }}>Manage project allocations and attendance via interactive toggles.</p>
//           </div>
          
//           {active.lab && (
//             <div style={{ padding: "12px 24px", background: "rgba(139, 92, 246, 0.1)", borderRadius: "16px", border: "1px solid rgba(139, 92, 246, 0.3)" }}>
//               <span style={{ fontSize: "12px", color: "#a78bfa", fontWeight: 700 }}>VIEWING: {active.lab} • {active.day} • {active.session}</span>
//             </div>
//           )}
//         </header>

//         {/* Filters */}
//         <section style={{ 
//           background: "rgba(17, 24, 39, 0.7)", 
//           backdropFilter: "blur(16px)",
//           border: isDirty ? "1px solid #8b5cf6" : "1px solid #1f2937",
//           borderRadius: "24px", 
//           padding: "30px", 
//           marginBottom: "40px",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "24px",
//           alignItems: "end",
//           boxShadow: isDirty ? "0 0 40px rgba(139, 92, 246, 0.1)" : "none"
//         }}>
//           {["lab", "day", "session"].map((key) => (
//             <div key={key}>
//               <label style={{ display: "block", color: "#9ca3af", fontSize: "11px", fontWeight: "800", marginBottom: "12px", textTransform: "uppercase" }}>{key}</label>
//               <select 
//                 value={pending[key]} 
//                 onChange={e => setPending({...pending, [key]: e.target.value})}
//                 style={{ width: "100%", background: "#030712", border: "1px solid #374151", padding: "14px", borderRadius: "12px", color: "#fff", outline: "none", cursor: "pointer", fontSize: "15px" }}
//               >
//                 {(key === "lab" ? LABS : key === "day" ? DAYS : SESSIONS).map(opt => <option key={opt} value={opt}>{opt}</option>)}
//               </select>
//             </div>
//           ))}
//           <button 
//             onClick={handleLoad} 
//             style={{ 
//               padding: "16px", borderRadius: "12px", border: "none", 
//               background: isDirty ? "#8b5cf6" : "#1f2937",
//               color: "#fff", fontWeight: "800", cursor: "pointer", transition: "0.3s",
//               boxShadow: isDirty ? "0 10px 20px rgba(139, 92, 246, 0.3)" : "none"
//             }}
//           >
//             {isDirty ? "UPDATE TABLE" : "DATA LOADED"}
//           </button>
//         </section>

//         {/* Full-Width Table */}
//         {active.lab ? (
//           <div style={{ background: "#0f172a", borderRadius: "24px", border: "1px solid #1e293b", overflow: "hidden" }}>
//             <div style={{ overflowX: "auto" }}>
//               <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "1100px" }}>
//                 <thead>
//                   <tr style={{ background: "#1e293b" }}>
//                     {["Project Details", "Team Attendance", "Assigned Judge", "Judge Status", "Allocation", "Action"].map(h => (
//                       <th key={h} style={{ padding: "20px 24px", textAlign: "left", fontSize: "12px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>{h}</th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tableData.map(row => {
//                     const isEditing = editingId === row.id;
//                     const r = isEditing ? draft : row;
//                     return (
//                       <tr key={row.id} style={{ borderBottom: "1px solid #1e293b", background: isEditing ? "rgba(139, 92, 246, 0.05)" : "transparent" }}>
//                         <td style={{ padding: "24px" }}>
//                           <div style={{ color: "#f1f5f9", fontWeight: "700", fontSize: "16px" }}>{r.projectName}</div>
//                           <div style={{ fontSize: "12px", color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>{r.pid}</div>
//                         </td>
//                         <td style={{ padding: "24px" }}>
//                           <HighVisToggle 
//                             value={r.teamPresent} 
//                             onChange={v => isEditing && setDraft({...draft, teamPresent: v})} 
//                             disabled={!isEditing}
//                             activeLabel="Present" inactiveLabel="Absent"
//                           />
//                         </td>
//                         <td style={{ padding: "24px" }}>
//                           <div style={{ color: "#e2e8f0", fontWeight: "500" }}>{r.judgeName}</div>
//                           <div style={{ fontSize: "11px", color: "#475569" }}>{r.jid}</div>
//                         </td>
//                         <td style={{ padding: "24px" }}>
//                           <HighVisToggle 
//                             value={r.judgePresent} 
//                             onChange={v => isEditing && setDraft({...draft, judgePresent: v})} 
//                             disabled={!isEditing}
//                             activeLabel="In Lab" inactiveLabel="Out"
//                           />
//                         </td>
//                         <td style={{ padding: "24px" }}>
//                           <HighVisToggle 
//                             value={r.allocated} 
//                             onChange={v => isEditing && setDraft({...draft, allocated: v})} 
//                             disabled={!isEditing}
//                             activeLabel="Ready" inactiveLabel="Wait"
//                           />
//                         </td>
//                         <td style={{ padding: "24px" }}>
//                           {isEditing ? (
//                             <button onClick={() => { setTableData(tableData.map(it => it.id === editingId ? draft : it)); setEditingId(null); }} style={{ background: "#10b981", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "10px", fontWeight: "800", cursor: "pointer" }}>SAVE</button>
//                           ) : (
//                             <button onClick={() => { setEditingId(row.id); setDraft({...row}); }} style={{ background: "transparent", color: "#8b5cf6", border: "2px solid #8b5cf6", padding: "10px 20px", borderRadius: "10px", fontWeight: "700", cursor: "pointer" }}>EDIT</button>
//                           )}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ) : (
//           <div style={{ textAlign: "center", padding: "100px", border: "2px dashed #1e293b", borderRadius: "30px", color: "#4b5563" }}>
//             <p style={{ fontSize: "18px" }}>Please select the session filters above to generate the evaluation sheet.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// import { useState, useEffect } from "react";

// /* ─── Google Fonts (Clean Sans-Serif) ─── */
// const fontLink = document.createElement("link");
// fontLink.rel = "stylesheet";
// fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap";
// document.head.appendChild(fontLink);

// /* ─── Static Data Generator ─── */
// const LABS = ["Lab 101", "Lab 102", "Lab 103", "Lab 104", "Lab 105"];
// const DAYS = ["27 Mar 2026", "28 Mar 2026", "29 Mar 2026"];
// const SESSIONS = ["Session 1", "Session 2", "Session 3"];

// const PROJECT_NAMES = ["Smart Irrigation", "AI Chatbot", "Blockchain Voting", "AR Navigation", "IoT Health", "Cloud Manager", "ML Fraud"];
// const JUDGE_NAMES = ["Dr. Ravi Sharma", "Prof. Meena Iyer", "Dr. Arjun Patel", "Prof. Sunita Rao", "Dr. Vikram Nair"];

// function generateData() {
//   const data = {};
//   LABS.forEach((lab) => {
//     data[lab] = {};
//     DAYS.forEach((day) => {
//       data[lab][day] = {};
//       SESSIONS.forEach((session) => {
//         const rows = [];
//         for (let i = 0; i < 6; i++) {
//           rows.push({
//             id: `${lab}-${day}-${session}-${i}`,
//             pid: `P${Math.floor(Math.random() * 900) + 100}`,
//             projectName: PROJECT_NAMES[Math.floor(Math.random() * PROJECT_NAMES.length)],
//             jid: `J${Math.floor(Math.random() * 90) + 10}`,
//             judgeName: JUDGE_NAMES[Math.floor(Math.random() * JUDGE_NAMES.length)],
//             teamPresent: Math.random() > 0.3,
//             judgePresent: Math.random() > 0.2,
//             allocated: Math.random() > 0.15,
//           });
//         }
//         data[lab][day][session] = rows;
//       });
//     });
//   });
//   return data;
// }

// /* ─── Modern Toggle Component ─── */
// const StatusToggle = ({ value, onChange, disabled, activeLabel, inactiveLabel }) => (
//   <div style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden" }}>
//     <button
//       onClick={() => !disabled && onChange(!value)}
//       style={{
//         width: "40px",
//         height: "20px",
//         borderRadius: "10px",
//         background: value ? "#10b981" : "#374151",
//         border: "none",
//         position: "relative",
//         cursor: disabled ? "default" : "pointer",
//         transition: "all 0.2s ease",
//         flexShrink: 0
//       }}
//     >
//       <div style={{
//         position: "absolute",
//         top: "2px",
//         left: value ? "22px" : "2px",
//         width: "16px",
//         height: "16px",
//         borderRadius: "50%",
//         background: "#fff",
//         transition: "0.2s ease"
//       }} />
//     </button>
//     <span style={{ 
//       fontSize: "11px", 
//       fontWeight: "600", 
//       color: value ? "#10b981" : "#94a3b8",
//       whiteSpace: "nowrap"
//     }}>
//       {value ? activeLabel : inactiveLabel}
//     </span>
//   </div>
// );

// export default function EvaluationPage() {
//   const [allData] = useState(generateData);
//   const [pending, setPending] = useState({ lab: LABS[0], day: DAYS[0], session: SESSIONS[0] });
//   const [active, setActive] = useState({ lab: null, day: null, session: null });
//   const [tableData, setTableData] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [draft, setDraft] = useState(null);

//   const handleLoad = () => {
//     setActive({ ...pending });
//     setTableData([...(allData[pending.lab][pending.day][pending.session])]);
//   };

//   const isDirty = pending.lab !== active.lab || pending.day !== active.day || pending.session !== active.session;

//   return (
//     <div style={{ minHeight: "100vh", background: "#0b0d11", color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>
      
//       {/* Container wraps full width with small padding */}
//       <div style={{ width: "100%", maxWidth: "100%", padding: "16px", boxSizing: "border-box" }}>
        
//         {/* Simple Header */}
//         <header style={{ marginBottom: "24px", padding: "0 4px" }}>
//           <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#ffffff", margin: 0 }}>Evaluation Tracker</h1>
//           <p style={{ color: "#64748b", fontSize: "13px", marginTop: "4px" }}>Internal Project Assessment Dashboard</p>
//         </header>

//         {/* Responsive Grid Filters */}
//         <section style={{ 
//           background: "#161b22", borderRadius: "12px", padding: "16px", marginBottom: "20px",
//           display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", alignItems: "end",
//           border: "1px solid #30363d"
//         }}>
//           {["lab", "day", "session"].map((key) => (
//             <div key={key}>
//               <label style={{ display: "block", color: "#8b949e", fontSize: "10px", fontWeight: "700", marginBottom: "6px", textTransform: "uppercase" }}>{key}</label>
//               <select 
//                 value={pending[key]} 
//                 onChange={e => setPending({...pending, [key]: e.target.value})}
//                 style={{ width: "100%", background: "#0d1117", border: "1px solid #30363d", padding: "10px", borderRadius: "8px", fontSize: "13px", color: "#fff", outline: "none" }}
//               >
//                 {(key === "lab" ? LABS : key === "day" ? DAYS : SESSIONS).map(opt => <option key={opt} value={opt}>{opt}</option>)}
//               </select>
//             </div>
//           ))}
//           <button 
//             onClick={handleLoad} 
//             style={{ 
//               padding: "10px", borderRadius: "8px", border: "none", 
//               background: isDirty ? "#238636" : "#21262d",
//               color: "#fff", fontWeight: "600", cursor: "pointer", transition: "0.2s", fontSize: "13px"
//             }}
//           >
//             {isDirty ? "Update Selection" : "Current View"}
//           </button>
//         </section>

//         {/* Data Table */}
//         {active.lab ? (
//           <div className="table-wrapper" style={{ background: "#161b22", borderRadius: "12px", border: "1px solid #30363d", overflow: "hidden" }}>
//             <table className="eval-table" style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr style={{ background: "#0d1117", borderBottom: "1px solid #30363d" }}>
//                   <th style={thStyle}>Project</th>
//                   <th style={thStyle}>Attendance</th>
//                   <th style={thStyle}>Judge Status</th>
//                   <th style={thStyle}>Allocation</th>
//                   <th style={thStyle}>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tableData.map(row => {
//                   const isEditing = editingId === row.id;
//                   const r = isEditing ? draft : row;
//                   return (
//                     <tr key={row.id} className="eval-row">
//                       <td data-label="Project" style={tdStyle}>
//                         <div style={{ fontWeight: "600", color: "#f0f6fc" }}>{r.projectName}</div>
//                         <div style={{ fontSize: "11px", color: "#8b949e", fontFamily: "'JetBrains Mono'" }}>{r.pid}</div>
//                       </td>
//                       <td data-label="Attendance" style={tdStyle}>
//                         <StatusToggle 
//                           value={r.teamPresent} 
//                           onChange={v => isEditing && setDraft({...draft, teamPresent: v})} 
//                           disabled={!isEditing} activeLabel="Present" inactiveLabel="Absent"
//                         />
//                       </td>
//                       <td data-label="Judge Status" style={tdStyle}>
//                         <div style={{ fontSize: "12px", marginBottom: "4px", color: "#c9d1d9" }}>{r.judgeName}</div>
//                         <StatusToggle 
//                           value={r.judgePresent} 
//                           onChange={v => isEditing && setDraft({...draft, judgePresent: v})} 
//                           disabled={!isEditing} activeLabel="Present" inactiveLabel="Not Present"
//                         />
//                       </td>
//                       <td data-label="Allocation" style={tdStyle}>
//                         <StatusToggle 
//                           value={r.allocated} 
//                           onChange={v => isEditing && setDraft({...draft, allocated: v})} 
//                           disabled={!isEditing} activeLabel="Allocated" inactiveLabel="Not Allocated"
//                         />
//                       </td>
//                       <td data-label="Action" style={tdStyle}>
//                         {isEditing ? (
//                           <button onClick={() => { setTableData(tableData.map(it => it.id === editingId ? draft : it)); setEditingId(null); }} style={saveBtnStyle}>SAVE</button>
//                         ) : (
//                           <button onClick={() => { setEditingId(row.id); setDraft({...row}); }} style={editBtnStyle}>EDIT</button>
//                         )}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div style={{ textAlign: "center", padding: "80px 20px", color: "#484f58", border: "1px dashed #30363d", borderRadius: "12px" }}>
//             Select your lab and session filters to begin.
//           </div>
//         )}
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         /* Mobile Breakpoint Fixes */
//         @media (max-width: 800px) {
//           .eval-table thead { display: none; }
//           .eval-table, .eval-table tbody, .eval-row, .eval-table td { display: block; width: 100%; box-sizing: border-box; }
          
//           .eval-row { 
//             border-bottom: 4px solid #0b0d11 !important; 
//             padding: 8px 0; 
//             background: #161b22;
//           }

//           .eval-table td { 
//             display: flex; 
//             justify-content: space-between; 
//             align-items: center; 
//             padding: 12px 16px !important; 
//             border-bottom: 1px solid #21262d;
//             min-height: 48px;
//           }

//           .eval-table td:before { 
//             content: attr(data-label); 
//             font-weight: 700; 
//             font-size: 10px; 
//             text-transform: uppercase; 
//             color: #8b949e;
//             margin-right: 12px;
//             flex-shrink: 0;
//           }

//           /* Ensure action button stretches slightly on mobile */
//           .eval-table td:last-child { 
//             border-bottom: none; 
//             justify-content: center;
//             background: #1c2128;
//           }
//         }
//       `}} />
//     </div>
//   );
// }

// /* ─── Layout Styles ─── */
// const thStyle = { padding: "12px 16px", textAlign: "left", fontSize: "11px", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em" };
// const tdStyle = { padding: "16px", borderBottom: "1px solid #21262d" };
// const editBtnStyle = { background: "transparent", color: "#58a6ff", border: "1px solid #30363d", padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontSize: "11px", fontWeight: "600" };
// const saveBtnStyle = { background: "#238636", color: "#fff", border: "none", padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontSize: "11px", fontWeight: "700" };



import { useState, useEffect } from "react";

/* ─── Google Fonts (Clean Sans-Serif) ─── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap";
document.head.appendChild(fontLink);

/* ─── Static Data Generator ─── */
const LABS = ["Lab 101", "Lab 102", "Lab 103", "Lab 104", "Lab 105"];
const DAYS = ["27 Mar 2026", "28 Mar 2026", "29 Mar 2026"];
const SESSIONS = ["Session 1", "Session 2", "Session 3"];

const PROJECT_NAMES = ["Smart Irrigation", "AI Chatbot", "Blockchain Voting", "AR Navigation", "IoT Health", "Cloud Manager", "ML Fraud"];
const JUDGE_NAMES = ["Dr. Ravi Sharma", "Prof. Meena Iyer", "Dr. Arjun Patel", "Prof. Sunita Rao", "Dr. Vikram Nair"];

function generateData() {
  const data = {};
  LABS.forEach((lab) => {
    data[lab] = {};
    DAYS.forEach((day) => {
      data[lab][day] = {};
      SESSIONS.forEach((session) => {
        const rows = [];
        for (let i = 0; i < 8; i++) {
          rows.push({
            id: `${lab}-${day}-${session}-${i}`,
            pid: `P${Math.floor(Math.random() * 900) + 100}`,
            projectName: PROJECT_NAMES[Math.floor(Math.random() * PROJECT_NAMES.length)],
            jid: `J${Math.floor(Math.random() * 90) + 10}`,
            judgeName: JUDGE_NAMES[Math.floor(Math.random() * JUDGE_NAMES.length)],
            teamPresent: Math.random() > 0.3,
            judgePresent: Math.random() > 0.2,
            allocated: Math.random() > 0.15,
          });
        }
        data[lab][day][session] = rows;
      });
    });
  });
  return data;
}

/* ─── Modern Toggle Component ─── */
const StatusToggle = ({ value, onChange, disabled, activeLabel, inactiveLabel }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <button
      onClick={() => !disabled && onChange(!value)}
      style={{
        width: "42px",
        height: "22px",
        borderRadius: "11px",
        background: value ? "#10b981" : "#4b5563",
        border: "none",
        position: "relative",
        cursor: disabled ? "default" : "pointer",
        transition: "all 0.2s ease",
        flexShrink: 0
      }}
    >
      <div style={{
        position: "absolute",
        top: "3px",
        left: value ? "23px" : "3px",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        background: "#fff",
        transition: "0.2s ease"
      }} />
    </button>
    <span style={{ 
      fontSize: "12px", 
      fontWeight: "600", 
      color: value ? "#10b981" : "#94a3b8",
      whiteSpace: "nowrap"
    }}>
      {value ? activeLabel : inactiveLabel}
    </span>
  </div>
);

export default function EvaluationPage() {
  const [allData] = useState(generateData);
  const [pending, setPending] = useState({ lab: LABS[0], day: DAYS[0], session: SESSIONS[0] });
  const [active, setActive] = useState({ lab: null, day: null, session: null });
  const [tableData, setTableData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(null);

  const handleLoad = () => {
    setActive({ ...pending });
    setTableData([...(allData[pending.lab][pending.day][pending.session])]);
  };

  const isDirty = pending.lab !== active.lab || pending.day !== active.day || pending.session !== active.session;

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#c9d1d9", fontFamily: "'Inter', sans-serif" }}>
      
      {/* FULL SCREEN WIDTH CONTAINER */}
      <div style={{ width: "100%", padding: "24px", boxSizing: "border-box" }}>
        
        {/* Simple Header */}
        <header style={{ marginBottom: "30px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>
            Evaluation Tracker
          </h1>
          <p style={{ color: "#8b949e", fontSize: "14px", marginTop: "4px" }}>Manage real-time lab assessments and judge allocations.</p>
        </header>

        {/* Filters Section - Full Width Grid */}
        <section style={{ 
          background: "#161b22", borderRadius: "12px", padding: "20px", marginBottom: "24px",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", alignItems: "end",
          border: "1px solid #30363d"
        }}>
          {["lab", "day", "session"].map((key) => (
            <div key={key}>
              <label style={{ display: "block", color: "#8b949e", fontSize: "11px", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase" }}>{key}</label>
              <select 
                value={pending[key]} 
                onChange={e => setPending({...pending, [key]: e.target.value})}
                style={{ width: "100%", background: "#0d1117", border: "1px solid #30363d", padding: "12px", borderRadius: "8px", fontSize: "14px", color: "#fff", outline: "none" }}
              >
                {(key === "lab" ? LABS : key === "day" ? DAYS : SESSIONS).map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
          ))}
          <button 
            onClick={handleLoad} 
            style={{ 
              padding: "12px", borderRadius: "8px", border: "none", 
              background: isDirty ? "#238636" : "#21262d",
              color: "#fff", fontWeight: "700", cursor: "pointer", transition: "0.2s"
            }}
          >
            {isDirty ? "Update Sheet" : "Sheet Loaded"}
          </button>
        </section>

        {/* Data Table - Spans Full Width */}
        {active.lab ? (
          <div className="sheet-container" style={{ background: "#161b22", borderRadius: "12px", border: "1px solid #30363d", overflow: "hidden" }}>
            <table className="eval-table" style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#0d1117", borderBottom: "1px solid #30363d" }}>
                  <th style={thStyle}>Project Details</th>
                  <th style={thStyle}>Team Attendance</th>
                  <th style={thStyle}>Judge Status</th>
                  <th style={thStyle}>Allocation</th>
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(row => {
                  const isEditing = editingId === row.id;
                  const r = isEditing ? draft : row;
                  return (
                    <tr key={row.id} className="eval-row">
                      <td data-label="Project Details" style={tdStyle}>
                        <div style={{ fontWeight: "700", color: "#f0f6fc", fontSize: "15px" }}>{r.projectName}</div>
                        <div style={{ fontSize: "11px", color: "#8b949e", fontFamily: "'JetBrains Mono'", marginTop: "2px" }}>ID: {r.pid}</div>
                      </td>
                      <td data-label="Team Attendance" style={tdStyle}>
                        <StatusToggle 
                          value={r.teamPresent} 
                          onChange={v => isEditing && setDraft({...draft, teamPresent: v})} 
                          disabled={!isEditing} activeLabel="Present" inactiveLabel="Absent"
                        />
                      </td>
                      <td data-label="Judge Status" style={tdStyle}>
                        <div style={{ fontSize: "13px", color: "#c9d1d9", marginBottom: "4px" }}>{r.judgeName}</div>
                        <StatusToggle 
                          value={r.judgePresent} 
                          onChange={v => isEditing && setDraft({...draft, judgePresent: v})} 
                          disabled={!isEditing} activeLabel="Present" inactiveLabel="Not Present"
                        />
                      </td>
                      <td data-label="Allocation" style={tdStyle}>
                        <StatusToggle 
                          value={r.allocated} 
                          onChange={v => isEditing && setDraft({...draft, allocated: v})} 
                          disabled={!isEditing} activeLabel="Allocated" inactiveLabel="Not Allocated"
                        />
                      </td>
                      <td data-label="Action" style={tdStyle}>
                        {isEditing ? (
                          <button onClick={() => { setTableData(tableData.map(it => it.id === editingId ? draft : it)); setEditingId(null); }} style={saveBtnStyle}>SAVE</button>
                        ) : (
                          <button onClick={() => { setEditingId(row.id); setDraft({...row}); }} style={editBtnStyle}>EDIT</button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "100px 20px", color: "#484f58", border: "1px dashed #30363d", borderRadius: "12px" }}>
            Select filters to generate the full-screen evaluation tracker.
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Desktop Hover Effect */
        .eval-row:hover { background: #1c2128; }
        
        /* Mobile Breakpoint Fixes */
        @media (max-width: 900px) {
          .eval-table thead { display: none; }
          .eval-table, .eval-table tbody, .eval-row, .eval-table td { display: block; width: 100%; box-sizing: border-box; }
          
          .eval-row { 
            border-bottom: 8px solid #0d1117 !important; 
            padding: 8px 0; 
            background: #161b22;
          }

          .eval-table td { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            padding: 12px 20px !important; 
            border-bottom: 1px solid #21262d;
            min-height: 50px;
          }

          .eval-table td:before { 
            content: attr(data-label); 
            font-weight: 800; 
            font-size: 10px; 
            text-transform: uppercase; 
            color: #8b949e;
            margin-right: 15px;
          }

          .eval-table td:last-child { 
            border-bottom: none; 
            justify-content: center;
            background: #1c2128;
            padding: 16px !important;
          }
        }
      `}} />
    </div>
  );
}

/* ─── Layout Styles ─── */
const thStyle = { padding: "16px 20px", textAlign: "left", fontSize: "11px", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.08em" };
const tdStyle = { padding: "20px", borderBottom: "1px solid #21262d" };
const editBtnStyle = { background: "transparent", color: "#58a6ff", border: "1px solid #30363d", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: "600" };
const saveBtnStyle = { background: "#238636", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: "700" };