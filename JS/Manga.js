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

        function zoomIn(chapNum, imgId) {
            localStorage.setItem("imgId", imgId);
            document.getElementById("zoom").setAttribute("style", "position: absolute; top 0px; left:0px; float: left; width: 100%; height: 990px; background-color: #8ae5eb; z-index: 10; ");
            document.getElementById("zoomImg").src = "../Images/" + imgId + ".png";
            document.getElementById("zoomImg").setAttribute("style", "width: 35%; height: 40%; float: left; margin-top:40px; margin-left: 70px;");
            addChaps(chapNum);
            localStorage.setItem("numChap", 0);
        }

        function addChaps(chapNum) {
            localStorage.numChap = chapNum;
            var box = document.createElement("div");
            var list = document.createElement("p");
            var t = document.createTextNode("List of chapters: ");
            list.appendChild(t);
            list.setAttribute("style", "color: orange; font-size: 35px;")
            box.appendChild(list);
            for (i = 1; i <= chapNum; i++) {
                var t = document.createTextNode("Chapter " + i);
                var chap = document.createElement("p");
                chap.appendChild(t);
                chap.setAttribute("id", i);
                chap.setAttribute("onclick", "openchap(this.id)");
                chap.setAttribute("style", "font-size; 25px; color: green;");                
                box.appendChild(chap);
                box.setAttribute("id", "box");
            }
            document.getElementById("zoom").appendChild(box);
            box.setAttribute("style", " text-align: center; width: 30%; float: right; position: absolute; right: 20%;");
            localStorage.setItem("countChap", 0);
        }

        

        function removeAllChild() {
            child = document.getElementById("box");
            document.getElementById("zoom").removeChild(child);

        }

        function openchap(chapId) {
            var object = document.createElement("embed");
            object.setAttribute("src", "../Images/Manga/" + localStorage.imgId + "/chap" + chapId + ".pdf");
            object.setAttribute("id", "embedPDF");
            object.setAttribute("type", "application/pdf");
            object.setAttribute("width", "100%");
            object.setAttribute("height", "100%");
            if (localStorage.countChap == 1) {
                document.getElementById("embedPDF").src = object.src;
                document.getElementById("read").setAttribute("style", "position: absolute; top 0px; left:0px; float: left; width: 100%; height: 2000px; background-color: white; z-index: 20; ");
                return 1;
            }
            document.getElementById("read").appendChild(object);
            document.getElementById("read").setAttribute("style", "position: absolute; top 0px; left:0px; float: left; width: 100%; height: 2000px; background-color: white; z-index: 20; ");
            localStorage.countChap = 1;
        }

        function exitF() {
            removeAllChild();
            document.getElementById("zoom").setAttribute("style", "display:none");
        }

        function exitRead() {
            document.getElementById("read").setAttribute("style", "display:none");
        }

        function liked(pid) {
            var id = "like" + pid;                      
            var lid = "likedTimes" + pid;            
            if(localStorage.getItem(lid) == 1){
                return 0;
            }
            var liked = Number(localStorage.getItem(id)) + 1;
            var text = document.createTextNode(liked)
            document.getElementById(id).innerHTML = liked;
            document.getElementById(id).setAttribute("Style", "color:blue;");
            localStorage.setItem(id, liked);
            var newValue = Number(localStorage.getItem(lid)) + 1;
            localStorage.setItem(lid, newValue);
        }
        
        function printLiked(pid) { 
            var id = "like" + pid;
            var liked = Number(localStorage.getItem(id));
            var text = document.createTextNode(liked)
            document.getElementById(id).innerHTML = liked;
            document.getElementById(id).setAttribute("Style", "color:blue;");
        }