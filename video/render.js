const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
(async()=>{const out=process.argv[2];fs.mkdirSync(out,{recursive:true});
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+path.resolve(__dirname,'scene.html'));const D=await p.evaluate('DUR');const FPS=30;
fs.writeFileSync(out+'/cuts.txt',JSON.stringify(await p.evaluate('CUTS')));
for(let f=0;f<D*FPS;f++){await p.evaluate(t=>render(t),f/FPS);await p.screenshot({path:`${out}/f${String(f).padStart(5,'0')}.jpg`,type:'jpeg',quality:92})}
await b.close()})();
