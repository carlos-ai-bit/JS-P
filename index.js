function validateForm(event) {
    event.preventDefault()
    let firstName = document.getElementById("fname").value;
    let LastName = document.getElementById("lname").value;
    let DateOfBirth = document.getElementById("birth").value;
    let Email = document.getElementById("Address").value;
    let Telephone = document.getElementById("number").value;


    if (firstName === "") {
        alert("Please enter your name .");
        firstName.focus();
        return false;
    }

    if (LastName == "") {
        alert("Please enter your name.");
        LastName.focus();
        // return false;
    }

    if (DateOfBirth == "") {
        alert("Please enter your Date of Birth.");
        DateOfBirth.focus(); DateOfBirth.focus();

        return false;
    }
    if (Email == "") {
        alert("Please enter your Email.");
        E - mailAddress.focus();
        return false;
    }

    if (Telephone == "") {
        alert("Please enter your name phone number.");
        Telephone.focus();
        return false;
    }

    //  form.addEventListener("submit", function (e) {
    //     prevent the form from submitting
    //     e.preventDefault();
    // });
    else console.log(firstName, LastName, DateOfBirth, Email.Telephone)
    return true;
}
// function displaySubmittedData(firstName, LastName, DateOfBirth, Email, Telephone) {
//     const submittedDataElement = document.getElementById("submittedData");
// }