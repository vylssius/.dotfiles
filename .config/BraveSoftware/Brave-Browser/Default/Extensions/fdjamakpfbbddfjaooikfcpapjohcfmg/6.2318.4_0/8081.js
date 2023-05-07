"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[8081],{812803:(e,t,a)=>{a.d(t,{N:()=>s});var n=a(696832),o=a(383849),l=a.n(o);const s=({disableHover:e=!1,...t})=>{const[a,o]=n.useState(!1),{children:[s,...i]=[]}=t;return n.createElement("div",{className:"buttonsContainer--TiPIoxROXR",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)},s,t.enabled&&n.createElement("span",{className:l()("buttons--p98QFrEo3f",{"visible--aWYlZRshE_":e||a})},i))}},481159:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(696832),o=a(554712),l=a(383849),s=a.n(l),i=a(526849),r=a(769183),p=a(317894),d=a.n(p),c=a(585921),u=a(932954),_=a(793429);const h=e=>{navigator.clipboard.writeText(e.replaceAll(" ",""))};class m extends n.Component{constructor(e){super(e),this.field=void 0,this.handleChange=e=>{this.setState({selectionRangeStart:e.target.selectionStart,selectionRangeEnd:e.target.selectionEnd}),this.props.onChange&&this.props.onChange(e)},this.state={fieldHtmlId:(0,r.Z)(),selectionRangeStart:null,selectionRangeEnd:null}}componentDidUpdate(){null!==this.state.selectionRangeStart&&null!==this.state.selectionRangeEnd&&this.field.setSelectionRange(this.state.selectionRangeStart,this.state.selectionRangeEnd)}shouldComponentUpdate(e,t){return!((0,i.equals)(this.props.value,e.value)&&(0,i.equals)(this.props.error,e.error)&&(0,i.equals)(this.props.mask,e.mask)&&(0,i.equals)(this.props.label,e.label)&&(0,i.equals)(this.state.selectionRangeStart,t.selectionRangeStart)&&(0,i.equals)(this.state.selectionRangeEnd,t.selectionRangeEnd))}getValue(){return this.field.value}focus(){this.field.focus()}getTextarea(){var e;return(0,c.tZ)(o.Z,{inputRef:e=>{this.field=e},id:this.state.fieldHtmlId,disabled:this.props.disabled,value:null!=(e=this.props.value)?e:"",name:this.props.name,"data-name":this.props.dataName,sx:{borderColor:this.props.error&&"ds.border.danger.standard.idle"},className:_.Z.textarea,placeholder:this.props.placeholder,onBlur:this.props.handleFieldBlur,onKeyDown:this.props.onFieldKeyDown,onChange:this.handleChange})}getInput(){var e;const t={onBlur:this.props.handleFieldBlur,onChange:this.handleChange,disabled:this.props.disabled,readOnly:this.props.readOnly,value:null!=(e=this.props.value)?e:""},a={ref:e=>{this.field=e},id:this.state.fieldHtmlId,autoComplete:"off",className:s()(_.Z.input,{[_.Z.error]:Boolean(this.props.error)}),sx:{...this.props.error&&{"::placeholder":{color:"ds.text.danger.quiet"},minWidth:"fit-content"},border:"1px solid",borderColor:this.props.error?"ds.border.danger.standard.idle":"transparent"},name:this.props.name,"data-name":this.props.dataName,type:this.props.type||"text",placeholder:this.props.placeholder,onKeyDown:this.props.onFieldKeyDown};return this.props.mask?(0,c.tZ)(d(),{...t,...this.props.maskProps,mask:this.props.mask,onCopy:()=>h(t.value),onCut:()=>h(t.value)},(e=>(0,c.tZ)("input",{...a,...e}))):(0,c.tZ)("div",{className:_.Z.inputRow},(0,c.tZ)("input",{...a,...t}),(0,c.tZ)("div",{hidden:!this.props.error||"string"!=typeof this.props.error,sx:{color:"ds.text.danger.quiet"},className:_.Z.errorMessage},this.props.error))}render(){const e="password"!==this.props.type?this.props.value||this.props.placeholder:"";return(0,c.tZ)("div",{className:s()(_.Z.container,this.props.multiLine?_.Z.containerMultiLine:null)},this.props.label&&(0,c.tZ)("label",{className:_.Z.label,htmlFor:this.state.fieldHtmlId},(0,c.tZ)("span",{className:_.Z.text,title:this.props.label},this.props.label)),(0,c.tZ)(u.Z,{tooltipText:e,className:s()(_.Z.value,{[_.Z.placeholder]:!this.props.value,[_.Z.multiline]:this.props.multiLine})},this.props.multiLine?this.getTextarea():this.getInput()))}}m.defaultProps={maskProps:{maskChar:""}}},970818:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(696832),o=a(526849),l=a(383849),s=a.n(l),i=a(769183);var r=a(161964);function p(e,t){const a=e.find((e=>String(e.value)===String(t)));return null!=a?a:null}class d extends n.Component{constructor(e){super(e),this.select=n.createRef(),this.handleChange=e=>{const t=e.target;if(!t)return;const a=t.value,n=p(this.props.options,a);this.setState({optionSelected:n}),this.props.onChange&&this.props.onChange(e)},this.handleKeyDown=e=>{"Enter"===e.key&&e.preventDefault(),this.props.onFieldKeyDown?.(e)},this.handleFocus=()=>{this.setState({isSelectFocused:!0})},this.handleBlur=()=>{this.setState({isSelectFocused:!1})};let t=null;this.props.options.length&&(t=p(this.props.options,null===this.props.defaultOption?(0,o.head)(this.props.options).value:this.props.defaultOption.value)),this.state={fieldHtmlId:(0,i.Z)(),optionSelected:t,isSelectFocused:!1}}getValue(){if(!this.select.current)throw new Error("select ref not initialized");return this.select.current.value}render(){var e;const t=this.props.marginSide||"none",a=s()("selectContainer--mo5uz0qo56",r.Z[t],{"transparent--pz8wb74Jmh":this.props.isTransparent,"disabled--I9BAM7Vdre":this.props.disabled,"focused--ietgHqFLIm":this.state.isSelectFocused}),l=s()("selector--fgNHKzkAC3",this.props.classNames);let i;this.state.optionSelected?i=this.state.optionSelected.value:this.props.options.length&&(i=null===this.props.defaultOption?(0,o.head)(this.props.options).value:this.props.defaultOption.value);const p=this.state.optionSelected?this.state.optionSelected.selectedLabel?this.state.optionSelected.selectedLabel:this.state.optionSelected.label:this.props.placeholder;return n.createElement("div",{className:"container--KChkEdb4YV"},this.props.label&&n.createElement("label",{className:r.Z.label,htmlFor:this.state.fieldHtmlId,title:this.props.label},this.props.label),n.createElement("div",{className:a},n.createElement("div",{className:l},this.state.optionSelected&&this.state.optionSelected.icon&&n.createElement("span",{className:"icon--p3a7nsSbg9"},this.state.optionSelected.icon),n.createElement("span",{className:"text--SjkXyB7Kyp"},p)),n.createElement("select",{key:this.state.fieldHtmlId,className:r.Z.select,ref:this.select,id:this.state.fieldHtmlId,value:i,name:this.props.name,disabled:this.props.disabled,"data-name":this.props.dataName,onKeyDown:this.handleKeyDown,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,"aria-label":null!=(e=this.props.ariaLabel)?e:this.props.label},this.props.options.map((e=>n.createElement("option",{key:e.value,disabled:e.disabled,value:String(e.value)},e.label))))))}}},633499:(e,t,a)=>{a.d(t,{o:()=>P});var n=a(696832),o=a(453576),l=a(511494),s=a(585921),i=a(446389),r=a(481159),p=a(970818),d=a(812803),c=a(987364),u=a(673093),_=a(191492),h=a(479189);const m="webapp_payment_edition_field_bank_account_BIC",b="webapp_payment_edition_field_bank_account_no_BIC_placeholder",C="webapp_payment_edition_field_bank_account_account_number",y="webapp_payment_edition_field_bank_account_no_account_number_placeholder",I="webapp_payment_alert_bank_account_BIC_copied",f="webapp_payment_alert_bank_account_account_number_copied";var v=a(148038),g=a(616274);const k={},B=e=>e!==k,E=[],w=e=>{const t=(()=>{const e=n.useRef(k),t=(0,v.qr)({queryConfig:{query:g.C.getAllBanks}},[]);return B(e.current)||t.status!==v.rq.Success||(e.current=t.data),e.current})();return n.useMemo((()=>{var a;if(!B(t))return E;const n=(null!=(a=t[e])?a:[]).slice();return n.sort(((e,t)=>e.localizedString.localeCompare(t.localizedString))),n}),[t,e])},Z="webapp_payment_edition_field_bank_account_action_hide",N="webapp_payment_edition_field_bank_account_action_show",S="webapp_payment_edition_field_bank_account_country",A="webapp_payment_edition_field_bank_account_bank_name",R=(e,t)=>e.find((({value:e})=>e===t)),L=e=>null===e.buttons?(0,s.tZ)(n.Fragment,null,e.children):(0,s.tZ)(d.N,{enabled:e.showButtonsOnHover},e.children,e.buttons),P=(0,n.forwardRef)(((e,t)=>{var a;const{bankAccount:d,errors:v=new Set,signalEditedValues:g}=e,{bank:k,name:B,IBAN:P,BIC:O,owner:x,spaceId:D,country:F}=d,H=P.length>0,T=O.length>0,[q,K]=(0,n.useState)(!T),[U,V]=(0,n.useState)(!H),{translate:z}=(0,i.Z)(),M="edit"===e.variant?!e.areProtectedItemsUnlocked:void 0,X=e=>t=>{const a="string"==typeof t?t:t.target.value;g({...d,[e]:a})},W="edit"===e.variant?t=>{(0,c.K)(new l.UserRevealVaultItemFieldEvent({field:t,isProtected:!0,itemId:e.itemId,itemType:l.ItemType.BankStatement}))}:void 0,j="edit"===e.variant?()=>{!q&&W&&W(l.Field.Bic);const t=()=>K((e=>!e));M&&"function"==typeof e.openProtectedItemsUnlocker?e.openProtectedItemsUnlocker({action:_.P7.Show,itemType:_.Ru.BankAccount,successCallback:t}):t()}:void 0,$="edit"===e.variant?()=>{!U&&W&&W(l.Field.Iban);const t=()=>V((e=>!e));M&&"function"==typeof e.openProtectedItemsUnlocker?e.openProtectedItemsUnlocker({action:_.P7.Show,itemType:_.Ru.BankAccount,successCallback:t}):t()}:void 0,Q="edit"===e.variant?(t,a,n)=>{(0,c.K)(new l.UserCopyVaultItemFieldEvent({itemType:l.ItemType.BankStatement,field:l.Field.Bic,itemId:e.itemId,isProtected:!0})),a&&e.onCopy(z(t.BIC_COPIED)),n&&"function"==typeof e.reportError&&e.reportError(n,"[bank-account-form] Unable to copy to clipboard")}:void 0,Y="edit"===e.variant?(t,a,n)=>{(0,c.K)(new l.UserCopyVaultItemFieldEvent({itemType:l.ItemType.BankStatement,field:l.Field.Iban,itemId:e.itemId,isProtected:!0})),a&&e.onCopy(z(t.IBAN_COPIED)),n&&"function"==typeof e.reportError&&e.reportError(n,"[bank-account-form] Unable to copy to clipboard")}:void 0,G=w(F),J=G!==E,ee=(0,n.useMemo)((()=>G.map((e=>({label:e.localizedString,value:`${F}-${e.code}`})))),[G,F]);(0,n.useEffect)((()=>{void 0===R(ee,k)&&ee.length>0&&g({...d,bank:ee[0].value},!0),""!==k&&!ee.length&&J&&g({...d,bank:""})}),[k,d,ee,J,g]);const te=((e,t)=>e.filter((e=>!(o.Country[e]===o.Country.UNIVERSAL||o.Country[e]===o.Country.NO_TYPE))).map((e=>({label:t(`country_name_${o.Country[e]}`),value:o.Country[e]}))).sort(((e,t)=>e.label.localeCompare(t.label))))(Object.keys(o.Country),z),ae=(e=>{switch(e){case o.Country.MX:return{IBAN:"webapp_payment_edition_field_bank_account_CLABE",BIC:m,IBAN_PLACEHOLDER:"webapp_payment_edition_field_bank_account_no_CLABE_placeholder",BIC_PLACEHOLDER:b,IBAN_COPIED:"webapp_payment_alert_bank_account_CLABE_copied",BIC_COPIED:I};case o.Country.GB:return{IBAN:C,BIC:"webapp_payment_edition_field_bank_account_sort_code",IBAN_PLACEHOLDER:y,BIC_PLACEHOLDER:"webapp_payment_edition_field_bank_account_no_sort_code_placeholder",IBAN_COPIED:f,BIC_COPIED:"webapp_payment_alert_bank_account_sort_code_copied"};case o.Country.US:return{IBAN:C,BIC:"webapp_payment_edition_field_bank_account_routing_number",IBAN_PLACEHOLDER:y,BIC_PLACEHOLDER:"webapp_payment_edition_field_bank_account_no_routing_number_placeholder",IBAN_COPIED:f,BIC_COPIED:"webapp_payment_alert_bank_account_routing_number_copied"};default:return{IBAN:"webapp_payment_edition_field_bank_account_IBAN",BIC:m,IBAN_PLACEHOLDER:"webapp_payment_edition_field_bank_account_no_IBAN_placeholder",BIC_PLACEHOLDER:b,IBAN_COPIED:"webapp_payment_alert_bank_account_IBAN_copied",BIC_COPIED:I}}})(F);return(0,s.tZ)(n.Fragment,null,(0,s.tZ)(r.Z,{key:"name",value:B,label:z("webapp_payment_edition_field_bank_account_name"),placeholder:z("webapp_payment_edition_field_bank_account_no_name_placeholder"),onChange:X("name"),ref:t}),(0,s.tZ)(r.Z,{key:"owner",value:x,label:z("webapp_payment_edition_field_bank_account_owner_name"),placeholder:z("webapp_payment_edition_field_bank_account_no_owner_name_placeholder"),onChange:X("owner")}),(0,s.tZ)(L,{showButtonsOnHover:T,buttons:"edit"===e.variant?(0,s.tZ)(n.Fragment,null,j?(0,s.tZ)(s.zx,{mood:"neutral",intensity:"quiet",sx:{marginRight:"8px"},onClick:j},z(q?Z:N)):null,Q&&void 0!==M?(0,s.tZ)(u.m,{data:O,checkProtected:()=>M,onCopy:(e,t)=>Q(ae,e,t),itemType:_.Ru.BankAccount}):null):null},(0,s.tZ)(r.Z,{key:"BIC",disabled:!q&&T,value:q?O:"●●●●●●",label:z(ae.BIC),placeholder:z(ae.BIC_PLACEHOLDER),type:"text",onChange:X("BIC"),error:v.has("BIC")})),(0,s.tZ)(L,{showButtonsOnHover:H,buttons:"edit"===e.variant?(0,s.tZ)(n.Fragment,null,$?(0,s.tZ)(s.zx,{mood:"neutral",intensity:"quiet",sx:{marginRight:"8px"},onClick:$},z(U?Z:N)):null,Y&&void 0!==M?(0,s.tZ)(u.m,{data:P,checkProtected:()=>M,onCopy:(e,t)=>Y(ae,e,t),itemType:_.Ru.BankAccount}):null):null},(0,s.tZ)(r.Z,{key:"IBAN",label:z(ae.IBAN),placeholder:z(ae.IBAN_PLACEHOLDER),dataName:"IBAN",disabled:!U&&H,type:"text",value:U?P:"●●●●●●●●●●●●●●●●",onChange:X("IBAN"),error:v.has("IBAN")})),(0,s.tZ)(p.Z,{key:"country",label:z(S),placeholder:z(S)+F,onChange:X("country"),options:te,defaultOption:{label:z(`country_name_${F}`),value:F}}),ee.length>0?(0,s.tZ)(p.Z,{key:`${F}bank`,label:z(A),placeholder:z(A)+k,onChange:X("bank"),options:ee,defaultOption:null!=(a=R(ee,k))?a:ee[0]}):null,(0,s.tZ)(h.M,{spaceId:D,labelSx:h.e,onChange:e=>X("spaceId")(e)}))}))},416098:(e,t,a)=>{a.d(t,{L:()=>l});var n=a(696832),o=a(708608);const l=()=>n.createElement("div",{className:"iconWrapper--JneIZUVWyv"},n.createElement(o.QCj,{size:48,color:o.O9T.white}))},793429:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container--Qypu77vxOn",containerMultiLine:"containerMultiLine--ncWYFwQEnR",_field:"_field--KII5X4xmLN",input:"input--Iq10hxAz32 _field--KII5X4xmLN",inputRow:"inputRow--gdD_j5S1R8",textarea:"textarea--VpIWTZemV2 _field--KII5X4xmLN",label:"label--Ww_r49kt_J",text:"text--oXyCzpUMwG",value:"value--aD7nWEqBIq",multiline:"multiline--fdPM1KFHPT"}},161964:(e,t,a)=>{a.d(t,{Z:()=>n});const n={left:"left--jltGqC2ld6",right:"right--r4mXfTZRXo",select:"select--ivbO452zoA",disable:"disable--F2KcdR2ssV",label:"label--EhkwVb63v9"}}}]);