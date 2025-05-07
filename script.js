
let accounts = [];
let timers = {};

function addAccount() {
  const name = prompt("Enter account name:");
  if (name && !accounts.includes(name)) {
    accounts.push(name);
    timers[name] = [];
    updateAccountDropdown();
  }
}

function updateAccountDropdown() {
  const select = document.getElementById("account");
  select.innerHTML = "";
  accounts.forEach(acc => {
    const option = document.createElement("option");
    option.value = acc;
    option.textContent = acc;
    select.appendChild(option);
  });
  updateTimersSection();
}

function addTimer(type) {
  const acc = document.getElementById("account").value;
  const labelMap = {
    gathering: "Resource Gathering",
    shipbuilding: "Shipbuilding",
    energy: "Energy Full"
  };
  if (acc) {
    const time = prompt(`Enter completion time for ${labelMap[type]} (HH:MM):`);
    if (time) {
      timers[acc].push({ type, time });
      updateTimersSection();
    }
  }
}

function updateTimersSection() {
  const acc = document.getElementById("account").value;
  const section = document.getElementById("timers-section");
  section.innerHTML = "";
  if (timers[acc]) {
    timers[acc].forEach((timer, idx) => {
      const div = document.createElement("div");
      div.className = "timer-entry";
      div.textContent = `${timer.type.toUpperCase()} - Ends at: ${timer.time}`;
      section.appendChild(div);
    });
  }
}
