/*
oooo                  oooo                               
`888                  `888                               
 888 .oo.    .ooooo.   888  oo.ooooo.   .ooooo.  oooo d8b
 888P"Y88b  d88' `88b  888   888' `88b d88' `88b `888""8P
 888   888  888ooo888  888   888   888 888ooo888  888    
 888   888  888    .o  888   888   888 888    .o  888    
o888o o888o `Y8bod8P' o888o  888bod8P' `Y8bod8P' d888b   
                             888                         
                            o888o                        
*/

function getBodyAttribute() {
    const body = document.body
    let s = ""
    for (let attr of body.attributes) {
        s += attr.name + " = " + attr.value + "\n\n";
    }
    return s;
}


function createModal() {
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "none",
        zIndex: "9999999999998",
    });


    const modal = document.createElement("div");
    Object.assign(modal.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "300px",
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        zIndex: "9999999999999",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    });

    let s = getBodyAttribute();

    modal.innerHTML = `
        <h2>My Dev Tool</h2>
        <p> Inspect stuff here ... </p>
        <span>${s}</span>
        <button id="closeModal">Close</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    return [overlay, modal];
}

function createTool() {
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

    let r_overlay = createModal();
    let overlay = r_overlay[0];
    let modal = r_overlay[1];

    btn.onclick = () => {
        overlay.style.display = "block";
    };

    overlay.addEventListener("click", e => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });

    modal.querySelector("#closeModal").onclick = () => {
        overlay.style.display = "none";
    };
}




/*
        :::   :::       :::     ::::::::::: ::::    :::
      :+:+: :+:+:    :+: :+:       :+:     :+:+:   :+: 
    +:+ +:+:+ +:+  +:+   +:+      +:+     :+:+:+  +:+  
   +#+  +:+  +#+ +#++:++#++:     +#+     +#+ +:+ +#+   
  +#+       +#+ +#+     +#+     +#+     +#+  +#+#+#    
 #+#       #+# #+#     #+#     #+#     #+#   #+#+#     
###       ### ###     ### ########### ###    ####      
*/
createTool();


