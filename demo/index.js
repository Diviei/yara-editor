import { html, render } from 'lit-html';
import '../src/yara-editor.js';

const rules = `/* One line comment */
/*
  Comment block
*/
rule test {
  strings:
    $a = "test"
}`;

render(html`
  <yara-editor value="${rules}">
  </yara-editor>
`, document.querySelector('#demo'));
