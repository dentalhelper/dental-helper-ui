(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Fa87:function(t,e,i){var n=i("mrSG").__decorate,s=i("mrSG").__metadata;Object.defineProperty(e,"__esModule",{value:!0});var o=i("CcnG"),r=(i("gIcY"),i("Ip0R")),a=function(){function t(t,e){this.el=t,this.ngModel=e}return t.prototype.ngDoCheck=function(){this.updateFilledState()},t.prototype.onInput=function(t){this.updateFilledState()},t.prototype.updateFilledState=function(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model},n([o.HostListener("input",["$event"]),s("design:type",Function),s("design:paramtypes",[Object]),s("design:returntype",void 0)],t.prototype,"onInput",null),n([o.Directive({selector:"[pInputText]",host:{"[class.ui-inputtext]":"true","[class.ui-corner-all]":"true","[class.ui-state-default]":"true","[class.ui-widget]":"true","[class.ui-state-filled]":"filled"}})],t)}();e.InputText=a,e.InputTextModule=function(){return n([o.NgModule({imports:[r.CommonModule],exports:[a],declarations:[a]})],function(){})}()},UoT3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Ip0R"),s=i("gIcY"),o=i("CcnG"),r=i("udRp");e.CurrencyMaskModule=function(){function t(){}return t.decorators=[{type:o.NgModule,args:[{imports:[n.CommonModule,s.FormsModule],declarations:[r.CurrencyMaskDirective],exports:[r.CurrencyMaskDirective]}]}],t}()},WqA8:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i("nWBu"),s=i("CcnG"),o=i("t/Na"),r=function(){function t(t){this.http=t,this.ESTADO_URL=n.a+"/estados"}return t.prototype.pesquisar=function(){return this.http.get(this.ESTADO_URL)},t.prototype.pesquisarCidades=function(t){return this.http.get(this.ESTADO_URL+"/"+t+"/cidades")},t.ngInjectableDef=s.defineInjectable({factory:function(){return new t(s.inject(o.HttpClient))},token:t,providedIn:"root"}),t}()},bL53:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("y61n");e.InputHandler=function(){function t(t,e){this.inputService=new n.InputService(t,e),this.htmlInputElement=t}return t.prototype.handleClick=function(t,e){0!=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)||isNaN(this.inputService.value)||this.inputService.fixCursorPosition(e)},t.prototype.handleCut=function(t){var e=this;this.isReadOnly()||setTimeout(function(){e.inputService.updateFieldValue(),e.setValue(e.inputService.value),e.onModelChange(e.inputService.value)},0)},t.prototype.handleInput=function(t){if(!this.isReadOnly()){var e=this.getNewKeyCode(this.inputService.storedRawValue,this.inputService.rawValue),i=this.inputService.rawValue.length,n=this.inputService.inputSelection.selectionEnd,s=this.inputService.getRawValueWithoutSuffixEndPosition(),o=this.inputService.storedRawValue.length;if(this.inputService.rawValue=this.inputService.storedRawValue,n==s&&1==Math.abs(i-o)||0==o){if(i<o&&(0!=this.inputService.value?this.inputService.removeNumber(8):this.setValue(null)),i>o)switch(e){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:if(!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(e).match(/\d/))return;this.inputService.addNumber(e)}this.setCursorPosition(t),this.onModelChange(this.inputService.value)}else this.setCursorPosition(t)}},t.prototype.handleKeydown=function(t){if(!this.isReadOnly()){var e=t.which||t.charCode||t.keyCode;if(8==e||46==e||63272==e){t.preventDefault();var i=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart);i!=this.inputService.rawValue.length&&0!=this.inputService.value||(this.setValue(null),this.onModelChange(this.inputService.value)),0!=i||isNaN(this.inputService.value)||(this.inputService.removeNumber(e),this.onModelChange(this.inputService.value)),8!==e&&46!==e||0==i||isNaN(this.inputService.value)||(this.inputService.removeNumber(e),this.onModelChange(this.inputService.value))}}},t.prototype.handleKeypress=function(t){if(!this.isReadOnly()){var e=t.which||t.charCode||t.keyCode;if(null!=e&&-1==[9,13].indexOf(e)&&!this.isArrowEndHomeKeyInFirefox(t)){switch(e){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(e).match(/\d/)||this.inputService.addNumber(e)}t.preventDefault(),this.onModelChange(this.inputService.value)}}},t.prototype.handleKeyup=function(t){this.inputService.fixCursorPosition()},t.prototype.handlePaste=function(t){var e=this;this.isReadOnly()||setTimeout(function(){e.inputService.updateFieldValue(),e.setValue(e.inputService.value),e.onModelChange(e.inputService.value)},1)},t.prototype.updateOptions=function(t){this.inputService.updateOptions(t)},t.prototype.getOnModelChange=function(){return this.onModelChange},t.prototype.setOnModelChange=function(t){this.onModelChange=t},t.prototype.getOnModelTouched=function(){return this.onModelTouched},t.prototype.setOnModelTouched=function(t){this.onModelTouched=t},t.prototype.setValue=function(t){this.inputService.value=t},t.prototype.getNewKeyCode=function(t,e){if(t.length>e.length)return null;for(var i=0;i<e.length;i++)if(t.length==i||t[i]!=e[i])return e.charCodeAt(i)},t.prototype.isArrowEndHomeKeyInFirefox=function(t){return-1!=[35,36,37,38,39,40].indexOf(t.keyCode)&&(null==t.charCode||0==t.charCode)},t.prototype.isReadOnly=function(){return this.htmlInputElement&&this.htmlInputElement.readOnly},t.prototype.setCursorPosition=function(t){var e=this.inputService.getRawValueWithoutSuffixEndPosition();setTimeout(function(){t.target.setSelectionRange(e,e)},0)},t}()},ehNZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InputManager=function(){function t(t){this.htmlInputElement=t}return t.prototype.setCursorAt=function(t){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(t,t);else if(this.htmlInputElement.createTextRange){var e=this.htmlInputElement.createTextRange();e.collapse(!0),e.moveEnd("character",t),e.moveStart("character",t),e.select()}},t.prototype.updateValueAndCursor=function(t,e,i){this.rawValue=t,this.setCursorAt(i-=e-t.length)},Object.defineProperty(t.prototype,"canInputMoreNumbers",{get:function(){var t=!(this.rawValue.length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),e=this.inputSelection.selectionStart,i=this.inputSelection.selectionEnd,n=!(e==i||!this.htmlInputElement.value.substring(e,i).match(/\d/)),s="0"==this.htmlInputElement.value.substring(0,1);return t||n||s},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputSelection",{get:function(){var t=0,e=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)t=this.htmlInputElement.selectionStart,e=this.htmlInputElement.selectionEnd;else{var i=document.getSelection().baseNode;if(i&&i.firstChild==this.htmlInputElement){var n=this.htmlInputElement.value.length,s=this.htmlInputElement.value.replace(/\r\n/g,"\n"),o=this.htmlInputElement.createTextRange(),r=this.htmlInputElement.createTextRange();r.collapse(!1),o.compareEndPoints("StartToEnd",r)>-1?t=e=n:(t=-o.moveStart("character",-n),t+=s.slice(0,t).split("\n").length-1,o.compareEndPoints("EndToEnd",r)>-1?e=n:(e=-o.moveEnd("character",-n),e+=s.slice(0,e).split("\n").length-1))}}return{selectionStart:t,selectionEnd:e}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rawValue",{get:function(){return this.htmlInputElement&&this.htmlInputElement.value},set:function(t){this._storedRawValue=t,this.htmlInputElement&&(this.htmlInputElement.value=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storedRawValue",{get:function(){return this._storedRawValue},enumerable:!0,configurable:!0}),t}()},"oz/p":function(t,e,i){var n=i("mrSG").__decorate,s=i("mrSG").__metadata;Object.defineProperty(e,"__esModule",{value:!0});var o=i("CcnG"),r=i("Ip0R"),a=i("sdDj"),u=i("Fa87"),l=i("gIcY");e.INPUTMASK_VALUE_ACCESSOR={provide:l.NG_VALUE_ACCESSOR,useExisting:o.forwardRef(function(){return h}),multi:!0};var h=function(){function t(t){this.el=t,this.type="text",this.slotChar="_",this.autoClear=!0,this.characterPattern="[A-Za-z]",this.onComplete=new o.EventEmitter,this.onFocus=new o.EventEmitter,this.onBlur=new o.EventEmitter,this.onInput=new o.EventEmitter,this.onModelChange=function(){},this.onModelTouched=function(){}}return t.prototype.ngOnInit=function(){var t=a.DomHandler.getUserAgent();this.androidChrome=/chrome/i.test(t)&&/android/i.test(t),this.initMask()},Object.defineProperty(t.prototype,"mask",{get:function(){return this._mask},set:function(t){this._mask=t,this.initMask(),this.writeValue(""),this.onModelChange(this.value)},enumerable:!0,configurable:!0}),t.prototype.initMask=function(){this.tests=[],this.partialPosition=this.mask.length,this.len=this.mask.length,this.firstNonMaskPos=null,this.defs={9:"[0-9]",a:this.characterPattern,"*":this.characterPattern+"|[0-9]"};for(var t=this.mask.split(""),e=0;e<t.length;e++)"?"==(i=t[e])?(this.len--,this.partialPosition=e):this.defs[i]?(this.tests.push(new RegExp(this.defs[i])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1),e<this.partialPosition&&(this.lastRequiredNonMaskPos=this.tests.length-1)):this.tests.push(null);for(this.buffer=[],e=0;e<t.length;e++){var i;"?"!=(i=t[e])&&this.buffer.push(this.defs[i]?this.getPlaceholder(e):i)}this.defaultBuffer=this.buffer.join("")},t.prototype.writeValue=function(t){this.value=t,this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.value=null==this.value||null==this.value?"":this.value,this.checkVal(),this.focusText=this.inputViewChild.nativeElement.value,this.updateFilledState())},t.prototype.registerOnChange=function(t){this.onModelChange=t},t.prototype.registerOnTouched=function(t){this.onModelTouched=t},t.prototype.setDisabledState=function(t){this.disabled=t},t.prototype.caret=function(t,e){var i,n,s;if(this.inputViewChild.nativeElement.offsetParent&&this.inputViewChild.nativeElement===document.activeElement)return"number"!=typeof t?(this.inputViewChild.nativeElement.setSelectionRange?(n=this.inputViewChild.nativeElement.selectionStart,s=this.inputViewChild.nativeElement.selectionEnd):document.selection&&document.selection.createRange&&(s=(n=0-(i=document.selection.createRange()).duplicate().moveStart("character",-1e5))+i.text.length),{begin:n,end:s}):(n=t,s="number"==typeof e?e:n,void(this.inputViewChild.nativeElement.setSelectionRange?this.inputViewChild.nativeElement.setSelectionRange(n,s):this.inputViewChild.nativeElement.createTextRange&&((i=this.inputViewChild.nativeElement.createTextRange()).collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i.select())))},t.prototype.isCompleted=function(){for(var t=this.firstNonMaskPos;t<=this.lastRequiredNonMaskPos;t++)if(this.tests[t]&&this.buffer[t]===this.getPlaceholder(t))return!1;return!0},t.prototype.getPlaceholder=function(t){return this.slotChar.charAt(t<this.slotChar.length?t:0)},t.prototype.seekNext=function(t){for(;++t<this.len&&!this.tests[t];);return t},t.prototype.seekPrev=function(t){for(;--t>=0&&!this.tests[t];);return t},t.prototype.shiftL=function(t,e){var i,n;if(!(t<0)){for(i=t,n=this.seekNext(e);i<this.len;i++)if(this.tests[i]){if(!(n<this.len&&this.tests[i].test(this.buffer[n])))break;this.buffer[i]=this.buffer[n],this.buffer[n]=this.getPlaceholder(n),n=this.seekNext(n)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,t))}},t.prototype.shiftR=function(t){var e,i,n,s;for(e=t,i=this.getPlaceholder(t);e<this.len;e++)if(this.tests[e]){if(n=this.seekNext(e),s=this.buffer[e],this.buffer[e]=i,!(n<this.len&&this.tests[n].test(s)))break;i=s}},t.prototype.handleAndroidInput=function(t){var e=this,i=this.inputViewChild.nativeElement.value,n=this.caret();if(this.oldVal&&this.oldVal.length&&this.oldVal.length>i.length){for(this.checkVal(!0);n.begin>0&&!this.tests[n.begin-1];)n.begin--;if(0===n.begin)for(;n.begin<this.firstNonMaskPos&&!this.tests[n.begin];)n.begin++;setTimeout(function(){e.caret(n.begin,n.begin),e.updateModel(t),e.isCompleted()&&e.onComplete.emit()},0)}else{for(this.checkVal(!0);n.begin<this.len&&!this.tests[n.begin];)n.begin++;setTimeout(function(){e.caret(n.begin,n.begin),e.updateModel(t),e.isCompleted()&&e.onComplete.emit()},0)}},t.prototype.onInputBlur=function(t){if(this.focused=!1,this.onModelTouched(),this.checkVal(),this.updateFilledState(),this.onBlur.emit(t),this.inputViewChild.nativeElement.value!=this.focusText){this.updateModel(t);var e=document.createEvent("HTMLEvents");e.initEvent("change",!0,!1),this.inputViewChild.nativeElement.dispatchEvent(e)}},t.prototype.onKeyDown=function(t){if(!this.readonly){var e,i,n,s=t.which||t.keyCode,o=/iphone/i.test(a.DomHandler.getUserAgent());this.oldVal=this.inputViewChild.nativeElement.value,8===s||46===s||o&&127===s?((n=(e=this.caret()).end)-(i=e.begin)==0&&(i=46!==s?this.seekPrev(i):n=this.seekNext(i-1),n=46===s?this.seekNext(n):n),this.clearBuffer(i,n),this.shiftL(i,n-1),this.updateModel(t),t.preventDefault()):13===s?(this.onInputBlur(t),this.updateModel(t)):27===s&&(this.inputViewChild.nativeElement.value=this.focusText,this.caret(0,this.checkVal()),this.updateModel(t),t.preventDefault())}},t.prototype.onKeyPress=function(t){var e=this;if(!this.readonly){var i,n,s,o,r=t.which||t.keyCode,u=this.caret();t.ctrlKey||t.altKey||t.metaKey||r<32||r>34&&r<41||(r&&13!==r&&(u.end-u.begin!=0&&(this.clearBuffer(u.begin,u.end),this.shiftL(u.begin,u.end-1)),(i=this.seekNext(u.begin-1))<this.len&&(n=String.fromCharCode(r),this.tests[i].test(n))&&(this.shiftR(i),this.buffer[i]=n,this.writeBuffer(),s=this.seekNext(i),/android/i.test(a.DomHandler.getUserAgent())?setTimeout(function(){e.caret(s)},0):this.caret(s),u.begin<=this.lastRequiredNonMaskPos&&(o=this.isCompleted())),t.preventDefault()),this.updateModel(t),this.updateFilledState(),o&&this.onComplete.emit())}},t.prototype.clearBuffer=function(t,e){var i;for(i=t;i<e&&i<this.len;i++)this.tests[i]&&(this.buffer[i]=this.getPlaceholder(i))},t.prototype.writeBuffer=function(){this.inputViewChild.nativeElement.value=this.buffer.join("")},t.prototype.checkVal=function(t){var e,i,n,s=this.inputViewChild.nativeElement.value,o=-1;for(e=0,n=0;e<this.len;e++)if(this.tests[e]){for(this.buffer[e]=this.getPlaceholder(e);n++<s.length;)if(i=s.charAt(n-1),this.tests[e].test(i)){this.buffer[e]=i,o=e;break}if(n>s.length){this.clearBuffer(e+1,this.len);break}}else this.buffer[e]===s.charAt(n)&&n++,e<this.partialPosition&&(o=e);return t?this.writeBuffer():o+1<this.partialPosition?this.autoClear||this.buffer.join("")===this.defaultBuffer?(this.inputViewChild.nativeElement.value&&(this.inputViewChild.nativeElement.value=""),this.clearBuffer(0,this.len)):this.writeBuffer():(this.writeBuffer(),this.inputViewChild.nativeElement.value=this.inputViewChild.nativeElement.value.substring(0,o+1)),this.partialPosition?e:this.firstNonMaskPos},t.prototype.onInputFocus=function(t){var e,i=this;this.readonly||(this.focused=!0,clearTimeout(this.caretTimeoutId),this.focusText=this.inputViewChild.nativeElement.value,e=this.checkVal(),this.caretTimeoutId=setTimeout(function(){i.inputViewChild.nativeElement===document.activeElement&&(i.writeBuffer(),e==i.mask.replace("?","").length?i.caret(0,e):i.caret(e))},10),this.onFocus.emit(t))},t.prototype.onInputChange=function(t){this.androidChrome?this.handleAndroidInput(t):this.handleInputChange(t),this.onInput.emit(t)},t.prototype.handleInputChange=function(t){var e=this;this.readonly||setTimeout(function(){var i=e.checkVal(!0);e.caret(i),e.updateModel(t),e.isCompleted()&&e.onComplete.emit()},0)},t.prototype.getUnmaskedValue=function(){for(var t=[],e=0;e<this.buffer.length;e++){var i=this.buffer[e];this.tests[e]&&i!=this.getPlaceholder(e)&&t.push(i)}return t.join("")},t.prototype.updateModel=function(t){var e=this.unmask?this.getUnmaskedValue():t.target.value;null===e&&void 0===e||(this.value=e,this.onModelChange(this.value))},t.prototype.updateFilledState=function(){this.filled=this.inputViewChild.nativeElement&&""!=this.inputViewChild.nativeElement.value},t.prototype.focus=function(){this.inputViewChild.nativeElement.focus()},t.prototype.ngOnDestroy=function(){},n([o.Input(),s("design:type",String)],t.prototype,"type",void 0),n([o.Input(),s("design:type",String)],t.prototype,"slotChar",void 0),n([o.Input(),s("design:type",Boolean)],t.prototype,"autoClear",void 0),n([o.Input(),s("design:type",String)],t.prototype,"style",void 0),n([o.Input(),s("design:type",String)],t.prototype,"inputId",void 0),n([o.Input(),s("design:type",String)],t.prototype,"styleClass",void 0),n([o.Input(),s("design:type",String)],t.prototype,"placeholder",void 0),n([o.Input(),s("design:type",Number)],t.prototype,"size",void 0),n([o.Input(),s("design:type",Number)],t.prototype,"maxlength",void 0),n([o.Input(),s("design:type",String)],t.prototype,"tabindex",void 0),n([o.Input(),s("design:type",String)],t.prototype,"ariaLabel",void 0),n([o.Input(),s("design:type",Boolean)],t.prototype,"ariaRequired",void 0),n([o.Input(),s("design:type",Boolean)],t.prototype,"disabled",void 0),n([o.Input(),s("design:type",Boolean)],t.prototype,"readonly",void 0),n([o.Input(),s("design:type",Boolean)],t.prototype,"unmask",void 0),n([o.Input(),s("design:type",String)],t.prototype,"name",void 0),n([o.Input(),s("design:type",Boolean)],t.prototype,"required",void 0),n([o.Input(),s("design:type",String)],t.prototype,"characterPattern",void 0),n([o.Input(),s("design:type",Boolean)],t.prototype,"autoFocus",void 0),n([o.Input(),s("design:type",String)],t.prototype,"autocomplete",void 0),n([o.ViewChild("input"),s("design:type",o.ElementRef)],t.prototype,"inputViewChild",void 0),n([o.Output(),s("design:type",o.EventEmitter)],t.prototype,"onComplete",void 0),n([o.Output(),s("design:type",o.EventEmitter)],t.prototype,"onFocus",void 0),n([o.Output(),s("design:type",o.EventEmitter)],t.prototype,"onBlur",void 0),n([o.Output(),s("design:type",o.EventEmitter)],t.prototype,"onInput",void 0),n([o.Input(),s("design:type",String),s("design:paramtypes",[String])],t.prototype,"mask",null),n([o.Component({selector:"p-inputMask",template:'<input #input pInputText [attr.id]="inputId" [attr.type]="type" [attr.name]="name" [ngStyle]="style" [ngClass]="styleClass" [attr.placeholder]="placeholder"\n        [attr.size]="size" [attr.autocomplete]="autocomplete" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [attr.aria-label]="ariaLabel" [attr.aria-required]="ariaRequired" [disabled]="disabled" [readonly]="readonly" [attr.required]="required"\n        (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" (keydown)="onKeyDown($event)" (keypress)="onKeyPress($event)" [attr.autofocus]="autoFocus"\n        (input)="onInputChange($event)" (paste)="handleInputChange($event)">',host:{"[class.ui-inputwrapper-filled]":"filled","[class.ui-inputwrapper-focus]":"focus"},providers:[e.INPUTMASK_VALUE_ACCESSOR]})],t)}();e.InputMask=h,e.InputMaskModule=function(){return n([o.NgModule({imports:[r.CommonModule,u.InputTextModule],exports:[h],declarations:[h]})],function(){})}()},q6DR:function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"a",function(){return s});var n=/^[0-9]*$/,s=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i},udRp:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("CcnG"),s=i("gIcY"),o=(i("2Ifh"),i("bL53"));e.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR={provide:s.NG_VALUE_ACCESSOR,useExisting:n.forwardRef(function(){return r}),multi:!0};var r=function(){function t(t,e,i){this.currencyMaskConfig=t,this.elementRef=e,this.keyValueDiffers=i,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:","},t&&(this.optionsTemplate=t),this.keyValueDiffer=i.find({}).create()}return t.prototype.ngAfterViewInit=function(){this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align},t.prototype.ngDoCheck=function(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))},t.prototype.ngOnInit=function(){this.inputHandler=new o.InputHandler(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))},t.prototype.handleBlur=function(t){this.inputHandler.getOnModelTouched().apply(t)},t.prototype.handleClick=function(t){this.inputHandler.handleClick(t,this.isChromeAndroid())},t.prototype.handleCut=function(t){this.isChromeAndroid()||this.inputHandler.handleCut(t)},t.prototype.handleInput=function(t){this.isChromeAndroid()&&this.inputHandler.handleInput(t)},t.prototype.handleKeydown=function(t){this.isChromeAndroid()||this.inputHandler.handleKeydown(t)},t.prototype.handleKeypress=function(t){this.isChromeAndroid()||this.inputHandler.handleKeypress(t)},t.prototype.handleKeyup=function(t){this.isChromeAndroid()||this.inputHandler.handleKeyup(t)},t.prototype.handlePaste=function(t){this.isChromeAndroid()||this.inputHandler.handlePaste(t)},t.prototype.isChromeAndroid=function(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)},t.prototype.registerOnChange=function(t){this.inputHandler.setOnModelChange(t)},t.prototype.registerOnTouched=function(t){this.inputHandler.setOnModelTouched(t)},t.prototype.setDisabledState=function(t){this.elementRef.nativeElement.disabled=t},t.prototype.validate=function(t){var e={};return t.value>this.max&&(e.max=!0),t.value<this.min&&(e.min=!0),e!={}?e:null},t.prototype.writeValue=function(t){this.inputHandler.setValue(t)},t.decorators=[{type:n.Directive,args:[{selector:"[currencyMask]",providers:[e.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR,{provide:s.NG_VALIDATORS,useExisting:t,multi:!0}]}]}],t.propDecorators={max:[{type:n.Input}],min:[{type:n.Input}],options:[{type:n.Input}],handleBlur:[{type:n.HostListener,args:["blur",["$event"]]}],handleClick:[{type:n.HostListener,args:["click",["$event"]]}],handleCut:[{type:n.HostListener,args:["cut",["$event"]]}],handleInput:[{type:n.HostListener,args:["input",["$event"]]}],handleKeydown:[{type:n.HostListener,args:["keydown",["$event"]]}],handleKeypress:[{type:n.HostListener,args:["keypress",["$event"]]}],handleKeyup:[{type:n.HostListener,args:["keyup",["$event"]]}],handlePaste:[{type:n.HostListener,args:["paste",["$event"]]}]},t}();e.CurrencyMaskDirective=r},y61n:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("ehNZ");e.InputService=function(){function t(t,e){this.htmlInputElement=t,this.options=e,this.inputManager=new n.InputManager(t)}return t.prototype.addNumber=function(t){this.rawValue||(this.rawValue=this.applyMask(!1,"0"));var e=String.fromCharCode(t),i=this.inputSelection.selectionStart,n=this.inputSelection.selectionEnd;this.rawValue=this.rawValue.substring(0,i)+e+this.rawValue.substring(n,this.rawValue.length),this.updateFieldValue(i+1)},t.prototype.applyMask=function(t,e){var i=this.options,n=i.allowNegative,s=i.decimal,o=i.precision,r=i.prefix,a=i.suffix,u=i.thousands,l=(e=t?new Number(e).toFixed(o):e).replace(/[^0-9]/g,"");if(!l)return"";var h=l.slice(0,l.length-o).replace(/^0*/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,u);""==h&&(h="0");var p=h,c=l.slice(l.length-o);o>0&&(p+=s+(c="0".repeat(o-c.length)+c));var d=0==parseInt(h)&&(0==parseInt(c)||""==c);return(e.indexOf("-")>-1&&n&&!d?"-":"")+r+p+a},t.prototype.clearMask=function(t){if(null==t||""==t)return null;var e=t.replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(e=e.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(e=e.replace(this.options.decimal,".")),parseFloat(e)},t.prototype.changeToNegative=function(){if(this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value){var t=this.inputSelection.selectionStart;this.rawValue="-"+this.rawValue,this.updateFieldValue(t+1)}},t.prototype.changeToPositive=function(){var t=this.inputSelection.selectionStart;this.rawValue=this.rawValue.replace("-",""),this.updateFieldValue(t-1)},t.prototype.fixCursorPosition=function(t){var e=this.inputSelection.selectionStart;e>this.getRawValueWithoutSuffixEndPosition()||t?this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition()):e<this.getRawValueWithoutPrefixStartPosition()&&this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition())},t.prototype.getRawValueWithoutSuffixEndPosition=function(){return this.rawValue.length-this.options.suffix.length},t.prototype.getRawValueWithoutPrefixStartPosition=function(){return null!=this.value&&this.value<0?this.options.prefix.length+1:this.options.prefix.length},t.prototype.removeNumber=function(t){var e=this.options,i=e.decimal,n=e.thousands,s=this.inputSelection.selectionEnd,o=this.inputSelection.selectionStart;o>this.rawValue.length-this.options.suffix.length&&(s=this.rawValue.length-this.options.suffix.length,o=this.rawValue.length-this.options.suffix.length),s==o&&(46!=t&&63272!=t||!/^\d+$/.test(this.rawValue.substring(o,s+1))||(s+=1),46!=t&&63272!=t||this.rawValue.substring(o,s+1)!=i&&this.rawValue.substring(o,s+1)!=n||(s+=2,o+=1),8==t&&/^\d+$/.test(this.rawValue.substring(o-1,s))&&(o-=1),8!=t||this.rawValue.substring(o-1,s)!=i&&this.rawValue.substring(o-1,s)!=n||(o-=2,s-=1)),this.rawValue=this.rawValue.substring(0,o)+this.rawValue.substring(s,this.rawValue.length),this.updateFieldValue(o)},t.prototype.updateFieldValue=function(t){var e=this.applyMask(!1,this.rawValue||"");this.inputManager.updateValueAndCursor(e,this.rawValue.length,t=null==t?this.rawValue.length:t)},t.prototype.updateOptions=function(t){var e=this.value;this.options=t,this.value=e},Object.defineProperty(t.prototype,"canInputMoreNumbers",{get:function(){return this.inputManager.canInputMoreNumbers},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputSelection",{get:function(){return this.inputManager.inputSelection},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rawValue",{get:function(){return this.inputManager.rawValue},set:function(t){this.inputManager.rawValue=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storedRawValue",{get:function(){return this.inputManager.storedRawValue},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this.clearMask(this.rawValue)},set:function(t){this.rawValue=this.applyMask(!0,""+t)},enumerable:!0,configurable:!0}),t}()}}]);