/* Homepage Modules — built by esbuild. Do not edit main.js directly. */
var re=Object.defineProperty;var Me=Object.getOwnPropertyDescriptor;var Se=Object.getOwnPropertyNames;var Pe=Object.prototype.hasOwnProperty;var Ce=(n,e)=>{for(var r in e)re(n,r,{get:e[r],enumerable:!0})},Ae=(n,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of Se(e))!Pe.call(n,t)&&t!==r&&re(n,t,{get:()=>e[t],enumerable:!(o=Me(e,t))||o.enumerable});return n};var He=n=>Ae(re({},"__esModule",{value:!0}),n);var Je={};Ce(Je,{default:()=>te});module.exports=He(Je);var ne=require("obsidian");var L=require("obsidian"),ze=/```json\n([\s\S]*?)\n```/,V=class{constructor(e){this.timers=new Map;this.pending=new Map;this.app=e}async load(e,r){let o=(0,L.normalizePath)(e);if(this.pending.has(o))return this.pending.get(o);let t=this.app.vault.getAbstractFileByPath(o);if(!(t instanceof L.TFile))return r;let l=(await this.app.vault.read(t)).match(ze);if(!l)return r;try{return JSON.parse(l[1])}catch(d){return r}}async save(e,r){await this.write((0,L.normalizePath)(e),r)}saveDebounced(e,r,o=250){let t=(0,L.normalizePath)(e);this.pending.set(t,r);let x=this.timers.get(t);x!==void 0&&window.clearTimeout(x);let l=window.setTimeout(()=>{this.timers.delete(t);let d=this.pending.get(t);this.pending.delete(t),d!==void 0&&this.write(t,d)},o);this.timers.set(t,l)}async flush(){for(let r of this.timers.values())window.clearTimeout(r);this.timers.clear();let e=[];for(let[r,o]of this.pending)e.push(this.write(r,o));this.pending.clear(),await Promise.all(e)}async write(e,r){let o="```json\n"+JSON.stringify(r,null,2)+"\n```",t=e.split("/").slice(0,-1).join("/");if(t&&!this.app.vault.getAbstractFileByPath(t))try{await this.app.vault.createFolder(t)}catch(l){}let x=this.app.vault.getAbstractFileByPath(e);x instanceof L.TFile?await this.app.vault.modify(x,o):await this.app.vault.create(e,o)}};function de(){let n=document.body.classList.contains("theme-light");return{cardBg:n?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.03)",cardBgHov:n?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.06)",border:n?"rgba(0,0,0,0.10)":"rgba(255,255,255,0.08)",divider:n?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",rowDiv:n?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.03)",rowHov:n?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.05)",inputBg:n?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.06)",barTrack:n?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.06)",mutedBg:n?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.04)",doneBg:n?"rgba(0,0,0,0.03)":"rgba(255,255,255,0.02)"}}var W=class{constructor(){this.modules=new Map}register(e){this.modules.has(e.id)&&console.warn(`[Homepage] \u6A21\u5757 id \u91CD\u590D\uFF1A${e.id}`),this.modules.set(e.id,e)}get(e){return this.modules.get(e)}list(){return[...this.modules.values()]}};var j=require("obsidian"),U={diaryDataFile:"Data/diary-data.md"},Z=class extends j.PluginSettingTab{constructor(e,r){super(e,r),this.plugin=r}display(){let{containerEl:e}=this;e.empty(),new j.Setting(e).setName("\u65E5\u8BB0\u6A21\u5757").setHeading(),new j.Setting(e).setName("\u65E5\u8BB0\u6570\u636E\u6587\u4EF6").setDesc("\u65E5\u8BB0\u6A21\u5757\u9ED8\u8BA4\u7684 JSON \u6570\u636E\u6587\u4EF6\u8DEF\u5F84\uFF08vault \u5185\u76F8\u5BF9\u8DEF\u5F84\uFF09\u3002\u5355\u4E2A\u4EE3\u7801\u5757\u91CC\u53EF\u7528 `data: \u8DEF\u5F84` \u8986\u76D6\u3002").addText(t=>t.setPlaceholder(U.diaryDataFile).setValue(this.plugin.settings.diaryDataFile).onChange(async x=>{this.plugin.settings.diaryDataFile=x.trim()||U.diaryDataFile,await this.plugin.saveSettings()})),new j.Setting(e).setName("\u5DF2\u6CE8\u518C\u6A21\u5757").setHeading();let r=e.createEl("div");r.style.cssText="font-size:13px; color:var(--text-muted); line-height:1.8;";for(let t of this.plugin.registry.list()){let x=r.createEl("div");x.createEl("code",{text:t.id}),x.createSpan({text:`  \u2014  ${t.name}`})}let o=e.createEl("p");o.style.cssText="font-size:12px; color:var(--text-faint); margin-top:1em;",o.setText("\u7528\u6CD5\uFF1A\u5728\u7B14\u8BB0\u91CC\u5199\u4E00\u4E2A ```homepage \u4EE3\u7801\u5757\uFF0C\u7B2C\u4E00\u884C\u586B\u6A21\u5757 id\u3002")}};var ve=require("obsidian");var H=require("obsidian"),oe=class extends H.Modal{constructor(r,o,t){super(r);this.heading=o;this.markdown=t;this.comp=new H.Component}onOpen(){this.titleEl.setText(this.heading+" \xB7 \u4F7F\u7528\u8BF4\u660E"),this.modalEl.addClass("homepage-help-modal"),this.comp.load(),H.MarkdownRenderer.render(this.app,this.markdown,this.contentEl,"",this.comp)}onClose(){this.comp.unload(),this.contentEl.empty()}};function pe(n,e,r,o,t){let x=H.Platform.isMobile,l=n.createEl("div",{text:"\u{1F4D6} \u8BF4\u660E"});l.style.cssText=`font-size:${x?12:11}px; color:var(--text-muted);
    cursor:pointer; padding:${x?"5px 11px":"3px 9px"}; border-radius:4px;
    border:1px solid ${t.border}; user-select:none; flex-shrink:0;
    transition:color .12s, border-color .12s;`,l.title="\u67E5\u770B\u672C\u6A21\u5757\u4F7F\u7528\u8BF4\u660E",l.onmouseenter=()=>{l.style.color="#88c0d0",l.style.borderColor="#88c0d044"},l.onmouseleave=()=>{l.style.color="var(--text-muted)",l.style.borderColor=t.border},l.onclick=()=>new oe(e,r,o).open()}var ge=`# \u65E5\u8BB0\u8BB0\u5F55

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
`;var Fe="Data/diary-data.md",Ne=["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u65E5"],z="#88c0d0",K=n=>String(n).padStart(2,"0"),X=(n,e,r)=>`${n}-${K(e)}-${K(r)}`,q=n=>X(n.getFullYear(),n.getMonth()+1,n.getDate()),me=(n,e)=>new Date(n,e,0).getDate(),be=n=>(n.getDay()+6)%7,R=(n,e)=>new Date(n.getFullYear(),n.getMonth(),n.getDate()+e),Q=n=>R(n,-be(n)),Le=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6),O=n=>Number.isInteger(n)?String(n):n.toFixed(1);function ee(n){let e=n.split(":");return(Number(e[0])||0)*60+(Number(e[1])||0)}function Oe(n){return n.s!=null&&n.e!=null}function Re(n){if(!n.s||!n.e)return 0;let e=ee(n.e)-ee(n.s);return e<0&&(e+=1440),e}function je(n){let e=Math.floor(n/60),r=n%60;return e&&r?`${e}h${r}m`:e?`${e}h`:`${r}m`}function we(n){let e=/(\d{1,2}):(\d{2})/g,r=[],o;for(;(o=e.exec(n))!==null;){let t=Number(o[1]),x=Number(o[2]);t<24&&x<60&&r.push(K(t)+":"+K(x))}return r}function ue(n){let e=n.replace("\uFF1A",":").split(":");return K(Number(e[0]))+":"+K(Number(e[1]))}function xe(n){let e=n.replace("\uFF1A",":").split(":");return Number(e[0])<24&&Number(e[1])<60}var Ke=/^\s*(\d{1,2}[:：]\d{2})\s*[-~～至到]?\s*(\d{1,2}[:：]\d{2})\s*([\s\S]*)$/;function fe(n){let e=n.trim(),r=e.match(Ke);return r&&xe(r[1])&&xe(r[2])?{s:ue(r[1]),e:ue(r[2]),t:r[3].trim()||"\u672A\u547D\u540D"}:{t:e}}function he(n){if(n.s!=null)return ee(n.s);let e=we(n.t.replace(/：/g,":"));return e.length?ee(e[0]):1/0}function ye(n,e){let r=0,o=0,t=0,x=0,l=0,d=0,P=0;for(let D of e){let $=n[D];$&&($.work!=null&&(r+=$.work,t++),$.gym!=null&&(o+=$.gym),$.weight!=null&&(x+=$.weight,l++),$.sleep!=null&&(d+=$.sleep,P++))}return{work:r,gym:o,workDays:t,workAvg:t?r/t:null,weightAvg:l?x/l:null,sleepAvg:P?d/P:null}}var ke={id:"diary",name:"\u65E5\u8BB0\u8BB0\u5F55",render(n){let{el:e,store:r}=n,o=n.theme,t=ve.Platform.isMobile,x=n.config.data||n.plugin.settings.diaryDataFile||Fe,l="week",d=new Date,P=null,D=null;e.style.cssText=`all:unset; display:block;
      padding:0 ${t?"6px 28px":"36px 48px"};`;let $=()=>r.load(x,{});async function B(c){for(let p of Object.keys(c)){let s=c[p];s.weight==null&&s.sleep==null&&s.work==null&&s.gym==null&&!s.note&&!(s.segments&&s.segments.length)&&delete c[p]}await r.save(x,c)}function _(c,p){let s=c[p];return s||(s={},c[p]=s),s}function $e(){let c=[];if(l==="week"){let p=Q(d);for(let s=0;s<7;s++)c.push(q(R(p,s)))}else{let p=d.getFullYear(),s=d.getMonth()+1;for(let i=1;i<=me(p,s);i++)c.push(X(p,s,i))}return c}function I(c,p,s,i){let g=s?document.createElement("textarea"):document.createElement("input");g.value=p,g.style.cssText=`background:${o.inputBg}; border:1px solid ${z};
        border-radius:4px; padding:${t?"5px 8px":"2px 6px"};
        font-size:${t?16:13}px; color:var(--text-normal);
        font-family:inherit; outline:none; box-sizing:border-box;
        ${s?"width:100%; min-height:60px; resize:vertical;":"flex:1; min-width:120px;"}`,c.replaceWith(g),g.focus(),g instanceof HTMLInputElement&&g.select();let h=!1,v=f=>{h||(h=!0,f?i(g.value.trim()):E())};g.addEventListener("keydown",f=>{f.stopPropagation(),f.key==="Enter"&&(!s||f.ctrlKey||f.metaKey)?(f.preventDefault(),v(!0)):f.key==="Escape"&&(f.preventDefault(),v(!1))}),g.addEventListener("blur",()=>v(!0))}async function E(){e.empty();let c=await $(),p=e.createEl("div");p.style.cssText=`display:flex; align-items:center; justify-content:space-between;
        gap:10px; flex-wrap:wrap; margin-bottom:16px; padding-bottom:8px;
        border-bottom:1px solid ${o.divider};`,p.createEl("div",{text:"\u{1F4D4} \u65E5\u8BB0\u8BB0\u5F55"}).style.cssText="font-size:11px; text-transform:uppercase; letter-spacing:.12em; color:var(--text-muted);";let s=p.createEl("div");s.style.cssText="display:flex; align-items:center; gap:10px; flex-wrap:wrap;";let i=s.createEl("div");i.style.cssText=`display:flex; border:1px solid ${o.border};
        border-radius:6px; overflow:hidden;`;let g=(a,u)=>{let y=i.createEl("div",{text:a}),M=l===u;y.style.cssText=`font-size:${t?12:11}px;
          padding:${t?"5px 15px":"3px 13px"}; cursor:pointer; user-select:none;
          color:${M?"#fff":"var(--text-muted)"};
          background:${M?z:"transparent"};`,y.onclick=()=>{l!==u&&(l=u,E())}};g("\u5468","week"),g("\u6708","month");let h=s.createEl("div");h.style.cssText="display:flex; align-items:center; gap:8px;";let v=(a,u)=>{let y=h.createEl("div",{text:a});y.style.cssText=`font-size:${t?13:12}px; color:var(--text-muted);
          cursor:pointer; padding:${t?"5px 12px":"2px 8px"};
          border-radius:4px; border:1px solid ${o.border}; user-select:none;`,y.onmouseenter=()=>y.style.color=z,y.onmouseleave=()=>y.style.color="var(--text-muted)",y.onclick=u},f;if(l==="week"){let a=Q(d),u=R(a,6);f=`${a.getMonth()+1}/${a.getDate()} ~ ${u.getMonth()+1}/${u.getDate()}`}else f=`${d.getFullYear()}\u5E74${d.getMonth()+1}\u6708`;v("\u2190",()=>{d=l==="week"?R(d,-7):new Date(d.getFullYear(),d.getMonth()-1,1),E()});let m=h.createEl("span",{text:f});if(m.style.cssText=`font-size:13px; font-weight:600; color:var(--text-normal);
        min-width:108px; text-align:center; cursor:pointer;`,m.title="\u70B9\u51FB\u56DE\u5230\u4ECA\u5929",m.onclick=()=>{d=new Date,E()},v("\u2192",()=>{d=l==="week"?R(d,7):new Date(d.getFullYear(),d.getMonth()+1,1),E()}),pe(s,n.app,"\u65E5\u8BB0\u8BB0\u5F55",ge,o),D=e.createEl("div"),ae(c),l==="week"){let a=Q(d);for(let u=0;u<7;u++){let y=R(a,u);Ee(c,y,q(y))}}else De(c)}function ae(c){if(!D)return;D.empty(),D.style.cssText=`display:grid;
        grid-template-columns:repeat(${t?2:4},1fr);
        gap:${t?8:10}px; margin-bottom:16px;`;let p=l==="week"?"\u672C\u5468":"\u672C\u6708",s=ye(c,$e()),i=(g,h,v,f)=>{let m=D.createEl("div");m.style.cssText=`background:${o.cardBg}; border:1px solid ${o.border};
          border-radius:10px; padding:12px 14px; text-align:center;`,m.createEl("div",{text:g}).style.cssText=`font-size:19px; font-weight:700; color:${f}; font-family:monospace;`,m.createEl("div",{text:h||" "}).style.cssText="font-size:10px; color:var(--text-muted); margin-top:2px; font-family:monospace;",m.createEl("div",{text:v}).style.cssText="font-size:10px; color:var(--text-faint); margin-top:4px;"};i(`${O(s.work)}h`,s.workAvg!=null?`\u65E5\u5747 ${O(s.workAvg)}h`:"\u2014",`${p}\u603B\u5DE5\u4F5C`,"#ebcb8b"),i(`${O(s.gym)}h`,"",`${p}\u5065\u8EAB`,"#d08770"),i(s.weightAvg!=null?`${O(s.weightAvg)}\u65A4`:"\u2014","","\u5E73\u5747\u4F53\u91CD","#a3be8c"),i(s.sleepAvg!=null?`${O(s.sleepAvg)}h`:"\u2014","","\u5E73\u5747\u7761\u7720","#88c0d0")}function Ee(c,p,s){var T;let i=c[s],g=s===q(new Date),h=be(p),v=((T=i==null?void 0:i.segments)!=null?T:[]).slice().sort((w,b)=>he(w)-he(b)),f=e.createEl("div");f.style.cssText=`background:${o.cardBg}; border:1px solid ${o.border};
        border-radius:10px; overflow:hidden; margin-bottom:10px;`;let m=f.createEl("div");m.style.cssText=`border-bottom:1px solid ${o.rowDiv};
        ${t?"display:flex; flex-direction:column; gap:8px; padding:10px 11px;":"display:flex; align-items:center; gap:8px; flex-wrap:wrap; padding:9px 14px;"}`;let a=t?m.createEl("div"):m;t&&(a.style.cssText="display:flex; align-items:center; gap:8px;");let u=a.createEl("div");u.style.cssText="display:flex; align-items:baseline; gap:4px; flex-shrink:0;",u.createEl("span",{text:`${p.getDate()}\u65E5`}).style.cssText=`font-size:${t?15:14}px; font-weight:${g?700:600};
         color:${g?z:"var(--text-normal)"};`,u.createEl("span",{text:`\u5468${Ne[h]}`}).style.cssText=`font-size:${t?11:10}px;
         color:${h>=5?"#d08770":"var(--text-faint)"};`,g&&(u.createEl("span",{text:"\u4ECA"}).style.cssText=`font-size:9px; background:${z}33; color:${z};
           border-radius:3px; padding:0 3px;`);let y=a.createEl("div");y.style.cssText="flex:1; min-width:8px;";let M=w=>{let b=w.createEl("span",{text:"\u{1F4DD}"});b.style.cssText=`cursor:pointer; flex-shrink:0;
          font-size:${t?15:11}px; ${t?"padding:2px 5px;":""}
          opacity:${i!=null&&i.note?"0.9":"0.4"}; transition:opacity .12s;`,b.title=i!=null&&i.note?"\u7F16\u8F91\u5907\u6CE8":"\u6DFB\u52A0\u5907\u6CE8",b.onclick=()=>{var k;I(b,(k=i==null?void 0:i.note)!=null?k:"",!0,C=>{let Y=_(c,s);C?Y.note=C:delete Y.note,B(c).then(()=>E())})}};t&&M(a);let J=t?m.createEl("div"):m;t&&(J.style.cssText="display:grid; grid-template-columns:repeat(4,1fr); gap:4px;");let F=(w,b,k,C,Y)=>{let G=J.createEl("div");G.style.cssText=`display:flex; align-items:center; gap:2px;
          ${t?"justify-content:center;":"flex-shrink:0;"}`,G.createEl("span",{text:w}).style.cssText=`font-size:${t?13:11}px;${t?" flex-shrink:0;":""}`;let S=G.createEl("input");S.type="number",S.step=Y,S.placeholder=C,S.value=i&&i[k]!=null?String(i[k]):"",S.style.cssText=`${t?"flex:1; min-width:0; max-width:72px;":"width:44px;"} background:transparent;
          border:none; border-bottom:1px solid ${t?o.border:"transparent"};
          outline:none; text-align:center; font-family:monospace;
          font-size:${t?16:12}px; color:var(--text-normal);`,S.onfocus=()=>S.style.borderBottomColor=z,S.onblur=()=>S.style.borderBottomColor=t?o.border:"transparent",S.onchange=()=>{let le=parseFloat(S.value),ce=_(c,s);isNaN(le)?delete ce[k]:ce[k]=le,B(c).then(()=>ae(c))},G.createEl("span",{text:b}).style.cssText=`font-size:${t?11:10}px; color:var(--text-faint);${t?" flex-shrink:0;":""}`};F("\u2696\uFE0F","\u65A4","weight","\u4F53\u91CD","0.1"),F("\u{1F634}","h","sleep","\u7761\u7720","0.5"),F("\u{1F4BC}","h","work","\u5DE5\u4F5C","0.5"),F("\u{1F3CB}\uFE0F","h","gym","\u5065\u8EAB","0.5"),t||M(m);for(let w of v)Te(f,c,s,w);if(i!=null&&i.note){let w=f.createEl("div",{text:i.note});w.style.cssText=`font-size:12px; color:var(--text-muted);
          white-space:pre-wrap; padding:${t?"9px 11px":"7px 14px"};
          border-bottom:1px solid ${o.rowDiv};
          background:${o.mutedBg}; cursor:pointer;`,w.title="\u70B9\u51FB\u7F16\u8F91\u5907\u6CE8",w.onclick=()=>{var b;I(w,(b=i.note)!=null?b:"",!0,k=>{let C=_(c,s);k?C.note=k:delete C.note,B(c).then(()=>E())})}}let N=f.createEl("div");N.style.cssText=`display:flex; align-items:center; gap:8px;
        padding:${t?"9px 11px":"7px 14px"};`,N.createEl("span",{text:"\uFF0B"}).style.cssText=`font-size:${t?15:13}px; color:${z}; flex-shrink:0;`;let A=N.createEl("input");A.placeholder=t?"09:00 11:00 \u5199\u8BBA\u6587 / \u968F\u624B\u5199\u4E00\u53E5":"09:00 11:00 \u5199\u8BBA\u6587 \u2014\u2014 \u6216\u968F\u624B\u5199\u4E00\u53E5\u4E5F\u884C",A.style.cssText=`flex:1; min-width:0; background:transparent;
        border:none; outline:none; color:var(--text-muted);
        font-size:${t?16:13}px; font-family:var(--font-interface);`,A.addEventListener("keydown",w=>{if(w.key!=="Enter"||!A.value.trim())return;let b=fe(A.value),k=_(c,s);k.segments||(k.segments=[]),k.segments.push({id:Le(),s:b.s,e:b.e,t:b.t}),P=s,B(c).then(()=>E())}),s===P&&(P=null,window.setTimeout(()=>A.focus(),30))}function Te(c,p,s,i){let g=Oe(i),h=c.createEl("div");if(h.style.cssText=`display:flex; gap:9px;
        padding:${t?"9px 11px":"6px 14px"};
        border-bottom:1px solid ${o.rowDiv};
        align-items:${g?"center":"flex-start"};`,h.createEl("span",{text:"\u2022"}).style.cssText="font-size:13px; color:var(--text-faint); flex-shrink:0; line-height:1.5;",g){let m=h.createEl("span",{text:`${i.s}~${i.e}`});m.style.cssText=`font-size:${t?13:12}px; font-family:monospace;
          color:var(--text-faint); flex-shrink:0; cursor:pointer; line-height:1.5;`,m.title="\u70B9\u51FB\u4FEE\u6539\u65F6\u95F4",m.onclick=()=>{I(m,`${i.s} ${i.e}`,!1,a=>{let u=we(a.replace(/：/g,":"));u.length>=2&&(i.s=u[0],i.e=u[1]),B(p).then(()=>E())})}}let v=h.createEl("span",{text:i.t});v.style.cssText=`flex:1; min-width:0; line-height:1.5;
        font-size:${t?14:13}px; color:var(--text-normal); cursor:pointer;
        ${g?"overflow:hidden; text-overflow:ellipsis; white-space:nowrap;":"white-space:pre-wrap; word-break:break-word;"}`,v.title="\u70B9\u51FB\u4FEE\u6539",v.onclick=()=>{I(v,i.t,!g,m=>{if(g)i.t=m||"\u672A\u547D\u540D";else if(m.trim()){let a=fe(m);i.s=a.s,i.e=a.e,i.t=a.t}else{let a=p[s];a!=null&&a.segments&&(a.segments=a.segments.filter(u=>u.id!==i.id))}B(p).then(()=>E())})},g&&(h.createEl("span",{text:je(Re(i))}).style.cssText=`font-size:11px; font-family:monospace; color:var(--text-faint);
           flex-shrink:0; min-width:42px; text-align:right; line-height:1.5;`);let f=h.createEl("span",{text:"\xD7"});f.style.cssText=`color:var(--text-faint); cursor:pointer; flex-shrink:0;
        user-select:none; line-height:1.5; font-size:${t?18:15}px;
        ${t?"opacity:0.55; padding:0 5px;":"opacity:0; transition:opacity .12s;"}`,f.onclick=()=>{let m=p[s];m!=null&&m.segments&&(m.segments=m.segments.filter(a=>a.id!==i.id)),B(p).then(()=>E())},h.onmouseenter=()=>{h.style.background=o.rowHov,t||(f.style.opacity="1")},h.onmouseleave=()=>{h.style.background="transparent",t||(f.style.opacity="0")}}function De(c){let p=d.getFullYear(),s=d.getMonth()+1,i=me(p,s),g={};for(let a=1;a<=i;a++){let u=q(Q(new Date(p,s-1,a)));g[u]||(g[u]=[]),g[u].push(a)}let h=Object.keys(g).sort();e.createEl("div",{text:"\u6BCF\u5468\u660E\u7EC6"}).style.cssText="font-size:11px; color:var(--text-faint); margin:4px 0 8px;";let v=e.createEl("div");v.style.cssText=`background:${o.cardBg}; border:1px solid ${o.border};
        border-radius:10px; overflow:hidden;`;let f={};for(let a of h){let u=0;for(let y of g[a]){let M=c[X(p,s,y)];M&&M.work!=null&&(u+=M.work)}f[a]=u}let m=Math.max(...h.map(a=>f[a]),1);h.forEach((a,u)=>{let y=new Date(a),M=R(y,6),J=g[a].map(C=>X(p,s,C)),F=ye(c,J),N=f[a],A=u===h.length-1,T=v.createEl("div");T.style.cssText=`display:flex; align-items:center; gap:10px;
          padding:${t?"13px 11px":"10px 14px"}; cursor:pointer;
          ${A?"":`border-bottom:1px solid ${o.rowDiv};`}`,T.title="\u70B9\u51FB\u67E5\u770B\u8BE5\u5468",T.onmouseenter=()=>T.style.background=o.rowHov,T.onmouseleave=()=>T.style.background="transparent",T.onclick=()=>{l="week",d=y,E()};let w=`${y.getMonth()+1}/${y.getDate()} ~ ${M.getMonth()+1}/${M.getDate()}`;T.createEl("span",{text:w}).style.cssText="font-size:11px; color:var(--text-faint); min-width:104px; flex-shrink:0;";let b=T.createEl("div");b.style.cssText=`flex:1; height:6px; background:${o.barTrack};
          border-radius:3px; overflow:hidden;`,b.createEl("div").style.cssText=`height:100%; width:${(N/m*100).toFixed(1)}%;
           background:#ebcb8b; border-radius:3px;`;let k=F.workAvg!=null?` \u65E5\u5747${O(F.workAvg)}h`:"";T.createEl("span",{text:`${O(N)}h${k}`}).style.cssText=`font-size:11px; font-family:monospace; flex-shrink:0;
           color:${N>0?"#ebcb8b":"var(--text-faint)"};
           min-width:96px; text-align:right;`})}return E()}};var _e="homepage",te=class extends ne.Plugin{constructor(){super(...arguments);this.registry=new W;this.liveChildren=new Set}async onload(){await this.loadSettings(),this.store=new V(this.app),this.registry.register(ke),this.registerMarkdownCodeBlockProcessor(_e,(r,o,t)=>this.handleBlock(r,o,t)),this.addSettingTab(new Z(this.app,this)),this.registerEvent(this.app.workspace.on("css-change",()=>{this.liveChildren.forEach(r=>r.rerender())})),console.log("[Homepage] \u5DF2\u52A0\u8F7D\uFF0C\u6A21\u5757\uFF1A"+this.registry.list().map(r=>r.id).join(", "))}async onunload(){var r;await((r=this.store)==null?void 0:r.flush())}handleBlock(r,o,t){let{id:x,config:l,body:d}=Ie(r),P=x?this.registry.get(x):void 0;if(!P){ie(o,x?`\u672A\u77E5\u6A21\u5757\u300C${x}\u300D\u3002\u5DF2\u6CE8\u518C\uFF1A${this.registry.list().map($=>$.id).join(", ")}`:"\u4EE3\u7801\u5757\u7B2C\u4E00\u884C\u9700\u8981\u5199\u6A21\u5757 id\uFF0C\u4F8B\u5982\uFF1Adiary");return}let D=new se(this,o,t,P,d,l);t.addChild(D),this.liveChildren.add(D),D.register(()=>this.liveChildren.delete(D))}async loadSettings(){this.settings=Object.assign({},U,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}},se=class extends ne.MarkdownRenderChild{constructor(r,o,t,x,l,d){super(o);this.plugin=r;this.mdCtx=t;this.mod=x;this.body=l;this.config=d;this.cleanups=[]}onload(){this.rerender()}onunload(){this.runCleanups()}rerender(){this.runCleanups(),this.containerEl.empty();let r={app:this.plugin.app,plugin:this.plugin,el:this.containerEl,source:this.body,config:this.config,store:this.plugin.store,theme:de(),mdCtx:this.mdCtx,registerCleanup:o=>this.cleanups.push(o)};try{let o=this.mod.render(r);o instanceof Promise&&o.catch(t=>ie(this.containerEl,String(t)))}catch(o){ie(this.containerEl,String(o))}}runCleanups(){for(let r of this.cleanups)try{r()}catch(o){}this.cleanups=[]}};function Ie(n){let e=n.split(`
`),r=0;for(;r<e.length&&e[r].trim()==="";)r++;let o="";r<e.length&&(o=e[r].trim(),r++);let t={};for(;r<e.length;){let l=e[r];if(l.trim()===""){r++;continue}let d=l.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);if(!d)break;t[d[1]]=d[2].trim(),r++}let x=e.slice(r).join(`
`);return{id:o,config:t,body:x}}function ie(n,e){n.empty();let r=n.createEl("div",{text:"\u26A0 Homepage\uFF1A"+e});r.style.cssText="color:#bf616a; font-size:12px; padding:10px 14px; border-radius:8px;border:1px solid rgba(191,97,106,0.4); background:rgba(191,97,106,0.08);font-family:var(--font-interface);"}
