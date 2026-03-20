const btn = document.createElement("button")
btn.textContent = "⚙️ Tool";

Object.assign(btn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
    zIndex: "9999999999999", 
});

document.body.appendChild(btn);