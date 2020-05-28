window.onload = function() {
  const searchBox = document.getElementById("gsc-i-id1");
  const svgSearch = document.querySelector(".gsc-search-button svg");
  svgSearch.classList.add("svg-search");
  searchBox.placeholder = "";
  searchBox.title = "search";
};
