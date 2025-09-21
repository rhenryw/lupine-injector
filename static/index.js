 let inject_button = document.getElementById("inject");

      inject_button.addEventListener("click", () => {
          let js = `
              document.open();document.write('<!doctype html><html lang="en"><head><meta charset="UTF-8"/><link rel="icon" type="image/x-icon" href="/favicon.ico"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>LupineVault - Reborn</title><script type="module" src="https://cdn.jsdelivr.net/gh/rhenryw/lupine@main/assets/index.js"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rhenryw/lupine@main/assets/index.css"></head><body><div id="root"></div></body></html>');document.close();

          `;

          let win = window.open();
          let script = win.document.createElement("script");
          script.innerHTML = js;
          win.document.body.appendChild(script);
      });
