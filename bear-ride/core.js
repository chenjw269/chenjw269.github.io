export const ROUTES = [
 {name:'风起草原',icon:'🌿',length:650,speed:210,sky:0xdceee7,hill:0x9bb9a2,far:0xc1d3b9,ground:0x9eae78,accent:0xf9df96,subtitle:'草原关卡已完成。'},
 {name:'湖畔来信',icon:'〰',length:850,speed:235,sky:0xe4f1f1,hill:0x86afaf,far:0xb5d4ce,ground:0x93b38f,accent:0xffdfb0,subtitle:'湖畔关卡已完成。'},
 {name:'落日山谷',icon:'☀',length:1050,speed:255,sky:0xf4dcc3,hill:0xa799a2,far:0xd8b7ac,ground:0xb8a17e,accent:0xffb57c,subtitle:'山谷关卡已完成。'},
 {name:'雪山星夜',icon:'✧',length:1250,speed:275,sky:0x263b56,hill:0x627d91,far:0x425a77,ground:0xb4cad1,accent:0xf4eed1,subtitle:'全部关卡已完成。'}
];
export const CHARACTERS=[{name:'旅行小熊',note:'轻装出发',cost:0,jump:610,tint:0xffffff},{name:'邮差小熊',note:'吸花范围更大 · 30✿',cost:30,jump:610,tint:0xffe2b6},{name:'云朵小熊',note:'跳得更高 · 60✿',cost:60,jump:690,tint:0xd5ebff}];
export function freshSave(){return {wallet:0,unlocked:1,characters:[0],best:[0,0,0,0],selected:0};}
export function readSave(raw){try{const x=JSON.parse(raw),s=freshSave();if(!x||typeof x!=='object')return s;s.wallet=Math.max(0,Math.floor(Number(x.wallet)||0));s.unlocked=Math.min(4,Math.max(1,Math.floor(Number(x.unlocked)||1)));s.characters=[...new Set([0,...(Array.isArray(x.characters)?x.characters:[]).filter(v=>Number.isInteger(v)&&v>=0&&v<3)])];s.best=s.best.map((_,i)=>Math.max(0,Number(x.best?.[i])||0));s.selected=s.characters.includes(x.selected)?x.selected:0;return s;}catch{return freshSave();}}
export function hit(a,b){return a.x+a.w>b.x&&a.x<b.x+b.w&&a.y+a.h>b.y&&a.y<b.y+b.h;}
export function buyCharacter(save,id){if(!CHARACTERS[id])return false;if(save.characters.includes(id)){save.selected=id;return true;}if(save.wallet<CHARACTERS[id].cost)return false;save.wallet-=CHARACTERS[id].cost;save.characters.push(id);save.selected=id;return true;}

// World-indexed scenery: no viewport-width modulo, duplicate peaks, or identity changes at a wrap.
export function sceneryItems(scroll, spacing, width, margin=180) {
 const first=Math.floor((scroll-margin)/spacing),last=Math.ceil((scroll+width+margin)/spacing);
 return Array.from({length:last-first+1},(_,i)=>{const index=first+i;return {index,x:index*spacing-scroll};});
}
export function terrainY(worldX,base,layer) {
 const phase=worldX*.006;
 return base-Math.sin(phase)*42-Math.sin(phase*1.7+2)*28-(layer?0:45);
}
