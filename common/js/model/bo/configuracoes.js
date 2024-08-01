function encaminharPagina(){
	window.location.href = "saiba_mais.html";
}

var categoriaSelecionada = "categoria-todos";

function marcarCategoria(){
	$("#"+categoriaSelecionada).addClass('div-categoria__selecionada');
	$("."+categoriaSelecionada).removeClass('display__none');
}

function selecionar(id){
	$("#"+categoriaSelecionada).removeClass('div-categoria__selecionada');
	$("."+categoriaSelecionada).addClass('display__none');	
	categoriaSelecionada = id;
	marcarCategoria();
}
