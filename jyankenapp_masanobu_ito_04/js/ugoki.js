
// pic01
$("#pic01image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic01.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        

        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
       

        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
       

        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic02
$("#pic02image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic02.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
    
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic03
$("#pic03image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic03.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }

        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});
// pic04
$("#pic04image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic04.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }

        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic05
$("#pic05image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic05.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }

        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});
//pic06
$("#pic06image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic06.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        

        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic07
$("#pic07image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic07.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic08
$("#pic08image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic08.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*1 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } else {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// 中級編
// pic09
$("#pic09image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic09.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic10
$("#pic10image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic10.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic11
$("#pic11image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic11.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }  
        if(r==2){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        } 
        if(r==2) {
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic12
$("#pic12image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic12.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic13
$("#pic13image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic13.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic14
$("#pic14image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic14.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }  
        if(r==2){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        } 
        if(r==2) {
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});


// pic15
$("#pic15image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic15.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});


// pic16
$("#pic16image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic16.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }  
        if(r==2){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*2 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        } 
        if(r==2) {
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });
});

// 上級
// pic17
$("#pic17image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic17.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});
// pic18
$("#pic18image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic18.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic19
$("#pic19image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic19.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});
// pic20
$("#pic20image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic20.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic21
$("#pic21image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic21.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic22
$("#pic22image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic22.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

// pic23
$("#pic23image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic23.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});

//pic24
$("#pic24image").on("click",function(){
    $("#aitedummy").attr('src',"img/pic24.png");
        
    //グーの表示
    $("#guu").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "ひきわけ！"
        } 
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの負け！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの勝ち！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //チョキの表示

    $("#choki").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの負け！"
        }  
        if(r==2){
            viewgazou = "img/aite/paa.png";
            viewtext = "キミの勝ち！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "ひきわけ！"
        }
       
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

    //パーの表示
    $("#paa").on("click",function(){

        //乱数
        const r = Math.ceil( Math.random()*3 );

        //if分岐
        let viewgazou = "";
        if(r==1){
            viewgazou = "img/aite/guu.png";
            viewtext = "キミの勝ち！"
        } 
        if(r==2) {
            viewgazou = "img/aite/paa.png";
            viewtext = "ひきわけ！"
        }
        if(r==3){
            viewgazou = "img/aite/choki.png";
            viewtext = "キミの負け！"
        }
        
        //表示処理
        $("#aite").attr('src',viewgazou);
        $("#kachimake").html(viewtext);

    });

});




























// うまくいかないコード

// $("#pic01image").on("click",function(){
//     $("#aitedummy").attr('src',"img/pic01.png");
 
//     $("#paa").on("click",function(){
//         const r = Math.ceil( Math.random()*1 );
//         let viewgazou = "";
//         let viewtext = "";
//         //if分岐
//         if(r==1){
//             viewgazou = "img/aite/guu.png";
//             viewtext = "キミの勝ち！"
//         };
//         $("#aite").html(html(viewgazou));
//         $("#text").html(html(viewtext));
//     });

//     $("#guu").on("click",function(){
//         const r = Math.ceil( Math.random()*1 );
//         let viewgazou = "";
//         let viewtext = "";
//         //if分岐
//         if(r==1){
//             viewgazou = "img/aite/guu.png";
//             viewtext = "ひきわけ！"
//         };
//         $("#aite").html(html(viewgazou));
//         $("#text").html(html(viewtext));
//     });    

//     $("#choki").on("click",function(){
//         const r = Math.ceil( Math.random()*1 );
//         let viewgazou = "";
//         let viewtext = "";
//         //if分岐
//         if(r==1){
//             viewgazou = "img/aite/guu.png";
//             viewtext = "キミの負け！"
//         };
//         $("#aite").html(html(viewgazou));
//         $("#text").html(html(viewtext));
//     });
// });








// // //pic01(いまのところ正しいとおもわれるやつ)
// // $("#pic01image").on("click",function(){
// //     $("#aitedummy").attr('src',"img/pic01.png");


// $("#paa").on("click",function(){
//     const r = 1;

//     //if分岐
//     let viewgazou = "";
//     if(r==1){
//         viewgazou = "img/aite/guu.png";
//         viewtext = "キミの勝ち！"
//     } 
// });
// $("#guu").on("click",function(){
//     const r = 1;

//     //if分岐
//     let viewgazou = "";
//     if(r==1){
//         viewgazou = "img/aite/guu.png";
//         viewtext = "ひきわけ！"
//     } 
// });    

// $("#choki").on("click",function(){
//     const r = 1;

//     //if分岐
//     let viewgazou = "";
//     if(r==1){
//         viewgazou = "img/aite/guu.png";
//         viewtext = "キミの負け！"
//     } 
// });
// });

// その前のやつ
  





    
    // const r = Math.ceil( Math.random()*1 );
    // let viewgazou = "";
    // if(r==1){
    //     viewgazou = "img/aite/choki.png";
    //     viewtext = "キミの負け！"
    // }
    // if(r==2){
    //     viewgazou = "img/aite/guu.png";
    //     viewtext = "キミの勝ち！"
    // }
    // if(r==3){
    //     viewgazou = "img/aite/paa.png";
    //     viewtext = "ひきわけ！  "
    // }