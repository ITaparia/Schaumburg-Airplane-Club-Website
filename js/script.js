
var color_one = false;
var color_two = false;
var color_three = false;
var color_four = false;

function changeColor_one()
{
	if(color_one == false)
	{
		document.getElementById("first_acor").style.backgroundColor = "#0383B3";	
		color_one = true;
	}
	else if(color_one == true)
	{
		document.getElementById("first_acor").style.backgroundColor = "#00ADF7";
		color_one = false;
	}
}

function changeColor_two()
{
	if(color_two == false)
	{
		document.getElementById("second_acor").style.backgroundColor = "#0383B3";	
		color_two = true;
	}
	else if(color_two == true)
	{
		document.getElementById("second_acor").style.backgroundColor = "#00ADF7";
		color_two = false;
	}
}

function changeColor_three()
{
	if(color_three == false)
	{
		document.getElementById("third_acor").style.backgroundColor = "#0383B3";	
		color_three = true;
	}
	else if(color_three == true)
	{
		document.getElementById("third_acor").style.backgroundColor = "#00ADF7";
		color_three = false;
	}
}

function changeColor_four()
{
	if(color_four == false)
	{
		document.getElementById("fourth_acor").style.backgroundColor = "#0383B3";	
		color_four = true;
	}
	else if(color_four == true)
	{
		document.getElementById("fourth_acor").style.backgroundColor = "#00ADF7";
		color_four = false;
	}
}