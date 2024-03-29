/*
 * @Author: IoTcat (https://iotcat.me) 
 * @Date: 2019-06-28 09:40:09 
 * @Last Modified by:    
 * @Last Modified time: 2019-06-28 09:40:09 
 */
var cookie = {
	set: function (name, value, Days) {
		if (Days === undefined) var Days = 2400;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ";path=/";
	},
	get: function (name) {
		var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
		if (arr = document.cookie.match(reg)) {
			return unescape(arr[2]);
		} else {
			return null;
		}
	},
	del: function (name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
		if (arr = document.cookie.match(reg)) {
			var cval = unescape(arr[2]);
		} else {
			var cval = null;
		}
		if (cval != null) {
			document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
		}
	}
};