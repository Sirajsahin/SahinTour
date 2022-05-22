
    var x= document.getElementById('textarea');
    // var val= x.value;
    // console.log(val);
    // setInterval(ww() ,1000);
    setInterval(()=> {
      var len= document.getElementById('textarea').value;
      if(len.length<1){
        document.getElementById('word').innerHTML=0;
      }else{
        document.getElementById('word').innerHTML=len.length;
      }
      var numberofWord;
      var count=0;
      for(let i=0;i<len.length;i++){
         numberofWord=len[i];
         if(numberofWord==" "){
           count++;
         }
      }
      if(count==0){
        
      document.getElementById('Numword').innerHTML=count;
      }else{
        document.getElementById('Numword').innerHTML=count+1;
      }
     
    
  }, 1000);
   
    function f1(){
        
        if(x.style.fontWeight==""){
            document.getElementById('textarea').style.fontWeight="bold";
            document.getElementById('bb').style.backgroundColor="red";
        }else{
            document.getElementById('textarea').style.fontWeight="";
            document.getElementById('bb').style.backgroundColor="";
        }
        
    }
    function f2(){
        if(x.style.fontStyle==""){
            document.getElementById('textarea').style.fontStyle="italic";
            document.getElementById('bb2').style.backgroundColor="red";
        }else{
            document.getElementById('textarea').style.fontStyle="";
            document.getElementById('bb2').style.backgroundColor="";
        }
    }
    function f3(){
       
            document.getElementById('textarea').style.textAlign="left";
            let y=document.getElementById('bb3');
            document.getElementById('bb4').style.backgroundColor="";
            document.getElementById('bb5').style.backgroundColor="";
            // y.style.backgroundColor="red"
            if(y.style.backgroundColor=="red"){
                document.getElementById('bb3').style.backgroundColor="";
            }else{
                document.getElementById('bb3').style.backgroundColor="red";
            }
           
       
       
    }
    function f4(){
       
            document.getElementById('textarea').style.textAlign="center";
            document.getElementById('bb3').style.backgroundColor="";

            let y=document.getElementById('bb4');
            document.getElementById('bb5').style.backgroundColor=""; 
          
            if(y.style.backgroundColor=="red"){
                document.getElementById('bb4').style.backgroundColor="";
                document.getElementById('textarea').style.textAlign="left";
            }else{
                document.getElementById('bb4').style.backgroundColor="red";
            }
    }
    function f5(){
       
            document.getElementById('textarea').style.textAlign="right";
            let y=document.getElementById('bb5');
            document.getElementById('bb4').style.backgroundColor="";
            document.getElementById('bb3').style.backgroundColor="";
          
          
          if(y.style.backgroundColor=="red"){
              document.getElementById('bb5').style.backgroundColor="";
              document.getElementById('textarea').style.textAlign="left";
          }else{
              document.getElementById('bb5').style.backgroundColor="red";
          }
        
    }
    function f6(){

            document.getElementById('textarea').style.textTransform="uppercase";
            let y=document.getElementById('bb6');
            document.getElementById('bb7').style.backgroundColor="";
          if(y.style.backgroundColor=="red"){
              document.getElementById('bb6').style.backgroundColor="";
              // document.getElementById('textarea').style.textTransform="lowercase";
          }else{
              document.getElementById('bb6').style.backgroundColor="red";
          }
        
    }
    function f7(){
       
            
            let y=document.getElementById('bb7');
          
          if(x.style.textTransform=="uppercase"){
              document.getElementById('bb7').style.backgroundColor="red";
              document.getElementById('textarea').style.textTransform="lowercase";
              document.getElementById('bb6').style.backgroundColor="";
          }else{
              document.getElementById('bb7').style.backgroundColor="";
          }
        
    }
    function f8(){
      document.getElementById('textarea').style.textTransform="capitalize";
            let y=document.getElementById('bb8');
          
          if(y.style.backgroundColor=="red"){
              document.getElementById('bb8').style.backgroundColor="";
              document.getElementById('textarea').style.textTransform="";
          }else{
              document.getElementById('bb8').style.backgroundColor="red";
          }
    }
    function f9(){
        document.getElementById('textarea').value="";
        document.getElementById('bb').style.backgroundColor="";
        document.getElementById('bb2').style.backgroundColor="";
        document.getElementById('bb3').style.backgroundColor="";
        document.getElementById('bb4').style.backgroundColor="";
        document.getElementById('bb5').style.backgroundColor="";
        document.getElementById('bb6').style.backgroundColor="";
        document.getElementById('bb7').style.backgroundColor="";
        document.getElementById('bb8').style.backgroundColor="";
    }
    // let countfont="15px";
     var cout=0;
    function f10(){
      // countfont++;
    //  let f= document.getElementById('textarea').style.fontSize;
    //  console.log(f)
    
    cout++;
    if(cout==1){
      document.getElementById('textarea').style.fontSize="16px";
    }else if(cout==2){
    document.getElementById('textarea').style.fontSize="20px";
    }else if(cout==3){
    document.getElementById('textarea').style.fontSize="25px";
    }
    else if(cout==4){
    document.getElementById('textarea').style.fontSize="30px";
    }
    else if(cout==5){
    document.getElementById('textarea').style.fontSize="40px";
    }
  }
    function f11(){
      // countfont++;
    //  let f= document.getElementById('textarea').style.fontSize;
    //  console.log(f)
    
    cout--;
    if(cout==1){
      document.getElementById('textarea').style.fontSize="16px";
    }else if(cout==2){
    document.getElementById('textarea').style.fontSize="20px";
    }else if(cout==3){
    document.getElementById('textarea').style.fontSize="25px";
    }
    else if(cout==4){
    document.getElementById('textarea').style.fontSize="30px";
    }
    else if(cout==5){
    document.getElementById('textarea').style.fontSize="40px";
    }
    
    }
