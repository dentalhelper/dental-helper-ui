(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{F1ps:function(e,t,n){"use strict";var i=n("CcnG"),s=n("Ip0R");n("Js2B"),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return l});var o=i["\u0275crt"]({encapsulation:0,styles:[[".message-group[_ngcontent-%COMP%]{height:19px}"]],data:{animation:[{type:7,name:"exibir",definitions:[{type:0,name:"ready",styles:{type:6,styles:{opacity:1},offset:null},options:void 0},{type:1,expr:"void => ready",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:0,transform:"translateY(-20px)",offset:0},offset:null},{type:6,styles:{opacity:.8,transform:"translateY(-5px)",offset:.8},offset:null},{type:6,styles:{opacity:1,transform:"translateY(0px)",offset:1},offset:null}]},timings:"300ms 0s ease-in"},options:null},{type:1,expr:"ready => void",animation:{type:4,styles:null,timings:"0ms 0s ease-out"},options:null}],options:{}}]}});function r(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,1,"span",[["class","i-container__message i-container__message--success"]],[[24,"@exibir",0]],null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-check"]],null,null,null,null,null))],null,function(e,t){e(t,0,0,t.component.messageState)})}function u(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,2,"span",[["class","i-container__message i-container__message--error"]],[[24,"@exibir",0]],null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,1,"i",[["class","fas fa-times"]],null,null,null,null,null)),(e()(),i["\u0275ted"](2,null,[" ",""]))],null,function(e,t){var n=t.component;e(t,0,0,n.messageState),e(t,2,0,n.errorMessage)})}function l(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,7,"div",[["class","i-container"]],[[2,"has-success",null],[2,"has-error",null]],null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,1,"label",[["class","i-container__label"]],[[8,"htmlFor",0]],null,null,null,null)),(e()(),i["\u0275ted"](2,null,[" "," "])),i["\u0275ncd"](null,0),(e()(),i["\u0275and"](16777216,null,null,1,null,r)),i["\u0275did"](5,16384,null,0,s.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),i["\u0275and"](16777216,null,null,1,null,u)),i["\u0275did"](7,16384,null,0,s.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,t){var n=t.component;e(t,5,0,n.showTip&&n.hasSuccess()&&!n.dropdown),e(t,7,0,n.showTip&&n.hasError())},function(e,t){var n=t.component;e(t,0,0,n.hasSuccess(),n.hasError()),e(t,1,0,i["\u0275inlineInterpolate"](1,"",n.for,"")),e(t,2,0,n.label)})}},Js2B:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(){function e(){this.messageState="ready",this.showTip=!0,this.dropdown=!1}return e.prototype.ngOnInit=function(){},e.prototype.ngAfterContentInit=function(){if(this.input=this.model||this.control,void 0===this.input)throw new Error("Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName.")},e.prototype.hasSuccess=function(){return this.input.valid&&(this.input.dirty||this.input.touched)},e.prototype.hasError=function(){return this.input.invalid&&(this.input.dirty||this.input.touched)},e}()},UoT3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Ip0R"),s=n("gIcY"),o=n("CcnG"),r=n("udRp");t.CurrencyMaskModule=function(){function e(){}return e.decorators=[{type:o.NgModule,args:[{imports:[i.CommonModule,s.FormsModule],declarations:[r.CurrencyMaskDirective],exports:[r.CurrencyMaskDirective]}]}],e}()},bL53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("y61n");t.InputHandler=function(){function e(e,t){this.inputService=new i.InputService(e,t),this.htmlInputElement=e}return e.prototype.handleClick=function(e,t){0!=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)||isNaN(this.inputService.value)||this.inputService.fixCursorPosition(t)},e.prototype.handleCut=function(e){var t=this;this.isReadOnly()||setTimeout(function(){t.inputService.updateFieldValue(),t.setValue(t.inputService.value),t.onModelChange(t.inputService.value)},0)},e.prototype.handleInput=function(e){if(!this.isReadOnly()){var t=this.getNewKeyCode(this.inputService.storedRawValue,this.inputService.rawValue),n=this.inputService.rawValue.length,i=this.inputService.inputSelection.selectionEnd,s=this.inputService.getRawValueWithoutSuffixEndPosition(),o=this.inputService.storedRawValue.length;if(this.inputService.rawValue=this.inputService.storedRawValue,i==s&&1==Math.abs(n-o)||0==o){if(n<o&&(0!=this.inputService.value?this.inputService.removeNumber(8):this.setValue(null)),n>o)switch(t){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:if(!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(t).match(/\d/))return;this.inputService.addNumber(t)}this.setCursorPosition(e),this.onModelChange(this.inputService.value)}else this.setCursorPosition(e)}},e.prototype.handleKeydown=function(e){if(!this.isReadOnly()){var t=e.which||e.charCode||e.keyCode;if(8==t||46==t||63272==t){e.preventDefault();var n=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart);n!=this.inputService.rawValue.length&&0!=this.inputService.value||(this.setValue(null),this.onModelChange(this.inputService.value)),0!=n||isNaN(this.inputService.value)||(this.inputService.removeNumber(t),this.onModelChange(this.inputService.value)),8!==t&&46!==t||0==n||isNaN(this.inputService.value)||(this.inputService.removeNumber(t),this.onModelChange(this.inputService.value))}}},e.prototype.handleKeypress=function(e){if(!this.isReadOnly()){var t=e.which||e.charCode||e.keyCode;if(null!=t&&-1==[9,13].indexOf(t)&&!this.isArrowEndHomeKeyInFirefox(e)){switch(t){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(t).match(/\d/)||this.inputService.addNumber(t)}e.preventDefault(),this.onModelChange(this.inputService.value)}}},e.prototype.handleKeyup=function(e){this.inputService.fixCursorPosition()},e.prototype.handlePaste=function(e){var t=this;this.isReadOnly()||setTimeout(function(){t.inputService.updateFieldValue(),t.setValue(t.inputService.value),t.onModelChange(t.inputService.value)},1)},e.prototype.updateOptions=function(e){this.inputService.updateOptions(e)},e.prototype.getOnModelChange=function(){return this.onModelChange},e.prototype.setOnModelChange=function(e){this.onModelChange=e},e.prototype.getOnModelTouched=function(){return this.onModelTouched},e.prototype.setOnModelTouched=function(e){this.onModelTouched=e},e.prototype.setValue=function(e){this.inputService.value=e},e.prototype.getNewKeyCode=function(e,t){if(e.length>t.length)return null;for(var n=0;n<t.length;n++)if(e.length==n||e[n]!=t[n])return t.charCodeAt(n)},e.prototype.isArrowEndHomeKeyInFirefox=function(e){return-1!=[35,36,37,38,39,40].indexOf(e.keyCode)&&(null==e.charCode||0==e.charCode)},e.prototype.isReadOnly=function(){return this.htmlInputElement&&this.htmlInputElement.readOnly},e.prototype.setCursorPosition=function(e){var t=this.inputService.getRawValueWithoutSuffixEndPosition();setTimeout(function(){e.target.setSelectionRange(t,t)},0)},e}()},ehNZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InputManager=function(){function e(e){this.htmlInputElement=e}return e.prototype.setCursorAt=function(e){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(e,e);else if(this.htmlInputElement.createTextRange){var t=this.htmlInputElement.createTextRange();t.collapse(!0),t.moveEnd("character",e),t.moveStart("character",e),t.select()}},e.prototype.updateValueAndCursor=function(e,t,n){this.rawValue=e,this.setCursorAt(n-=t-e.length)},Object.defineProperty(e.prototype,"canInputMoreNumbers",{get:function(){var e=!(this.rawValue.length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),t=this.inputSelection.selectionStart,n=this.inputSelection.selectionEnd,i=!(t==n||!this.htmlInputElement.value.substring(t,n).match(/\d/)),s="0"==this.htmlInputElement.value.substring(0,1);return e||i||s},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputSelection",{get:function(){var e=0,t=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)e=this.htmlInputElement.selectionStart,t=this.htmlInputElement.selectionEnd;else{var n=document.getSelection().baseNode;if(n&&n.firstChild==this.htmlInputElement){var i=this.htmlInputElement.value.length,s=this.htmlInputElement.value.replace(/\r\n/g,"\n"),o=this.htmlInputElement.createTextRange(),r=this.htmlInputElement.createTextRange();r.collapse(!1),o.compareEndPoints("StartToEnd",r)>-1?e=t=i:(e=-o.moveStart("character",-i),e+=s.slice(0,e).split("\n").length-1,o.compareEndPoints("EndToEnd",r)>-1?t=i:(t=-o.moveEnd("character",-i),t+=s.slice(0,t).split("\n").length-1))}}return{selectionStart:e,selectionEnd:t}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rawValue",{get:function(){return this.htmlInputElement&&this.htmlInputElement.value},set:function(e){this._storedRawValue=e,this.htmlInputElement&&(this.htmlInputElement.value=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"storedRawValue",{get:function(){return this._storedRawValue},enumerable:!0,configurable:!0}),e}()},udRp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("CcnG"),s=n("gIcY"),o=(n("2Ifh"),n("bL53"));t.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR={provide:s.NG_VALUE_ACCESSOR,useExisting:i.forwardRef(function(){return r}),multi:!0};var r=function(){function e(e,t,n){this.currencyMaskConfig=e,this.elementRef=t,this.keyValueDiffers=n,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:","},e&&(this.optionsTemplate=e),this.keyValueDiffer=n.find({}).create()}return e.prototype.ngAfterViewInit=function(){this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align},e.prototype.ngDoCheck=function(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))},e.prototype.ngOnInit=function(){this.inputHandler=new o.InputHandler(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))},e.prototype.handleBlur=function(e){this.inputHandler.getOnModelTouched().apply(e)},e.prototype.handleClick=function(e){this.inputHandler.handleClick(e,this.isChromeAndroid())},e.prototype.handleCut=function(e){this.isChromeAndroid()||this.inputHandler.handleCut(e)},e.prototype.handleInput=function(e){this.isChromeAndroid()&&this.inputHandler.handleInput(e)},e.prototype.handleKeydown=function(e){this.isChromeAndroid()||this.inputHandler.handleKeydown(e)},e.prototype.handleKeypress=function(e){this.isChromeAndroid()||this.inputHandler.handleKeypress(e)},e.prototype.handleKeyup=function(e){this.isChromeAndroid()||this.inputHandler.handleKeyup(e)},e.prototype.handlePaste=function(e){this.isChromeAndroid()||this.inputHandler.handlePaste(e)},e.prototype.isChromeAndroid=function(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)},e.prototype.registerOnChange=function(e){this.inputHandler.setOnModelChange(e)},e.prototype.registerOnTouched=function(e){this.inputHandler.setOnModelTouched(e)},e.prototype.setDisabledState=function(e){this.elementRef.nativeElement.disabled=e},e.prototype.validate=function(e){var t={};return e.value>this.max&&(t.max=!0),e.value<this.min&&(t.min=!0),t!={}?t:null},e.prototype.writeValue=function(e){this.inputHandler.setValue(e)},e.decorators=[{type:i.Directive,args:[{selector:"[currencyMask]",providers:[t.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR,{provide:s.NG_VALIDATORS,useExisting:e,multi:!0}]}]}],e.propDecorators={max:[{type:i.Input}],min:[{type:i.Input}],options:[{type:i.Input}],handleBlur:[{type:i.HostListener,args:["blur",["$event"]]}],handleClick:[{type:i.HostListener,args:["click",["$event"]]}],handleCut:[{type:i.HostListener,args:["cut",["$event"]]}],handleInput:[{type:i.HostListener,args:["input",["$event"]]}],handleKeydown:[{type:i.HostListener,args:["keydown",["$event"]]}],handleKeypress:[{type:i.HostListener,args:["keypress",["$event"]]}],handleKeyup:[{type:i.HostListener,args:["keyup",["$event"]]}],handlePaste:[{type:i.HostListener,args:["paste",["$event"]]}]},e}();t.CurrencyMaskDirective=r},y61n:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("ehNZ");t.InputService=function(){function e(e,t){this.htmlInputElement=e,this.options=t,this.inputManager=new i.InputManager(e)}return e.prototype.addNumber=function(e){this.rawValue||(this.rawValue=this.applyMask(!1,"0"));var t=String.fromCharCode(e),n=this.inputSelection.selectionStart,i=this.inputSelection.selectionEnd;this.rawValue=this.rawValue.substring(0,n)+t+this.rawValue.substring(i,this.rawValue.length),this.updateFieldValue(n+1)},e.prototype.applyMask=function(e,t){var n=this.options,i=n.allowNegative,s=n.decimal,o=n.precision,r=n.prefix,u=n.suffix,l=n.thousands,a=(t=e?new Number(t).toFixed(o):t).replace(/[^0-9]/g,"");if(!a)return"";var p=a.slice(0,a.length-o).replace(/^0*/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,l);""==p&&(p="0");var h=p,c=a.slice(a.length-o);o>0&&(h+=s+(c="0".repeat(o-c.length)+c));var d=0==parseInt(p)&&(0==parseInt(c)||""==c);return(t.indexOf("-")>-1&&i&&!d?"-":"")+r+h+u},e.prototype.clearMask=function(e){if(null==e||""==e)return null;var t=e.replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(t=t.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(t=t.replace(this.options.decimal,".")),parseFloat(t)},e.prototype.changeToNegative=function(){if(this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value){var e=this.inputSelection.selectionStart;this.rawValue="-"+this.rawValue,this.updateFieldValue(e+1)}},e.prototype.changeToPositive=function(){var e=this.inputSelection.selectionStart;this.rawValue=this.rawValue.replace("-",""),this.updateFieldValue(e-1)},e.prototype.fixCursorPosition=function(e){var t=this.inputSelection.selectionStart;t>this.getRawValueWithoutSuffixEndPosition()||e?this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition()):t<this.getRawValueWithoutPrefixStartPosition()&&this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition())},e.prototype.getRawValueWithoutSuffixEndPosition=function(){return this.rawValue.length-this.options.suffix.length},e.prototype.getRawValueWithoutPrefixStartPosition=function(){return null!=this.value&&this.value<0?this.options.prefix.length+1:this.options.prefix.length},e.prototype.removeNumber=function(e){var t=this.options,n=t.decimal,i=t.thousands,s=this.inputSelection.selectionEnd,o=this.inputSelection.selectionStart;o>this.rawValue.length-this.options.suffix.length&&(s=this.rawValue.length-this.options.suffix.length,o=this.rawValue.length-this.options.suffix.length),s==o&&(46!=e&&63272!=e||!/^\d+$/.test(this.rawValue.substring(o,s+1))||(s+=1),46!=e&&63272!=e||this.rawValue.substring(o,s+1)!=n&&this.rawValue.substring(o,s+1)!=i||(s+=2,o+=1),8==e&&/^\d+$/.test(this.rawValue.substring(o-1,s))&&(o-=1),8!=e||this.rawValue.substring(o-1,s)!=n&&this.rawValue.substring(o-1,s)!=i||(o-=2,s-=1)),this.rawValue=this.rawValue.substring(0,o)+this.rawValue.substring(s,this.rawValue.length),this.updateFieldValue(o)},e.prototype.updateFieldValue=function(e){var t=this.applyMask(!1,this.rawValue||"");this.inputManager.updateValueAndCursor(t,this.rawValue.length,e=null==e?this.rawValue.length:e)},e.prototype.updateOptions=function(e){var t=this.value;this.options=e,this.value=t},Object.defineProperty(e.prototype,"canInputMoreNumbers",{get:function(){return this.inputManager.canInputMoreNumbers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputSelection",{get:function(){return this.inputManager.inputSelection},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rawValue",{get:function(){return this.inputManager.rawValue},set:function(e){this.inputManager.rawValue=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"storedRawValue",{get:function(){return this.inputManager.storedRawValue},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.clearMask(this.rawValue)},set:function(e){this.rawValue=this.applyMask(!0,""+e)},enumerable:!0,configurable:!0}),e}()}}]);