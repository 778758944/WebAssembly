(function(W){
	var Laplacian = [
            [0,1,0],
            [1,-4,1],
            [0,1,0]
        ];
	var gray = function(R,G,B){
		return  Math.ceil( (R*299 + G*587 + B*114 + 500) / 1000 );
	}

	var calcMask = function(mask, arr, x, y, width){
		var temp = 0;
		var maskWidth = mask[0].length,
			maskHeight = mask.length;

		for(var i = 0; i < maskHeight; i++){
			for(var j = 0; j < maskWidth; j++){
				var tx = x + j;
				var ty = y + i;
				var gray = arr[(tx + (ty * width)) * 4];
				// console.log(gray);
				temp += gray * mask[i][j];
			}
		}

		return temp;
	}

	var toGray = function(arr){
		var len = arr.length;
		console.log(len);
		for(var i = 0; i < len; i+=4){
			var temp = gray(arr[i], arr[i+1], arr[i+2]);
			arr[i] = temp;
			arr[i + 1] = temp;
			arr[i + 2] = temp;
			arr[i + 3] = 255;
		}
		return arr;
	}

	var twoColor = function(arr, t){
		var len = arr.length;
		for(var i = 0; i < len; i+=4){
			var temp = arr[i] > (t || 140) ? 0 : 255;
			arr[i] = temp;
			arr[i + 1] = temp;
			arr[i + 2] = temp;
			arr[i + 3] = 255;
		}
		return arr;
	}

	var lapColor = function(arr, width, height){
		var len = arr.length;
		for(var i = 0; i < len; i+=4){
			var x = (i/4) % width,
			    y = ((i/4) / width) >> 0;
			var temp = calcMask(Laplacian, arr, x, y, width);
			// console.log("temp", temp);
			temp = Math.max(temp, 0);
			temp = Math.min(temp, 255);

			arr[i] = temp;
			arr[i + 1] = temp;
			arr[i + 2] = temp;
			arr[i + 3] = 255;
		}
		return arr;
	}

	W.Edge = {
		toGray: toGray,
		twoColor: twoColor,
		lapColor: lapColor,
	}
})(window)















