(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{DNuw:function(e,n,i){"use strict";i.r(n),i.d(n,"RegistrationPageModule",function(){return Y});var t=i("ofXK"),o=i("3Pt+"),r=i("tyNb"),c=i("TEn/"),b=i("mrSG"),s=i("tk/3"),a=i("8Ngi"),d=i("fXoL"),l=i("qvOR");function u(e,n){1&e&&(d.Ob(0,"p",21),d.jc(1," Username is required "),d.Nb())}function g(e,n){if(1&e&&(d.Ob(0,"ion-text",19),d.ic(1,u,2,0,"p",20),d.Nb()),2&e){d.Yb();const e=d.ec(9);d.zb(1),d.bc("ngIf",null==e.errors?null:e.errors.required)}}function f(e,n){1&e&&(d.Ob(0,"p",21),d.jc(1," Username already registered "),d.Nb())}function p(e,n){if(1&e&&(d.Ob(0,"ion-text",19),d.ic(1,f,2,0,"p",20),d.Nb()),2&e){const e=d.Yb(3);d.zb(1),d.bc("ngIf","usernameTaken"===e.submitError)}}const O=function(){return{updateOn:"submit"}};function m(e,n){if(1&e){const e=d.Pb();d.Ob(0,"form",11,12),d.Wb("ngSubmit",function(){d.fc(e);const n=d.ec(1),i=d.ec(9),t=d.Yb(2);return n.valid&&t.registerNew(i.value)}),d.Ob(2,"ion-grid"),d.Ob(3,"ion-row"),d.Ob(4,"ion-col"),d.Ob(5,"ion-item"),d.Ob(6,"ion-label",13),d.jc(7,"Username"),d.Nb(),d.Kb(8,"ion-input",14,15),d.Nb(),d.Nb(),d.Nb(),d.Ob(10,"ion-row"),d.Ob(11,"ion-col"),d.ic(12,g,2,1,"ion-text",16),d.ic(13,p,2,1,"ion-text",16),d.Nb(),d.Nb(),d.Ob(14,"ion-row"),d.Ob(15,"ion-col",17),d.Ob(16,"ion-button",18),d.jc(17,"Register"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb()}if(2&e){const e=d.ec(1),n=d.ec(9),i=d.Yb(2);d.bc("ngFormOptions",d.cc(5,O)),d.zb(8),d.bc("required",!0)("spellcheck",!1),d.zb(4),d.bc("ngIf",e.submitted&&n.invalid),d.zb(1),d.bc("ngIf",i.submitError)}}function N(e,n){1&e&&(d.Ob(0,"p",21),d.jc(1," Add Authenticator Code is required "),d.Nb())}function v(e,n){if(1&e&&(d.Ob(0,"ion-text",19),d.ic(1,N,2,0,"p",20),d.Nb()),2&e){d.Yb();const e=d.ec(9);d.zb(1),d.bc("ngIf",null==e.errors?null:e.errors.required)}}function h(e,n){1&e&&(d.Ob(0,"p",21),d.jc(1," Add Authenticator Code invalid "),d.Nb())}function y(e,n){if(1&e&&(d.Ob(0,"ion-text",19),d.ic(1,h,2,0,"p",20),d.Nb()),2&e){const e=d.Yb(3);d.zb(1),d.bc("ngIf","addTokenInvalid"===e.submitError)}}function w(e,n){if(1&e){const e=d.Pb();d.Ob(0,"form",11,12),d.Wb("ngSubmit",function(){d.fc(e);const n=d.ec(1),i=d.ec(9),t=d.Yb(2);return n.valid&&t.registerAdd(i.value)}),d.Ob(2,"ion-grid"),d.Ob(3,"ion-row"),d.Ob(4,"ion-col"),d.Ob(5,"ion-item"),d.Ob(6,"ion-label",13),d.jc(7,"Add Authenticator Code"),d.Nb(),d.Kb(8,"ion-input",22,23),d.Nb(),d.Nb(),d.Nb(),d.Ob(10,"ion-row"),d.Ob(11,"ion-col"),d.ic(12,v,2,1,"ion-text",16),d.ic(13,y,2,1,"ion-text",16),d.Nb(),d.Nb(),d.Ob(14,"ion-row"),d.Ob(15,"ion-col",17),d.Ob(16,"ion-button",18),d.jc(17,"Register"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb()}if(2&e){const e=d.ec(1),n=d.ec(9),i=d.Yb(2);d.bc("ngFormOptions",d.cc(5,O)),d.zb(8),d.bc("required",!0)("spellcheck",!1),d.zb(4),d.bc("ngIf",e.submitted&&n.invalid),d.zb(1),d.bc("ngIf",i.submitError)}}function I(e,n){1&e&&(d.Ob(0,"p",21),d.jc(1," Recovery Code is required "),d.Nb())}function k(e,n){if(1&e&&(d.Ob(0,"ion-text",19),d.ic(1,I,2,0,"p",20),d.Nb()),2&e){d.Yb();const e=d.ec(9);d.zb(1),d.bc("ngIf",null==e.errors?null:e.errors.required)}}function j(e,n){1&e&&(d.Ob(0,"p",21),d.jc(1," Recovery Code invalid "),d.Nb())}function z(e,n){if(1&e&&(d.Ob(0,"ion-text",19),d.ic(1,j,2,0,"p",20),d.Nb()),2&e){const e=d.Yb(3);d.zb(1),d.bc("ngIf","recoveryTokenInvalid"===e.submitError)}}function x(e,n){if(1&e){const e=d.Pb();d.Ob(0,"form",11,12),d.Wb("ngSubmit",function(){d.fc(e);const n=d.ec(1),i=d.ec(9),t=d.Yb(2);return n.valid&&t.recover(i.value)}),d.Ob(2,"ion-grid"),d.Ob(3,"ion-row"),d.Ob(4,"ion-col"),d.Ob(5,"ion-item"),d.Ob(6,"ion-label",13),d.jc(7,"Recovery Code"),d.Nb(),d.Kb(8,"ion-input",24,25),d.Nb(),d.Nb(),d.Nb(),d.Ob(10,"ion-row"),d.Ob(11,"ion-col"),d.ic(12,k,2,1,"ion-text",16),d.ic(13,z,2,1,"ion-text",16),d.Nb(),d.Nb(),d.Ob(14,"ion-row"),d.Ob(15,"ion-col",17),d.Ob(16,"ion-button",18),d.jc(17,"Register"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb()}if(2&e){const e=d.ec(1),n=d.ec(9),i=d.Yb(2);d.bc("ngFormOptions",d.cc(5,O)),d.zb(8),d.bc("required",!0)("spellcheck",!1),d.zb(4),d.bc("ngIf",e.submitted&&n.invalid),d.zb(1),d.bc("ngIf",i.submitError)}}function C(e,n){if(1&e){const e=d.Pb();d.Ob(0,"ion-content",5),d.Ob(1,"ion-segment",6),d.Wb("ionChange",function(n){return d.fc(e),d.Yb().selectSegment(n)}),d.Ob(2,"ion-segment-button",7),d.Ob(3,"ion-label"),d.jc(4,"New"),d.Nb(),d.Nb(),d.Ob(5,"ion-segment-button",8),d.Ob(6,"ion-label"),d.jc(7,"Add"),d.Nb(),d.Nb(),d.Ob(8,"ion-segment-button",9),d.Ob(9,"ion-label"),d.jc(10,"Recover"),d.Nb(),d.Nb(),d.Nb(),d.ic(11,m,18,6,"form",10),d.ic(12,w,18,6,"form",10),d.ic(13,x,18,6,"form",10),d.Nb()}if(2&e){const e=d.Yb();d.zb(11),d.bc("ngIf","new"===e.view),d.zb(1),d.bc("ngIf","add"===e.view),d.zb(1),d.bc("ngIf","recover"===e.view)}}function T(e,n){if(1&e&&(d.Mb(0),d.Ob(1,"p"),d.jc(2,"Your new recovery code:"),d.Nb(),d.Ob(3,"code"),d.jc(4),d.Nb(),d.Ob(5,"p"),d.jc(6,"If you ever need to recover acccess to your account, you need this code. You should print it or write it down, and store it in a safe place. We strongly recommend that you don't store your recovery code on a device. "),d.Nb(),d.Lb()),2&e){const e=d.Yb(2);d.zb(4),d.kc(e.recoveryToken)}}function E(e,n){if(1&e&&(d.Ob(0,"ion-content",26),d.Ob(1,"p"),d.jc(2,"Registration successful"),d.Nb(),d.ic(3,T,7,1,"ng-container",27),d.Ob(4,"ion-button",28),d.jc(5,"Go to Login"),d.Nb(),d.Nb()),2&e){const e=d.Yb();d.zb(3),d.bc("ngIf","OK"!==e.recoveryToken)}}const R=[{path:"",component:(()=>{class e{constructor(e,n,i){this.navCtrl=e,this.messagesService=n,this.httpClient=i,this.view="new",this.submitError=null,this.recoveryToken=null}registerNew(e){this.register(e,null,null)}registerAdd(e){this.register(null,e,null)}recover(e){this.register(null,null,e)}selectSegment(e){this.view=e.target.value}register(e,n,i){return Object(b.a)(this,void 0,void 0,function*(){const t=yield this.messagesService.showLoading("Starting registration ...");yield t.present();let o=new s.c;e?o=o.set("username",e):n?o=o.set("registrationAddToken",n):i&&(o=o.set("recoveryToken",i)),this.httpClient.post("registration/start",{username:e,registrationAddToken:n,recoveryToken:i}).subscribe(e=>Object(b.a)(this,void 0,void 0,function*(){yield t.dismiss(),"OK"===e.status?yield this.createCredentials(e):"USERNAME_TAKEN"===e.status?this.submitError="usernameTaken":"TOKEN_INVALID"===e.status&&(this.submitError=n?"addTokenInvalid":"recoveryTokenInvalid")}),()=>{t.dismiss(),this.messagesService.showErrorToast("Registration failed")},()=>t.dismiss())})}createCredentials(e){return Object(b.a)(this,void 0,void 0,function*(){const n=yield Object(a.a)({publicKey:e.publicKeyCredentialCreationOptions});try{n.clientExtensionResults=n.getClientExtensionResults()}catch(o){n.clientExtensionResults={}}const i={registrationId:e.registrationId,credential:n},t=yield this.messagesService.showLoading("Finishing registration ...");yield t.present(),this.httpClient.post("registration/finish",i,{responseType:"text"}).subscribe(e=>{e?this.recoveryToken=e:this.messagesService.showErrorToast("Registration failed")},()=>{t.dismiss(),this.messagesService.showErrorToast("Registration failed")},()=>t.dismiss())})}}return e.\u0275fac=function(n){return new(n||e)(d.Jb(c.w),d.Jb(l.a),d.Jb(s.a))},e.\u0275cmp=d.Db({type:e,selectors:[["app-registration"]],decls:8,vars:2,consts:[["color","secondary"],["slot","start"],["defaultHref","/login"],["class","ion-padding",4,"ngIf"],["class","ion-padding ion-text-center",4,"ngIf"],[1,"ion-padding"],[3,"ionChange"],["value","new"],["value","add"],["value","recover"],["class","ion-margin-top","novalidate","",3,"ngFormOptions","ngSubmit",4,"ngIf"],["novalidate","",1,"ion-margin-top",3,"ngFormOptions","ngSubmit"],["registrationForm","ngForm"],["position","stacked"],["autocapitalize","off","autocomplete","username","name","username","ngModel","","type","text",3,"required","spellcheck"],["username","ngModel"],["color","danger",4,"ngIf"],[1,"ion-margin-top"],["color","secondary","expand","block","type","submit"],["color","danger"],["class","ion-padding-start",4,"ngIf"],[1,"ion-padding-start"],["autocapitalize","off","name","registrationAddCode","ngModel","","type","text",3,"required","spellcheck"],["registrationAddCode","ngModel"],["autocapitalize","off","name","recoveryCode","ngModel","","type","text",3,"required","spellcheck"],["recoveryCode","ngModel"],[1,"ion-padding","ion-text-center"],[4,"ngIf"],["color","secondary","expand","block","routerDirection","root","routerLink","/login"]],template:function(e,n){1&e&&(d.Ob(0,"ion-header"),d.Ob(1,"ion-toolbar",0),d.Ob(2,"ion-buttons",1),d.Kb(3,"ion-back-button",2),d.Nb(),d.Ob(4,"ion-title"),d.jc(5,"Registration"),d.Nb(),d.Nb(),d.Nb(),d.ic(6,C,14,3,"ion-content",3),d.ic(7,E,6,1,"ion-content",4)),2&e&&(d.zb(6),d.bc("ngIf",!n.recoveryToken),d.zb(1),d.bc("ngIf",n.recoveryToken))},directives:[c.i,c.s,c.e,c.b,c.c,c.r,t.h,c.g,c.o,c.y,c.p,c.l,o.i,o.e,o.f,c.h,c.n,c.f,c.k,c.j,c.z,o.d,o.g,o.h,c.d,c.q,c.x,r.h],styles:["code[_ngcontent-%COMP%]{font-weight:700;font-size:20px}"]}),e})()}];let Y=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(n){return new(n||e)},imports:[[t.b,o.a,c.t,s.b,r.i.forChild(R)]]}),e})()}}]);