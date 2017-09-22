
/*  Notification JS  */
	var date = new Date();
    var time = date.getHours();
	
	function notification() {
        
        if (time >=16 && time <=23)
        {
            return "<b>Good Evening </b>";
        }
		else if(time >=12  && time <16)
        {
            return "<b>Good Afternoon </b>";
        }
        else
        {
            return "<b>Good Morning </b>";
        }
	}

/* Show Day */
	var day = date.getDay();
	function daY() {
		switch (day)
		{
			case 6:
				return "Saturday";
				break;
			case 0:
				return "Sunday";
				break;
			case 1:
				return "Monday";
				break;
			case 2:
				return "Tuesday";
				break;
			case 3:
				return "Wednesday";
				break;
			case 4:
				return "Thursday";
				break;
			case 5:
				return "Friday";
				break;
			default:
				break;
		}
	}
	
/* Show Date */
	var today = date.getDate();
	if(date==1)
	{
		today = today+"st";
	}
	else if(date>1 && date<4)
	{
		today = today+"rd";
	}
	else 
	{
		today = today+"th";
	}
	
/* Show Month */
	var month = date.getMonth();
	function montH() {
		switch (month)
		{
			case 0:
				return "January";
				break;
			case 1:
				return "February";
				break;
			case 2:
				return "March";
				break;
			case 3:
				return "April";
				break;
			case 4:
				return "May";
				break;
			case 5:
				return "June";
				break;
			case 6:
				return "July";
				break;
			case 7:
				return "Agust";
				break;
			case 8:
				return "September";
				break;
			case 9:
				return "October";
				break;
			case 10:
				return "November";
				break;
			case 11:
				return "December";
				break;
			default:
				break;
		}
	}
	
	
/* Show Time */	

	function startTime()
	{
		var today = new Date();
		var hour = today.getHours();
		var minute = today.getMinutes();
		var second= today.getSeconds();
		minute = checkTime(minute);
		second = checkTime(second);
			
		document.getElementById('text').innerHTML = "Time: "+hour + " : " + minute + " : " + second + "</br>";
		t = setTimeout ('startTime()', 500);
	}
	
	function checkTime(i)
	{
		if(i<10)
		{
			i="0" + i;
		}
		return i;
	}

