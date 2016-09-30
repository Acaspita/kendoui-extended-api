var KendoUiExt = KendoUiExt || {};

KendoUiExt.SlideUpList = function () {
    var load = function () {

        var dataSource = new kendo.data.DataSource({
            data: [
              { title: "Título Imagen", imageUrl: "http://d26uhratvi024l.cloudfront.net/gsc/XRD9EQ/35/c7/b6/35c7b62ad5574e16a078ead0d01ef885/images/design/u7703.png?token=d982b86e18ad5942a60cde9080679fb1" },
              { title: "Texto Imagen", imageUrl: "http://d26uhratvi024l.cloudfront.net/gsc/XRD9EQ/35/c7/b6/35c7b62ad5574e16a078ead0d01ef885/images/design/u7703.png?token=d982b86e18ad5942a60cde9080679fb1" }
            ],
            options:
              {
                title: "Items"
              }
        });

        $("#contentPane").kendoExtSlideUpList({
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