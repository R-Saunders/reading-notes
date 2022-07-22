var list = document.getElementsByClassName("headers");
			function clicked() {
				for (var i = 0; i < list.length; i++) {
				document.getElementsByClassName("headers")[i].innerHTML = "Changed by Class Name";
			}
      document.getElementById("paragraph").innerHTML = "Changed by ID";
			}
