const currentDate = document.querySelector(".current_date");
const daysTag = document.querySelector(".days");
const calendarIcons = document.querySelectorAll(".icons i");
const dateInput = document.getElementById("date");
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

function renderCalendar() {
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(), //* Getting first day of month -> returns array index (0 - 6);
  lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(), //* Getting last date of month
  lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(); //* Getting last day of month
  let liTag;

  daysTag.innerHTML = "";

  for (let i = firstDayOfMonth; i > 0; i--) { //* Creating <li> of previous month last days
    liTag = document.createElement("li");
    liTag.classList.add("inactive");
    daysTag.appendChild(liTag);
  }

  for (let i = 1; i <= lastDateOfMonth; i++) { //* Creating <li> of all days of current month
    liTag = document.createElement("li");
    liTag.classList.add("active");
    liTag.innerText = i;
    daysTag.appendChild(liTag);
  }

  for (let i = lastDayOfMonth; i < 6; i++) { //* Creating <li> of next month first days
    liTag = document.createElement("li");
    liTag.classList.add("inactive");
    daysTag.appendChild(liTag);
  }

  currentDate.innerText = MONTHS[currMonth]+" "+currYear;
  const activeDays = daysTag.querySelectorAll("li.active");

  function selectedListCheck() {
    let selectedLists = [];
    let fromDay;
    let toDay;

    for (let i = 0; i < lastDateOfMonth; i++) {
      if (activeDays[i].classList.contains("selected")) {
        selectedLists.push(i + 1);
      }
    }

    if (selectedLists.length == 3) {
      fromDay = selectedLists[0];
      toDay = selectedLists[1];

      for (let i = fromDay; i < toDay - 1; i++) {
        activeDays[i].classList.remove("selected_between");  
      }

      for (let i = 0; i < lastDateOfMonth; i++) {
        activeDays[fromDay - 1].classList.remove("selected");
        activeDays[toDay - 1].classList.remove("selected");
      }

      dateInput.value = "";

    } else if (selectedLists.length == 2) {
      fromDay = selectedLists[0];
      toDay = selectedLists[1];

      for (let i = fromDay; i < toDay - 1; i++) {
        activeDays[i].classList.add("selected_between");
      }

      dateInput.value = "Date: from "+fromDay+". to "+toDay+". "+MONTHS[date.getMonth()]+" "+date.getFullYear();

    } else if (selectedLists.length < 2) {
      for (let i = 0; i < lastDateOfMonth; i++){
        activeDays[i].classList.remove("selected_between");
      }

      dateInput.value = "";

    }
    console.log(selectedLists);

  }

  activeDays.forEach((day) => {
    day.addEventListener("click", () => {
      day.classList.toggle("selected");
      selectedListCheck();
    })
  })

}
renderCalendar();

calendarIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    currMonth = icon.dataset.icon === "previous" ? currMonth - 1 : currMonth + 1;

    if (currMonth > MONTHS.length -1) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
      if (currMonth < date.getMonth()) {
        currMonth = date.getMonth()
        currYear = date.getFullYear();
      }
    }
    
    renderCalendar();
  })
})
