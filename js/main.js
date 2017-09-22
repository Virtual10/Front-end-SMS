/*  Side bar Menu  */
$(document).ready(function(){
	$("#menu_toggle").click(function(e){
		e.preventDefault();
		$("#side_bar_area").toggleClass("menuDisplayed");
	});
});
	

/*  File Input JS */
    $('#file-fr').fileinput({
        language: 'fr',
        uploadUrl: '#',
        allowedFileExtensions : ['jpg', 'png','gif'],
    });
    $(document).ready(function() {
        $("#test-upload").fileinput({
            'showPreview' : true,
            'allowedFileExtensions' : ['jpg', 'png','gif'],
            'elErrorContainer': '#errorBlock'
        });
    });


/*  popUpAddFee  */
function addExpensesRow()
{
	var tableLength = $("#addSubExpensesTable tbody tr").length;

	var tableRow;
	var arrayNumber;
	var count;

	if(tableLength > 0) {		
		tableRow = $("#addSubExpensesTable tbody tr:last").attr('id');
		arrayNumber = $("#addSubExpensesTable tbody tr:last").attr('class');
		count = tableRow.substring(3);	
		count = Number(count) + 1;
		arrayNumber = Number(arrayNumber) + 1;					
	} else {
		// no table row
		count = 1;
		arrayNumber = 0;
	}

	var tr = '<tr id="row'+count+'" class="'+arrayNumber+' appended-exp-row">'+			  						
		'<td class="form-group">'+
			'<input type="text" class="form-control"  name="subExpensesName['+count+']" id="subExpensesName'+count+'" placeholder="Expenses Name" />'+						
		'</td>'+
		'<td class="form-group">'+			
			'<input type="text" class="form-control"  name="subExpensesAmount['+count+']" id="subExpensesAmount'+count+'" onkeyup="calculateTotalAmount()" placeholder="Expenses Amount" />'+									
		'</td>'+		
		'<td class="form-group">'+
			'<button type="button" class="btn btn-default" onclick="removeExpensesRow('+count+')"><i class="glyphicon glyphicon-remove"></i></button>'+
		'</td>'+
	'</tr>';
	
	if(tableLength > 0) {							
		$("#addSubExpensesTable tbody tr:last").after(tr);
	} else {				
		$("#addSubExpensesTable tbody").append(tr);
	}				
}

function removeExpensesRow(row = null)
{
	if(row) {
		$("#addSubExpensesTable #row"+row).remove();	
		calculateTotalAmount();
	}
}

function calculateTotalAmount()
{
	var totalAmount = 0;	
	var tableProductLength = $("#addSubExpensesTable tbody tr").length;
	for(x = 0; x < tableProductLength; x++) {
		var tr = $("#addSubExpensesTable tbody tr")[x];
		var count = $(tr).attr('id');
		count = count.substring(3);
					
		totalAmount = Number(totalAmount) + Number($("#subExpensesAmount"+count).val());


	} // /for

	totalAmount = totalAmount.toFixed(2);

	// sub total
	$("#totalAmount").val(totalAmount);
	$("#totalAmountValue").val(totalAmount);
	
}

/*  toggle_admission_info  */
$(document).ready(function(){
  $(".toggle_admission_btn").click(function(){
    $("#toggle_admission_info").toggle();
  });
});

/*  toggle_submit_btn show  */
$(document).ready(function(){
  $(".attn_btn").click(function(){
    $(".toggle_submit_btn").slideDown("slow");
  });
});

/*  attendance_switch  */
$(document).ready(function(){
	$(".present_yes").click(function(){
		$(".present_no").animate({
			zIndex: '1',
			opacity: '0.5'
			});
		$(".present_yes").animate({
			zIndex: '2',
			opacity: '1'
			});
		$(".true_attend").css("background-color","green");	
	});
});
$(document).ready(function(){
	$(".present_no").click(function(){
		$(".present_yes").animate({
			zIndex: '1',
			opacity: '0.5'			
		});
		$(".present_no").animate({
			zIndex: '2',
			opacity: '1'
		});			
		$(".true_attend").css("background-color","red");		
	});
});


	

/*  popUpAddEvent  */
function addEventRow()
{
	var tableLength = $("#popUpaddEventID tbody tr").length;

	var tableRow;
	var arrayNumber;
	var count;

	if(tableLength > 0) {		
		tableRow = $("#popUpaddEventID tbody tr:last").attr('id');
		arrayNumber = $("#popUpaddEventID tbody tr:last").attr('class');
		count = tableRow.substring(3);	
		count = Number(count) + 1;
		arrayNumber = Number(arrayNumber) + 1;					
	} else {
		// no table row
		count = 1;
		arrayNumber = 0;
	}

	var tr = '<tr id="row'+count+'" class="'+arrayNumber+' appended-exp-row">'+			  						
		'<td class="form-group">'+
			'<input type="text" class="form-control"  name="subDatetName['+count+']" id="subDatetName2'+count+'" placeholder="Date" />'+						
		'</td>'+
		'<td class="form-group">'+			
			'<input type="text" class="form-control"  name="subDayName['+count+']" id="subDayName2'+count+'" placeholder="Day" />'+									
		'</td>'+
		'<td class="form-group">'+			
			'<input type="text" class="form-control"  name="subEventName['+count+']" id="subEventName2'+count+'" placeholder="Event" />'+									
		'</td>'+		
		'<td class="form-group">'+
			'<button type="button" class="btn btn-default" onclick="removeEventRow('+count+')"><i class="glyphicon glyphicon-remove"></i></button>'+
		'</td>'+
	'</tr>';
	
	if(tableLength > 0) {							
		$("#popUpaddEventID tbody tr:last").after(tr);
	} else {				
		$("#popUpaddEventID tbody").append(tr);
	}				
}
function removeEventRow(row = null)
{
	if(row) {
		$("#popUpaddEventID #row"+row).remove();	
	}
}

/* SuccessLogin */
function successLogin() {
	swal(
	  'Good Job!',
	  'Thank you.',
	  'success'
	)
}

/*popUpSaveSuccess*/
function popUpSaveSuccess() {
	swal(
	  'Good job!',
	  'You have successfully deleted.',
	  'success'
	)
}

/*Pop Up delete*/
function popUpDelete() {
	swal({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, delete it!',
	  cancelButtonText: 'No, cancel!',
	  confirmButtonClass: 'btn btn-success',
	  cancelButtonClass: 'btn btn-danger',
	  buttonsStyling: false
	}).then(function () {
	  swal(
		'Deleted!',
		'Your file has been deleted.',
		'success'
	  )
	}, function (dismiss) {
	  // dismiss can be 'cancel', 'overlay',
	  // 'close', and 'timer'
	  if (dismiss === 'cancel') {
		swal(
		  'Cancelled',
		  'Your imaginary file is safe :)',
		  'error'
		)
	  }
	})
}


