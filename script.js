let date = new Date();

function todaydate() {
    let hour = date.getHours();
    var hourText = hour ;
    var timeOfDay = 'AM';
    if (hour > 12) {
        hourText = hour - 12;
        timeOfDay = 'PM';
    }
    document.getElementById("Year").innerHTML = date.getFullYear();
    document.getElementById("LastUpdate").innerHTML = document.lastModified;
}