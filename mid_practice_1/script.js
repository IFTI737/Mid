function validateForm() 
{
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let error = document.getElementById("ferror");

    if (fname === "" || lname === "")
    {
        error.innerHTML = "All fields are required";
        return false;
    }

    if (fname.length < 2 || lname.length < 2)
    {
        error.innerHTML = "First and last names must be at least 2 characters long";
        return false;
    }

    error.innerHTML = "";
    return true;
}
