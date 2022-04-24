export default function Toolbar({ date, onNavigate }) {
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const label = `${date.getFullYear()}. ${month}`;

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate("PREV")}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <span className="rbc-toolbar-label">{label}</span>
        <button type="button" onClick={() => onNavigate("NEXT")}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </span>
    </div>
  );
}
