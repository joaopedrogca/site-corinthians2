let activeButton = null;
let activeHover = null

function hoverButton1() {
  document.getElementById('button1').style.opacity = 1;
  document.getElementById('button2').style.opacity = 0.6;
  document.getElementById('button3').style.opacity = 0.6;
  document.getElementById('button4').style.opacity = 0.6;
  activeHover = 'button1';
}
function hoverButton2() {
  document.getElementById('button1').style.opacity = 0.6;
  document.getElementById('button2').style.opacity = 1;
  document.getElementById('button3').style.opacity = 0.6;
  document.getElementById('button4').style.opacity = 0.6;
  activeHover = 'button2';
}
function hoverButton3() {
  document.getElementById('button1').style.opacity = 0.6;
  document.getElementById('button2').style.opacity = 0.6;
  document.getElementById('button3').style.opacity = 1;
  document.getElementById('button4').style.opacity = 0.6;
  activeHover = 'button3';
}
function hoverButton4() {
  document.getElementById('button1').style.opacity = 0.6;
  document.getElementById('button2').style.opacity = 0.6;
  document.getElementById('button3').style.opacity = 0.6;
  document.getElementById('button4').style.opacity = 1;
  activeHover = 'button4';
}




function mudarButton1() {
  document.getElementById('nomejogador').innerHTML = "Ángel Romero";
  document.getElementById('textidolos').innerHTML = "Angel Romero é um jogador paraguaio que se destacou no Corinthians durante sua passagem pelo clube, entre 2014 e 2020. Ele se tornou uma peça importante do elenco, conhecido por sua habilidade, velocidade e capacidade de marcar gols.Romero contribuiu significativamente para conquistas importantes, como o Campeonato Brasileiro e a Copa do Brasil. Sua versatilidade no ataque e seu empenho em campo o tornaram um ídolo para a torcida corintiana.Após sua saída, ele deixou saudades e é lembrado como um dos jogadores marcantes da era recente do clube.";
  document.getElementById('imagemidols').className = 'romero';
  document.getElementById('gol').innerHTML = "59";
  document.getElementById('partidas').innerHTML = "309";
  document.getElementById('button2').className = 'cards inactive';
  document.getElementById('button3').className = 'cards inactive';
  document.getElementById('button4').className = 'cards inactive';
  document.getElementById('button1').className = 'cards active2';
  activeButton = 'button1';
}
function mudarButton2() {
  document.getElementById('nomejogador').innerHTML = "Ronaldo Fênomeno";
  document.getElementById('textidolos').innerHTML = "Ronaldo, também conhecido como Fenômeno, teve uma passagem marcante pelo Corinthians entre 2009 e 2011. Ele chegou ao clube em um momento em que precisava recuperar seu melhor desempenho após lesões. Com sua habilidade extraordinária e visão de jogo, rapidamente se tornou o grande nome da equipe. Durante sua estadia, Ronaldo foi fundamental para as conquistas do Campeonato Paulista de 2009 e da Copa do Brasil de 2009, além de ajudar o Corinthians a vencer a Copa Libertadores em 2012, mesmo após sua saída. Ele se destacou como um goleador prolífico, tornando-se um ídolo para a torcida corintiana. Sua presença e performances emocionantes deixaram um legado duradouro no clube, e ele é lembrado como um dos maiores jogadores da história do Corinthians.";
  document.getElementById('imagemidols').className = 'ronaldo';
  document.getElementById('gol').innerHTML = "36";
  document.getElementById('partidas').innerHTML = "69";
  document.getElementById('button1').className = 'cards inactive';
  document.getElementById('button3').className = 'cards inactive';
  document.getElementById('button4').className = 'cards inactive';
  document.getElementById('button2').className = 'cards active2';
  activeButton = 'button2';
}
function mudarButton3() {
  document.getElementById('nomejogador').innerHTML = "Chicão";
  document.getElementById('textidolos').innerHTML = "Chicão, cujo nome completo é Francisco Alexsandro de Lima, foi um defensor importante para o Corinthians, onde jogou de 2008 a 2014. Conhecido por sua liderança e firmeza na zaga, ele se destacou pela habilidade em desarmes e pelo jogo aéreo. Durante sua passagem, Chicão foi fundamental para as conquistas do Campeonato Paulista em 2009 e 2010, da Copa do Brasil em 2009 e, especialmente, da Copa Libertadores em 2012, onde foi uma peça-chave na defesa. Seu comprometimento e garra em campo conquistaram o carinho da torcida, tornando-o um ídolo no clube. Após deixar o Corinthians, Chicão continuou sua carreira em outros clubes, mas seu legado permanece na história corintiana.";
  document.getElementById('imagemidols').className = 'chicao';
  document.getElementById('gol').innerHTML = "42";
  document.getElementById('partidas').innerHTML = "247";
  document.getElementById('button2').className = 'cards inactive';
  document.getElementById('button1').className = 'cards inactive';
  document.getElementById('button4').className = 'cards inactive';
  document.getElementById('button3').className = 'cards active2';
  activeButton = 'button3';
}
function mudarButton4() {
  document.getElementById('nomejogador').innerHTML = "Cássio";
  document.getElementById('textidolos').innerHTML = "Cássio, goleiro do Corinthians, chegou ao clube em 2012 e rapidamente se destacou como um dos principais jogadores da equipe. Ele se tornou fundamental nas conquistas da Copa Libertadores em 2012, onde suas defesas foram decisivas, e do Campeonato Brasileiro em 2015 e 2017. Conhecido por sua segurança sob as traves e habilidades em jogos decisivos, Cássio é respeitado pela torcida corintiana e por suas atuações em grandes partidas, como a final da Copa do Mundo de Clubes da FIFA em 2012, onde teve um desempenho excepcional. Com várias defesas memoráveis, ele se consolidou como um dos maiores ídolos da história do clube, deixando um legado duradouro e sendo um símbolo de sucesso e garra.";
  document.getElementById('imagemidols').className = "cassio";
  document.getElementById('gol').innerHTML = "291 jogos sem sofrer gols";
  document.getElementById('partidas').innerHTML = "712";
  document.getElementById('button2').className = 'cards inactive';
  document.getElementById('button3').className = 'cards inactive';
  document.getElementById('button1').className = 'cards inactive';
  document.getElementById('button4').className = 'cards active2';
  activeButton = 'button4';
}



function nothover() {
  if (activeButton === activeHover) {
    document.getElementById(activeButton).style.opacity = 1;
  }
  else if (activeButton === 'button1') {
    document.getElementById('button1').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else if (activeButton === 'button2') {
    document.getElementById('button2').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else if (activeButton === 'button3') {
    document.getElementById('button3').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else if (activeButton === 'button4') {
    document.getElementById('button4').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else {
    document.getElementById('button1').style.opacity = 1;
    document.getElementById('button2').style.opacity = 1;
    document.getElementById('button3').style.opacity = 1;
    document.getElementById('button4').style.opacity = 1;
  }
}