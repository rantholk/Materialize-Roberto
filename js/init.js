(function($){
	$(function(){
		$('.timepicker').timepicker();
		$('.datepicker').datepicker();
		$('.sidenav').sidenav();
		$('.parallax').parallax();
		$('.dropdown-trigger').dropdown();
		$('#textarea1').val('New Text');
		M.textareaAutoResize($('#textarea1'));

		 $('.carousel').carousel();
		 setInterval(function() {
		    $('.carousel').carousel('next');
		  }, 4000);

		 $('.carousel.carousel-slider').carousel({
		    fullWidth: true
		  });

		$("#formValidate").validate({
        rules: {
            first_name: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email:true
            },
            last_name: {
				required: true,
				minlength: 8
			},
			telefono: {
				required: true,
				minlength: 10,
				number: true
			},
			
            icon_prefix2: {
				required: true,
				minlength: 15
            },

            fecha:{
            	required: true
            },
            hora:{
            	required: true
            }
        },
        //For custom messages
        messages: {
            first_name:{
                required: "Ingresa un nombre",
                minlength: "Ingresa al menos 5 caracteres"
            },
            last_name:{
                required: "Ingresa un apellido",
                minlength: "Ingresa al menos 8 caracteres"
            },
            email:{
                required: "Ingresa un email",
                email: "Ingresa un email valido"
            },
            telefono:{
                required: "Ingresa un numero telefonico",
                minlength: "Ingresa al menos 10 caracteres",
                number: "Ingresa un numero valido"
            },
            icon_prefix2:{
                required: "Ingresa un comentario",
                minlength: "Ingresa al menos 15 caracteres"
            },
            fecha:{
                required: "Ingresa una fecha",
            },
            hora:{
                required: "Ingresa una hora",
            }
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });
	});
})(jQuery);

function valida_envia()
		{
			//el formulario se envia usando el método submit() activándolo desde aquí 
			alert("Muchas gracias por enviar el formulario"); 
		} 



