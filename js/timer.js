function showTime(){
	let time = new Date();
	let hr = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
  let am_pm = "am";
  if(hr > 12){
		hr-=12;
		am_pm = "pm";
	}
	if (hr == 0){
		hr = 12;
	}
	hr = (hr<10) ? "0" +hr : hr;
	min = (min<10) ? "0" +min : min;
	sec = (sec<10) ? "0" +sec : sec;

	document.querySelector("#clock0").innerHTML = am_pm;
	document.querySelector("#clock1").innerHTML = hr;
	document.querySelector("#clock2").innerHTML = min;
	document.querySelector("#clock3").innerHTML = sec;
	setTimeout(showTime,1000);
}
showTime();
