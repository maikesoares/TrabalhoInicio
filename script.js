
function gravaPessoa(nome, email, telefone){
  
  var tb= document.getElememtById("tbPessoas");
  var qtdeLinhas= tb.rows.length;
  var linha= tb.insertRow(qtdeLinhas);
  
  var celID= linha.insertcell(0)
  var cellNome= linha.insertcell(1);
  var cellEmail= linha.insertcell(2);
  var cellTelefone= linha.insertcell(3);
  
  cellNome.innerHTML= nome;
  cellEmail.innerHTML= email;
  cellTelefone.innerHTML=telefone;
  
}
