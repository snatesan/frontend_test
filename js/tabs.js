(function(){
	var headers = document.getElementById("container").getElementsByTagName("h3"),
		l = headers.length;
	
	while(l) {
		l--;
		headers[l].addEventListener("click", selectTab);
	}

	function selectTab(e) {
		var l = headers.length;

		while(l) {
			l--;
			headers[l].className = "";
		}
		e.target.className = "active";
	}
})();
