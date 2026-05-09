let selectDate = document.getElementById("selectDate");
const showAge = document.querySelector(".showAge");

selectDate.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let brithDate = new Date(selectDate.value);
    let day = brithDate.getDate();
    let month = brithDate.getMonth() + 1;
    let year = brithDate.getFullYear();

    let today = new Date();
    let tDay = today.getDate();
    let tMonth = today.getMonth() + 1;
    let tYear = today.getFullYear();

    let ageYear = tYear - year;
    let ageMonth,ageDay;

    if (tMonth >= month) {
        ageMonth = tMonth - month;
    } else {
        ageYear--;
        ageMonth = 12 + tMonth - month;
    }

    if (tDay >= day) {
        ageDay = tDay - day;
    } else {
        ageMonth--;
        ageDay = getDaysInMonth(month, year) + tDay - day;
    }
    if (ageMonth < 0) {
        ageMonth = 11;
        ageYear--;
    }

    showAge.style.display = "block";
    showAge.innerHTML = `You are is <span class="text-amber-200">${ageYear}</span> years, <span class="text-amber-200">${ageMonth}</span> months and <span class="text-amber-200">${ageDay}</span> days old`;

}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}