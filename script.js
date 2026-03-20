/*
 dP""b8 88        db    .dP"Y8 .dP"Y8 888888 .dP"Y8
dP   `" 88       dPYb   `Ybo." `Ybo." 88__   `Ybo."
Yb      88  .o  dP__Yb  o.`Y8b o.`Y8b 88""   o.`Y8b
 YboodP 88ood8 dP""""Yb 8bodP' 8bodP' 888888 8bodP'
*/
import { User } from "./js/classes/User.js";

/*
 __   __  _______  ___   ___      _______ 
|  | |  ||       ||   | |   |    |       |
|  | |  ||_     _||   | |   |    |  _____|
|  |_|  |  |   |  |   | |   |    | |_____ 
|       |  |   |  |   | |   |___ |_____  |
|       |  |   |  |   | |       | _____| |
|_______|  |___|  |___| |_______||_______|
*/
import { isItFunctionObject } from "./js/utils/IsItFunctionObject.js";
import { makeContainer } from "./js/utils/MakeContainer.js";

/*
 _                 _    __                  
| | ___   __ _  __| |  / _|_   _ _ __   ___ 
| |/ _ \ / _` |/ _` | | |_| | | | '_ \ / __|
| | (_) | (_| | (_| | |  _| |_| | | | | (__ 
|_|\___/ \__,_|\__,_| |_|  \__,_|_| |_|\___|
*/
function onLoad() {
    document.addEventListener('DOMContentLoaded', () => {
        const u = new User("Amuga");
        console.dir(u)
        console.log(u);
        
    })
}
onLoad();

/*
  __ _ _ __  _ __  
 / _` | '_ \| '_ \ 
| (_| | |_) | |_) |
 \__,_| .__/| .__/ 
      |_|   |_|    
*/


console.log(document.querySelector(".hello"))
function debug() {
    const el = document.createElement("p"); // what happens if not appended?
    el.classList.add("father");
    el.style.color = "orange";

    document.querySelector(".hello").appendChild(el);


    // create container
    const container = makeContainer({identifier: "Good Container"})
    document.body.appendChild(container);


    // error container
    const error_container = makeContainer({identifier: "Error Container"})
    document.body.appendChild(error_container);

    let count = 0;
    for (let key in el) {
        try {
            const value = el[key];

            if (isItFunctionObject(value)) {
                count++;
                console.log("function object found. " + count);
            }
            
            const line = document.createElement('div');
            line.textContent = `${key}: ${value}`;

            container.appendChild(line);
        } catch (e) {
            // some properites throw error
            const line = document.createElement("div");
            line.textContent = `${key} access failed: \n\n\x1b[95m${e}\x1b[0m`;

            error_container.appendChild(line);
        }
    }
}


function logsom() {
    let children = document.body.children
    let childnodes = document.body.childNodes;
    
    console.log(`children: ${children}`,"\n", `childnodes: ${childnodes}`);
}

const main = (() => {debug()})();
