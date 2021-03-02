
$(document).ready(function(){
	$(":submit").click(function(){
		$.ajax({
			url: "usuarios/datos.json",
			success: function(response){
				$.each(response.usuarios, function(item){
					alert(item.nombre);
				});
			},
		})

	});
