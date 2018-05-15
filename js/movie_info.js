(function() {
    window.addEventListener('tizenhwkey', function(ev) {
        if (ev.keyName === 'back') {
            var page = document.getElementsByClassName('ui-page-active')[0],
                pageid = page ? page.id : '';

            if (pageid === 'main') {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {}
            } else {
                window.history.back();
            }
        }
    });

    console.log("second1");
//    var qs = new Querystring();
//    var v1 = qs.get("movieID");

	/**
     * Initiates the application.
     * @private
     */
    function init() {
        console.log("second");
    }
	
	window.onload = init;
}());