var KendoUiExt = KendoUiExt || {};

KendoUiExt.SlideUpList = function () {
	var load = function () {
	    $("#targetDiv").kendoExtSlideUpList({
	        dataSource: ["Item 1", "Item 2", "Item 3", "Item 4"]
	    });//.data("kendoExtSlideUpList");
	};

	var unload = function () {
	};

	return {
		load: load,
		unload: unload
	};
}();