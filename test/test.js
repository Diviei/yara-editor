import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Yara Editor`// declare the fixture
    .page `./test.html`;  // specify the start page

//then create a test and place your code there
test('Test comments', async t => {
  const selector = await Selector('yara-editor');
  const yaraEditor = await selector();
  const insideTextarea = Selector(() => document.querySelector('yara-editor').shadowRoot.querySelector('textarea'));

  let inputValue = '/*\n  test comment\n*/';

  await t
      .typeText(insideTextarea, inputValue);

  let resultValue = await selector.value;

  await t
      .expect(resultValue).eql(inputValue);

  const insideEditor = Selector(() => document.querySelector('yara-editor').shadowRoot.querySelector('#editor')).addCustomDOMProperties({
        innerHTML: el => el.innerHTML
    });

  await t
      .expect(await insideEditor.innerHTML).eql(`<span class="ye-comment">${inputValue}</span>`);
});