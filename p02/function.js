function showMessage(from, text) {
  if (text === undefined) {
    text = 'текст не передан';
  }

  alert( from + ": " + text );
}
