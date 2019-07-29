window.onload=function() {
	waterfall("main", "box");
	var dataInt = {"data":
	               [{"src":"17.jpg"},{"src":"16.jpg"},{"src":"15.jpg"}]
	              };
	window.onscroll=function() {
		if(checkScrollSlide()) {
			var oParent = document.getElementById("main");
			//将数据块渲染到页面的尾部
			for(var i = 0; i < dataInt.data.length; i++) {
				var obox = document.createElement("div");
				obox.className = "box";
				oParent.appendChild(obox);
				var opic = document.createElement("div");
				opic.className = "pic";
				obox.appendChild(opic);
				var oimage = document.createElement("img");
				oimage.src = "images/" +  dataInt.data[i].src;
				opic.appendChild(oimage);
			}
			waterfall("main", "box");
		}
	}
	
}

//检测是否需要加载最后一个数据块
function checkScrollSlide() {
	var oParent = document.getElementById("main");
	var oboxs = getByClass(oParent, "box");
	var lastBoxH = oboxs[oboxs.length - 1].offsetTop +
	               Math.floor(oboxs[oboxs.length - 1].offsetHeight / 2);
	               //混杂模式下||标准模式下 scroll的top
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	//浏览器窗口的高 混杂模式下||标准模式下 
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	console.log(lastBoxH > scrollTop + height);
    return lastBoxH < scrollTop + height;
}

function waterfall(parent, box) {
	// 将main下的所有class为box的元素取出来
	var oParent = document.getElementById(parent);
    var oboxs = getByClass(oParent, box);
    // 计算整个页面显示的列数（页面宽/box宽）
    var oboxW = oboxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / oboxW);
    //设置 main的宽度
    oParent.style.cssText = "width:" + oboxW * cols +"px; margin:0 auto;";
    var hArr = [];
    for (var i = 0; i < oboxs.length; i++) {
    	if(i < cols) {
    		hArr.push(oboxs[i].offsetHeight);
    	}
    	else{
    		var minH = Math.min.apply(null, hArr);
    		var index = getMinHIndex(hArr, minH);
    		oboxs[i].style.position="absolute";
    		oboxs[i].style.top = minH + "px";
    		//oboxs[i].style.left = oboxW * index + "px";
    		oboxs[i].style.left = oboxs[index].offsetLeft + "px";
    		hArr[index] += oboxs[i].offsetHeight;
    	}
    }
    console.log(minH,index,hArr);
}

function getMinHIndex(arr, val) {
	for(var i in arr) {
		if(arr[i] == val) {
			return i;
		}
	}
}

// 根据class取元素
function getByClass(parent, clsName) {
	var boxArr = new Array(),  //用来存储获取到的所有class为box的元素
        oelements = parent.getElementsByTagName("*");
    for (var i = i = 0; i < oelements.length; i++) {
    	document.getElementById()
		if(oelements[i].className === clsName) {
			boxArr.push(oelements[i]);
		}
    }
return boxArr;
}