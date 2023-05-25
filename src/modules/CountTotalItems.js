const countTotalItem = async (node) => node.children.length;

const appendTotal = async (total, id) => {
  const idSpan = document.getElementById(id);
  idSpan.textContent = ` (${total})`;
};

export {
  countTotalItem, appendTotal,
};