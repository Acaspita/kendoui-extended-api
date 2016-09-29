var KendoUiExt = KendoUiExt || {};

KendoUiExt.SlideUpList = function () {
    var load = function () {

        var dataSource = new kendo.data.DataSource({
            data: [
              { title: "Título Imagen", imageUrl: "" },
              { title: "Texto Imagen", imageUrl: "" }
            ]
        });

	    $("#targetDiv").kendoExtSlideUpList({
	        dataSource: dataSource
	    });//.data("kendoExtSlideUpList");
	};

	var unload = function () {
	};

	return {
		load: load,
		unload: unload
	};
}();