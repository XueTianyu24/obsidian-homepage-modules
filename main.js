/* Homepage Modules — built by esbuild. Do not edit main.js directly. */
var ie=Object.defineProperty;var Ae=Object.getOwnPropertyDescriptor;var ze=Object.getOwnPropertyNames;var Be=Object.prototype.hasOwnProperty;var Fe=(t,e)=>{for(var n in e)ie(t,n,{get:e[n],enumerable:!0})},Ne=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ze(e))!Be.call(t,r)&&r!==n&&ie(t,r,{get:()=>e[r],enumerable:!(o=Ae(e,r))||o.enumerable});return t};var Le=t=>Ne(ie({},"__esModule",{value:!0}),t);var Ze={};Fe(Ze,{default:()=>re});module.exports=Le(Ze);var oe=require("obsidian");var H=require("obsidian"),Oe=/```json\n([\s\S]*?)\n```/,U=class{constructor(e){this.timers=new Map;this.pending=new Map;this.confirmedStarts=new Set;this.app=e}exists(e){let n=(0,H.normalizePath)(e);return this.pending.has(n)?!0:this.app.vault.getAbstractFileByPath(n)instanceof H.TFile}confirmStart(e){this.confirmedStarts.add((0,H.normalizePath)(e))}isStartConfirmed(e){return this.confirmedStarts.has((0,H.normalizePath)(e))}async load(e,n){let o=(0,H.normalizePath)(e);if(this.pending.has(o))return this.pending.get(o);let r=this.app.vault.getAbstractFileByPath(o);if(!(r instanceof H.TFile))return n;let a=(await this.app.vault.read(r)).match(Oe);if(!a)return n;try{return JSON.parse(a[1])}catch(c){return n}}async save(e,n){await this.write((0,H.normalizePath)(e),n)}saveDebounced(e,n,o=250){let r=(0,H.normalizePath)(e);this.pending.set(r,n);let d=this.timers.get(r);d!==void 0&&window.clearTimeout(d);let a=window.setTimeout(()=>{this.timers.delete(r);let c=this.pending.get(r);this.pending.delete(r),c!==void 0&&this.write(r,c)},o);this.timers.set(r,a)}async flush(){for(let n of this.timers.values())window.clearTimeout(n);this.timers.clear();let e=[];for(let[n,o]of this.pending)e.push(this.write(n,o));this.pending.clear(),await Promise.all(e)}async write(e,n){let o="```json\n"+JSON.stringify(n,null,2)+"\n```",r=e.split("/").slice(0,-1).join("/");if(r&&!this.app.vault.getAbstractFileByPath(r))try{await this.app.vault.createFolder(r)}catch(a){}let d=this.app.vault.getAbstractFileByPath(e);d instanceof H.TFile?await this.app.vault.modify(d,o):await this.app.vault.create(e,o)}};function me(){let t=document.body.classList.contains("theme-light");return{cardBg:t?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.03)",cardBgHov:t?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.06)",border:t?"rgba(0,0,0,0.10)":"rgba(255,255,255,0.08)",divider:t?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",rowDiv:t?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.03)",rowHov:t?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.05)",inputBg:t?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.06)",barTrack:t?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.06)",mutedBg:t?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.04)",doneBg:t?"rgba(0,0,0,0.03)":"rgba(255,255,255,0.02)"}}var _={green:"#a3be8c",blue:"#88c0d0",gold:"#ebcb8b",orange:"#d08770",purple:"#b48ead",red:"#bf616a"};var Z=class{constructor(){this.modules=new Map}register(e){this.modules.has(e.id)&&console.warn(`[Homepage] \u6A21\u5757 id \u91CD\u590D\uFF1A${e.id}`),this.modules.set(e.id,e)}get(e){return this.modules.get(e)}list(){return[...this.modules.values()]}};var I=require("obsidian"),q={diaryDataFile:"Data/diary-data.md"},Q=class extends I.PluginSettingTab{constructor(e,n){super(e,n),this.plugin=n}display(){let{containerEl:e}=this;e.empty(),new I.Setting(e).setName("\u65E5\u8BB0\u6A21\u5757").setHeading(),new I.Setting(e).setName("\u65E5\u8BB0\u6570\u636E\u6587\u4EF6").setDesc("\u65E5\u8BB0\u6A21\u5757\u9ED8\u8BA4\u7684 JSON \u6570\u636E\u6587\u4EF6\u8DEF\u5F84\uFF08vault \u5185\u76F8\u5BF9\u8DEF\u5F84\uFF09\u3002\u5355\u4E2A\u4EE3\u7801\u5757\u91CC\u53EF\u7528 `data: \u8DEF\u5F84` \u8986\u76D6\u3002").addText(r=>r.setPlaceholder(q.diaryDataFile).setValue(this.plugin.settings.diaryDataFile).onChange(async d=>{this.plugin.settings.diaryDataFile=d.trim()||q.diaryDataFile,await this.plugin.saveSettings()})),new I.Setting(e).setName("\u5DF2\u6CE8\u518C\u6A21\u5757").setHeading();let n=e.createEl("div");n.style.cssText="font-size:13px; color:var(--text-muted); line-height:1.8;";for(let r of this.plugin.registry.list()){let d=n.createEl("div");d.createEl("code",{text:r.id}),d.createSpan({text:`  \u2014  ${r.name}`})}let o=e.createEl("p");o.style.cssText="font-size:12px; color:var(--text-faint); margin-top:1em;",o.setText("\u7528\u6CD5\uFF1A\u5728\u7B14\u8BB0\u91CC\u5199\u4E00\u4E2A ```homepage \u4EE3\u7801\u5757\uFF0C\u7B2C\u4E00\u884C\u586B\u6A21\u5757 id\u3002")}};var Ee=require("obsidian");var B=require("obsidian"),se=class extends B.Modal{constructor(n,o,r){super(n);this.heading=o;this.markdown=r;this.comp=new B.Component}onOpen(){this.titleEl.setText(this.heading+" \xB7 \u4F7F\u7528\u8BF4\u660E"),this.modalEl.addClass("homepage-help-modal"),this.comp.load(),B.MarkdownRenderer.render(this.app,this.markdown,this.contentEl,"",this.comp)}onClose(){this.comp.unload(),this.contentEl.empty()}};function xe(t,e,n,o,r){let d=B.Platform.isMobile,a=t.createEl("div",{text:"\u{1F4D6} \u8BF4\u660E"});a.style.cssText=`font-size:${d?12:11}px; color:var(--text-muted);
    cursor:pointer; padding:${d?"5px 11px":"3px 9px"}; border-radius:4px;
    border:1px solid ${r.border}; user-select:none; flex-shrink:0;
    transition:color .12s, border-color .12s;`,a.title="\u67E5\u770B\u672C\u6A21\u5757\u4F7F\u7528\u8BF4\u660E",a.onmouseenter=()=>{a.style.color="#88c0d0",a.style.borderColor="#88c0d044"},a.onmouseleave=()=>{a.style.color="var(--text-muted)",a.style.borderColor=r.border},a.onclick=()=>new se(e,n,o).open()}var he=require("obsidian");function ae(t,e,n){let{store:o}=t;if(o.exists(e)||o.isStartConfirmed(e))return n();Re(t,e,n)}function Re(t,e,n){let{el:o,store:r,theme:d}=t,a=he.Platform.isMobile;o.empty();let c=o.createDiv();c.style.cssText=`max-width:520px; margin:24px auto;
    padding:${a?"20px 18px":"26px 28px"};
    border:1px solid ${d.border}; border-radius:12px; background:${d.cardBg};
    font-family:var(--font-interface); text-align:center;`;let M=c.createDiv({text:"\u{1F6E1} \u672A\u627E\u5230\u6570\u636E\u6587\u4EF6"});M.style.cssText=`font-size:${a?16:15}px; font-weight:700;
    color:var(--text-normal); margin-bottom:10px;`;let k=c.createDiv();k.style.cssText=`font-size:${a?14:13}px; line-height:1.7;
    color:var(--text-muted); margin-bottom:14px;`,k.setText("\u5982\u679C\u4F60\u5728\u624B\u673A\u6216\u5176\u5B83\u8BBE\u5907\u4E0A\u8BB0\u5F55\u8FC7\uFF0C\u6570\u636E\u53EF\u80FD\u8FD8\u5728\u540C\u6B65\u4E2D\u3002\u8BF7\u7B49\u540C\u6B65\u5B8C\u6210\u540E\u518D\u7528\u672C\u6A21\u5757 \u2014\u2014 \u73B0\u5728\u5C31\u7F16\u8F91\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u51B2\u7A81\u6587\u4EF6\uFF0C\u548C\u5176\u5B83\u8BBE\u5907\u7684\u6570\u636E\u4E92\u76F8\u8986\u76D6\u3002");let T=c.createDiv({text:"\u6570\u636E\u6587\u4EF6\uFF1A"+e});T.style.cssText=`font-family:var(--font-monospace); font-size:12px;
    color:var(--text-muted); background:${d.mutedBg}; border-radius:6px;
    padding:6px 10px; margin-bottom:18px; word-break:break-all;`;let C=c.createDiv();C.style.cssText="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;";let N=`font-size:${a?14:13}px; cursor:pointer; user-select:none;
    padding:${a?"9px 18px":"7px 16px"}; border-radius:7px; font-weight:600;
    box-shadow:none; outline:none;`,Y=C.createEl("button",{text:"\u{1F504} \u6211\u5DF2\u7B49\u5F85\uFF0C\u91CD\u65B0\u68C0\u67E5"});Y.style.cssText=N+`border:none; background:${_.blue}; color:#fff;`,Y.onclick=()=>ue(o,()=>ae(t,e,n));let L=C.createEl("button",{text:"\u2728 \u5168\u65B0\u5F00\u59CB"});L.style.cssText=N+`border:1px solid ${d.border}; background:transparent; color:var(--text-muted);`,L.onclick=()=>{r.confirmStart(e),ue(o,n)};let E=c.createDiv({text:"\u300C\u5168\u65B0\u5F00\u59CB\u300D\u4EC5\u5F53\u8FD9\u53F0\u8BBE\u5907\u4ECE\u672A\u8BB0\u5F55\u8FC7\u65F6\u624D\u70B9\u3002"});E.style.cssText=`font-size:11px; color:${_.gold}; margin-top:12px;`}function ue(t,e){try{let n=e();n instanceof Promise&&n.catch(o=>fe(t,String(o)))}catch(n){fe(t,String(n))}}function fe(t,e){t.empty();let n=t.createDiv({text:"\u26A0 \u6E32\u67D3\u5931\u8D25\uFF1A"+e});n.style.cssText=`color:${_.red}; font-size:12px; padding:10px 14px;
    border-radius:8px; border:1px solid ${_.red}44; background:${_.red}14;
    font-family:var(--font-interface);`}var ye=`# \u65E5\u8BB0\u8BB0\u5F55

## \u8FD9\u4E2A\u6A21\u5757\u505A\u4EC0\u4E48

\u8BB0\u5F55\u6BCF\u5929\u7684\u65E5\u8BB0\u3002\u4E00\u5929\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A

1. **4 \u4E2A\u624B\u52A8\u6570\u5B57**\uFF1A\u4F53\u91CD\u3001\u7761\u7720\u3001\u5DE5\u4F5C\u65F6\u957F\u3001\u5065\u8EAB\u65F6\u957F \u2014\u2014 \u4F60\u81EA\u5DF1\u586B\u3002
2. **\u82E5\u5E72\u65F6\u95F4\u6BB5\u8BB0\u5F55**\uFF1A\u5982 \`09:00~11:00 \u5199\u8BBA\u6587\`\uFF0C\u662F\u5F53\u5929\u7684\u6D3B\u52A8\u65E5\u5FD7\u3002

\u65F6\u95F4\u6BB5\u53EA\u662F\u65E5\u5FD7\uFF0C**\u4E0D\u4F1A\u81EA\u52A8\u52A0\u603B\u6210\u5DE5\u4F5C\u65F6\u957F**\u3002\u5DE5\u4F5C / \u5065\u8EAB\u65F6\u957F\u7531\u4F60\u624B\u52A8\u638C\u63A7\uFF0C
\u907F\u514D\u5A31\u4E50\u3001\u6742\u4E8B\u7B49\u65F6\u95F4\u6BB5\u88AB\u8BEF\u7B97\u8FDB\u53BB\u3002

\u6570\u636E\u5B58\u5728 vault \u7684 \`Data/diary-data.md\`\uFF08JSON \u683C\u5F0F\uFF0C\u53EF\u5728\u63D2\u4EF6\u8BBE\u7F6E\u91CC\u6539\u8DEF\u5F84\uFF09\u3002

## \u5728\u7B14\u8BB0\u91CC\u542F\u7528

\u5728\u7B14\u8BB0\u4E2D\u5199\u4E00\u4E2A\u4EE3\u7801\u5757\uFF0C\u8BED\u8A00\u5199 \`homepage\`\uFF0C\u7B2C\u4E00\u884C\u5199 \`diary\`\uFF1A

\`\`\`\`text
\`\`\`homepage
diary
\`\`\`
\`\`\`\`

\u53EF\u9009\uFF1A\u7B2C\u4E8C\u884C\u5199 \`data: \u8DEF\u5F84\` \u8986\u76D6\u6570\u636E\u6587\u4EF6\u3002

## \u5468\u89C6\u56FE / \u6708\u89C6\u56FE

\u53F3\u4E0A\u89D2 \`\u5468 / \u6708\` \u5207\u6362\uFF1A

- **\u5468\u89C6\u56FE**\uFF08\u9ED8\u8BA4\uFF09\uFF1A\u5F53\u524D\u4E00\u5468 7 \u5929\uFF0C\u6BCF\u5929\u53EF\u586B 4 \u4E2A\u6570\u5B57\u3001\u589E\u5220\u65F6\u95F4\u6BB5\u3002
- **\u6708\u89C6\u56FE**\uFF1A\u6574\u6708\u6C47\u603B + \u6BCF\u5468\u660E\u7EC6\uFF0C\u70B9\u67D0\u4E00\u5468\u53EF\u8DF3\u8FDB\u8BE5\u5468\u7684\u5468\u89C6\u56FE\u3002

\`\u2190 \u2192\` \u6309\u5468\uFF08\u6216\u6309\u6708\uFF09\u7FFB\u9875\uFF1B\u70B9\u4E2D\u95F4\u7684\u65E5\u671F\u6587\u5B57\u56DE\u5230\u4ECA\u5929\u3002

## \u6BCF\u5929\u7684 4 \u4E2A\u6570\u5B57

\u6BCF\u5929\u5361\u7247\u5934\u90E8\u6709 4 \u4E2A\u5C0F\u8F93\u5165\u6846\uFF0C\u76F4\u63A5\u586B\u3001\`Tab\` \u5207\u6362\uFF1A

| \u56FE\u6807 | \u542B\u4E49 | \u5355\u4F4D |
|------|------|------|
| \u2696\uFE0F | \u4F53\u91CD | \u65A4 |
| \u{1F634} | \u7761\u7720 | \u5C0F\u65F6 |
| \u{1F4BC} | \u5DE5\u4F5C\u65F6\u957F | \u5C0F\u65F6 |
| \u{1F3CB}\uFE0F | \u5065\u8EAB\u65F6\u957F | \u5C0F\u65F6 |

\u586B\u5B8C\u9876\u90E8\u6C47\u603B\u5361\u4F1A\u7ACB\u5373\u66F4\u65B0\u3002\u4E0D\u586B\u7684\u7559\u7A7A\u5373\u53EF\uFF08\u4E0D\u8BA1\u5165\u5E73\u5747\uFF09\u3002

## \u600E\u4E48\u8BB0\u5F55

\u5728\u67D0\u5929\u5361\u7247\u5E95\u90E8\u7684\u8F93\u5165\u6846\u91CC\u8F93\u5165\uFF0C\u56DE\u8F66\u786E\u8BA4\u3002\u6709\u4E24\u79CD\u8BB0\u5F55\u65B9\u5F0F\uFF1A

### \u2460 \u8BA1\u65F6\u6BB5 \u2014\u2014 \u6574\u884C\u4EE5\u300C\u4E24\u4E2A\u65F6\u95F4\u300D\u5F00\u5934

\`\`\`text
09:00 11:00 \u5199\u8BBA\u6587
11:30-12:30 \u5B66\u4E60
14:00~15:00 \u8DD1\u6B65
\`\`\`

\u5F00\u5934\u4E24\u4E2A \`\u65F6:\u5206\` \u4F5C\u8D77\u6B62\u65F6\u95F4\uFF0C\u5176\u4F59\u6587\u5B57\u4F5C\u4E8B\u9879\uFF0C\u65F6\u957F\u81EA\u52A8\u7B97\u51FA\uFF08\u53EA\u8BFB\uFF09\u3002

### \u2461 \u968F\u624B\u8BB0 \u2014\u2014 \u5176\u5B83\u4EFB\u4F55\u8F93\u5165

\u4E0D\u4EE5\u4E24\u4E2A\u65F6\u95F4\u5F00\u5934\u7684\u8F93\u5165\uFF0C\u539F\u6587**\u4E00\u5B57\u4E0D\u6539**\u5730\u5B58\u6210\u4E00\u6761\u300C\u968F\u624B\u8BB0\u300D\uFF1A

\`\`\`text
0:40\u7761\u52306\u70B9\uFF0C\u7761\u4E0D\u7740\uFF0C7:30\u8D77\u5E8A\u5904\u7406\u6742\u4E8B
\u4ECA\u5929\u72B6\u6001\u4E0D\u597D
\`\`\`

\u9002\u5408\u4E00\u53E5\u8BDD\u8BB2\u4E0D\u6E05\u3001\u542B\u591A\u4E2A\u65F6\u95F4\u70B9\u7684\u96F6\u788E\u8BB0\u5F55\u3002
**\u4F60\u8F93\u5165\u7684\u5185\u5BB9\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u4E22\u5F03\u6216\u6539\u5199** \u2014\u2014 \u4E0D\u4F1A\u88AB\u5F3A\u884C\u585E\u8FDB\u4E00\u4E2A\u9519\u8BEF\u65F6\u95F4\u6BB5\u3002

\u70B9\u968F\u624B\u8BB0\u7684\u6587\u5B57\u53EF\u4EE5\u7F16\u8F91\uFF1B\u5982\u679C\u6539\u6210\u300C\u4E24\u4E2A\u65F6\u95F4\u5F00\u5934\u300D\u7684\u683C\u5F0F\uFF0C\u5B83\u4F1A\u81EA\u52A8\u5347\u7EA7\u6210\u8BA1\u65F6\u6BB5\u3002
\u6DFB\u52A0\u540E\u8F93\u5165\u6846\u4FDD\u6301\u805A\u7126\uFF0C\u65B9\u4FBF\u8FDE\u7EED\u8BB0\u591A\u6761\u3002

### \u81EA\u52A8\u6309\u65F6\u95F4\u6392\u5E8F

\u4E00\u5929\u5185\u7684\u6240\u6709\u8BB0\u5F55**\u81EA\u52A8\u6309\u65F6\u95F4\u5148\u540E\u6392\u5217**\u3002\u968F\u624B\u8BB0\u6CA1\u6709\u8D77\u6B62\u65F6\u95F4\uFF0C
\u5C31\u53D6\u5B83\u6587\u5B57\u91CC\u51FA\u73B0\u7684**\u7B2C\u4E00\u4E2A\u65F6\u95F4**\u4F5C\u6392\u5E8F\u4F9D\u636E \u2014\u2014 \u6240\u4EE5\u300C0:30 \u7761\u5230 6 \u70B9\u2026\u300D
\u8FD9\u7C7B\u8865\u8BB0\uFF0C\u4E5F\u4F1A\u81EA\u52A8\u6392\u5230\u5F53\u5929\u9760\u524D\u7684\u4F4D\u7F6E\uFF0C\u4E0D\u7528\u624B\u52A8\u8C03\u3002
\u5B8C\u5168\u6CA1\u6709\u65F6\u95F4\u7684\u8BB0\u5F55\u6392\u5728\u5F53\u5929\u672B\u5C3E\u3002

## \u7F16\u8F91

- \u70B9\u65F6\u95F4 \u2014\u2014 \u6539\u8D77\u6B62\u65F6\u95F4\uFF08\u8F93\u5165\u4E24\u4E2A\u65F6\u95F4\u5373\u53EF\uFF09
- \u70B9\u4E8B\u9879\u6587\u5B57 \u2014\u2014 \u6539\u6587\u5B57
- \u9F20\u6807\u60AC\u505C\u8BB0\u5F55\u884C \u2014\u2014 \u53F3\u4FA7\u51FA\u73B0 \`\xD7\` \u5220\u9664
- \u5934\u90E8 4 \u4E2A\u6570\u5B57 \u2014\u2014 \u76F4\u63A5\u6539
- \u5934\u90E8 \`\u{1F4DD}\` \u2014\u2014 \u7ED9\u5F53\u5929\u52A0 / \u6539\u4E00\u6BB5\u5907\u6CE8

## \u7EDF\u8BA1\u53E3\u5F84

- **\u603B\u5DE5\u4F5C / \u603B\u5065\u8EAB**\uFF1A\u8BE5\u5468 / \u6708\u6240\u6709\u624B\u52A8\u586B\u5199\u7684\u5DE5\u4F5C / \u5065\u8EAB\u65F6\u957F\u4E4B\u548C
- **\u65E5\u5747\u5DE5\u4F5C**\uFF1A\u603B\u5DE5\u4F5C \xF7 \u586B\u4E86\u5DE5\u4F5C\u65F6\u957F\u7684\u5929\u6570\uFF08\u6CA1\u586B\u7684\u5929\u4E0D\u7B97\u8FDB\u5206\u6BCD\uFF09
- **\u5E73\u5747\u4F53\u91CD / \u7761\u7720**\uFF1A\u53EA\u5BF9\u586B\u4E86\u5BF9\u5E94\u6570\u503C\u7684\u5929\u6C42\u5E73\u5747

## \u6570\u636E\u7ED3\u6784

\`Data/diary-data.md\` \u91CC\u662F\u4E00\u6BB5 JSON\uFF1A

\`\`\`text
{
  "2026-05-21": {
    "weight": 158,
    "sleep": 7.5,
    "work": 3.5,
    "gym": 0.5,
    "segments": [
      { "id": "ab12", "s": "09:00", "e": "11:00", "t": "\u5199\u8BBA\u6587" },
      { "id": "cd34", "t": "0:40\u7761\u52306\u70B9\uFF0C\u7761\u4E0D\u7740" }
    ],
    "note": "\u72B6\u6001\u4E0D\u9519"
  }
}
\`\`\`

\u5B57\u6BB5\uFF1A\`work / gym\` \u624B\u52A8\u65F6\u957F \xB7 \`segments\` \u8BB0\u5F55\u5217\u8868\u3002
\u5217\u8868\u91CC\u6BCF\u6761\uFF1A\u8BA1\u65F6\u6BB5\u6709 \`s\` \u8D77 / \`e\` \u6B62 / \`t\` \u4E8B\u9879\uFF1B\u968F\u624B\u8BB0\u53EA\u6709 \`t\`\uFF08\u539F\u6587\uFF09\u3002
\u4E0E\u539F DataviewJS \u7248\u65E5\u8BB0\u5B57\u6BB5\u5B8C\u5168\u517C\u5BB9\uFF0C\u65E7\u6570\u636E\u76F4\u63A5\u8BFB\u3002
`;var Ke="Data/diary-data.md",_e=["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u65E5"],F="#88c0d0",J=t=>String(t).padStart(2,"0"),te=(t,e,n)=>`${t}-${J(e)}-${J(n)}`,X=t=>te(t.getFullYear(),t.getMonth()+1,t.getDate()),be=(t,e)=>new Date(t,e,0).getDate(),De=t=>(t.getDay()+6)%7,K=(t,e)=>new Date(t.getFullYear(),t.getMonth(),t.getDate()+e),ee=t=>K(t,-De(t)),Ie=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6),j=t=>Number.isInteger(t)?String(t):t.toFixed(1);function ne(t){let e=t.split(":");return(Number(e[0])||0)*60+(Number(e[1])||0)}function Je(t){return t.s!=null&&t.e!=null}function Ye(t){if(!t.s||!t.e)return 0;let e=ne(t.e)-ne(t.s);return e<0&&(e+=1440),e}function Ge(t){let e=Math.floor(t/60),n=t%60;return e&&n?`${e}h${n}m`:e?`${e}h`:`${n}m`}function Me(t){let e=/(\d{1,2}):(\d{2})/g,n=[],o;for(;(o=e.exec(t))!==null;){let r=Number(o[1]),d=Number(o[2]);r<24&&d<60&&n.push(J(r)+":"+J(d))}return n}function ve(t){let e=t.replace("\uFF1A",":").split(":");return J(Number(e[0]))+":"+J(Number(e[1]))}function we(t){let e=t.replace("\uFF1A",":").split(":");return Number(e[0])<24&&Number(e[1])<60}var Ve=/^\s*(\d{1,2}[:：]\d{2})\s*[-~～至到]?\s*(\d{1,2}[:：]\d{2})\s*([\s\S]*)$/;function $e(t){let e=t.trim(),n=e.match(Ve);return n&&we(n[1])&&we(n[2])?{s:ve(n[1]),e:ve(n[2]),t:n[3].trim()||"\u672A\u547D\u540D"}:{t:e}}function ke(t){if(t.s!=null)return ne(t.s);let e=Me(t.t.replace(/：/g,":"));return e.length?ne(e[0]):1/0}function Te(t,e){let n=0,o=0,r=0,d=0,a=0,c=0,M=0;for(let k of e){let T=t[k];T&&(T.work!=null&&(n+=T.work,r++),T.gym!=null&&(o+=T.gym),T.weight!=null&&(d+=T.weight,a++),T.sleep!=null&&(c+=T.sleep,M++))}return{work:n,gym:o,workDays:r,workAvg:r?n/r:null,weightAvg:a?d/a:null,sleepAvg:M?c/M:null}}var Se={id:"diary",name:"\u65E5\u8BB0\u8BB0\u5F55",render(t){let{el:e,store:n}=t,o=t.theme,r=Ee.Platform.isMobile,d=t.config.data||t.plugin.settings.diaryDataFile||Ke,a="week",c=new Date,M=null,k=null;e.style.cssText=`all:unset; display:block;
      padding:0 ${r?"6px 28px":"36px 48px"};`;let T=()=>n.load(d,{});async function C(p){for(let g of Object.keys(p)){let i=p[g];i.weight==null&&i.sleep==null&&i.work==null&&i.gym==null&&!i.note&&!(i.segments&&i.segments.length)&&delete p[g]}await n.save(d,p)}function N(p,g){let i=p[g];return i||(i={},p[g]=i),i}function Y(){let p=[];if(a==="week"){let g=ee(c);for(let i=0;i<7;i++)p.push(X(K(g,i)))}else{let g=c.getFullYear(),i=c.getMonth()+1;for(let s=1;s<=be(g,i);s++)p.push(te(g,i,s))}return p}function L(p,g,i,s){let m=i?document.createElement("textarea"):document.createElement("input");m.value=g,m.style.cssText=`background:${o.inputBg}; border:1px solid ${F};
        border-radius:4px; padding:${r?"5px 8px":"2px 6px"};
        font-size:${r?16:13}px; color:var(--text-normal);
        font-family:inherit; outline:none; box-sizing:border-box;
        ${i?"width:100%; min-height:60px; resize:vertical;":"flex:1; min-width:120px;"}`,p.replaceWith(m),m.focus(),m instanceof HTMLInputElement&&m.select();let h=!1,b=f=>{h||(h=!0,f?s(m.value.trim()):E())};m.addEventListener("keydown",f=>{f.stopPropagation(),f.key==="Enter"&&(!i||f.ctrlKey||f.metaKey)?(f.preventDefault(),b(!0)):f.key==="Escape"&&(f.preventDefault(),b(!1))}),m.addEventListener("blur",()=>b(!0))}async function E(){e.empty();let p=await T(),g=e.createEl("div");g.style.cssText=`display:flex; align-items:center; justify-content:space-between;
        gap:10px; flex-wrap:wrap; margin-bottom:16px; padding-bottom:8px;
        border-bottom:1px solid ${o.divider};`,g.createEl("div",{text:"\u{1F4D4} \u65E5\u8BB0\u8BB0\u5F55"}).style.cssText="font-size:11px; text-transform:uppercase; letter-spacing:.12em; color:var(--text-muted);";let i=g.createEl("div");i.style.cssText="display:flex; align-items:center; gap:10px; flex-wrap:wrap;";let s=i.createEl("div");s.style.cssText=`display:flex; border:1px solid ${o.border};
        border-radius:6px; overflow:hidden;`;let m=(l,u)=>{let y=s.createEl("div",{text:l}),S=a===u;y.style.cssText=`font-size:${r?12:11}px;
          padding:${r?"5px 15px":"3px 13px"}; cursor:pointer; user-select:none;
          color:${S?"#fff":"var(--text-muted)"};
          background:${S?F:"transparent"};`,y.onclick=()=>{a!==u&&(a=u,E())}};m("\u5468","week"),m("\u6708","month");let h=i.createEl("div");h.style.cssText="display:flex; align-items:center; gap:8px;";let b=(l,u)=>{let y=h.createEl("div",{text:l});y.style.cssText=`font-size:${r?13:12}px; color:var(--text-muted);
          cursor:pointer; padding:${r?"5px 12px":"2px 8px"};
          border-radius:4px; border:1px solid ${o.border}; user-select:none;`,y.onmouseenter=()=>y.style.color=F,y.onmouseleave=()=>y.style.color="var(--text-muted)",y.onclick=u},f;if(a==="week"){let l=ee(c),u=K(l,6);f=`${l.getMonth()+1}/${l.getDate()} ~ ${u.getMonth()+1}/${u.getDate()}`}else f=`${c.getFullYear()}\u5E74${c.getMonth()+1}\u6708`;b("\u2190",()=>{c=a==="week"?K(c,-7):new Date(c.getFullYear(),c.getMonth()-1,1),E()});let x=h.createEl("span",{text:f});if(x.style.cssText=`font-size:13px; font-weight:600; color:var(--text-normal);
        min-width:108px; text-align:center; cursor:pointer;`,x.title="\u70B9\u51FB\u56DE\u5230\u4ECA\u5929",x.onclick=()=>{c=new Date,E()},b("\u2192",()=>{c=a==="week"?K(c,7):new Date(c.getFullYear(),c.getMonth()+1,1),E()}),xe(i,t.app,"\u65E5\u8BB0\u8BB0\u5F55",ye,o),k=e.createEl("div"),de(p),a==="week"){let l=ee(c);for(let u=0;u<7;u++){let y=K(l,u);Ce(p,y,X(y))}}else He(p)}function de(p){if(!k)return;k.empty(),k.style.cssText=`display:grid;
        grid-template-columns:repeat(${r?2:4},1fr);
        gap:${r?8:10}px; margin-bottom:16px;`;let g=a==="week"?"\u672C\u5468":"\u672C\u6708",i=Te(p,Y()),s=(m,h,b,f)=>{let x=k.createEl("div");x.style.cssText=`background:${o.cardBg}; border:1px solid ${o.border};
          border-radius:10px; padding:12px 14px; text-align:center;`,x.createEl("div",{text:m}).style.cssText=`font-size:19px; font-weight:700; color:${f}; font-family:monospace;`,x.createEl("div",{text:h||" "}).style.cssText="font-size:10px; color:var(--text-muted); margin-top:2px; font-family:monospace;",x.createEl("div",{text:b}).style.cssText="font-size:10px; color:var(--text-faint); margin-top:4px;"};s(`${j(i.work)}h`,i.workAvg!=null?`\u65E5\u5747 ${j(i.workAvg)}h`:"\u2014",`${g}\u603B\u5DE5\u4F5C`,"#ebcb8b"),s(`${j(i.gym)}h`,"",`${g}\u5065\u8EAB`,"#d08770"),s(i.weightAvg!=null?`${j(i.weightAvg)}\u65A4`:"\u2014","","\u5E73\u5747\u4F53\u91CD","#a3be8c"),s(i.sleepAvg!=null?`${j(i.sleepAvg)}h`:"\u2014","","\u5E73\u5747\u7761\u7720","#88c0d0")}function Ce(p,g,i){var D;let s=p[i],m=i===X(new Date),h=De(g),b=((D=s==null?void 0:s.segments)!=null?D:[]).slice().sort((w,v)=>ke(w)-ke(v)),f=e.createEl("div");f.style.cssText=`background:${o.cardBg}; border:1px solid ${o.border};
        border-radius:10px; overflow:hidden; margin-bottom:10px;`;let x=f.createEl("div");x.style.cssText=`border-bottom:1px solid ${o.rowDiv};
        ${r?"display:flex; flex-direction:column; gap:8px; padding:10px 11px;":"display:flex; align-items:center; gap:8px; flex-wrap:wrap; padding:9px 14px;"}`;let l=r?x.createEl("div"):x;r&&(l.style.cssText="display:flex; align-items:center; gap:8px;");let u=l.createEl("div");u.style.cssText="display:flex; align-items:baseline; gap:4px; flex-shrink:0;",u.createEl("span",{text:`${g.getDate()}\u65E5`}).style.cssText=`font-size:${r?15:14}px; font-weight:${m?700:600};
         color:${m?F:"var(--text-normal)"};`,u.createEl("span",{text:`\u5468${_e[h]}`}).style.cssText=`font-size:${r?11:10}px;
         color:${h>=5?"#d08770":"var(--text-faint)"};`,m&&(u.createEl("span",{text:"\u4ECA"}).style.cssText=`font-size:9px; background:${F}33; color:${F};
           border-radius:3px; padding:0 3px;`);let y=l.createEl("div");y.style.cssText="flex:1; min-width:8px;";let S=w=>{let v=w.createEl("span",{text:"\u{1F4DD}"});v.style.cssText=`cursor:pointer; flex-shrink:0;
          font-size:${r?15:11}px; ${r?"padding:2px 5px;":""}
          opacity:${s!=null&&s.note?"0.9":"0.4"}; transition:opacity .12s;`,v.title=s!=null&&s.note?"\u7F16\u8F91\u5907\u6CE8":"\u6DFB\u52A0\u5907\u6CE8",v.onclick=()=>{var $;L(v,($=s==null?void 0:s.note)!=null?$:"",!0,A=>{let V=N(p,i);A?V.note=A:delete V.note,C(p).then(()=>E())})}};r&&S(l);let G=r?x.createEl("div"):x;r&&(G.style.cssText="display:grid; grid-template-columns:repeat(2,1fr); gap:8px;");let O=(w,v,$,A,V)=>{let W=G.createEl("div");W.style.cssText=`display:flex; align-items:center; gap:2px;
          ${r?"justify-content:center;":"flex-shrink:0;"}`,W.createEl("span",{text:w}).style.cssText=`font-size:${r?13:11}px;${r?" flex-shrink:0;":""}`;let P=W.createEl("input");P.type="number",P.step=V,P.placeholder=A,P.value=s&&s[$]!=null?String(s[$]):"",P.style.cssText=`${r?"flex:1; min-width:0; max-width:72px;":"width:44px;"} background:transparent;
          border:none; border-bottom:1px solid ${r?o.border:"transparent"};
          outline:none; text-align:center; font-family:monospace;
          font-size:${r?16:12}px; color:var(--text-normal);`,P.onfocus=()=>P.style.borderBottomColor=F,P.onblur=()=>P.style.borderBottomColor=r?o.border:"transparent",P.onchange=()=>{let pe=parseFloat(P.value),ge=N(p,i);isNaN(pe)?delete ge[$]:ge[$]=pe,C(p).then(()=>de(p))},W.createEl("span",{text:v}).style.cssText=`font-size:${r?11:10}px; color:var(--text-faint);${r?" flex-shrink:0;":""}`};O("\u2696\uFE0F","\u65A4","weight","\u4F53\u91CD","0.1"),O("\u{1F634}","h","sleep","\u7761\u7720","0.5"),O("\u{1F4BC}","h","work","\u5DE5\u4F5C","0.5"),O("\u{1F3CB}\uFE0F","h","gym","\u5065\u8EAB","0.5"),r||S(x);for(let w of b)Pe(f,p,i,w);if(s!=null&&s.note){let w=f.createEl("div",{text:s.note});w.style.cssText=`font-size:12px; color:var(--text-muted);
          white-space:pre-wrap; padding:${r?"9px 11px":"7px 14px"};
          border-bottom:1px solid ${o.rowDiv};
          background:${o.mutedBg}; cursor:pointer;`,w.title="\u70B9\u51FB\u7F16\u8F91\u5907\u6CE8",w.onclick=()=>{var v;L(w,(v=s.note)!=null?v:"",!0,$=>{let A=N(p,i);$?A.note=$:delete A.note,C(p).then(()=>E())})}}let R=f.createEl("div");R.style.cssText=`display:flex; align-items:center; gap:8px;
        padding:${r?"9px 11px":"7px 14px"};`,R.createEl("span",{text:"\uFF0B"}).style.cssText=`font-size:${r?15:13}px; color:${F}; flex-shrink:0;`;let z=R.createEl("input");z.placeholder=r?"09:00 11:00 \u5199\u8BBA\u6587 / \u968F\u624B\u5199\u4E00\u53E5":"09:00 11:00 \u5199\u8BBA\u6587 \u2014\u2014 \u6216\u968F\u624B\u5199\u4E00\u53E5\u4E5F\u884C",z.style.cssText=`flex:1; min-width:0; background:transparent;
        border:none; outline:none; color:var(--text-muted);
        font-size:${r?16:13}px; font-family:var(--font-interface);`,z.addEventListener("keydown",w=>{if(w.key!=="Enter"||!z.value.trim())return;let v=$e(z.value),$=N(p,i);$.segments||($.segments=[]),$.segments.push({id:Ie(),s:v.s,e:v.e,t:v.t}),M=i,C(p).then(()=>E())}),i===M&&(M=null,window.setTimeout(()=>z.focus(),30))}function Pe(p,g,i,s){let m=Je(s),h=p.createEl("div");if(h.style.cssText=`display:flex; gap:9px;
        padding:${r?"9px 11px":"6px 14px"};
        border-bottom:1px solid ${o.rowDiv};
        align-items:${m?"center":"flex-start"};`,h.createEl("span",{text:"\u2022"}).style.cssText="font-size:13px; color:var(--text-faint); flex-shrink:0; line-height:1.5;",m){let x=h.createEl("span",{text:`${s.s}~${s.e}`});x.style.cssText=`font-size:${r?13:12}px; font-family:monospace;
          color:var(--text-faint); flex-shrink:0; cursor:pointer; line-height:1.5;`,x.title="\u70B9\u51FB\u4FEE\u6539\u65F6\u95F4",x.onclick=()=>{L(x,`${s.s} ${s.e}`,!1,l=>{let u=Me(l.replace(/：/g,":"));u.length>=2&&(s.s=u[0],s.e=u[1]),C(g).then(()=>E())})}}let b=h.createEl("span",{text:s.t});b.style.cssText=`flex:1; min-width:0; line-height:1.5;
        font-size:${r?14:13}px; color:var(--text-normal); cursor:pointer;
        ${m?"overflow:hidden; text-overflow:ellipsis; white-space:nowrap;":"white-space:pre-wrap; word-break:break-word;"}`,b.title="\u70B9\u51FB\u4FEE\u6539",b.onclick=()=>{L(b,s.t,!m,x=>{if(m)s.t=x||"\u672A\u547D\u540D";else if(x.trim()){let l=$e(x);s.s=l.s,s.e=l.e,s.t=l.t}else{let l=g[i];l!=null&&l.segments&&(l.segments=l.segments.filter(u=>u.id!==s.id))}C(g).then(()=>E())})},m&&(h.createEl("span",{text:Ge(Ye(s))}).style.cssText=`font-size:11px; font-family:monospace; color:var(--text-faint);
           flex-shrink:0; min-width:42px; text-align:right; line-height:1.5;`);let f=h.createEl("span",{text:"\xD7"});f.style.cssText=`color:var(--text-faint); cursor:pointer; flex-shrink:0;
        user-select:none; line-height:1.5; font-size:${r?18:15}px;
        ${r?"opacity:0.55; padding:0 5px;":"opacity:0; transition:opacity .12s;"}`,f.onclick=()=>{let x=g[i];x!=null&&x.segments&&(x.segments=x.segments.filter(l=>l.id!==s.id)),C(g).then(()=>E())},h.onmouseenter=()=>{h.style.background=o.rowHov,r||(f.style.opacity="1")},h.onmouseleave=()=>{h.style.background="transparent",r||(f.style.opacity="0")}}function He(p){let g=c.getFullYear(),i=c.getMonth()+1,s=be(g,i),m={};for(let l=1;l<=s;l++){let u=X(ee(new Date(g,i-1,l)));m[u]||(m[u]=[]),m[u].push(l)}let h=Object.keys(m).sort();e.createEl("div",{text:"\u6BCF\u5468\u660E\u7EC6"}).style.cssText="font-size:11px; color:var(--text-faint); margin:4px 0 8px;";let b=e.createEl("div");b.style.cssText=`background:${o.cardBg}; border:1px solid ${o.border};
        border-radius:10px; overflow:hidden;`;let f={};for(let l of h){let u=0;for(let y of m[l]){let S=p[te(g,i,y)];S&&S.work!=null&&(u+=S.work)}f[l]=u}let x=Math.max(...h.map(l=>f[l]),1);h.forEach((l,u)=>{let y=new Date(l),S=K(y,6),G=m[l].map(A=>te(g,i,A)),O=Te(p,G),R=f[l],z=u===h.length-1,D=b.createEl("div");D.style.cssText=`display:flex; align-items:center; gap:10px;
          padding:${r?"13px 11px":"10px 14px"}; cursor:pointer;
          ${z?"":`border-bottom:1px solid ${o.rowDiv};`}`,D.title="\u70B9\u51FB\u67E5\u770B\u8BE5\u5468",D.onmouseenter=()=>D.style.background=o.rowHov,D.onmouseleave=()=>D.style.background="transparent",D.onclick=()=>{a="week",c=y,E()};let w=`${y.getMonth()+1}/${y.getDate()} ~ ${S.getMonth()+1}/${S.getDate()}`;D.createEl("span",{text:w}).style.cssText="font-size:11px; color:var(--text-faint); min-width:104px; flex-shrink:0;";let v=D.createEl("div");v.style.cssText=`flex:1; height:6px; background:${o.barTrack};
          border-radius:3px; overflow:hidden;`,v.createEl("div").style.cssText=`height:100%; width:${(R/x*100).toFixed(1)}%;
           background:#ebcb8b; border-radius:3px;`;let $=O.workAvg!=null?` \u65E5\u5747${j(O.workAvg)}h`:"";D.createEl("span",{text:`${j(R)}h${$}`}).style.cssText=`font-size:11px; font-family:monospace; flex-shrink:0;
           color:${R>0?"#ebcb8b":"var(--text-faint)"};
           min-width:96px; text-align:right;`})}return ae(t,d,E)}};var We="homepage",re=class extends oe.Plugin{constructor(){super(...arguments);this.registry=new Z;this.liveChildren=new Set}async onload(){await this.loadSettings(),this.store=new U(this.app),this.registry.register(Se),this.registerMarkdownCodeBlockProcessor(We,(n,o,r)=>this.handleBlock(n,o,r)),this.addSettingTab(new Q(this.app,this)),this.registerEvent(this.app.workspace.on("css-change",()=>{this.liveChildren.forEach(n=>n.rerender())})),console.log("[Homepage] \u5DF2\u52A0\u8F7D\uFF0C\u6A21\u5757\uFF1A"+this.registry.list().map(n=>n.id).join(", "))}async onunload(){var n;await((n=this.store)==null?void 0:n.flush())}handleBlock(n,o,r){let{id:d,config:a,body:c}=Ue(n),M=d?this.registry.get(d):void 0;if(!M){ce(o,d?`\u672A\u77E5\u6A21\u5757\u300C${d}\u300D\u3002\u5DF2\u6CE8\u518C\uFF1A${this.registry.list().map(T=>T.id).join(", ")}`:"\u4EE3\u7801\u5757\u7B2C\u4E00\u884C\u9700\u8981\u5199\u6A21\u5757 id\uFF0C\u4F8B\u5982\uFF1Adiary");return}let k=new le(this,o,r,M,c,a);r.addChild(k),this.liveChildren.add(k),k.register(()=>this.liveChildren.delete(k))}async loadSettings(){this.settings=Object.assign({},q,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}},le=class extends oe.MarkdownRenderChild{constructor(n,o,r,d,a,c){super(o);this.plugin=n;this.mdCtx=r;this.mod=d;this.body=a;this.config=c;this.cleanups=[]}onload(){this.rerender()}onunload(){this.runCleanups()}rerender(){this.runCleanups(),this.containerEl.empty();let n={app:this.plugin.app,plugin:this.plugin,el:this.containerEl,source:this.body,config:this.config,store:this.plugin.store,theme:me(),mdCtx:this.mdCtx,registerCleanup:o=>this.cleanups.push(o)};try{let o=this.mod.render(n);o instanceof Promise&&o.catch(r=>ce(this.containerEl,String(r)))}catch(o){ce(this.containerEl,String(o))}}runCleanups(){for(let n of this.cleanups)try{n()}catch(o){}this.cleanups=[]}};function Ue(t){let e=t.split(`
`),n=0;for(;n<e.length&&e[n].trim()==="";)n++;let o="";n<e.length&&(o=e[n].trim(),n++);let r={};for(;n<e.length;){let a=e[n];if(a.trim()===""){n++;continue}let c=a.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);if(!c)break;r[c[1]]=c[2].trim(),n++}let d=e.slice(n).join(`
`);return{id:o,config:r,body:d}}function ce(t,e){t.empty();let n=t.createEl("div",{text:"\u26A0 Homepage\uFF1A"+e});n.style.cssText="color:#bf616a; font-size:12px; padding:10px 14px; border-radius:8px;border:1px solid rgba(191,97,106,0.4); background:rgba(191,97,106,0.08);font-family:var(--font-interface);"}
