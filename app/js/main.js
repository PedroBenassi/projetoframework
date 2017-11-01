var cadastroInstituto = '<div class="col-md-12" >'+
  '<button type="button" class="btn btn-collapse" data-toggle="collapse" data-target="#predio">Prédio</button>'+
  '<i class="fa fa-plus icon-plus" aria-hidden="true" id="predio-plus"></i>'+
  '<br><br>'+
'</div>'+
'<div class="collapse" id="predio">'+
  '<div class="col-md-10" class="collapse">'+
   '<div class="form-group">'+
    '<input type="text" class="form-control login-input" id="nome-predio" placeholder="Nome" required>'+
   '</div>'+
 '</div>'+
 '<div class="col-md-3">'+
   '<div class="form-group">'+
    '<input type="text" class="form-control login-input" id="sigla-predio" placeholder="Sigla" required>'+
   '</div>'+
 '</div>'+
 '<div class="col-md-3">'+
   '<div class="form-group">'+
    '<input type="text" class="form-control login-input" id="lat-predio" placeholder="Latitude" required>'+
   '</div>'+
 '</div>'+
 '<div class="col-md-3">'+
   '<div class="form-group">'+
    '<input type="text" class="form-control login-input" id="long-predio" placeholder="Longitude" required>'+
   '</div>'+
   '<br>'+
 '</div>'+
 '<div class="col-md-12">'+
   '<button type="button" class="btn btn-collapse" data-toggle="collapse" data-target="#sala">Sala</button>'+
   '<i class="fa fa-plus icon-plus" aria-hidden="true"></i>'+
   '<br><br>'+
 '</div>'+
 '<div class="collapse" id="sala">'+
   '<div class="col-md-10">'+
     '<div class="form-group">'+
      '<input type="text" class="form-control login-input" id="nome-sala" placeholder="Nome" required>'+
     '</div>'+
   '</div>'+
 '</div>'+
'</div>';

$(document).ready(function(){
  $("#predio-plus").click(function(){
    $(cadastroInstituto).appendTo(".content-predio");
});
});

$(document).ready(function(){
    $('#hamburger').click(function() {
    $('.nav').toggleClass('show');
  });
});
