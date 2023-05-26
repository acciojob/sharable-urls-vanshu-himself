// your code here
  const x=document.getElementById('name');
  const y=document.getElementById('year');
  const button=document.getElementById("button");
  button.addEventListener('click',()=>{
    console.log(x);
      if(x.value!=""){
      document.getElementById('url').innerHTML=`https://localhost:8080/?name=${x.value}`}
	  if(y.value!=""){
          document.getElementById('url').innerHTML=`https://localhost:8080/?year=${y.value}`}
      if(y.value!="" && x.value!=""){
        document.getElementById('url').innerHTML=`https://localhost:8080/?name=${x.value}&year=${y.value}`}
       
      }
  ); 