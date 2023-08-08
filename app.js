//カリキュラム4
//$(document).ready(function(){
//  $('body').html('<h1>Hello jQuery!!</h1>');
//});

//上はjQueryプログラムの内容（頻繁に使うので、以下のように省略形も用意されている。）
//  $(function(){
//  });

//jQueryの基本書式(2行目)は$(セレクタ).メソッド(パラメータ);
//セレクタは操作の対象になる部分（範囲）の指定
//メソッドには何を行うのかを記述する。
//メソッドにパラメータを指定すると、その内容に書き換えられる。（パラメータを指定しない場合には、メソッドが取得される。）

//今回のコードは、「bodyタグ内のHTMLを、<h1>Hello jQuery!!</h1>で書き換えなさい」という意味になる。

//カリキュラム5
//cssで指定したbox1を青色に変更した。
//$(function(){
//  $('.box1').css({
//    'background-color': '#0000FF',
//    'height': '100px'
//  });

//1つのcssを記述するときは、$('セレクタ').css('background-clor', '#0000FF');のように書く
//複数のプロパティを指定するときは、下記のように記述する。
//S('セレクタ').css({
//  'プロパティ1': '値1',
//  'プロパティ1': '値2',
//});

//.box1の箱を上から下にスライド表示させる
//$(function(){
//  $('.box1').slideDown();
//});

//.box1の箱を下から上にスライド表示させる
//$(function(){
//  $('.box1').slideUp();
//});

//非表示の要素をjQueryで表示させる。
//$(function(){
//  $('.box1').show();
//  $('.box1').css({'background-color':'#0000FF'});
//});

//表示されている要素をjQQueryで非表示にする。
//$(function(){
//  $('.box1').hide();
//});
//show().hide().slideUp().slideDown()の4つを使えるようになるとさまざまなスタイルに応用できる。

//確認問題
//$(function(){
//  $('.box1').slideDown(function(){
//    $('.box1').css({
//      'background-color':'#0000FF',
//      'height':'100px',
//      'width':'200px'
//    }).slideUp();
//  });
//});

//カリキュラム6
//ボックスにマウスを持って行ったとき、ボックスの色を青に変える。
//$(function(){
//  $('.box1').mouseover(function(){
//    $('.box1').css({'background-color': '#0000FF'});
//  });
//  $('.box1').mouseout(function(){
//    $('.box1').css({'background-color': '#FF0000'});
//  });
//});
//上記の記述だと、全てのCSSをいちいち書く必要があり、手間。
//そこで、マウスオーバー時のCSSをあらかじめCSSに定義しておき、マウスカーソルの状況に合わせてCSSを追加削除するように設定しておく。

//マウスがボックスに被った時に、cssのbox1-extを追加し、離れるときは解除する記述。これなら他でもCSSを使いまわせる。
//$(function(){
//  $('.box1').mouseover(function(){
//    $('.box1').addClass('box1-ext');
//  });
//  $('.box1').mouseout(function(){
//    $('.box1').removeClass('box1-ext');
//  });
//});

// マウスクリックイベントを設定する。
//.click()もあるが、clickの場合は、クリックされた時点でイベントが終わってしまう。
//クリック後に複数のイベントが行われるようにしたいときは、下記の記述。
//$('.セレクタ名').on('click', function(){
//  イベント発生時に行われる処理
//});

//実際のマウスクリックイベントの記述
$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});
