function lastModified() {
    var modiDate = new Date(document.lastModified);
    var showAs = modiDate.getDate() + "." + (modiDate.getMonth() + 1) + "." + modiDate.getFullYear() + " г.";
    return showAs
}

function GetTime() {
    var modiDate = new Date();
    var Minutes

    if (modiDate.getMinutes() < 10) {
        Minutes = "0" + modiDate.getMinutes();
    } else {
        Minutes = modiDate.getMinutes();
    }

    var modiDate = new Date();
    var CurTime = modiDate.getHours() + ":" + Minutes
    return CurTime
}

document.write("Последно актуализиранa: ")
document.write(lastModified() + " @ " + GetTime());
document.write(" ч.")
document.write("");