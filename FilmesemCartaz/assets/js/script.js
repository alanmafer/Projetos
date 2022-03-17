$(function(){
    $.ajax({
        url:'https://alunos.b7web.com.br/cinema/',
        type:'GET',
        dataType:'json',
        beforeSend:function(){
            $('.filmes').html('<div class="col-md-12">Carregando...</div>')
        },
        success:function(json){
            var html = '';

            for( var i in json) {
                html += '<div class="col-md-4 filme"><img src="'+json[i].avatar+'" >'+json[i].titulo+'</div>'
            }

            $('.filmes').html(html);
        }
    });
});