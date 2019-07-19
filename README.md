[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/diviei/yara-editor) [![npm version](https://badge.fury.io/js/yara-editor.svg)](https://badge.fury.io/js/yara-editor)
[![Dependencies](https://david-dm.org/diviei/yara-editor.svg)]
[![Codeship Status for Diviei/yara-editor](https://app.codeship.com/projects/5f9e0b40-8bcb-0137-6530-5e1cc316f3f0/status?branch=master)](https://app.codeship.com/projects/355186)

# Install
```
git clone https://github.com/Diviei/yara-editor.git
cd yara-editor
npm i
```

# Usage
```html
<!-- Empty -->
<yara-editor></yara-editor>
```

```html
<yara-editor value="rules here"></yara-editor>
<!-- or -->
<yara-editor id="editor"></yara-editor>
<script>
let editor = document.querySelector('#editor');
editor.value = 'rules here';
</script>
```

```html
<!-- Read only -->
<yara-editor value="rules here" readonly="1"></yara-editor>
```

# Contributing
TBD

## demo
```
./node_modules/.bin/ws
# Open http://127.0.0.1:8000/demo/
```

## Test
TBD
