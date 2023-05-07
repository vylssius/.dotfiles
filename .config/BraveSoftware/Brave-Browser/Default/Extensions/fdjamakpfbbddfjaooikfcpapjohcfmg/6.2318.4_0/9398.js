"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[9398],{481159:(e,t,s)=>{s.d(t,{Z:()=>g});var a=s(696832),i=s(554712),n=s(383849),r=s.n(n),l=s(526849),o=s(769183),d=s(317894),p=s.n(d),h=s(585921),u=s(932954),c=s(793429);const m=e=>{navigator.clipboard.writeText(e.replaceAll(" ",""))};class g extends a.Component{constructor(e){super(e),this.field=void 0,this.handleChange=e=>{this.setState({selectionRangeStart:e.target.selectionStart,selectionRangeEnd:e.target.selectionEnd}),this.props.onChange&&this.props.onChange(e)},this.state={fieldHtmlId:(0,o.Z)(),selectionRangeStart:null,selectionRangeEnd:null}}componentDidUpdate(){null!==this.state.selectionRangeStart&&null!==this.state.selectionRangeEnd&&this.field.setSelectionRange(this.state.selectionRangeStart,this.state.selectionRangeEnd)}shouldComponentUpdate(e,t){return!((0,l.equals)(this.props.value,e.value)&&(0,l.equals)(this.props.error,e.error)&&(0,l.equals)(this.props.mask,e.mask)&&(0,l.equals)(this.props.label,e.label)&&(0,l.equals)(this.state.selectionRangeStart,t.selectionRangeStart)&&(0,l.equals)(this.state.selectionRangeEnd,t.selectionRangeEnd))}getValue(){return this.field.value}focus(){this.field.focus()}getTextarea(){var e;return(0,h.tZ)(i.Z,{inputRef:e=>{this.field=e},id:this.state.fieldHtmlId,disabled:this.props.disabled,value:null!=(e=this.props.value)?e:"",name:this.props.name,"data-name":this.props.dataName,sx:{borderColor:this.props.error&&"ds.border.danger.standard.idle"},className:c.Z.textarea,placeholder:this.props.placeholder,onBlur:this.props.handleFieldBlur,onKeyDown:this.props.onFieldKeyDown,onChange:this.handleChange})}getInput(){var e;const t={onBlur:this.props.handleFieldBlur,onChange:this.handleChange,disabled:this.props.disabled,readOnly:this.props.readOnly,value:null!=(e=this.props.value)?e:""},s={ref:e=>{this.field=e},id:this.state.fieldHtmlId,autoComplete:"off",className:r()(c.Z.input,{[c.Z.error]:Boolean(this.props.error)}),sx:{...this.props.error&&{"::placeholder":{color:"ds.text.danger.quiet"},minWidth:"fit-content"},border:"1px solid",borderColor:this.props.error?"ds.border.danger.standard.idle":"transparent"},name:this.props.name,"data-name":this.props.dataName,type:this.props.type||"text",placeholder:this.props.placeholder,onKeyDown:this.props.onFieldKeyDown};return this.props.mask?(0,h.tZ)(p(),{...t,...this.props.maskProps,mask:this.props.mask,onCopy:()=>m(t.value),onCut:()=>m(t.value)},(e=>(0,h.tZ)("input",{...s,...e}))):(0,h.tZ)("div",{className:c.Z.inputRow},(0,h.tZ)("input",{...s,...t}),(0,h.tZ)("div",{hidden:!this.props.error||"string"!=typeof this.props.error,sx:{color:"ds.text.danger.quiet"},className:c.Z.errorMessage},this.props.error))}render(){const e="password"!==this.props.type?this.props.value||this.props.placeholder:"";return(0,h.tZ)("div",{className:r()(c.Z.container,this.props.multiLine?c.Z.containerMultiLine:null)},this.props.label&&(0,h.tZ)("label",{className:c.Z.label,htmlFor:this.state.fieldHtmlId},(0,h.tZ)("span",{className:c.Z.text,title:this.props.label},this.props.label)),(0,h.tZ)(u.Z,{tooltipText:e,className:r()(c.Z.value,{[c.Z.placeholder]:!this.props.value,[c.Z.multiline]:this.props.multiLine})},this.props.multiLine?this.getTextarea():this.getInput()))}}g.defaultProps={maskProps:{maskChar:""}}},162886:(e,t,s)=>{s.d(t,{Z:()=>d,h:()=>o});var a=s(708608),i=s(696832),n=s(765505),r=s(630886),l=s(174071);const o=({closeConfirmDeleteDialog:e,onDeleteConfirm:t,translations:s})=>{const{confirmDeleteSubtitle:n,confirmDeleteTitle:l,confirmDeleteDismiss:o,confirmDeleteConfirm:d}=s;return i.createElement(r.o,{isOpen:!0,disableBackgroundPanelClose:!0,footer:i.createElement(a.cNS,{primaryButtonTitle:d,primaryButtonOnClick:t,primaryButtonProps:{id:"deletion-dialog-confirm-button"},secondaryButtonTitle:o,secondaryButtonOnClick:e,secondaryButtonProps:{autoFocus:!0,id:"deletion-dialog-dismiss-button"},intent:"danger"}),onRequestClose:e,title:l},n)},d=({reason:e,translations:t,goToSharingAccess:s,closeCantDeleteDialog:o})=>{const d=((e,t)=>{const{groupSharingTitle:s,lastAdminTitle:a,genericErrorTitle:i}=e;switch(t){case n.J.LastAdmin:return a;case n.J.GroupSharing:return s;case n.J.Generic:return i;default:return(0,l.U)(t)}})(t,e),p=((e,t)=>{const{groupSharingSubtitle:s,lastAdminSubtitle:a,genericErrorSubtitle:i}=e;switch(t){case n.J.LastAdmin:return a;case n.J.GroupSharing:return s;case n.J.Generic:return i;default:return(0,l.U)(t)}})(t,e);return i.createElement(r.o,{isOpen:!0,showCloseIcon:!0,disableBackgroundPanelClose:!0,onRequestClose:o,title:d,footer:e===n.J.LastAdmin?i.createElement(a.cNS,{primaryButtonTitle:t.lastAdminActionLabel,primaryButtonOnClick:s,intent:"danger"}):null},p)}},355452:(e,t,s)=>{s.d(t,{Jh:()=>l,UE:()=>n,ZP:()=>o});var a=s(696832),i=s(526849);const n=(0,i.compose)(i.not,i.isEmpty,i.trim,(0,i.defaultTo)("")),r=/.+@.+\..+/,l=e=>r.test(e.trim());class o extends a.Component{constructor(e){super(e),this.setInternalState=e=>{this.setState({internal:{...this.state.internal,...e}})},this.setUpdatedValues=e=>{const{signalEditedValues:t,onValuesUpdated:s}=this.props,a={...this.state.values,...e};this.setState({values:a},(()=>{t&&t(this.hasFormBeenEdited()),s&&s(a)}))},this.handleChange=(e,t="")=>{if(e instanceof Event&&t)throw new Error("handleChange was called with both a ChangeEvent and key.");const s=e?.target?{[e.target.dataset.name]:e.target.value}:{[t]:e};this.setUpdatedValues(s)},this.handleChanges=e=>{this.setUpdatedValues(e)},this.validateValues=e=>{if(0===Object.keys(e).length)return!0;const t=(0,i.reduce)(((t,s)=>(t[s]=e[s]?(0,i.compose)(i.not,e[s]):()=>!1,t)),{},Object.keys(this.state.values)),s=(0,i.evolve)(t,this.state.values);return this.setState({errors:s}),(0,i.all)((0,i.equals)(!1),(0,i.values)(s))},this.hasFormBeenEdited=()=>!(0,i.equals)(this.state.values,this.props.currentValues),this.getValues=()=>this.state.values;const t=Object.keys(e.currentValues).reduce(((e,t)=>(e[t]=!1,e)),{});this.state={internal:{},values:e.currentValues,errors:t}}componentDidUpdate(e){(0,i.equals)(this.props.currentValues,e.currentValues)||this.setState({values:this.props.currentValues})}}},765505:(e,t,s)=>{let a;s.d(t,{J:()=>a}),function(e){e[e.LastAdmin=0]="LastAdmin",e[e.GroupSharing=1]="GroupSharing",e[e.Generic=2]="Generic"}(a||(a={}))},130806:(e,t,s)=>{s.d(t,{Y:()=>f});var a=s(696832),i=s(453576),n=s(511494),r=s(762863),l=s(483296),o=s(190481),d=s(162886),p=s(616274),h=s(418402),u=s.n(h),c=s(987364),m=s(75032);const g={DELETE_CONFIRM:"webapp_personal_info_edition_delete_confirm",DELETE_DISMISS:"webapp_personal_info_edition_delete_dismiss",DELETE_SUBTITLE:"webapp_personal_info_edition_delete_subtitle"};function f(e){const{getItemTypeDescription:t,getDeleteTitle:s,getTitle:h,iconType:f,kwType:D,renderForm:b}=e;return class extends a.Component{constructor(...e){super(...e),this.form=(0,a.createRef)(),this.getFormValues=()=>{var e;return null!=(e=this.form.current?.getValues())?e:null},this.isFormValid=()=>{var e;return null!=(e=this.form.current?.isFormValid())&&e},this.state={hasDataBeenModified:!1,displayConfirmDeleteDialog:!1},this.componentDidMount=()=>{const e={[i.DataModelType.KWAddress]:n.PageView.ItemAddressDetails,[i.DataModelType.KWCompany]:n.PageView.ItemCompanyDetails,[i.DataModelType.KWEmail]:n.PageView.ItemEmailDetails,[i.DataModelType.KWIdentity]:n.PageView.ItemIdentityDetails,[i.DataModelType.KWPhone]:n.PageView.ItemPhoneDetails,[i.DataModelType.KWPersonalWebsite]:n.PageView.ItemWebsiteDetails};(0,c.N)(e[D])},this.showListView=()=>{(0,c.N)(n.PageView.ItemPersonalInfoList),(0,o.uX)(this.props.lee.routes.userPersonalInfo)},this.handleEditedForm=()=>this.setState({hasDataBeenModified:!0}),this.handleNavigateOut=()=>{this.showListView()},this.handleClickDelete=()=>this.setState({displayConfirmDeleteDialog:!0}),this.closeConfirmDeleteDialog=()=>this.setState({displayConfirmDeleteDialog:!1}),this.handleDeleteConfirm=()=>{const{item:e}=this.props;e?.id&&(p.C.removePersonalDataItem({id:e.id}),this.showListView())},this.handleSubmit=async()=>{const{item:e}=this.props;if(!e?.id)return;if(!this.isFormValid())return;const t=this.getFormValues(),s={kwType:D,origin:i.SaveOrigin.MANUAL,content:{...t,id:e.id}};await p.C.savePersonalDataItem(s),(0,m.au)(),this.showListView()},this.render=()=>{const{item:e,lee:{translate:i}}=this.props,{displayConfirmDeleteDialog:n,hasDataBeenModified:o}=this.state,p=Boolean(this.props.match.params?.uuid),c=e?h(e,i):"",m=s(i),D=t(i),C=a.createElement(l.ZP,{iconSize:l.Jh.headerEditPanelIcon,iconType:f}),E={confirmDeleteConfirm:i(g.DELETE_CONFIRM),confirmDeleteDismiss:i(g.DELETE_DISMISS),confirmDeleteSubtitle:i(g.DELETE_SUBTITLE),confirmDeleteTitle:m};return a.createElement(r.zI,{isViewingExistingItem:p,itemHasBeenEdited:o,onNavigateOut:this.handleNavigateOut,onSubmit:this.handleSubmit,onClickDelete:this.handleClickDelete,ignoreCloseOnEscape:n,formId:"edit_personalinfo_panel",header:a.createElement(r.V9,{icon:C,iconBackgroundColor:u()["--dash-green-00"],title:c,titleDescription:D})},e?b(this.props.lee,e,this.form,this.handleEditedForm):"",n?a.createElement(d.h,{closeConfirmDeleteDialog:this.closeConfirmDeleteDialog,onDeleteConfirm:this.handleDeleteConfirm,translations:E}):null)}}}}},39398:(e,t,s)=>{s.r(t),s.d(t,{Connected:()=>m});var a=s(616274),i=s(704841),n=s(611792),r=s(696832),l=s(397972),o=s(130806),d=s(483296);const p=(0,o.Y)({getDeleteTitle:e=>e("webapp_personal_info_edition_delete_title_website"),getItemTypeDescription:e=>e("webapp_personal_info_edition_header_website_description"),getTitle:e=>e.name,iconType:d.Tu.website,kwType:"KWPersonalWebsite",renderForm:(e,t,s,a)=>{const i={name:t.name,website:t.website,spaceId:t.spaceId};return r.createElement(l.m,{lee:e,currentValues:i,signalEditedValues:a,ref:s})}}),h=e=>`{${e.match.params.uuid}}`,u={item:{live:a.C.livePersonalWebsite,liveParam:h,query:a.C.getPersonalWebsite,queryParam:h}},c={strategies:u},m=(0,i.$)((0,n.i)(p,c),u)},397972:(e,t,s)=>{s.d(t,{m:()=>l});var a=s(696832),i=s(355452),n=s(481159),r=s(479189);class l extends i.ZP{isFormValid(){return this.validateValues({website:i.UE})}render(){var e;const t=this.props.lee.translate.namespace("webapp_personal_info_edition_website_");return a.createElement(a.Fragment,null,a.createElement(n.Z,{key:"website",label:t("website_label"),placeholder:t("placeholder_no_website"),dataName:"website",value:this.state.values.website,error:this.state.errors.website,onChange:this.handleChange}),a.createElement(n.Z,{key:"name",label:t("name_label"),placeholder:t("placeholder_no_name"),dataName:"name",value:this.state.values.name,onChange:this.handleChange}),a.createElement(r.M,{labelSx:r.e,spaceId:null!=(e=this.state.values.spaceId)?e:"",onChange:e=>this.handleChange(e,"spaceId")}))}}},793429:(e,t,s)=>{s.d(t,{Z:()=>a});const a={container:"container--Qypu77vxOn",containerMultiLine:"containerMultiLine--ncWYFwQEnR",_field:"_field--KII5X4xmLN",input:"input--Iq10hxAz32 _field--KII5X4xmLN",inputRow:"inputRow--gdD_j5S1R8",textarea:"textarea--VpIWTZemV2 _field--KII5X4xmLN",label:"label--Ww_r49kt_J",text:"text--oXyCzpUMwG",value:"value--aD7nWEqBIq",multiline:"multiline--fdPM1KFHPT"}}}]);