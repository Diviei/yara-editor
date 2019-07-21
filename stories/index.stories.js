import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import YaraEditor from '../src/YaraEditor.js';
import '../src/yara-editor.js';

import readme from '../README.md';

const rules = `/*
  Example ruleset
*/
rule test {
  strings:
    $a = "onestring"
}`;

storiesOf('yara-editor', module).add(
  'default view',
  () => `<yara-editor value='${rules}'></yara-editor>`,
);
