function getElementWidth(content, padding, border) {
  const x = parseFloat(content);
  const y = parseFloat(padding);
  const z = parseFloat(border);

  const ElementWidth = y + z + x + y + z;
  return ElementWidth + "px";
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
