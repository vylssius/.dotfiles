"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[7425],{787529:(e,t,a)=>{a.d(t,{t:()=>E});var i=a(696832),s=a(238250),r=a(708608),c=a(190481),_=a(925112),l=a(446389),n=a(160041),o=a(5727);const d=({formId:e,handleCancel:t,hasDataBeenModified:a,isSubmitting:i})=>{const{translate:s}=(0,l.Z)();return(0,o.tZ)(r.Ejs,{sx:{padding:"24px"},as:"footer",justifyContent:"flex-end",flexDirection:"row",flexWrap:"nowrap"},a?(0,o.tZ)(r.zxk,{type:"submit",form:e,disabled:i},s("webapp_panel_edition_generic_save_changes")):null,(0,o.tZ)(r.zxk,{sx:{marginLeft:"16px"},nature:"secondary",onClick:t,type:"button"},s("webapp_panel_edition_generic_cancel_changes")))};var u=a(987364),p=a(511494),y=a(75032);const m="id-add-form",b={GENERIC_ERROR:"_common_generic_error"};function E({addItem:e,children:t,initialValues:a,listRoute:o,reportError:E,countryToKeys:w,header:C,type:I}){const{translate:R}=(0,l.Z)(),[h,f]=i.useState(!1),[g,S]=i.useState(!1),[L,v]=i.useState(a.country),N=(0,_.V)();i.useEffect((()=>{const e={driverLicenses:p.PageView.ItemDriverLicenceCreate,fiscalIds:p.PageView.ItemFiscalStatementCreate,idCards:p.PageView.ItemIdCardCreate,passports:p.PageView.ItemPassportCreate,socialSecurityIds:p.PageView.ItemSocialSecurityStatementCreate};(0,u.N)(e[I])}),[I]);const A=()=>{(0,u.N)(p.PageView.ItemIdList),(0,c.uX)(o)},B=i.useRef((e=>{if(null!==e){const{dirty:t,isSubmitting:a,values:i}=e;f(t),S(a),v(i.country)}}));return i.createElement(i.Fragment,null,C(L),i.createElement(n.P,{formId:m,formRef:B.current,handleSubmit:async(t,{setSubmitting:a,setFieldError:i})=>{try{const c=await e(t);!0===c.success?(N.showAlert(R(w(L).success),r.BLW.SUCCESS),(0,y.au)(),A()):(a(!1),c.error?.code===s.AddIdResultErrorCode.MISSING_ID_NUMBER?i("idNumber",""):(N.showAlert(R(b.GENERIC_ERROR),r.BLW.ERROR),E(new Error("[ids][add] Unable to add id"),c.error?.code)))}catch(e){a(!1),N.showAlert(R(b.GENERIC_ERROR),r.BLW.ERROR),E(e,"[ids][add] Unexpected exception while add id")}},initialValues:a,variant:"add"},(e=>t({values:e}))),i.createElement(d,{formId:m,handleCancel:()=>{A()},hasDataBeenModified:h,isSubmitting:g}))}},805965:(e,t,a)=>{a.r(t),a.d(t,{SocialSecurityIdAddPanel:()=>E});var i,s=a(696832),r=a(453576),c=a(616274),_=a(854029),l=a(446389),n=a(787529),o=a(640461),d=a(531198),u=a(365811);const p="socialSecurityIds",y={[r.Country.BR]:{title:"webapp_id_creation_socialsecurity_title_br",success:"webapp_id_creation_socialsecurity_alert_add_success_br"},[r.Country.CA]:{title:"webapp_id_creation_socialsecurity_title_ca",success:"webapp_id_creation_socialsecurity_alert_add_success_ca"},[r.Country.GB]:{title:"webapp_id_creation_socialsecurity_title_gb",success:"webapp_id_creation_socialsecurity_alert_add_success_gb"},[r.Country.IE]:{title:"webapp_id_creation_socialsecurity_title_ie",success:"webapp_id_creation_socialsecurity_alert_add_success_ie"},[r.Country.IT]:{title:"webapp_id_creation_socialsecurity_title_it",success:"webapp_id_creation_socialsecurity_alert_add_success_it"},[r.Country.JP]:{title:"webapp_id_creation_socialsecurity_title_jp",success:"webapp_id_creation_socialsecurity_alert_add_success_jp"},[r.Country.NL]:{title:"webapp_id_creation_socialsecurity_title_nl",success:"webapp_id_creation_socialsecurity_alert_add_success_nl"},[r.Country.NO]:{title:"webapp_id_creation_socialsecurity_title_no",success:"webapp_id_creation_socialsecurity_alert_add_success_no"},[r.Country.PT]:{title:"webapp_id_creation_socialsecurity_title_pt",success:"webapp_id_creation_socialsecurity_alert_add_success_pt"},[r.Country.SE]:{title:"webapp_id_creation_socialsecurity_title_se",success:"webapp_id_creation_socialsecurity_alert_add_success_se"}},m=e=>{var t;return null!=(t=y[e])?t:{title:"webapp_id_creation_socialsecurity_title_default",success:"webapp_id_creation_socialsecurity_alert_add_success_default"}},b=e=>c.C.addSocialSecurityId(e),E=({lee:e,listRoute:t,setDialogActive:a})=>{var r;const{translate:c}=(0,l.Z)(),y={name:"",idNumber:"",country:(0,o.lt)(e.carbon.currentLocation),spaceId:null!=(r=(0,_.B)(e.globalState))?r:""};return s.createElement(n.t,{addItem:b,initialValues:y,listRoute:t,reportError:e.reportError,setDialogActive:a,countryToKeys:m,header:e=>s.createElement(d.h,{title:c(m(e).title),country:e,type:p}),type:p},(()=>i||(i=s.createElement(u.x,{variant:"add"}))))}},365811:(e,t,a)=>{a.d(t,{x:()=>u});var i,s,r=a(696832),c=a(446389),_=a(820523),l=a(519843),n=a(984161),o=a(169491);const d={...n.k},u=r.memo((({variant:e,handleCopy:t})=>{const{translate:a}=(0,c.Z)(),n=r.useRef(null);return r.useEffect("add"===e?()=>{const e=setTimeout((()=>{n.current?.focus()}),_.s);return()=>clearTimeout(e)}:()=>{},[]),r.createElement(r.Fragment,null,r.createElement(o.YI,{name:"name",label:a(d.NAME_LABEL),placeholder:a(d.NAME_PLACEHOLDER),ref:n}),r.createElement(o.G1,{name:"idNumber",label:a(d.ID_NUMBER_LABEL),placeholder:a(d.ID_NUMBER_PLACEHOLDER),handleCopy:"edit"===e?t:void 0}),r.createElement(o.Dz,{name:"country",label:a(d.COUNTRY_LABEL)}),i||(i=r.createElement(l.c,{height:24})),s||(s=r.createElement(o.A0,{name:"spaceId"})))}))}}]);