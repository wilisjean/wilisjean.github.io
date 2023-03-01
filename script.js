$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-bars');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top

    },
      500, 
      'linear'
    );

  });

  //FUNÇÃO QUE RECEBE UMA DATA DE NASCIMENTO E CALCULA  A IDADE ano atual menos ano de nascimento
  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
        
    //se o mês atual for menor que o mês de aniversário, diminui 1 ano
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
  }

  //variavel que chama a função e recebe a idade
  let idade = getAge('1990/06/12')
  //seleciona  a classe que vai receber o valor da idade na página html
  $('.idade').html(idade)
  
});
