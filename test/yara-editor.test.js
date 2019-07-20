import { html, fixture, expect } from '@open-wc/testing';

import '../src/yara-editor.js';

const rules = `/* One line comment */
/*
  Comment block
*/
rule test {
  strings:
    $a = "test"
}`;

describe('<yara-editor>', () => {
  it('Default component status', async () => {
    const el = await fixture('<yara-editor></yara-editor>');

    expect(el.value).to.be.equal('');
    expect(el.editor).to.be.not.undefined;
    expect(el.textarea).to.be.not.undefined;
    expect(el.lineNumbers).to.be.not.undefined;
  });

  it('Simple ruleset', async () => {
    const el = await fixture(html`
      <yara-editor value="${rules}"></yara-editor>
    `);

    expect(el.value).to.be.equal(rules);
    expect(el.editor.innerHTML.indexOf('One line comment') > -1).to.be.true;
    el.value = '';
    expect(el.value).to.be.equal('');
    el.value = rules;
    expect(el.value).to.be.equal(rules);
  });

  it('Update value from js', async () => {
    const el = await fixture(html`
      <yara-editor></yara-editor>
    `);
    expect(el.editor.innerText).to.be.equal('');
    expect(el.textarea.value).to.be.equal('');
    el.value = 'test';
    expect(el.textarea.value).to.be.equal(el.value);
    expect(el.editor.innerText).to.be.equal(el.value);
  });

  it('Test keyboard events,', async () => {
    const el = await fixture(html`
      <yara-editor></yara-editor>
    `);

    // Key events
    [
      new KeyboardEvent("keydown"),
      new KeyboardEvent("keyup"),
      new KeyboardEvent("keypress"),
    ].forEach((event) => {
      el.textarea.dispatchEvent(event);
    });

    // Special keys events
    [
      new KeyboardEvent("keydown", {keyCode: "9"}),
      new KeyboardEvent("keydown", {keyCode: "8"}),
      new KeyboardEvent("keydown", {keyCode: "37"}),
      new KeyboardEvent("keydown", {keyCode: "39"}),
    ].forEach((event) => {
      el.textarea.dispatchEvent(event);
    });
  });

  it('textarea custom methods', async () => {
    const testValue = "test";
    const el = await fixture(html`
      <yara-editor value="${testValue}"></yara-editor>
    `);

    expect(el.textarea.hasSelection()).to.be.false;
    el.textarea.setSelection(0, 4);
    expect(el.textarea.getSelectedText()).to.be.equal(testValue);
    expect(el.textarea.hasSelection()).to.be.true;
  });
});
