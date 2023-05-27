const countTotalItem = (node) => node.children.length;

const appendTotal = (total, id) => {
  const idSpan = document.getElementById(id);
  idSpan.textContent = ` (${total})`;
};

export {
  countTotalItem, appendTotal,
};