
var pessoas, index;
function gravaPessoa(nome, email, telefone){
  
  pessoas =document.getElementById("tbPessoas");
  
  var qtdeLinhas= pessoas.rows.length;
  var linha= pessoas.insertRow(qtdeLinhas);
  
  var cellID= linha.insertCell(0);
  var cellNome= linha.insertCell(1);
  var cellEmail= linha.insertCell(2);
  var cellTelefone= linha.insertCell(3);
  
  cellID.innerHTML=qtdeLinhas;
  cellNome.innerHTML= nome;
  cellEmail.innerHTML= email;
  cellTelefone.innerHTML=telefone;
  
  percorrerLinhas();
  
}

function percorrerLinhas(){
  
  for(var i=0; i< pessoas.rows.length; i++){
    
    pessoas.rows[i].onclick= function(){
      
      index =this.rowIndex;
      document.getElementById("txtID").value=pessoas.rows[index].cells[0].innerText;
      document.getElementById("txtNome").value=pessoas.rows[index].cells[1].innerText;
      document.getElementById("txtEmail").value=pessoas.rows[index].cells[2].innerText;
      document.getElementById("txtTelefone").value=pessoas.rows[index].cells[3].innerText;
      
      
    }
    
  }
  
}

function excluiDados(){
  
  for(var i=0; i< pessoas.rows.length; i++) {
    
    if(index == i){
      
      pessoas.deleteRow(index);
      
    }
  }
}