 let inject_button = document.getElementById("inject");

      inject_button.addEventListener("click", () => {
          let js = `
             document.open();document.write('<!doctype html><html lang="en"><head><meta charset="UTF-8"/><link rel="icon" type="image/x-icon" href="/favicon.ico"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>LupineVault - Reborn</title><script>async function loadAssets(){try{const res=await fetch("https://api.github.com/repos/rhenryw/lupine/commits/main");const data=await res.json();const sha=data.sha;const base=`https://cdn.jsdelivr.net/gh/rhenryw/lupine@${sha}/assets`;const css=document.createElement("link");css.rel="stylesheet";css.href=`${base}/index.css`;document.head.appendChild(css);const script=document.createElement("script");script.type="module";script.src=`${base}/index.js`;document.head.appendChild(script);}catch(err){console.error("Failed to load assets",err);}}loadAssets();<\/script></head><body><div id="root"></div></body></html>');document.close();

          `;

          let win = window.open();
          let script = win.document.createElement("script");
          script.innerHTML = js;
          win.document.body.appendChild(script);
      });
