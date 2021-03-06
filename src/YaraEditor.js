import { html, css, LitElement } from 'lit-element';
import { keywords } from './keywords.js';
import './tab-textarea.js';

export default class YaraEditor extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        position: relative;
        overflow-y: auto;
        background: var(--ye-background-color);
        --ye-font-family: monospace, 'Courier New', Courier;
        --ye-font-size: 13px;
        --ye-line-height: 15px;
        --ye-keyword-color: #708;
        --ye-word-color: #000;
        --ye-string-color: #a11;
        --ye-comment-color: #a50;
        --ye-background-color: #fff;
        --ye-padding: 10px;
        --ye-line-numbers-background-color: #f7f7f7;
        --ye-line-numbers-color: #999;
        --ye-line-numbers-border-color: #ddd;
        --ye-line-numbers-width: 30px;
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
      #ye-editor {
        display: flex;
      }
      .line-numbers {
        color: var(--ye-line-numbers-color);
        font-family: var(--ye-font-family);
        border-right: 1px solid var(--ye-line-numbers-border-color);
        background-color: var(--ye-line-numbers-background-color);
        white-space: nowrap;
        padding-top: var(--ye-padding);
        width: var(--ye-line-numbers-width);
        user-select: none;
        @apply --ye-line-numers;
        font-size: var(--ye-font-size);
      }
      .line-numbers > div {
        padding: 0 3px 0 5px;
        min-width: 20px;
        height: var(--ye-line-height);
        text-align: right;
      }
      #editor {
        flex: 1 1 100%;
        position: absolute;
        padding: var(--ye-padding);
        cursor: text;
        white-space: pre;
        margin: 0;
        margin-left: var(--ye-line-numbers-width);
        background-color: var(--ye-background-color);
        color: var(--ye-word-color);
        font-family: var(--ye-font-family);
        font-size: var(--ye-font-size);
        line-height: var(--ye-line-height);
        overflow-x: auto;
      }
      textarea {
        flex: 1;
        position: relative;
        white-space: pre;
        padding: var(--ye-padding);
        border: 0;
        opacity: 1;
        background: transparent;
        color: transparent;
        caret-color: var(--ye-word-color);
        outline: none;
        resize: none;
        font-family: var(--ye-font-family);
        font-size: var(--ye-font-size);
        line-height: var(--ye-line-height);
      }
      .ye-keyword {
        color: var(--ye-keyword-color);
        @apply --ye-keyword;
      }
      .ye-word {
        color: var(--ye-word-color);
        @apply --ye-color;
      }
      .ye-string {
        color: var(--ye-string-color);
        @apply --ye-string;
      }
      .ye-comment {
        color: var(--ye-comment-color) !important;
        @apply --ye-comment;
      }
    `;
  }

  static get properties() {
    return {
      readonly: {
        type: Boolean,
      },

      value: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this._keywords = keywords;
    this._regexReplaces = [
      {
        // Strings
        regex: /"(.*?)"/g,
        replacer(str, p1) {
          return `<span class="ye-string">"${p1}"</span>`;
        },
      },
      {
        // One line comment
        regex: /(\/\*([\s\S]*?)\*\/)/g,
        replacer(str, p1) {
          return `<span class="ye-comment">${p1}</span>`;
        },
      },
    ];

    this.editor = null;
    this.textarea = null;
    this.lineNumbers = null;
  }

  get value() {
    return this.getAttribute('value') || '';
  }

  set value(newValue) {
    this.setAttribute('value', newValue);
  }

  get readonly() {
    return !!this.getAttribute('readonly') || false;
  }

  set readonly(newValue) {
    if (newValue) {
      this.setAttribute('readonly', 1);
    } else {
      this.removeAttribute('readonly');
    }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'value' && oldVal !== newVal && this.textarea && this.editor) {
      this.textarea.value = newVal;
      this.editor.innerHTML = this._parseCode(newVal);
      this.dispatchEvent(new CustomEvent('value-changed', {
        detail: newVal,
      }));
    } else if (name === 'readonly' && this.textarea) {
      this.textarea.readOnly = newVal;
    }
  }

  render() {
    return html`
      <div class="line-numbers"></div>
      <pre id="editor"></pre>
      <textarea id="textarea" spellcheck="false"></textarea>
    `;
  }

  firstUpdated() {
    this.editor = this.shadowRoot.getElementById('editor');
    this.textarea = this.shadowRoot.getElementById('textarea');
    this.lineNumbers = this.shadowRoot.querySelector('.line-numbers');
    this._initializeTabSupport();

    this.textarea.value = this.value || '';
    this.textarea.readOnly = this.readonly;

    this.textarea.addEventListener('keypress', () => {
      setTimeout(() => {
        this.editor.innerHTML = this._parseCode(this.textarea.value);
        this._setElementsSizes();
      });
    });
    this.textarea.addEventListener('keyup', () => {
      setTimeout(() => {
        this.editor.innerHTML = this._parseCode(this.textarea.value);
        this._setElementsSizes();
      });
    });
    this.textarea.addEventListener('keydown', () => {
      setTimeout(() => {
        this.editor.innerHTML = this._parseCode(this.textarea.value);
        this._setElementsSizes();
      }, 10);
    });

    this.editor.innerHTML = this._parseCode(this.textarea.value);
    this._setElementsSizes();
  }

  updated() {
    this.editor.innerHTML = this._parseCode(this.textarea.value);
    this._setElementsSizes();
  }

  _initializeTabSupport() {
    const textarea = this.shadowRoot.querySelector('textarea');
    let newCaretPosition;
    const tabString = '  ';
    textarea.addEventListener('keydown', event => {
      // support tab on textarea
      if (event.keyCode === 9) {
        event.preventDefault();
        // tab was pressed
        newCaretPosition = textarea.getCaretPosition() + tabString.length;
        textarea.value = `${textarea.value.substring(
          0,
          textarea.getCaretPosition(),
        )}  ${textarea.value.substring(textarea.getCaretPosition(), textarea.value.length)}`;
        textarea.setCaretPosition(newCaretPosition);
        return false;
      }
      if (event.keyCode === 8) {
        // backspace
        if (
          textarea.value.substring(textarea.getCaretPosition() - tabString.length, textarea.getCaretPosition()) ===
          tabString
        ) {
          // it's a tab space
          newCaretPosition = textarea.getCaretPosition() - (tabString.length - 1);
          textarea.value =
            textarea.value.substring(0, textarea.getCaretPosition() - (tabString.length - 1)) +
            textarea.value.substring(textarea.getCaretPosition(), textarea.value.length);
          textarea.setCaretPosition(newCaretPosition);
        }
        return true;
      }
      if (event.keyCode === 37) {
        // left arrow
        if (
          textarea.value.substring(textarea.getCaretPosition() - tabString.length, textarea.getCaretPosition()) ===
          tabString
        ) {
          // it's a tab space
          newCaretPosition = textarea.getCaretPosition() - (tabString.length - 1);
          textarea.setCaretPosition(newCaretPosition);
        }
        return true;
      }
      if (event.keyCode === 39) {
        // right arrow
        if (
          textarea.value.substring(textarea.getCaretPosition() + tabString.length, textarea.getCaretPosition()) ===
          tabString
        ) {
          // it's a tab space
          newCaretPosition = textarea.getCaretPosition() + (tabString.length - 1);
          textarea.setCaretPosition(newCaretPosition);
        }
        return true;
      }
      return true;
    });

    textarea.addEventListener('scroll', (event) => {
      this.editor.scrollLeft = event.currentTarget.scrollLeft;
    })
  }

  _parseCode(code) {
    this.value = code;
    this._writeLineNumbers(code);

    if (!code) {
      return '';
    }

    let aux = code;

    aux = aux
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Keywords
    keywords.forEach(keyword => {
      aux = aux.replace(
        new RegExp(`\\b${keyword}\\b`, 'g'),
        `<span class='ye-keyword'>${keyword}</span>`,
      );
    });

    // Regexs
    this._regexReplaces.forEach(r => {
      aux = aux.replace(r.regex, r.replacer);
    });

    return aux;
  }

  _setElementsSizes() {
    const height = `${this.editor.offsetHeight}px`;
    const width = `${this.textarea.offsetWidth}px`;
    this.textarea.style.minHeight = height;
    this.editor.style.width = width;
    this.lineNumbers.style.minHeight = height;
  }

  _writeLineNumbers(code) {
    const lines = code.split('\n');
    this.lineNumbers.innerHTML = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < lines.length + 1; i++) {
      this.lineNumbers.innerHTML += `<div>${i}</div>`;
    }
  }
}
