(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(87),keywords=["all","and","any","ascii","at","condition","contains","entrypoint","false","filesize","fullword","for","global","in","import","include","int8","int16","int32","int8be","int16be","int32be","matches","meta","nocase","not","or","of","private","rule","strings","them","true","uint8","uint16","uint32","uint8be","uint16be","uint32be","wide"];__webpack_require__(435);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _templateObject2(){var data=_taggedTemplateLiteral(['\n      <div class="line-numbers"></div>\n      <pre id="editor"></pre>\n      <textarea id="textarea" spellcheck="false"><slot></slot></textarea>\n    ']);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(['\n      :host {\n        display: flex;\n        position: relative;\n        overflow-y: auto;\n        background: var(--ye-background-color);\n        --ye-font-family: monospace, "Courier New",  Courier;\n        --ye-font-size: 13px;\n        --ye-line-height: 15px;\n        --ye-keyword-color: #708;\n        --ye-word-color: #000;\n        --ye-string-color: #a11;\n        --ye-comment-color: #a50;\n        --ye-background-color: #FFF;\n        --ye-padding: 10px;\n        --ye-line-numbers-background-color: #f7f7f7;\n        --ye-line-numbers-color: #999;\n        --ye-line-numbers-border-color: #ddd;\n        --ye-line-numbers-width: 30px;\n      }\n      *, *:before, *:after {\n        box-sizing: border-box;\n      }\n      #ye-editor {\n        display: flex;\n      }\n      .line-numbers {\n        color: var(--ye-line-numbers-color);\n        font-family: var(--ye-font-family);\n        border-right: 1px solid var(--ye-line-numbers-border-color);\n        background-color: var(--ye-line-numbers-background-color);\n        white-space: nowrap;\n        padding-top: var(--ye-padding);\n        width: var(--ye-line-numbers-width);\n        user-select: none;\n        @apply --ye-line-numers;\n        font-size: var(--ye-font-size);\n      }\n      .line-numbers > div {\n        padding: 0 3px 0 5px;\n        min-width: 20px;\n        height: var(--ye-line-height);\n        text-align: right;\n      }\n      #editor {\n        flex: 1 1 100%;\n        position: absolute;\n        padding: var(--ye-padding);\n        cursor: text;\n        white-space: pre-wrap;\n        margin: 0;\n        margin-left: var(--ye-line-numbers-width);\n        background-color: var(--ye-background-color);\n        color: var(--ye-word-color);\n        font-family: var(--ye-font-family);\n        font-size: var(--ye-font-size);\n        line-height: var(--ye-line-height);\n      }\n      textarea {\n        flex: 1;\n        position: relative;\n        padding: var(--ye-padding);\n        border: 0;\n        opacity: 1;\n        background: transparent;\n        color: transparent;\n        caret-color: var(--ye-word-color);\n        outline: none;\n        resize: none;\n        font-family: var(--ye-font-family);\n        font-size: var(--ye-font-size);\n        line-height: var(--ye-line-height);\n      }\n      .ye-keyword {\n        color: var(--ye-keyword-color);\n        @apply --ye-keyword;\n      }\n      .ye-word {\n        color: var(--ye-word-color);\n        @apply --ye-color;\n      }\n      .ye-string {\n        color: var(--ye-string-color);\n        @apply --ye-string;\n      }\n      .ye-comment {\n        color: var(--ye-comment-color) !important;\n        @apply --ye-comment;\n      }\n    ']);return _templateObject=function _templateObject(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}__webpack_require__.d(__webpack_exports__,"a",function(){return YaraEditor_YaraEditor});var YaraEditor_YaraEditor=function(_LitElement){function YaraEditor(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,YaraEditor),(_this=_possibleConstructorReturn(this,_getPrototypeOf(YaraEditor).call(this)))._keywords=keywords,_this._regexReplaces=[{regex:/"(.*?)"/g,replacer:function replacer(str,p1){return'<span class="ye-string">"'.concat(p1,'"</span>')}},{regex:/(\/\*([\s\S]*?)\*\/)/g,replacer:function replacer(str,p1){return'<span class="ye-comment">'.concat(p1,"</span>")}}],_this.editor=null,_this.textarea=null,_this.lineNumbers=null,_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(YaraEditor,lit_element["a"]),_createClass(YaraEditor,null,[{key:"styles",get:function get(){return Object(lit_element.b)(_templateObject())}},{key:"properties",get:function get(){return{value:{type:String}}}}]),_createClass(YaraEditor,[{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldVal,newVal){"value"==name&&oldVal!=newVal&&this.textarea&&this.editor?(this.textarea.value=newVal,this.editor.innerHTML=this._parseCode(newVal)):"readonly"==name&&this.textarea&&(this.textarea.readOnly=newVal)}},{key:"render",value:function render(){return Object(lit_element.c)(_templateObject2())}},{key:"firstUpdated",value:function firstUpdated(){var _this2=this;this.editor=this.shadowRoot.getElementById("editor"),this.textarea=this.shadowRoot.getElementById("textarea"),this.lineNumbers=this.shadowRoot.querySelector(".line-numbers"),this._initializeTabSupport(),this.textarea.value=this.value||"",this.textarea.readOnly=this.readonly,this.textarea.addEventListener("keypress",function(){setTimeout(function(){_this2.editor.innerHTML=_this2._parseCode(_this2.textarea.value),_this2._setElementHeights()})}),this.textarea.addEventListener("keyup",function(){setTimeout(function(){_this2.editor.innerHTML=_this2._parseCode(_this2.textarea.value),_this2._setElementHeights()})}),this.textarea.addEventListener("keydown",function(){setTimeout(function(){_this2.editor.innerHTML=_this2._parseCode(_this2.textarea.value),_this2._setElementHeights()},10)}),this.editor.innerHTML=this._parseCode(this.textarea.value),this._setElementHeights()}},{key:"checkValidity",value:function checkValidity(){}},{key:"updated",value:function updated(){this.editor.innerHTML=this._parseCode(this.textarea.value),this._setElementHeights()}},{key:"_initializeTabSupport",value:function _initializeTabSupport(){var newCaretPosition,textarea=this.shadowRoot.querySelector("textarea");textarea.onkeydown=function(event){if(9==event.keyCode)return newCaretPosition=textarea.getCaretPosition()+"    ".length,textarea.value=textarea.value.substring(0,textarea.getCaretPosition())+"    "+textarea.value.substring(textarea.getCaretPosition(),textarea.value.length),textarea.setCaretPosition(newCaretPosition),!1;8==event.keyCode&&"    "==textarea.value.substring(textarea.getCaretPosition()-4,textarea.getCaretPosition())&&(newCaretPosition=textarea.getCaretPosition()-3,textarea.value=textarea.value.substring(0,textarea.getCaretPosition()-3)+textarea.value.substring(textarea.getCaretPosition(),textarea.value.length),textarea.setCaretPosition(newCaretPosition)),37==event.keyCode&&"    "==textarea.value.substring(textarea.getCaretPosition()-4,textarea.getCaretPosition())&&(newCaretPosition=textarea.getCaretPosition()-3,textarea.setCaretPosition(newCaretPosition)),39==event.keyCode&&"    "==textarea.value.substring(textarea.getCaretPosition()+4,textarea.getCaretPosition())&&(newCaretPosition=textarea.getCaretPosition()+3,textarea.setCaretPosition(newCaretPosition))}}},{key:"_parseCode",value:function _parseCode(code){return this.checkValidity(),this.value=code,this._writeLineNumbers(code),code?(code=code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),keywords.forEach(function(keyword){code=code.replace(new RegExp("\\b".concat(keyword,"\\b"),"g"),"<span class='ye-keyword'>".concat(keyword,"</span>"))}),this._regexReplaces.forEach(function(r){code=code.replace(r.regex,r.replacer)}),code):""}},{key:"_setElementHeights",value:function _setElementHeights(){var height="".concat(this.editor.offsetHeight,"px");this.textarea.style.height=height,this.lineNumbers.style.height=height}},{key:"_writeLineNumbers",value:function _writeLineNumbers(code){var lines=code.split("\n");this.lineNumbers.innerHTML="";for(var i=1;i<lines.length+1;i++)this.lineNumbers.innerHTML+="<div>".concat(i,"</div>")}},{key:"value",get:function get(){return this.getAttribute("value")||""},set:function set(newValue){this.setAttribute("value",newValue)}}]),YaraEditor}()},196:function(module,exports,__webpack_require__){__webpack_require__(197),__webpack_require__(282),module.exports=__webpack_require__(283)},283:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),req=(__webpack_require__(334),__webpack_require__(416));Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(153)(module))},416:function(module,exports,__webpack_require__){var map={"./index.stories.js":417};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=416},417:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var _open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(195),withStorySource=(__webpack_require__(126),__webpack_require__(436),__webpack_require__(437),__webpack_require__(418).withStorySource),__STORY__="import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';\n\nimport YaraEditor from '../src/YaraEditor.js';\nimport '../src/yara-editor.js';\n\nimport readme from '../README.md';\n\nconst rules = `/*\n  Example ruleset\n*/\nrule test {\n  strings:\n    $a = \"onestring\"\n}`;\n\nstoriesOf('yara-editor', module).add('default view', () => `<yara-editor value='${rules}'></yara-editor>`);\n",__ADDS_MAP__={"yara-editor--default-view":{startLoc:{col:37,line:16},endLoc:{col:105,line:16}}};Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.a)("yara-editor",module).addDecorator(withStorySource(__STORY__,__ADDS_MAP__)).add("default view",function(){return"<yara-editor value='".concat('/*\n  Example ruleset\n*/\nrule test {\n  strings:\n    $a = "onestring"\n}',"'></yara-editor>")})}.call(this,__webpack_require__(153)(module))},435:function(module,exports){HTMLTextAreaElement.prototype.getCaretPosition=function(){return this.selectionStart},HTMLTextAreaElement.prototype.setCaretPosition=function(position){this.selectionStart=position,this.selectionEnd=position,this.focus()},HTMLTextAreaElement.prototype.hasSelection=function(){return this.selectionStart!=this.selectionEnd},HTMLTextAreaElement.prototype.getSelectedText=function(){return this.value.substring(this.selectionStart,this.selectionEnd)},HTMLTextAreaElement.prototype.setSelection=function(start,end){this.selectionStart=start,this.selectionEnd=end,this.focus()}},436:function(module,__webpack_exports__,__webpack_require__){"use strict";var _YaraEditor_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(126);window.customElements.define("yara-editor",_YaraEditor_js__WEBPACK_IMPORTED_MODULE_0__.a)},437:function(module,exports){module.exports="[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/diviei/yara-editor) [![npm version](https://badge.fury.io/js/yara-editor.svg)](https://badge.fury.io/js/yara-editor)\n![Dependencies](https://david-dm.org/diviei/yara-editor.svg)\n[![Codeship Status for Diviei/yara-editor](https://app.codeship.com/projects/5f9e0b40-8bcb-0137-6530-5e1cc316f3f0/status?branch=master)](https://app.codeship.com/projects/355186)\n\n# \\<yara-editor>\n\nThis webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.\n\n## Installation\n```bash\nnpm i yara-editor\n```\n\n## Usage\n```html\n<script type=\"module\">\n  import 'yara-editor/yara-editor.js';\n<\/script>\n\n<yara-editor></yara-editor>\n```\n\n## Testing using karma (if applied by author)\n```bash\nnpm run test\n```\n\n## Testing using karma via browserstack (if applied by author)\n```bash\nnpm run test:bs\n```\n\n## Demoing using storybook (if applied by author)\n```bash\nnpm run storybook\n```\n\n## Linting (if applied by author)\n```bash\nnpm run lint\n```\n"}},[[196,1,2]]]);
//# sourceMappingURL=main.dc6b4a01c65b0eecb11d.bundle.js.map