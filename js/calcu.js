
function cal(){
  let calcu = document.comment.comment4.value;
  let n = calcu.length;
  document.querySelector(".calculating").innerHTML = n;
  //setTimeout(cal,100)
  }
  document.addEventListener('keydown',cal);

  function chk(){
    let loww = document.comment.comment4.value;
    let nn = loww.length;
    if (11 > nn){
      alert("최소 10자 이상 작성하여 주십시오.");
      return false
    }
    else {
      alert("등록 완료.")
    }
  }
