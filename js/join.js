let btn = document.querySelector("#btn");

function Validation(){
  var RegExp = /^[a-zA-Z0-9]{4,12}$/; //id와 pwassword 유효성 검사 정규식
  //이메일 유효성검사
  var e_RegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  var n_RegExp = /^[가-힣]{2,15}$/; //이름 유효성검사 정규식
  
  var objName = document.getElementById("name"); //이름
  var objId = document.getElementById("id"); //아이디
  var objPwd = document.getElementById("pw"); //비밀번호
  var objPwd2 = document.getElementById("pwcheck"); //비밀번호확인
  // ================ ID 유효성검사 ================ //
  
  if(objId.value==''){
      alert("ID를 입력해주세요.");
      return false;
  }
  if(!RegExp.test(objId.value)){ //아이디 유효성검사
      alert("ID는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");        
      return false;
  }
  
  // ================ PASSWORD 유효성검사 ===============//
  if(objPwd.value==''){ // 비밀번호 입력여부 검사
      alert("Password를 입력해주세요.");
      return false;
  }
  if(!RegExp.test(objPwd.value)){ //패스워드 유효성검사
      alert("Password는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");
      return false;
  }
  if(objPwd.value==objId.value){ //패스워드와 ID가 동일한지 검사
      alert("Password는 ID와 동일하면 안됩니다.");
      return false;
  }
  
  if(objPwd2.value!=objPwd.value){ //비밀번호와 비밀번호확인이 동일한지 검사
      alert("비밀번호가 틀립니다. 다시 확인하여 입력해주세요.");
      return false;
  }
  
  // ================ 이름 유효성검사 ================ //        
  if(objName.value ==''){
      alert("이름을 입력해주세요.");
      return false;
  }
  if(!n_RegExp.test(objName.value)){
      alert("특수문자,영어,숫자는 사용할수 없습니다. 한글만 입력하여주세요.");
      return false;
  }
  
}
btn.addEventListener("click",Validation);