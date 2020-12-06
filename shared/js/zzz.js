/*****************************************
修改首页显示 http://www.since2018.vip/courses
页面加载完成后，页面元素将被js替换，无法使用 $(function(){ }) 方式
by ZRF @ 20200408
*****************************************/

var z_timer1 = null;
var z_count = 0;

// 这在首页执行
if (window.location.href.split("/")[3] == "courses"){
  z_timer1 = self.setInterval("z_modify_header_banner()", 100);
}

function z_modify_header_banner(){
  z_count++
  // console.log("z_timer1执行次数：" + z_count);
  var z_div3 = $('#courses-container>div>div:nth-child(3)');
  if(z_div3.length>0){
    if(z_div3.html().length != 0 && z_count<300){
      // 1、隐藏登录按钮
      // $(".header_right").hide();
      // 2、banner图片，已通过文件替换：shared/images/banners/courses-hero-student.jpg
      $("#header-banner").css("height", "500px");
      // 3、隐藏banner前的文字
      $('#courses-container>div>div:lt(3)').hide();
      // 4、删除div:lt(3)的内容（含3个div，1为创建用户，2为空，3为在家学习）
      $('#courses-container>div>div:lt(3)').html("");
      // 5、调整div:nth-child(4)偏移
      $('#courses-container>div>div:nth-child(4)').css("margin-top", "500px");
      // 6、隐藏离线课程
      $("#unplugged").hide();
      $("#unplugged").html("");
      // 7、隐藏英文部分课程（含2个div）
      $('#courses-container>div>div:nth-child(4)>div:gt(1)').hide();
      $('#courses-container>div>div:nth-child(4)>div:gt(1)').html("");
      // 8、隐藏footer部分内容，电脑也已通过文件 _footer.html.haml 修改，手机端需隐藏
      $(".small-footer-base small").hide();
    }
    else{
      window.clearInterval(z_timer1);
      z_timer1 = null;
      // console.log("停止循环clearInterval(z_timer1)，共执行z_timer1次数：" + z_count);
    }
  }
}
