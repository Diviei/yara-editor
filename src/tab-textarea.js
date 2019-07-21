/*
  https://css-tricks.com/snippets/javascript/support-tabs-in-textareas/
*/

HTMLTextAreaElement.prototype.getCaretPosition = function() {
  //return the caret position of the textarea
  return this.selectionStart;
};
HTMLTextAreaElement.prototype.setCaretPosition = function(position) {
  //change the caret position of the textarea
  this.selectionStart = position;
  this.selectionEnd = position;
  this.focus();
};
HTMLTextAreaElement.prototype.hasSelection = function() {
  //if the textarea has selection then return true
  if (this.selectionStart == this.selectionEnd) {
    return false;
  } else {
    return true;
  }
};
HTMLTextAreaElement.prototype.getSelectedText = function() {
  //return the selection text
  return this.value.substring(this.selectionStart, this.selectionEnd);
};
HTMLTextAreaElement.prototype.setSelection = function(start, end) {
  //change the selection area of the textarea
  this.selectionStart = start;
  this.selectionEnd = end;
  this.focus();
};
