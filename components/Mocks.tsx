import { Icon } from "./Icon";

/* Product mock screens. All figures are placeholder "Sample data" — keep that label visible. */

export function Bar({ label, pct }: { label: string; pct: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div className="ml"><span>{label}</span><span>{pct}%</span></div>
      <div className="bar"><i style={{ width: `${pct}%` }} /></div>
    </div>
  );
}

export function TraqRow({ name, pct, badge, err, desktopOnly }: { name: string; pct: number; badge: string; err?: boolean; desktopOnly?: boolean }) {
  return (
    <div className={`trow${desktopOnly ? " d-only" : ""}`}>
      <span className="pn">{name}</span>
      <div className="pb">
        <div className="bar"><i style={{ width: `${pct}%`, background: err ? "#D64545" : undefined }} /></div>
        <b>{pct}%</b>
      </div>
      <span className={`badge${err ? " err" : ""}`}>{badge}</span>
    </div>
  );
}

/** hunR assessment report card. */
export function HunrReport() {
  return (
    <div className="mock rv-rise">
      <div className="mh">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ width: 38, height: 38, borderRadius: 999, background: "#EAF4FB", display: "flex", alignItems: "center", justifyContent: "center", color: "#20325B" }}>
            <Icon name="user" size={18} />
          </span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#1A2A4D" }}>Assessment report</div>
            <div style={{ fontSize: 12, color: "#5F6C88" }}>Candidate · Sales Executive</div>
          </div>
        </div>
        <span className="badge" style={{ height: 28, padding: "0 10px", fontSize: 12, gap: 6 }}>
          <Icon name="check" size={14} stroke={3} /> Recommended
        </span>
      </div>
      <Bar label="English (Advanced)" pct={82} />
      <Bar label="Aptitude" pct={74} />
      <Bar label="Sales" pct={88} />
      <div className="mf"><span>Report sent to hiring manager</span><span>Sample data</span></div>
    </div>
  );
}

export type TraqRowData = { name: string; pct: number; badge: string; err?: boolean; desktopOnly?: boolean };

/** TraQ "all projects" board. */
export function TraqBoard({ rows }: { rows: TraqRowData[] }) {
  return (
    <div className="mock rows rv-rise">
      <div className="mh" style={{ paddingBottom: 10 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ color: "#008ED5", display: "flex" }}><Icon name="grid" size={18} /></span>
          <span style={{ fontSize: 14, fontWeight: 800, color: "#1A2A4D" }}>All projects · plan vs actual</span>
        </div>
        <span style={{ fontSize: 12, color: "#5F6C88" }}>Sample data</span>
      </div>
      {rows.map((r) => <TraqRow key={r.name} {...r} />)}
    </div>
  );
}
