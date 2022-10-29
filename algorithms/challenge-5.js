function filterList(arr) {
  let filteredList = arr.filter(
    (removeStrings) => typeof removeStrings === "number"
  );
  return console.log(filteredList);
}

module.exports = filterList;
