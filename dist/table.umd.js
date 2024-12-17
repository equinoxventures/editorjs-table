(function(){var r;"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.nonce=(r=document.head.querySelector("meta[property=csp-nonce]"))==null?void 0:r.content,o.appendChild(document.createTextNode('.tc-wrap{--color-background:#f9f9fb;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;position:relative;height:100%;width:100%;margin-top:var(--toolbox-icon-size);box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size)}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left-color:var(--color-border);border-left-style:solid;border-left-width:1px;grid-template-columns:100% var(--cell-size)}}@media print{.tc-wrap .tc-row:after{display:none}}.tc-table{position:relative;width:100%;height:100%;display:grid;font-size:14px;border-top:1px solid var(--color-border);line-height:1.4}.tc-table:after{width:calc(var(--cell-size));height:100%;left:calc(var(--cell-size)*-1);top:0}.tc-table:after,.tc-table:before{position:absolute;content:""}.tc-table:before{width:100%;height:var(--toolbox-aiming-field-size);top:calc(var(--toolbox-aiming-field-size)*-1);left:0}.tc-table--heading .tc-row:first-child{font-weight:600;border-bottom:2px solid var(--color-border)}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{content:attr(heading);color:var(--color-text-secondary)}.tc-table--heading .tc-row:first-child:after{bottom:-2px;border-bottom:2px solid var(--color-border)}.tc-add-column,.tc-add-row{display:flex;color:var(--color-text-secondary)}@media print{.tc-add{display:none}}.tc-add-column{padding:4px 0;justify-content:center;border-top:1px solid var(--color-border)}.tc-add-column--disabled{visibility:hidden}@media print{.tc-add-column{display:none}}.tc-add-row{height:var(--cell-size);align-items:center;padding-left:4px;position:relative}.tc-add-row--disabled{display:none}.tc-add-row:before{content:"";position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size);height:100%}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{transition:0s;cursor:pointer;will-change:background-color}.tc-add-column:hover,.tc-add-row:hover{transition:background-color .1s ease;background-color:var(--color-background)}.tc-add-row{margin-top:1px}.tc-add-row:hover:before{transition:.1s;background-color:var(--color-background)}.tc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(10px,1fr));position:relative;border-bottom:1px solid var(--color-border)}.tc-row:after{content:"";pointer-events:none;position:absolute;width:var(--cell-size);height:100%;bottom:-1px;right:calc(var(--cell-size)*-1);border-bottom:1px solid var(--color-border)}.tc-row--selected{background:var(--color-background)}.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);padding:6px 12px;overflow:hidden;outline:none;line-break:normal}.tc-cell--selected{background:var(--color-background)}.tc-wrap--readonly .tc-row:after{display:none}.tc-toolbox{--toolbox-padding:6px;--popover-margin:30px;--toggler-click-zone-size:30px;--toggler-dots-color:#7b7e89;--toggler-dots-color-hovered:#1d202b;position:absolute;cursor:pointer;z-index:1;opacity:0;transition:opacity .1s;will-change:left,opacity}.tc-toolbox--column{top:calc(var(--toggler-click-zone-size)*-1);transform:translate(calc(var(--toggler-click-zone-size)*-1/2));will-change:left,opacity}.tc-toolbox--row{left:calc(var(--popover-margin)*-1);transform:translateY(calc(var(--toggler-click-zone-size)*-1/2));margin-top:-1px;will-change:top,opacity}.tc-toolbox--showed{opacity:1}.tc-toolbox .tc-popover{position:absolute;top:0;left:var(--popover-margin)}.tc-toolbox__toggler{display:flex;align-items:center;justify-content:center;width:var(--toggler-click-zone-size);height:var(--toggler-click-zone-size);color:var(--toggler-dots-color);opacity:0;transition:opacity .15s ease;will-change:opacity}.tc-toolbox__toggler:hover{color:var(--toggler-dots-color-hovered)}.tc-toolbox__toggler svg{fill:currentColor}.tc-wrap:hover .tc-toolbox__toggler{opacity:1}.tc-settings .cdx-settings-button{width:50%;margin:0}.tc-popover{--color-border:#eaeaea;--color-background:#fff;--color-background-hover:rgba(232,232,235,.49);--color-background-confirm:#e24a4a;--color-background-confirm-hover:#d54040;--color-text-confirm:#fff;background:var(--color-background);border:1px solid var(--color-border);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;padding:6px;display:none;will-change:opacity,transform}.tc-popover--opened{display:block;animation:menuShowing .1s cubic-bezier(.215,.61,.355,1) forwards}.tc-popover__item{display:flex;align-items:center;padding:2px 14px 2px 2px;border-radius:5px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-popover__item:hover{background:var(--color-background-hover)}.tc-popover__item:not(:last-of-type){margin-bottom:2px}.tc-popover__item-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;background:var(--color-background);border-radius:5px;border:1px solid var(--color-border);margin-right:8px}.tc-popover__item-label{line-height:22px;font-size:14px;font-weight:500}.tc-popover__item--confirm{background:var(--color-background-confirm);color:var(--color-text-confirm)}.tc-popover__item--confirm:hover{background-color:var(--color-background-confirm-hover)}.tc-popover__item--confirm .tc-popover__item-icon{background:var(--color-background-confirm);border-color:#0000001a}.tc-popover__item--confirm .tc-popover__item-icon svg{transition:transform .2s ease-in;transform:rotate(90deg) scale(1.2)}.tc-popover__item--hidden{display:none}@keyframes menuShowing{0%{opacity:0;transform:translateY(-8px) scale(.9)}70%{opacity:1;transform:translateY(2px)}to{transform:translateY(0)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
(function(d,p){typeof exports=="object"&&typeof module<"u"?module.exports=p():typeof define=="function"&&define.amd?define(p):(d=typeof globalThis<"u"?globalThis:d||self,d.Table=p())})(this,function(){"use strict";function d(c,t,e={}){const o=document.createElement(c);Array.isArray(t)?o.classList.add(...t):t&&o.classList.add(t);for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i]);return o}function p(c){const t=c.getBoundingClientRect();return{y1:Math.floor(t.top+window.pageYOffset),x1:Math.floor(t.left+window.pageXOffset),x2:Math.floor(t.right+window.pageXOffset),y2:Math.floor(t.bottom+window.pageYOffset)}}function f(c,t){const e=p(c),o=p(t);return{fromTopBorder:o.y1-e.y1,fromLeftBorder:o.x1-e.x1,fromRightBorder:e.x2-o.x2,fromBottomBorder:e.y2-o.y2}}function R(c,t){const e=c.getBoundingClientRect(),{width:o,height:i,x:r,y:s}=e,{clientX:h,clientY:n}=t;return{width:o,height:i,x:h-r,y:n-s}}function g(c,t){return t.parentNode.insertBefore(c,t)}function m(c,t=!0){const e=document.createRange(),o=window.getSelection();e.selectNodeContents(c),e.collapse(t),o.removeAllRanges(),o.addRange(e)}class a{constructor({items:t}){this.items=t,this.wrapper=void 0,this.itemEls=[]}static get CSS(){return{popover:"tc-popover",popoverOpened:"tc-popover--opened",item:"tc-popover__item",itemHidden:"tc-popover__item--hidden",itemConfirmState:"tc-popover__item--confirm",itemIcon:"tc-popover__item-icon",itemLabel:"tc-popover__item-label"}}render(){return this.wrapper=d("div",a.CSS.popover),this.items.forEach((t,e)=>{const o=d("div",a.CSS.item),i=d("div",a.CSS.itemIcon,{innerHTML:t.icon}),r=d("div",a.CSS.itemLabel,{textContent:t.label});o.dataset.index=e,o.appendChild(i),o.appendChild(r),this.wrapper.appendChild(o),this.itemEls.push(o)}),this.wrapper.addEventListener("click",t=>{this.popoverClicked(t)}),this.wrapper}popoverClicked(t){const e=t.target.closest(`.${a.CSS.item}`);if(!e)return;const o=e.dataset.index,i=this.items[o];if(i.confirmationRequired&&!this.hasConfirmationState(e)){this.setConfirmationState(e);return}i.onClick()}setConfirmationState(t){t.classList.add(a.CSS.itemConfirmState)}clearConfirmationState(t){t.classList.remove(a.CSS.itemConfirmState)}hasConfirmationState(t){return t.classList.contains(a.CSS.itemConfirmState)}get opened(){return this.wrapper.classList.contains(a.CSS.popoverOpened)}open(){this.items.forEach((t,e)=>{typeof t.hideIf=="function"&&this.itemEls[e].classList.toggle(a.CSS.itemHidden,t.hideIf())}),this.wrapper.classList.add(a.CSS.popoverOpened)}close(){this.wrapper.classList.remove(a.CSS.popoverOpened),this.itemEls.forEach(t=>{this.clearConfirmationState(t)})}}const S='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',b='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L10 12M10 12L7 15M10 12H4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L14 12M14 12L17 15M14 12H20"/></svg>',k='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>',y='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>',M='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>',T='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>',L='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>',O='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>',v='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>',x='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>',H='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',B='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',A='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';class w{constructor({api:t,items:e,onOpen:o,onClose:i,cssModifier:r=""}){this.api=t,this.items=e,this.onOpen=o,this.onClose=i,this.cssModifier=r,this.popover=null,this.wrapper=this.createToolbox()}static get CSS(){return{toolbox:"tc-toolbox",toolboxShowed:"tc-toolbox--showed",toggler:"tc-toolbox__toggler"}}get element(){return this.wrapper}createToolbox(){const t=d("div",[w.CSS.toolbox,this.cssModifier?`${w.CSS.toolbox}--${this.cssModifier}`:""]);t.dataset.mutationFree="true";const e=this.createPopover(),o=this.createToggler();return t.appendChild(o),t.appendChild(e),t}createToggler(){const t=d("div",w.CSS.toggler,{innerHTML:O});return t.addEventListener("click",()=>{this.togglerClicked()}),t}createPopover(){return this.popover=new a({items:this.items}),this.popover.render()}togglerClicked(){this.popover.opened?(this.popover.close(),this.onClose()):(this.popover.open(),this.onOpen())}show(t){const e=t();Object.entries(e).forEach(([o,i])=>{this.wrapper.style[o]=i}),this.wrapper.classList.add(w.CSS.toolboxShowed)}hide(){this.popover.close(),this.wrapper.classList.remove(w.CSS.toolboxShowed)}}function E(c,t){let e=0;return function(...o){const i=new Date().getTime();if(!(i-e<c))return e=i,t(...o)}}const l={wrapper:"tc-wrap",wrapperReadOnly:"tc-wrap--readonly",table:"tc-table",row:"tc-row",withHeadings:"tc-table--heading",rowSelected:"tc-row--selected",cell:"tc-cell",cellSelected:"tc-cell--selected",addRow:"tc-add-row",addRowDisabled:"tc-add-row--disabled",addColumn:"tc-add-column",addColumnDisabled:"tc-add-column--disabled"};class ${constructor(t,e,o,i){this.readOnly=t,this.api=e,this.data=o,this.config=i,this.wrapper=null,this.table=null,this.toolboxColumn=this.createColumnToolbox(),this.toolboxRow=this.createRowToolbox(),this.toolboxCell=this.createCellToolbox(),this.cellColorPicker=null,this.createTableWrapper(),this.hoveredRow=0,this.hoveredColumn=0,this.selectedRow=0,this.selectedColumn=0,this.tunes={withHeadings:!1},this.resize(),this.fill(),this.focusedCell={row:0,column:0},this.documentClicked=r=>{const s=r.target.closest(`.${l.table}`)!==null,h=r.target.closest(`.${l.wrapper}`)===null;(s||h)&&this.hideToolboxes();const u=r.target.closest(`.${l.addRow}`),C=r.target.closest(`.${l.addColumn}`);u&&u.parentNode===this.wrapper?(this.addRow(void 0,!0),this.hideToolboxes()):C&&C.parentNode===this.wrapper&&(this.addColumn(void 0,!0),this.hideToolboxes())},this.readOnly||this.bindEvents()}getWrapper(){return this.wrapper}bindEvents(){document.addEventListener("click",this.documentClicked),this.table.addEventListener("mousemove",E(150,t=>this.onMouseMoveInTable(t)),{passive:!0}),this.table.onkeypress=t=>this.onKeyPressListener(t),this.table.addEventListener("keydown",t=>this.onKeyDownListener(t)),this.table.addEventListener("focusin",t=>this.focusInTableListener(t))}createColumnToolbox(){return new w({api:this.api,cssModifier:"column",items:[{label:this.api.i18n.t("Add column to left"),icon:M,hideIf:()=>this.numberOfColumns===this.config.maxcols,onClick:()=>{this.addColumn(this.selectedColumn,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Add column to right"),icon:T,hideIf:()=>this.numberOfColumns===this.config.maxcols,onClick:()=>{this.addColumn(this.selectedColumn+1,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Delete column"),icon:k,hideIf:()=>this.numberOfColumns===1,confirmationRequired:!0,onClick:()=>{this.deleteColumn(this.selectedColumn),this.hideToolboxes()}},{label:this.api.i18n.t("Increase Width"),icon:x,onClick:()=>{this.increaseWidth(this.selectedColumn),this.hideToolboxes()}},{label:this.api.i18n.t("Decrease Width"),icon:b,onClick:()=>{this.decreaseWidth(this.selectedColumn),this.hideToolboxes()}}],onOpen:()=>{this.selectColumn(this.hoveredColumn),this.hideRowToolbox(),this.hideCellToolbox()},onClose:()=>{this.unselectColumn()}})}increaseWidth(t){for(let e=1;e<=this.numberOfRows;e++)this.setCellWidth({row:e,column:t,adjustedWidth:.1,defaultWidth:1});this.adjustColumnWidths()}decreaseWidth(t){for(let e=1;e<=this.numberOfRows;e++)this.setCellWidth({row:e,column:t,adjustedWidth:-.1,defaultWidth:1});this.adjustColumnWidths()}setCellWidth({row:t,column:e,adjustedWidth:o=0,defaultWidth:i=1}){const r=this.getCell(t,e),s=parseFloat(r.dataset.width)||i;r.dataset.width=Math.max(s+o,.1)}adjustColumnWidths(){for(let t=1;t<=this.numberOfRows;t++){const e=this.getRow(t),o=[];for(let i=1;i<=this.numberOfColumns;i++){const s=this.getCell(t,i).dataset.width||1;o.push(`${s}fr`)}e.style.gridTemplateColumns=o.join(" ")}}createCellToolbox(){return new w({api:this.api,cssModifier:"cell",items:[{label:this.api.i18n.t("Change background color"),icon:S,onClick:()=>{this.hideToolboxes(),this.cellColorPicker=d("div","tc-color-picker-container"),this.cellColorPicker.style.position="absolute";const t=d("input","tc-color-picker");t.type="color",t.setAttribute("list","tc-color-presets");const e=d("datalist");e.id="tc-color-presets",(this.config.presetColors||[]).forEach(o=>{const i=d("option");i.value=o,e.appendChild(i)}),t.addEventListener("change",o=>{this.getCell(this.focusedCell.row,this.focusedCell.column)&&this.setCellBackgroundColor(this.focusedCell.row,this.focusedCell.column,o.target.value),this.hideToolboxes()}),this.cellColorPicker.appendChild(t),this.cellColorPicker.appendChild(e),this.toolboxCell.element.appendChild(this.cellColorPicker)}}],onOpen:()=>{this.hideColumnToolbox(),this.hideRowToolbox()},onClose:()=>{this.unselectRow(),this.unselectColumn()}})}createRowToolbox(){return new w({api:this.api,cssModifier:"row",items:[{label:this.api.i18n.t("Add row above"),icon:L,hideIf:()=>this.numberOfRows===this.config.maxrows,onClick:()=>{this.addRow(this.selectedRow,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Add row below"),icon:y,hideIf:()=>this.numberOfRows===this.config.maxrows,onClick:()=>{this.addRow(this.selectedRow+1,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Delete row"),icon:k,hideIf:()=>this.numberOfRows===1,confirmationRequired:!0,onClick:()=>{this.deleteRow(this.selectedRow),this.hideToolboxes()}}],onOpen:()=>{this.selectRow(this.hoveredRow),this.hideColumnToolbox()},onClose:()=>{this.unselectRow()}})}moveCursorToNextRow(){this.focusedCell.row!==this.numberOfRows?(this.focusedCell.row+=1,this.focusCell(this.focusedCell)):(this.addRow(),this.focusedCell.row+=1,this.focusCell(this.focusedCell),this.updateToolboxesPosition(0,0))}getCell(t,e){return this.table.querySelectorAll(`.${l.row}:nth-child(${t}) .${l.cell}`)[e-1]}getRow(t){return this.table.querySelector(`.${l.row}:nth-child(${t})`)}getRowByCell(t){return t.parentElement}getRowFirstCell(t){return t.querySelector(`.${l.cell}:first-child`)}setCellContent(t,e,o){const i=this.getCell(t,e);i.innerHTML=o}setCellBackgroundColor(t,e,o){if(o==null)return;const i=this.getCell(t,e);i.dataset.backgroundColor=o,i.style.backgroundColor=o}addColumn(t=-1,e=!1){var r;let o=this.numberOfColumns;if(this.config&&this.config.maxcols&&this.numberOfColumns>=this.config.maxcols)return;for(let s=1;s<=this.numberOfRows;s++){let h;const n=this.createCell();if(t>0&&t<=o?(h=this.getCell(s,t),g(n,h)):h=this.getRow(s).appendChild(n),s===1){const u=this.getCell(s,t>0?t:o+1);u&&e&&m(u)}}const i=this.wrapper.querySelector(`.${l.addColumn}`);(r=this.config)!=null&&r.maxcols&&this.numberOfColumns>this.config.maxcols-1&&i&&i.classList.add(l.addColumnDisabled),this.addHeadingAttrToFirstRow(),this.adjustColumnWidths()}addRow(t=-1,e=!1){let o,i=d("div",l.row);const r=this.getRow(1);this.tunes.withHeadings&&this.removeHeadingAttrFromFirstRow();let s=this.numberOfColumns;if(this.config&&this.config.maxrows&&this.numberOfRows>=this.config.maxrows&&n)return;if(t>0&&t<=this.numberOfRows){let u=this.getRow(t);o=g(i,u)}else o=this.table.appendChild(i);this.fillRow(o,s),this.copyColumnWidthsFromBlueprint(r,o),this.tunes.withHeadings&&this.addHeadingAttrToFirstRow();const h=this.getRowFirstCell(o);h&&e&&m(h);const n=this.wrapper.querySelector(`.${l.addRow}`);return this.config&&this.config.maxrows&&this.numberOfRows>=this.config.maxrows&&n&&n.classList.add(l.addRowDisabled),this.adjustColumnWidths(),o}copyColumnWidthsFromBlueprint(t,e){if(!t||!e)return;const o=t.querySelectorAll(`.${l.cell}`),i=e.querySelectorAll(`.${l.cell}`);o.forEach((r,s)=>{r.dataset.width&&(i[s].dataset.width=r.dataset.width)})}deleteColumn(t){for(let o=1;o<=this.numberOfRows;o++){const i=this.getCell(o,t);if(!i)return;i.remove()}const e=this.wrapper.querySelector(`.${l.addColumn}`);e&&e.classList.remove(l.addColumnDisabled),this.adjustColumnWidths()}deleteRow(t){this.getRow(t).remove();const e=this.wrapper.querySelector(`.${l.addRow}`);e&&e.classList.remove(l.addRowDisabled),this.addHeadingAttrToFirstRow()}createTableWrapper(){if(this.wrapper=d("div",l.wrapper),this.table=d("div",l.table),this.readOnly&&this.wrapper.classList.add(l.wrapperReadOnly),this.wrapper.appendChild(this.toolboxRow.element),this.wrapper.appendChild(this.toolboxColumn.element),this.wrapper.appendChild(this.toolboxCell.element),this.wrapper.appendChild(this.table),!this.readOnly){const t=d("div",l.addColumn,{innerHTML:v}),e=d("div",l.addRow,{innerHTML:v});this.wrapper.appendChild(t),this.wrapper.appendChild(e)}}computeInitialSize(){const t=this.data&&this.data.content,e=Array.isArray(t),o=e?t.length:!1,i=e?t.length:void 0,r=o?t[0].length:void 0,s=Number.parseInt(this.config&&this.config.rows),h=Number.parseInt(this.config&&this.config.cols),n=!isNaN(s)&&s>0?s:void 0,u=!isNaN(h)&&h>0?h:void 0;return{rows:i||n||2,cols:r||u||2}}resize(){const{rows:t,cols:e}=this.computeInitialSize();for(let o=0;o<t;o++)this.addRow();for(let o=0;o<e;o++)this.addColumn()}fill(){const t=this.data;if(t&&t.content){for(let e=0;e<t.content.length;e++)for(let o=0;o<t.content[e].length;o++){const i=t.content[e][o];typeof i=="object"?(this.setCellContent(e+1,o+1,i.content),this.setCellBackgroundColor(e+1,o+1,i.backgroundColor),this.setCellWidth({row:e+1,column:o+1,defaultWidth:i.width})):this.setCellContent(e+1,o+1,t.content[e][o])}this.adjustColumnWidths()}}fillRow(t,e){for(let o=1;o<=e;o++){const i=this.createCell();t.appendChild(i)}}createCell(){return d("div",l.cell,{contentEditable:!this.readOnly})}get numberOfRows(){return this.table.childElementCount}get numberOfColumns(){return this.numberOfRows?this.table.querySelectorAll(`.${l.row}:first-child .${l.cell}`).length:0}get isColumnMenuShowing(){return this.selectedColumn!==0}get isRowMenuShowing(){return this.selectedRow!==0}get isCellMenuShowing(){return this.focusedCell.row>0&&this.focusedCell.column>0&&this.focusedCellElem}onMouseMoveInTable(t){const{row:e,column:o}=this.getHoveredCell(t);this.hoveredColumn=o,this.hoveredRow=e,this.updateToolboxesPosition()}onKeyPressListener(t){if(t.key==="Enter"){if(t.shiftKey)return!0;this.moveCursorToNextRow()}return t.key!=="Enter"}onKeyDownListener(t){t.key==="Tab"&&t.stopPropagation()}focusInTableListener(t){const e=t.target,o=this.getRowByCell(e);this.focusedCell={row:Array.from(this.table.querySelectorAll(`.${l.row}`)).indexOf(o)+1,column:Array.from(o.querySelectorAll(`.${l.cell}`)).indexOf(e)+1}}hideToolboxes(){this.hideRowToolbox(),this.hideColumnToolbox(),this.hideCellToolbox(),this.updateToolboxesPosition()}hideRowToolbox(){this.unselectRow(),this.toolboxRow.hide()}hideColumnToolbox(){this.unselectColumn(),this.toolboxColumn.hide()}hideCellToolbox(){this.toolboxCell.hide(),this.cellColorPicker&&(this.cellColorPicker.remove(),this.cellColorPicker=null)}focusCell(){this.focusedCellElem.focus()}get focusedCellElem(){const{row:t,column:e}=this.focusedCell;return this.getCell(t,e)}updateToolboxesPosition(t=this.hoveredRow,e=this.hoveredColumn){if(!this.isColumnMenuShowing&&e>0&&e<=this.numberOfColumns){const o=this.getCell(1,e),{fromLeftBorder:i}=f(this.table,o),{width:r}=o.getBoundingClientRect();this.toolboxColumn.show(()=>({left:`${i+r/2}px`}))}if(this.isRowMenuShowing||t>0&&t<=this.numberOfRows&&this.toolboxRow.show(()=>{const o=this.getRow(t),{fromTopBorder:i}=f(this.table,o),{height:r}=o.getBoundingClientRect();return{top:`${Math.ceil(i+r/2)}px`}}),this.isCellMenuShowing){const o=this.focusedCellElem,i=o.getBoundingClientRect(),r=this.toolboxCell.element.getBoundingClientRect(),{fromTopBorder:s,fromLeftBorder:h}=f(this.table,o);this.toolboxCell.show(()=>({top:`${s}px`,left:`${h+i.width-r.width}px`}))}}setHeadingsSetting(t){this.tunes.withHeadings=t,t?(this.table.classList.add(l.withHeadings),this.addHeadingAttrToFirstRow()):(this.table.classList.remove(l.withHeadings),this.removeHeadingAttrFromFirstRow())}addHeadingAttrToFirstRow(){for(let t=1;t<=this.numberOfColumns;t++){let e=this.getCell(1,t);e&&e.setAttribute("heading",this.api.i18n.t("Heading"))}}removeHeadingAttrFromFirstRow(){for(let t=1;t<=this.numberOfColumns;t++){let e=this.getCell(1,t);e&&e.removeAttribute("heading")}}selectRow(t){const e=this.getRow(t);e&&(this.selectedRow=t,e.classList.add(l.rowSelected))}unselectRow(){if(this.selectedRow<=0)return;const t=this.table.querySelector(`.${l.rowSelected}`);t&&t.classList.remove(l.rowSelected),this.selectedRow=0}selectColumn(t){for(let e=1;e<=this.numberOfRows;e++){const o=this.getCell(e,t);o&&o.classList.add(l.cellSelected)}this.selectedColumn=t}unselectColumn(){if(this.selectedColumn<=0)return;let t=this.table.querySelectorAll(`.${l.cellSelected}`);Array.from(t).forEach(e=>{e.classList.remove(l.cellSelected)}),this.selectedColumn=0}getHoveredCell(t){let e=this.hoveredRow,o=this.hoveredColumn;const{width:i,height:r,x:s,y:h}=R(this.table,t);return s>=0&&(o=this.binSearch(this.numberOfColumns,n=>this.getCell(1,n),({fromLeftBorder:n})=>s<n,({fromRightBorder:n})=>s>i-n)),h>=0&&(e=this.binSearch(this.numberOfRows,n=>this.getCell(n,1),({fromTopBorder:n})=>h<n,({fromBottomBorder:n})=>h>r-n)),{row:e||this.hoveredRow,column:o||this.hoveredColumn}}binSearch(t,e,o,i){let r=0,s=t+1,h=0,n;for(;r<s-1&&h<10;){n=Math.ceil((r+s)/2);const u=e(n),C=f(this.table,u);if(o(C))s=n;else if(i(C))r=n;else break;h++}return n}getData(){const t=[];for(let e=1;e<=this.numberOfRows;e++){const o=this.table.querySelector(`.${l.row}:nth-child(${e})`),i=Array.from(o.querySelectorAll(`.${l.cell}`));i.every(s=>!s.textContent.trim())||t.push(i.map(s=>{const h={content:s.innerHTML};return s.dataset.backgroundColor&&(h.backgroundColor=s.dataset.backgroundColor),s.dataset.width&&(h.width=s.dataset.width),h}))}return t}destroy(){document.removeEventListener("click",this.documentClicked)}}class j{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}constructor({data:t,config:e,api:o,readOnly:i,block:r}){this.api=o,this.readOnly=i,this.config=e,this.data={withHeadings:this.getConfig("withHeadings",!1,t),stretched:this.getConfig("stretched",!1,t),content:t&&t.content?t.content:[]},this.table=null,this.block=r}static get toolbox(){return{icon:A,title:"Table"}}render(){return this.table=new $(this.readOnly,this.api,this.data,this.config),this.container=d("div",this.api.styles.block),this.container.appendChild(this.table.getWrapper()),this.table.setHeadingsSetting(this.data.withHeadings),this.container}renderSettings(){return[{label:this.api.i18n.t("With headings"),icon:H,isActive:this.data.withHeadings,closeOnActivate:!0,toggle:!0,onActivate:()=>{this.data.withHeadings=!0,this.table.setHeadingsSetting(this.data.withHeadings)}},{label:this.api.i18n.t("Without headings"),icon:B,isActive:!this.data.withHeadings,closeOnActivate:!0,toggle:!0,onActivate:()=>{this.data.withHeadings=!1,this.table.setHeadingsSetting(this.data.withHeadings)}},{label:this.data.stretched?this.api.i18n.t("Collapse"):this.api.i18n.t("Stretch"),icon:this.data.stretched?b:x,closeOnActivate:!0,toggle:!0,onActivate:()=>{this.data.stretched=!this.data.stretched,this.block.stretched=this.data.stretched}}]}save(){const t=this.table.getData();return{withHeadings:this.data.withHeadings,stretched:this.data.stretched,content:t}}destroy(){this.table.destroy()}getConfig(t,e=void 0,o=void 0){const i=this.data||o;return i?i[t]?i[t]:e:this.config&&this.config[t]?this.config[t]:e}static get pasteConfig(){return{tags:["TABLE","TR","TH","TD"]}}onPaste(t){const e=t.detail.data,o=e.querySelector(":scope > thead, tr:first-of-type th"),r=Array.from(e.querySelectorAll("tr")).map(s=>Array.from(s.querySelectorAll("th, td")).map(n=>n.innerHTML));this.data={withHeadings:o!==null,content:r},this.table.wrapper&&this.table.wrapper.replaceWith(this.render())}}const W="";return j});
