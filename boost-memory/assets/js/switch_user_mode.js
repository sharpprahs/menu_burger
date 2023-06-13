	let status = document.querySelector('.us');
		var uu = document.querySelector('.uu');
		var ua = document.querySelector('.ua');
		function active(val){
			if (val == 1){
				uu.style = "color:#C4D9FC";
				ua.style = "color var(--main_text);";
			} else {
				ua.style = "color:#C4D9FC";
				uu.style = "color var(--main_text);";
			}
		}
		if (status.checked == true){
			active(1);
		} else {
			active(0);
		}
		status.addEventListener("change", (e) => {
			if (status.checked == true){
				active(1);
			} else {
				active(0);
			}
		});
		var ua_mobile = document.querySelector('.ua_mobile');
		var uu_mobile = document.querySelector('.uu_mobile');
		function active_mobile(valm){
			if (valm == 1){
				ua_mobile.style = "color: #4285F4; font-size: 18px";
				uu_mobile.style = "color: #A1A1A1; font-size: 16px";
			} else {
				uu_mobile.style = "color: #4285F4; font-size: 18px";
				ua_mobile.style = "color: #A1A1A1; font-size: 16px";
			}
		}
		function active(val){
			if (val == 1){
				uu.style = "color:#C4D9FC";
				ua.style = "color: var(--main_text);";
			} else {
				ua.style = "color:#C4D9FC";
				uu.style = "color: var(--main_text);";
			}
		}
		if (status.checked == true){
			active(1);
		} else {
			active(0);
		}
		status.addEventListener("change", (e) => {
			if (status.checked == true){
				active(1);
			} else {
				active(0);
			}
		});