window.onload=function ()
  {
    //  var alllis= $ ('type').getElementsByTagName("li");
    //
    //  var alldom= $ ('course').getElementsByClassName("dom");
    //
    //  for(var i=0;i<alllis.length;i++){
    //      var li=alllis[i];
    //      li.index=i;
    //      <!--点击课程的类型-->
    //      li.onclick=function () {
    //
    //        for(var j=0;j<alllis.length;j++){
    //             alllis[j].className='';
    //             alldom[j].style.display='none';
    //
    //           }
    //        this.className='selected';
    //        alldom[this.index].style.display="block";
    //
    //    <!--显示课程-->
    //        //1.拿到json数据
    //        // var fgo = new ActiveXObject(" Scripting.FileSystemObject");
    //        // var openf1 = fgo.GetFile();
    //        // ReadableStreamReader str= File.open.;
    //       //json数据
    //        // var obj=JSON.parse(str);
    //
    //
    //        var obj=str[this.type];
    //
    //        <!--用json建节点-->
    //        var box = alldom[this.index];
    //
    //
    //        <!--清楚dom中的 块 -->
    //        var imagess = $('course').getElementsByTagName("a");
    //
    //         var imglen = imagess.length;
    //        for (var k = 0;k<imglen;k++)
    //        {
    //            imagess[0].remove();
    //        }
    //
    //        <!--创建dom中的 块 -->
    //        for (var key in obj){
    //          if(!obj.hasOwnProperty(i)){
    //            // var li = document.createElement("li");
    //            var a = document.createElement("a");
    //
    //            a.href="#";
    //            a.text=obj[key].name;
    //            // a.className="selcoursee";
    //            // a.onclick="selcoursee";
    //
    //            // li.appendChild(a);
    //            box.appendChild(a);
    //          }
    //
    //        }
    //        <!--dadada-->
    // <!--已选课程-->
    //        <!--清除课程-->
    //        var selcourse = $('selectedcourse').getElementsByTagName("a");
    //
    //        var sellen = selcourse.length;
    //        for (var k = 0;k<sellen;k++)
    //        {
    //          selcourse[0].remove();
    //        }
    //        <!--创建课程-->
    //        var selectedbox=document.getElementById("selectedcourse");
    //        for (var key in str){
    //            for(var m in str[key]){
    //              if(str[key][m].selected==="true")
    //              {
    //                  var p = document.createElement("a");
    //                  p.text=str[key][m].name;
    //                  p.href="#";
    //                  selectedbox.appendChild(p);
    //              }
    //            }
    //        }
    //        //selectedbox 已选课程 父块
    //        //box 未选课程块
    //        //selcourse 已选课程 子块
    //        // imagess    未选课程子块
    //
    //        selcourse = $('selectedcourse').getElementsByTagName("a");
    //        imagess = $('course').getElementsByTagName("a");
    //
    //        <!--点击未选课程-->
    //        // var imagess = $('course').getElementsByTagName("li");
    //        // var ycourse= $('selectedcourse').getElementsByTagName("a");
    //        var imagesslen = imagess.length;
    //        for(var i=0;i<imagesslen;i++) {
    //          var cour = imagess[i];
    //          cour.index = i;
    //
    //          cour.onclick = function () {
    //            <!--改变select属性-->
    //            <!--创建已选-->
    //            var p = document.createElement("a");
    //
    //            alert(this.index);
    //
    //            p.text=this.text;
    //            p.href="#";
    //            selectedbox.appendChild(p);
    //
    //            <!--删除自己-->
    //            imagess[this.index].remove();
    //          }
    //        }
    //        <!--点击已选课程-->
    //        var ycourselen = selcourse.length;
    //        for(var i=0;i<ycourselen;i++) {
    //          var ycourse = selcourse[i];
    //          ycourse.index = i;
    //          ycourse.onclick = function () {
    //
    //            <!--改变select属性-->
    //
    //            <!--创建未选-->
    //            var li = document.createElement("li");
    //            var a = document.createElement("a");
    //
    //            a.href="#";
    //            a.text=obj[key].text;
    //
    //            a.className="selcoursee";
    //
    //            console.log(a.content);
    //            console.log(a);
    //
    //            li.appendChild(a);
    //            box.appendChild(li);
    //
    //            <!--删除自己-->
    //            ycourse.remove();
    //
    //          }
    //        }
    //      }//onlick
    //      // <!--点击未选课程-->
    //      //    var imagess = $('course').getElementsByTagName("li");
    //      //    var ycourse= $('selectedcourse').getElementsByTagName("a");
    //      //
    //      //    for(var i=0;i<imagess.length;i++) {
    //      //      var cour = imagess[i];
    //      //      cour.index = i;
    //      //      cour.onclick = function () {
    //      //
    //      //        <!--改变select属性-->
    //      //        <!--删除自己-->
    //      //        cour.remove();
    //      //      }
    //      //    }
    //      // <!--点击已选课程-->
    //      //
    //      //     for(var i=0;i<ycourse.length;i++) {
    //      //       var ycour = ycourse[i];
    //      //       ycour.index = i;
    //      //       ycour.onclick = function () {
    //      //
    //      //         <!--改变select属性-->
    //      //         <!--删除自己-->
    //      //         ycour.remove();
    //      //       }
    //      //  }
    //  }}

    <!--课程管理-->
    var courseman = document.getElementById("coursemanger");
    courseman.onclick = function () {
      <!--contentright 被插入-->
      var coninr = document.getElementById("contentright");

      var cour = document.getElementById("course");
      // cour.style.display = "none";
      var selc = document.getElementById("selectedcourse");
      // selc.style.display = "none";


      // $.ajax({
      //   url:"homepage.html",
      //   data:"",
      //   timeout:3000,
      //   type:"post",
      //   success:function(xhr){
      var xhr = [
        {
          "course_id": 10002,
          "course_name": "汇编",
          "period": 64,
          "elective_number": 80,
          "course_pic": "src/img/汇编.jpg",
          "e_course_category": "普通类",
          "e_course_category_code": 1,
          "set_college_code": 1,
          "set_college": "计算机与信息工程学院",
          "credit": 3,
          "course_introduction": "汇编大多是指汇编语言，汇编程序。把汇编语言翻译成机器语言的过程称为汇编。在汇编语言中，用助记符(Memoni)代替操作码，用地址符号(Symbol)或标号(Label)代替地址码。这样用符号代替机器语言的二进制码，就把机器语言变成了汇编语言。于是汇编语言亦称为符号语言。用汇编语言编写的程序，机器不能直接识别，要由一种程序将汇编语言翻译成机器语言，这种起翻译作用的程序叫汇编程序，汇编程序是系统软件中语言处理的系统软件。",
          "course_category": "必修",
          "teach_lan_type": "汉语",
          "course_category_code": 1,
          "teach_lan_type_code": 1
        },
        {
          "course_id": 10003,
          "course_name": "java",
          "period": 64,
          "elective_number": 80,
          "course_pic": "src/img/java.jpg",
          "e_course_category": "普通类",
          "e_course_category_code": 1,
          "set_college_code": 1,
          "set_college": "计算机与信息工程学院",
          "credit": 4,
          "course_introduction": "Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程 。",
          "course_category": "专选",
          "teach_lan_type": "汉语",
          "course_category_code": 2,
          "teach_lan_type_code": 1
        },
        {
          "course_id": 10004,
          "course_name": "算法导论",
          "period": 64,
          "elective_number": 80,
          "course_pic": "src/img/算法导论.jpg",
          "e_course_category": "普通类",
          "e_course_category_code": 1,
          "set_college_code": 1,
          "set_college": "计算机与信息工程学院",
          "credit": 4,
          "course_introduction": "c是一门面向过程编程语言，？不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程 。",
          "course_category": "专选",
          "teach_lan_type": "汉语",
          "course_category_code": 2,
          "teach_lan_type_code": 1
        }
      ];
      for (var key in xhr) {
        var pss = document.createElement("p");
        pss.innerHTML = xhr[key].course_name;
        selc.appendChild(pss);
        // cour.style.display = "block";
        //     }
        //   },
        //   error:function(xhr){
        //     alert("未知错误");
        //   }
        // })


      }
    }
  };
  // function $(id) {
  //   return typeof id === "string"?document.getElementById(id):null;
  // }
