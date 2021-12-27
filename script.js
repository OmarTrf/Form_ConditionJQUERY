		const d = new Date();
		let year = d.getFullYear();
		let month = String(d.getMonth() + 1).padStart(2, '0');
		let day = String(d.getDate()).padStart(2, '0');
		let date_of_today = day+'-'+month+'-'+year;
		let date_of_today100 = day+'-'+month+'-'+(year-100);
		$('.message').hide();
	document.querySelector('input[type="date"]').setAttribute('min',"'"+date_of_today100+"'");
	document.querySelector('input[type="date"]').setAttribute('max',"'"+date_of_today+"'");
	$('.nom_complet').on ('change keyup keydown',function(){
		$('#nom_complet').val($('.nom_complet#one').val() +' '+ $('.nom_complet#two').val() +' '+ $('.nom_complet#three').val()) ;
	});
	$('#niveau').on('change',function(){
		$('#niveauS').text($('#niveau').val());
	});
	$("#checkbox").click(function(){
		if ($(this).prop('checked')) {
			$('#confirm_password').attr('type','text');
			$('#pass').attr('type','text');
		}else{
			$('#confirm_password').attr('type','password');
			$('#pass').attr('type','password');
		}
	});
	/*desactive envoyer champs*/
	$('#envoyer').prop('disabled',true);
	 $('.verifButt').keyup(function(){
		if (($('.verifButt.one').val()) && ($('.verifButt.two').val()) && ($('.verifButt.three').val()) && ($('.verifButt.four').val()) && ($('.verifButt.five').val()) && $('#pass').val() == $('#confirm_password').val()) {
			$('#envoyer').prop('disabled',false);
		}
	});
	 $('.verifButt').focusout(function(){
		if ($(this).val()) {
			$(this).removeClass('empty');
		}else{
			$(this).addClass('empty');
		}
	});
	 $('#confirm_password').keyup(function(){
	 	if ($(this).val() != $('#pass').val() ) {
	 		$(this).addClass('empty');
	 	}else
	 		$(this).removeClass('empty');
	 });
		
  		$('#envoyer').click(function(){
  			$('form').hide();
  			$('.message').text('Bonjour '+$('select').val()+' '+$('.verifButt.one').val()+' '+$('.verifButt.two').val()+' , vous etes ne le '+$('input[type="date"]').val());
  			$('.message').show();
  		});
		