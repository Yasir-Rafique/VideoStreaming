var updateID = 0;
$('body').on('click', '.updateData', function() {
	updateID = $(this).attr('data-id');
	firebase.database().ref('users/' + updateID).on('value', function(snapshot) {
		var values = snapshot.val();
		var updateData = '<div class="form-group">\
		        <label for="title" class="col-md-12 col-form-label">Title</label>\
		        <div class="col-md-12">\
		            <input id="title" type="text" class="form-control" name="title" value="'+values.title+'" required autofocus>\
		        </div>\
		    </div>\
		    <div class="form-group">\
		        <label for="url" class="col-md-12 col-form-label">URL</label>\
		        <div class="col-md-12">\
		            <input id="url" type="text" class="form-control" name="url" value="'+values.url+'" required autofocus>\
		        </div>\
			</div>\
			<div class="form-group">\
		        <label for="tumb" class="col-md-12 col-form-label">Tumbnail</label>\
		        <div class="col-md-12">\
		            <input id="tumb" type="text" class="form-control" name="tumb" value="'+values.tumb+'" required autofocus>\
		        </div>\
			</div>\
			<div class="form-group">\
		        <label for="des" class="col-md-12 col-form-label">Description</label>\
		        <div class="col-md-12">\
		            <input id="des" type="text" class="form-control" name="des" value="'+values.des+'" required autofocus>\
		        </div>\
		    </div>';

		    $('#updateBody').html(updateData);
	});
});

$('.updateUserRecord').on('click', function() {
	var values = $(".users-update-record-model").serializeArray();
	var postData = {
	    title : values[0].value,
		url : values[1].value,
		tumb : values[2].value,
		des : values[3].value,
	};

	var updates = {};
	updates['/users/' + updateID] = postData;

	firebase.database().ref().update(updates);

	$("#update-modal").modal('hide');
});
