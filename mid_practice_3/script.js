let input=document.getElementById("age");
let ageError=document.getElementById("ageError");
function agevalidate()
{
     if(input.value.trim()==="")
    {
        ageError.innerHTML="<p>Please enter your age</p>";
    }
    else if(input.value<40)
    {
        ageError.innerHTML="<p>To be a part of the community, you need to at least 40</p>";
    }
    else if(input.value>=40 && input.value<=50)
    {
        ageError.innerHTML="<p>You are the youngsters of this community</p>";
    }
    else if(input.value>50)
    {
        ageError.innerHTML="<p style='color: red;'>Top level members of the group</p>";
    }
    else
    {
        ageError.innerHTML="";
    }

}

addEventListener("input",agevalidate)