if (localStorage.flag != 1) {
            for (i = 1; i <= 9; i++) {
                localStorage.setItem("like" + i, 0);
            }
            localStorage.setItem("flag", 1);
            
        }
        for (i = 1; i <= 9; i++) {
                localStorage.setItem("likedTimes" + i, 0);
            }
        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
        }

        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        function filter(gerne) {
            blurList();
            var objects = document.getElementsByClassName(gerne);
            for (i = 0; i < objects.length; i++) {
                objects[i].setAttribute("style", "opacity: 1;");
            }
        }

        function blurList() {
            var objects = document.getElementsByClassName("lightnovel");
            for (i = 0; i < objects.length; i++) {
                objects[i].setAttribute("style", "opacity: 0.5;");
            }

        }

        function opacityDefault() {
            var objects = document.getElementsByClassName("lightnovel");
            for (i = 0; i < objects.length; i++) {
                objects[i].setAttribute("style", "opacity: 1;");
            }
        }

        function zoomIn(PriceNum, imgId) {
            localStorage.setItem("imgId", imgId);
            document.getElementById("zoom").setAttribute("style", "position: fixed; top 0px; left:0px; float: left; width: 70%; height: 80%; margin-left: 15%; margin-top: 5%; background-color: aqua; z-index: 10; ");
            document.getElementById("zoomImg").src = "../Images/" + imgId + ".png";
            document.getElementById("zoomImg").setAttribute("style", "width: 70%; height: 80%; float: left; margin-left:10%; margin-top: 40px;");
            addPrice(chapNum);
            localStorage.setItem("numChap", 0);
        }      

        function removeAllChild() {
            //child = document.getElementById("box");
            document.getElementById("zoom").removeChild(child);

        }

        

        function exitF() {
            //removeAllChild();
            document.getElementById("zoom").setAttribute("style", "display:none");
        }

           function validate() {
     
       if(document.shipInfo.Country.value == 0) {
           alert("Please choose your country!");
           return false;
       }
       
       if(document.shipInfo.firstname.value == "") {
           alert("Name must be filled out");
           return false;
       }
       
       if(document.shipInfo.Quantity.value == 0) {
           alert("Please enter the quantity number!");
           return false;
       }
        
   }

       