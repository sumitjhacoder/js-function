 $('#addTest').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: baseurl + '2.6/online-test-ix/services/saveTest.php',
            data: $('#addTest').serialize(),
	    success: function (data) {
                var data = JSON.parse(data);
                if (data.status == 1) {
		    $('#addTest').trigger("reset");
		   // viewTest();
              //      swal('Success', 'Test save successful', 'success');
                }
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                $('#postError').html(msg);
                swal({
                    title: "Error !",
                    text:msg,
		    type: "warning"
                });
            },
        });
    });
