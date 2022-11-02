//Get Data
firebase.database().ref('users/').on('value', function(snapshot) {
    var value = snapshot.val();
    var htmls = [];
    $.each(value, function(index, value){
    	if(value) {
    		htmls.push('<tr>\
        		<td>'+ value.title +'</td>\
				<td>'+ value.url +'</td>\
				<td>'+ value.tumb +'</td>\
				<td>'+ value.des +'</td>\
        		<td><a data-toggle="modal" data-target="#update-modal" class="btn btn-outline-success updateData" data-id="'+index+'">Update</a>\
        		<a data-toggle="modal" data-target="#remove-modal" class="btn btn-outline-danger removeData" data-id="'+index+'">Delete</a></td>\
        	</tr>');
    	}    	
    	lastIndex = index;
    });
    $('#tbody').html(htmls);
    $("#submitUser").removeClass('desabled');
});

var database = firebase.database();

var lastIndex = 0;

// Add Data
$('#submitUser').on('click', function(){
	var values = $("#addUser").serializeArray();
	var title = values[0].value;
	var url = values[1].value;
	var tumb = values[2].value;
	var des = values[3].value;
	var userID = lastIndex+1;

    firebase.database().ref('users/' + userID).set({
        title: title,
		url: url,
		tumb: tumb,
		des: des,
    });

    // Reassign lastID value
    lastIndex = userID;
	$("#addUser input").val("");
});
