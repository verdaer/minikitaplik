

export default function AramaCubugu({ aramaMetni, onAramaDegisti }) {
  return (
    <div className="aramapanel">
      <input
        type="text"
        placeholder="kitap başlığına göre ara..."
        value={aramaMetni}
        onChange={(e) => onAramaDegisti(e.target.value)}
        className="input-arama"
        style={{
          width: "300px",
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "4px"
        }}
      />
    </div>
  );
}