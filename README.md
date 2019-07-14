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