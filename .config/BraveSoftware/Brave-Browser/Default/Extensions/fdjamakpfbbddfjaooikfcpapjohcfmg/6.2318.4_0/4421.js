(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[4421],{970818:(e,t,s)=>{"use strict";s.d(t,{Z:()=>p});var i=s(696832),n=s(526849),a=s(383849),o=s.n(a),r=s(769183);var l=s(161964);function c(e,t){const s=e.find((e=>String(e.value)===String(t)));return null!=s?s:null}class p extends i.Component{constructor(e){super(e),this.select=i.createRef(),this.handleChange=e=>{const t=e.target;if(!t)return;const s=t.value,i=c(this.props.options,s);this.setState({optionSelected:i}),this.props.onChange&&this.props.onChange(e)},this.handleKeyDown=e=>{"Enter"===e.key&&e.preventDefault(),this.props.onFieldKeyDown?.(e)},this.handleFocus=()=>{this.setState({isSelectFocused:!0})},this.handleBlur=()=>{this.setState({isSelectFocused:!1})};let t=null;this.props.options.length&&(t=c(this.props.options,null===this.props.defaultOption?(0,n.head)(this.props.options).value:this.props.defaultOption.value)),this.state={fieldHtmlId:(0,r.Z)(),optionSelected:t,isSelectFocused:!1}}getValue(){if(!this.select.current)throw new Error("select ref not initialized");return this.select.current.value}render(){var e;const t=this.props.marginSide||"none",s=o()("selectContainer--mo5uz0qo56",l.Z[t],{"transparent--pz8wb74Jmh":this.props.isTransparent,"disabled--I9BAM7Vdre":this.props.disabled,"focused--ietgHqFLIm":this.state.isSelectFocused}),a=o()("selector--fgNHKzkAC3",this.props.classNames);let r;this.state.optionSelected?r=this.state.optionSelected.value:this.props.options.length&&(r=null===this.props.defaultOption?(0,n.head)(this.props.options).value:this.props.defaultOption.value);const c=this.state.optionSelected?this.state.optionSelected.selectedLabel?this.state.optionSelected.selectedLabel:this.state.optionSelected.label:this.props.placeholder;return i.createElement("div",{className:"container--KChkEdb4YV"},this.props.label&&i.createElement("label",{className:l.Z.label,htmlFor:this.state.fieldHtmlId,title:this.props.label},this.props.label),i.createElement("div",{className:s},i.createElement("div",{className:a},this.state.optionSelected&&this.state.optionSelected.icon&&i.createElement("span",{className:"icon--p3a7nsSbg9"},this.state.optionSelected.icon),i.createElement("span",{className:"text--SjkXyB7Kyp"},c)),i.createElement("select",{key:this.state.fieldHtmlId,className:l.Z.select,ref:this.select,id:this.state.fieldHtmlId,value:r,name:this.props.name,disabled:this.props.disabled,"data-name":this.props.dataName,onKeyDown:this.handleKeyDown,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,"aria-label":null!=(e=this.props.ariaLabel)?e:this.props.label},this.props.options.map((e=>i.createElement("option",{key:e.value,disabled:e.disabled,value:String(e.value)},e.label))))))}}},846074:(e,t,s)=>{"use strict";s.d(t,{z:()=>n});var i=s(616274);const n=async e=>await i.C.clearSecureFilesState(e)},78372:(e,t,s)=>{"use strict";let i;s.d(t,{J:()=>i}),function(e){e[e.CONTENT=0]="CONTENT",e[e.DOCUMENT_STORAGE=1]="DOCUMENT_STORAGE",e[e.MORE_OPTIONS=2]="MORE_OPTIONS",e[e.SHARED_ACCESS=3]="SHARED_ACCESS"}(i||(i={}))},750101:(e,t,s)=>{"use strict";s.d(t,{h:()=>I});var i=s(585921),n=s(708608),a=s(696832),o=s(383849),r=s.n(o),l=s(174071);var c,p,d=s(15567),_=s.n(d),u=s(102730),h=s.n(u);const m=312,g="info";class b extends a.Component{constructor(e){super(e),this.showTooltip=()=>{this.setState({isTooltipVisible:!0})},this.hideTooltip=()=>{this.setState({isTooltipVisible:!1})},this.renderIcon=()=>{const{type:e=g}=this.props;switch(e){case"info":return c||(c=a.createElement(h(),null));case"question":return p||(p=a.createElement(_(),null));default:(0,l.U)(e)}return null},this.state={isTooltipVisible:!1}}render(){const{iconClassNames:e=[],maxWidth:t=m,children:s}=this.props,i=this.renderIcon();return a.createElement("div",{className:"container--nIJjYvifKn",onMouseEnter:this.showTooltip,onMouseLeave:this.hideTooltip},a.createElement("div",{className:r()("iconContainer--Qd32ya5v0T",...e)},i),a.createElement("div",{className:r()("tooltipContainer--Yos9HnS8si",{"tooltipDisplayed--ibyWhutbpT":this.state.isTooltipVisible}),style:{maxWidth:`${t}px`}},s,a.createElement("div",{className:"triangle--n9NwQgxSAc"})))}}var f=s(78372),E=s(239051),y=s(446389),S=s(680441),v=s(762863),w=s(932954);const C=({title:e,disabled:t=!1,onChange:s})=>{const{translate:i}=(0,y.Z)(),n=i("webapp_secure_notes_addition_field_placeholder_no_title");return a.createElement(w.Z,{className:"container--Bb3XoBtSp4",tooltipText:e||n},a.createElement("input",{className:"input--OxF_FebNld",placeholder:n,value:e||"",disabled:t,onChange:s}))};var x;const{CONTENT:T,DOCUMENT_STORAGE:N,MORE_OPTIONS:R,SHARED_ACCESS:Z}=f.J,I=({activeTab:e,setActiveTab:t,backgroundColor:s,disabled:a,displayDocumentStorage:o,displaySharedAccess:r,recipientsCount:l,title:c,setTitle:p})=>{const{translate:d}=(0,y.Z)(),_=(0,S.aV)(),u=[{active:e===T,label:d("webapp_secure_notes_edition_field_tab_title_details"),onClick:()=>t(T)}];if(r&&u.push({active:e===Z,label:`${d("webapp_secure_notes_edition_field_tab_title_shared_access")} (${l})`,onClick:()=>t(Z)}),o){const s=_?void 0:(0,i.tZ)(b,null,(0,i.tZ)("p",null,d("webapp_secure_notes_edition_field_tab_title_attachments_tooltips")));u.push({active:e===N,label:d("webapp_secure_notes_edition_field_tab_title_attachments"),onClick:()=>t(N),tabIconElement:s})}return u.push({active:e===R,label:d("webapp_secure_notes_edition_field_tab_title_options"),onClick:()=>t(R)}),(0,i.tZ)(v.V9,{icon:(0,i.tZ)("div",{className:"iconWrapper--d4t5P9vl4W"},x||(x=(0,i.tZ)(n.uHY,{size:40,color:"white"}))),iconBackgroundColor:(0,E.Z)(s),title:(0,i.tZ)(C,{title:c,disabled:a,onChange:e=>p(e.target.value)}),tabs:u})}},205838:(e,t,s)=>{"use strict";s.d(t,{i:()=>J,T:()=>X});var i=s(696832),n=s(5727),a=s(708608),o=s(670138),r=s(446389),l=s(210994),c=s(238250),p=s(252660),d=s(299620),_=s(680441),u=s(509701);var h=s(494373),m=s(511494);const g=s(816583),b={color:`${a.O9T.grey00}`,minHeight:"60px",borderBottom:`solid 1px ${a.O9T.grey05}`,position:"relative","&:hover":{"& > *:last-child":{opacity:1}}},f={width:36,minWidth:36,height:36,borderRadius:"50%",border:"1px solid rgba(0, 0, 0, 0.1)",background:a.O9T.dashGreen06},E={padding:"0px 8px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontWeight:"bold"},y=({attachment:e})=>(0,n.tZ)(a.Ejs,{alignItems:"center",flexWrap:"nowrap"},(0,n.tZ)(a.Ejs,{sx:f,alignItems:"center",justifyContent:"center"},(0,n.tZ)(a.Ujz,{size:25,color:a.O9T.midGreen00})),(0,n.tZ)(a.nvN,{sx:E},e.filename)),S=e=>{const{attachment:t}=e,{translate:s}=(0,r.Z)();return(e=>{const t=(0,p.$)(),{translateWithMarkup:s}=(0,d.Y)(),n=(0,_.Ce)(e.downloadKey);(0,i.useEffect)((()=>{var i,o;const r=e=>t.showAlert((0,u.b)(s(e)),a.BLW.SUBTLE,void 0,!1,!1);switch(n?.status){case c.FileDownloadStatus.Downloading:r({key:"webapp_secure_file_download_progress_downloading_markup",params:{fileName:e.filename,progress:Math.round(null!=(i=(null!=(o=100*n?.bytesReceived)?o:0)/n?.contentLength)?i:1)}});break;case c.FileDownloadStatus.Deciphering:r({key:"webapp_secure_file_download_progress_deciphering_markup",params:{fileName:e.filename}});break;case c.FileDownloadStatus.TransferComplete:t.showAlert(s({key:"webapp_secure_file_download_progress_success_markup",params:{fileName:e.filename}}),a.BLW.SUCCESS);break;case c.FileDownloadStatus.Error:t.showAlert(s({key:"webapp_secure_file_error_unknown"}),a.BLW.ERROR)}}),[t,e,n,s])})(t),(0,n.tZ)(a.Ejs,{fullWidth:!0,alignItems:"center",sx:b},(0,n.tZ)(a.k$b,{sx:{width:"45%"}},(0,n.tZ)(y,{...e})),(0,n.tZ)(a.k$b,{sx:{width:"25%"}},s.shortDate((0,l.Z)(t.creationDatetime))),(0,n.tZ)(a.k$b,{sx:{width:"10%"}},(o=t.localSize,g(o,{decimalPlaces:0,unitSeparator:" "}))),e.isAttachmentEnabled?(0,n.tZ)(h.f,{parentType:m.ItemType.SecureNote,parentId:e.noteId,...e}):null);var o};var v=s(81322);const w=s(816583),C={padding:"16px 16px 16px 0px",borderBottom:`1px solid ${a.O9T.grey06}`,color:`${a.O9T.grey01}`,alignSelf:"center"},x=({currentValues:e,additionalProps:t})=>{const{translate:s}=(0,r.Z)(),o=(0,_.aV)(),[l,c]=(0,i.useState)(!1),p=(0,v.I)(),d=p.max>0&&p.remaining<78643200&&o,u=e.attachments;return(0,i.useEffect)((()=>{c(t.isUploading)}),[t.isUploading]),(0,n.tZ)(a.Ejs,{flexDirection:"column",sx:{padding:"12px 0px",flex:1,overflow:"hidden"}},(0,n.tZ)(a.Ejs,{flexDirection:"column",alignItems:"center",fullWidth:!0,sx:{flex:1,overflowY:"auto",flexWrap:"nowrap"}},u.length>0?(0,n.tZ)(a.Ejs,{fullWidth:!0,alignItems:"center"},(0,n.tZ)(a.j49,{size:"medium",sx:{...C,width:"45%"}},s("webapp_secure_notes_addition_field_tab_attachments_table_title_name")),(0,n.tZ)(a.j49,{size:"medium",sx:{...C,width:"25%"}},s("webapp_secure_notes_addition_field_tab_attachments_table_title_creation_date")),(0,n.tZ)(a.j49,{size:"medium",sx:{...C,width:"30%"}},s("webapp_secure_notes_addition_field_tab_attachments_table_title_file_size"))):(0,n.tZ)(a.Ejs,{justifyContent:"center",flexDirection:"column",alignItems:"center",sx:{flex:1}},(0,n.tZ)(a.Ujz,{size:70,color:a.O9T.dashGreen04,sx:{marginBottom:"24px"}}),(0,n.tZ)(a.nvN,{sx:{textAlign:"center"}},s.markup("webapp_secure_file_empty_attachments_markup"))),u?u.map((e=>(0,n.tZ)(S,{key:e.id,attachment:e,handleFileInfoDetached:t?.handleFileInfoDetached,isAttachmentEnabled:o,disableActions:l,setDisableActions:c,onModalDisplayStateChange:t.onModalDisplayStateChange,noteId:t?.noteId}))):null),d?(0,n.tZ)(a.vDh,{severity:"warning",title:s("webapp_secure_file_storage_quota_info",(h=p.remaining,m=p.max,{usedQuota:w(h,{decimalPlaces:0,unitSeparator:" "}),maxQuota:w(m,{decimalPlaces:0,unitSeparator:" "})})),sx:{flex:0,marginTop:"16px"}}):null);var h,m};var T=s(78372),N=s(879150),R=s(526849);class Z extends i.Component{constructor(e){super(e),this.field=i.createRef(),this.getField=()=>{if(!this.field.current)throw new Error("field ref not registered");return this.field.current},this.getValue=()=>this.getField().value,this.state={selectionRangeStart:null,selectionRangeEnd:null}}shouldComponentUpdate(e,t){return!((0,R.equals)(this.props.value,e.value)&&(0,R.equals)(this.state.selectionRangeStart,t.selectionRangeStart)&&(0,R.equals)(this.state.selectionRangeEnd,t.selectionRangeEnd))}componentDidUpdate(){null!==this.state.selectionRangeStart&&null!==this.state.selectionRangeEnd&&this.getField().setSelectionRange(this.state.selectionRangeStart,this.state.selectionRangeEnd)}render(){return i.createElement("div",{className:"content--AFh9bUjHyR"},i.createElement("textarea",{ref:this.field,name:this.props.name,className:"textarea--Ix1kh7fRYF",placeholder:this.props.placeholder,value:this.props.value||"",disabled:this.props.disabled,readOnly:this.props.readonly,onChange:e=>{this.props.limitContentReached||this.setState({selectionRangeStart:e.target.selectionStart,selectionRangeEnd:e.target.selectionEnd}),this.props.onChange&&this.props.onChange(e)}}))}}var I=s(822878);const O=({content:e,setContent:t,limitedPermissions:s,lee:n,readonly:o})=>{const[r,l]=(0,i.useState)(!1),{translate:c}=n;return i.createElement(i.Fragment,null,i.createElement(Z,{placeholder:c(o?"webapp_secure_notes_edition_disabled_label":"webapp_secure_notes_addition_field_placeholder_no_content"),value:e,disabled:s,readonly:o,limitContentReached:e.length>=J,onChange:({target:{value:s}})=>{const i=s.length>e.length,n=e.length>=J;if(i&&n)return;const a=i&&s.length>J,o=a?e:s;l(a),t(o)}}),r&&i.createElement("div",{className:"alertContainer--aKDAFWKb1l"},i.createElement(I.n,{id:Math.floor(1e6*Math.random()),message:c("webapp_secure_notes_addition_field_copy_past_error"),onHide:()=>{l(!1)},severity:a.BLW.WARNING})))};var k=s(383849),A=s.n(k);const L=({maxAuthorizedSize:e,currentSize:t})=>{const{translate:s}=(0,r.Z)(),n=.95*e,a=.995*e,o=e-t,l=t>e?s("webapp_secure_notes_edition_field_text_over_limit",{overLimit:-o}):s("webapp_secure_notes_edition_field_text_max_size_reached",{charLeft:o});return t>=n?i.createElement("div",{className:A()("greyWarningCharLeft--kX7GKkrKTa",t>=a?"redWarningCharLeft--XWRHnpjz2e":{})},l):null};var D=s(116551),G=s(239051);var P=s(479189),U=s(970818),F=s(191492),B=s(927761),z=s(860039);const W={NO_CATEGORY:"webapp_secure_notes_addition_no_category",CATEGORY_LABEL:"webapp_secure_notes_addition_field_tab_option_category_label",COLOR_LABEL:"webapp_secure_notes_addition_field_tab_option_color_label",SECURITY_LABEL:"webapp_secure_notes_addition_field_tab_option_security_label",SECURITY_TITLE:"webapp_secure_notes_addition_field_tab_option_security_title",SECURITY_DESCRIPTION:"webapp_secure_notes_addition_field_tab_option_security_description",COLORS:{BLUE:"webapp_secure_notes_addition_field_type_option_blue",BROWN:"webapp_secure_notes_addition_field_type_option_brown",GRAY:"webapp_secure_notes_addition_field_type_option_gray",GREEN:"webapp_secure_notes_addition_field_type_option_green",ORANGE:"webapp_secure_notes_addition_field_type_option_orange",PINK:"webapp_secure_notes_addition_field_type_option_pink",PURPLE:"webapp_secure_notes_addition_field_type_option_purple",RED:"webapp_secure_notes_addition_field_type_option_red",YELLOW:"webapp_secure_notes_addition_field_type_option_yellow"}},Y={NO_CATEGORY:"webapp_secure_notes_edition_no_category",CATEGORY_LABEL:"webapp_secure_notes_edition_field_tab_option_category_label",COLOR_LABEL:"webapp_secure_notes_edition_field_tab_option_color_label",SECURITY_LABEL:"webapp_secure_notes_edition_field_tab_option_security_label",SECURITY_TITLE:"webapp_secure_notes_edition_field_tab_option_security_title",SECURITY_DESCRIPTION:"webapp_secure_notes_edition_field_tab_option_security_description",COLORS:{BLUE:"webapp_secure_notes_edition_field_type_option_blue",BROWN:"webapp_secure_notes_edition_field_type_option_brown",GRAY:"webapp_secure_notes_edition_field_type_option_gray",GREEN:"webapp_secure_notes_edition_field_type_option_green",ORANGE:"webapp_secure_notes_edition_field_type_option_orange",PINK:"webapp_secure_notes_edition_field_type_option_pink",PURPLE:"webapp_secure_notes_edition_field_type_option_purple",RED:"webapp_secure_notes_edition_field_type_option_red",YELLOW:"webapp_secure_notes_edition_field_type_option_yellow"},CHANGE_SECURED_SETTING_ON:"webapp_secure_notes_edition_unlocker_on_success",CHANGE_SECURED_SETTING_OFF:"webapp_secure_notes_edition_unlocker_off_success"},q={title:"webapp_secure_notes_edition_unlocker_title_on",subtitle:"webapp_secure_notes_edition_unlocker_description_on"},V={title:"webapp_secure_notes_edition_unlocker_title_off",subtitle:"webapp_secure_notes_edition_unlocker_description_off"},j=({noteCategories:e,disabled:t,data:s,isNewItem:o,saveSecureNoteOptions:l})=>{var c,d,_,u;const{translate:h}=(0,r.Z)(),m=(0,p.$)(),{areProtectedItemsUnlocked:g,openProtectedItemsUnlocker:b}=(0,B.tY)(),f=(0,z.F)(),E=o?W:Y,y=h(E.NO_CATEGORY),[S,v]=(0,i.useState)(null!=(c=s?.category)?c:y),[w,C]=(0,i.useState)(null!=(d=s?.type)?d:"BLUE"),[x,T]=(0,i.useState)(null!=(_=s?.spaceId)?_:""),[N,R]=(0,i.useState)(null!=(u=s?.secured)&&u),Z=(e=>e.map((e=>({name:e.categoryName,id:e.id}))))(e),I=(0,D.rD)("note",Z,y),O=e.find((e=>e.id===S)),k=O?O.categoryName:y,A=D.hg.reduce(((e,t)=>(e[t]=h(E.COLORS[t]),e)),{}),L=(0,D.Dx)(A,D.hg,(j=w,i.createElement("span",{className:"icon--eBGJiUqyZ5",style:{backgroundColor:(0,G.Z)(j)}})));var j;const M=e=>{R(e),l({category:S,type:w,spaceId:x,secured:e}),m.showAlert(h(e?Y.CHANGE_SECURED_SETTING_ON:Y.CHANGE_SECURED_SETTING_OFF),a.BLW.SUCCESS)};return(0,n.tZ)(a.Ejs,{flexDirection:"column"},e&&e.length>1?(0,n.tZ)(U.Z,{key:k,disabled:t,label:h(E.CATEGORY_LABEL),placeholder:"",dataName:"category",options:I,defaultOption:(0,D.Ld)("note",I,k,y),onChange:e=>{v(e.currentTarget.value),l({category:e.currentTarget.value,type:w,spaceId:x,secured:N})}}):null,(0,n.tZ)(P.M,{labelSx:P.e,spaceId:x,onChange:e=>{T(e),l({category:S,type:w,secured:N,spaceId:e})}}),(0,n.tZ)(U.Z,{key:w,disabled:t,label:h(E.COLOR_LABEL),placeholder:"",dataName:"type",options:L,defaultOption:(0,D.rZ)(A,w),onChange:e=>{C(e.currentTarget.value),l({category:S,type:e.currentTarget.value,spaceId:x,secured:N})}}),f?null:(0,n.tZ)(a.Ejs,{sx:{mt:"12px"}},(0,n.tZ)(a.k$b,{sx:{fontWeight:"600",width:"173px",textAlign:"right",justifyContent:"flex-end",pr:"24px"},as:a.nvN,innerAs:"label",htmlFor:"securityToggle",size:"medium"},h(E.SECURITY_LABEL)),(0,n.tZ)(a.k$b,{sx:{display:"inline-flex",position:"relative",pl:"16px"}},(0,n.tZ)(a.T5p,{gridTemplateColumns:"auto 1fr",gridTemplateRows:"auto auto",gridTemplateAreas:"'toggle title' '. content'",justifyItems:"flex-start",alignItems:"center",gap:"8px"},(0,n.tZ)(a.ZDl,{id:"securityToggle",disabled:t,checked:N,onChange:()=>{const e=!N;g||o?M(e):((0,B.jF)(),b({itemType:F.Ru.SecureNoteSetting,options:{fieldsKeys:e?q:V,translated:!1},successCallback:()=>M(e)}))}}),(0,n.tZ)(a.nvN,{sx:{gridArea:"title"},size:"small"},h(E.SECURITY_TITLE)),(0,n.tZ)(a.nvN,{sx:{gridArea:"content",color:a.O9T.grey01},size:"x-small"},h(E.SECURITY_DESCRIPTION))))))},{CONTENT:M,DOCUMENT_STORAGE:H,MORE_OPTIONS:K,SHARED_ACCESS:$}=T.J,J=1e4,X=({activeTab:e,data:t,content:s,setContent:l,handleFileInfoDetached:c,hasAttachment:p,isAdmin:d,isSecureNoteAttachmentEnabled:_,isShared:u,isUploading:h,lee:m,noteCategories:g,onModifyData:b,onModalDisplayStateChange:f,saveSecureNoteOptions:E})=>{var y;const{translate:S}=(0,r.Z)(),v=(0,o.w)("disableSecureNotes");return(0,n.tZ)(i.Fragment,null,e===M&&(0,n.tZ)(i.Fragment,null,(0,n.tZ)("div",{className:"formContent--TCNgoQopo1"},(0,n.tZ)(O,{content:s,setContent:e=>{b(),l(e)},limitedPermissions:t.limitedPermissions,readonly:v,lee:m})),(0,n.tZ)(L,{maxAuthorizedSize:J,currentSize:s.length}),_&&(u||p)&&(0,n.tZ)(a.vDh,{severity:"subtle",size:"small",title:S(u?"webapp_secure_notes_infobox_shared":"webapp_secure_notes_infobox_has_attachments"),sx:{margin:"0px 32px 0px 8px"}})),e===$&&(0,n.tZ)(N.u,{isAdmin:d,id:t.id}),e===H&&(0,n.tZ)(x,{currentValues:(0,R.pick)(["attachments"],t),lee:m,signalEditedValues:b,additionalProps:{handleFileInfoDetached:e=>{c(e)},onModalDisplayStateChange:f,noteId:t.id,isUploading:h}}),e===K&&(0,n.tZ)(j,{data:{category:t.category,spaceId:null!=(y=t.spaceId)?y:"",type:t.type,secured:t.secured},noteCategories:g,isNewItem:!1,saveSecureNoteOptions:e=>{E(e)}}))}},116551:(e,t,s)=>{"use strict";function i(e,t){return{label:t,value:("credential"===e?"":"noCategory")||""}}function n(e,t,s){const n=t.map((e=>({label:e.name,value:e.id})));return[i(e,s)].concat(n)}function a(e,t,s,n){const a=t.find((e=>e.label===s));return null!=a?a:i(e,n)}function o(e,t,s,i){return a(e,n(e,s,i),t,i)}s.d(t,{Dx:()=>l,Ld:()=>a,hg:()=>r,pn:()=>o,rD:()=>n,rZ:()=>c});const r=["BLUE","GRAY","PURPLE","PINK","RED","BROWN","GREEN","ORANGE","YELLOW"];function l(e,t,s){return t.filter((t=>e[t])).map((t=>({icon:s,label:`${e[t]}`,value:t})))}function c(e,t){const s=l(e,[t],null);return s.length?s[0]:{}}},879150:(e,t,s)=>{"use strict";s.d(t,{u:()=>C});var i=s(696832),n=s(148038),a=s(453576),o=s(585921),r=s(708608),l=s(616274),c=s(526849);const p=(0,c.sortBy)((0,c.compose)(c.toLower,(0,c.prop)("name"))),d=(0,c.sortBy)((0,c.compose)(c.toLower,(0,c.prop)("alias")));var _,u,h=s(108951),m=s(691330),g=s(394222),b=s(405611),f=s(285628),E=s(785802),y=s(446389);const S=({cancelStatus:e,itemGroup:t,setCancelStatus:s,userOrGroup:n})=>{const{translate:a}=(0,y.Z)(),c=e===g.V.Loading,p={type:"user",alias:"groupId"in n?n.groupId:n.userId};(0,i.useEffect)((()=>{let t;return e===g.V.Failure&&(t=window.setTimeout((()=>s(null)),2e3)),()=>{clearTimeout(t)}}),[e,s]);const d=e?()=>s(null):()=>s(g.V.Confirm);return e===g.V.Failure?(0,o.tZ)("div",{sx:{color:"ds.text.danger.standard",display:"flex",alignItems:"center"}},_||(_=(0,o.tZ)(r.aNP,{color:"ds.text.danger.standard"}))," ",a("webapp_shared_access_cancel_failure")):(0,o.tZ)("div",null,(0,o.tZ)(o.zx,{intensity:e?"quiet":"supershy",disabled:c,onClick:d},a(e?"webapp_shared_access_cancel":"webapp_shared_access_cancel_invitation")),e?(0,o.tZ)(o.zx,{mood:"danger",intensity:"catchy",sx:{ml:"16px"},disabled:c,onClick:()=>(async()=>{s(g.V.Loading);const e=await(async()=>{try{const{success:e}=await l.C.revokeSharing({itemGroupId:t.groupId,recipient:p});return e}catch(e){return!1}})();s(e?g.V.Success:g.V.Failure)})()},c?u||(u=(0,o.tZ)(r.HoD,null)):a("webapp_shared_access_confirm")):null)};var v;const w=({isAdmin:e,itemGroup:t,openEditPermissionsDialog:s,userOrGroup:a})=>{const[r,c]=(0,i.useState)(null),p=(()=>{const e=(0,n.qr)({queryConfig:{query:l.C.getUserLoginStatus},liveConfig:{live:l.C.liveLoginStatus}},[]);return e.status===n.rq.Success?e.data:void 0})()?.login,{translate:d}=(0,y.Z)();if(r===g.V.Success)return null;const _="groupId"in a,{permission:u,status:h}=a,m=_?a.groupId:a.userId,w=_?a.name:a.alias,C=e&&p!==m,x=_?{type:"userGroup",groupId:m,name:w}:{type:"user",alias:m};let T="pending"===h?"webapp_shared_access_pending_invitation":"";T="accepted"===h?"admin"===u?"webapp_sharing_permissions_full_rights":"webapp_sharing_permissions_limited_rights":T;const N="pending"===h?(0,o.tZ)(S,{userOrGroup:a,itemGroup:t,cancelStatus:r,setCancelStatus:c}):(0,o.tZ)(o.zx,{intensity:"supershy",onClick:()=>s(x,u)},d("webapp_shared_access_edit_permissions"));return(0,o.tZ)("li",{key:m,sx:{alignItems:"center",borderStyle:"solid",borderBottomWidth:"1px",borderColor:"ds.border.neutral.standard.idle",display:"flex",minHeight:"64px",overflow:"hidden",position:"relative"}},(0,o.tZ)(f.r,{infoAction:C?N:null,logo:_?v||(v=(0,o.tZ)(E.Z,null)):(0,o.tZ)(b.q,{email:w,size:36}),text:d(T),title:w,disabled:r===g.V.Loading}))},C=({id:e,isAdmin:t})=>{const[s,c]=(0,i.useState)(!1),[_,u]=(0,i.useState)(null),b=(0,h.b)(e),f=(E=e,(0,n.qr)({queryConfig:{query:l.C.getUserRecipients,queryParam:E},liveConfig:{live:l.C.liveUserRecipients,liveParam:E}},[]));var E;const y=function(e){return(0,n.qr)({queryConfig:{query:l.C.getGroupRecipients,queryParam:e},liveConfig:{live:l.C.liveGroupRecipients,liveParam:e}},[])}(e);if(b.status!==n.rq.Success||f.status!==n.rq.Success||y.status!==n.rq.Success||!b.data)return(0,o.tZ)(r.HoD,{color:"ds.container.expressive.brand.catchy.idle",size:50,sx:{alignSelf:"center",m:"20px"}});const S=b.data,v=f.data,C=y.data,x=e=>{_&&u({..._,step:e})},T=async()=>{if(!_)return;const{recipient:e,permission:t}=_;c(!0);const s="revoke"===t?await(async e=>{try{const{success:t}=await l.C.revokeSharing({itemGroupId:S.groupId,recipient:e});return t}catch(e){return!1}})(e):await(async(e,t)=>{try{const{success:s}=await l.C.updateSharingPermission({itemGroupId:S?.groupId,recipient:e,permission:t});return s}catch(e){return!1}})(e,t);if(s){const e="revoke"===t?g.L.RevokeSuccess:g.L.Success;x(e)}else x(g.L.Failure);c(!1)},N=(e,t)=>{const s={recipient:e,permission:t,originPermission:t,step:g.L.Permission,name:(0,a.isGroupRecipient)(e)?e.name:e.alias};u(s)};return(0,o.tZ)("div",{sx:{flex:"1",overflowY:"auto",p:"24px"}},(0,o.tZ)("ul",{sx:{flex:"1"}},p(C).map((e=>(0,o.tZ)(w,{key:e.groupId,userOrGroup:e,isAdmin:t,itemGroup:S,openEditPermissionsDialog:N}))),d(v).map((e=>(0,o.tZ)(w,{key:e.userId,userOrGroup:e,isAdmin:t,itemGroup:S,openEditPermissionsDialog:N})))),_&&(0,o.tZ)(m.E,{isOpen:!0,loading:s,onCancelRevoke:()=>{_&&u({..._,step:g.L.Permission})},onConfirmRevoke:T,onDismiss:()=>u(null),onSelectPermission:e=>{_&&u({..._,permission:e})},onValidatePermission:()=>{"revoke"===_?.permission?u({..._,step:g.L.ConfirmRevoke}):T()},originPermission:_.originPermission,permission:_.permission,recipient:_.recipient,step:_.step}))}},161964:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});const i={left:"left--jltGqC2ld6",right:"right--r4mXfTZRXo",select:"select--ivbO452zoA",disable:"disable--F2KcdR2ssV",label:"label--EhkwVb63v9"}},102730:(e,t,s)=>{var i=s(696832);function n(e){return i.createElement("svg",e,i.createElement("g",{fill:"none",fillRule:"evenodd"},[i.createElement("path",{className:"tooltip-modern-icon-stroke",d:"M.5 8.5a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm8-1v5",key:0}),i.createElement("path",{className:"tooltip-modern-icon-fill",d:"M9.5 4.5a1 1 0 1 0-2 0 1 1 0 1 0 2 0",key:1})]))}n.defaultProps={width:"17",height:"17"},e.exports=n,n.default=n},15567:(e,t,s)=>{var i=s(696832);function n(e){return i.createElement("svg",e,i.createElement("path",{d:"M6.547 7.25c0-1 1-2 2.5-2s2.5.75 2.5 2c0 1-.5 1.5-1.5 2.25s-1 1.25-1 1.75m-8.5-1.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Zm9 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",className:"tooltip-modern-icon-stroke"}))}n.defaultProps={width:"17",height:"17",viewBox:"0 0 19 19",fill:"none"},e.exports=n,n.default=n}}]);