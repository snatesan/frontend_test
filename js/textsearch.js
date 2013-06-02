(function(){
	document.getElementById("search_button").addEventListener("click", searchText);

	function searchText() {
		var q = document.getElementById("search_input").value,
			text = document.getElementById("search_text").textContent,
			countEl = document.getElementById("search_count"),
			qEl = document.getElementById("search_display"),
			matches;
		
		if(q != "") {
			matches = text.match(new RegExp(q, "gi"));
			count = matches ? matches.length : 0;

			countEl.textContent = count;
			qEl.textContent = q;
		}
	}

})();
