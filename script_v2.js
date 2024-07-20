class User {
  // Properties
  static next_id = 1;
  static users_list = [];
  constructor(username) {
    this.u = username;
    this.score = 0;
    this.id = `Player-${User.next_id}`;
    this.index = User.next_id - 1;
    User.next_id += 1;
    User.users_list.push(this);
  }
  // Methods
  async addPlayerBox() {
    let newUser = document.createElement("div");
    newUser.id = `user-id-${this.index}`;
    // newUser.id = this.id;
    newUser.classList.add("user");
    // newUser.classList.add();
    newUser.innerHTML = `
          <button id="${this.id}">
          <img src="plus one.svg" class="plus-one" alt=""/> ${
            this.u ? this.u : this.id
          }</button>
          <i id='delet-user-${
            this.index
          }'><img src="rubbish bin.svg" class="details " alt=""/></i>
          <i id='edit-username-${
            this.index
          }'><img src="edit i.svg" class="details" alt=""/></i>
          <span class="score-counter" id="score-${this.id}"></span>
        `;
    document.getElementById("users").appendChild(newUser);
    this.OnclickAddBtn();
    this.deleteUser();
    this.editUserName();
    // this.editUserName();
  }
  OnclickAddBtn() {
    let addOneBtn = document.getElementById(this.id);
    addOneBtn.addEventListener("click", () => {
      let unitSelect = document.getElementById("unit-select");
      let unit = unitSelect.value;
      if (unit === "") {
        unit = 1;
      }
      let winScoreSelect = document.getElementById("select-win-score");
      let winScore = Number(winScoreSelect.value);
      let showResult = document.getElementById(`score-${this.id}`);
      showResult.innerText = this.score += Number(unit);
      if (this.score >= winScore) {
        showResult.style.color = "green";
      } else {
        showResult.style.color = "gray"; // Reset color if score is below winning score
      }
      console.log("id :", this.id);
      console.log("score :", Number(this.score));
    });
  }

  static getAllUsers() {
    return User.users_list;
  }

  deleteUser() {
    // Remove the user from the users_list
    let deleteUserBtn = document.getElementById(`delet-user-${this.index}`);
    deleteUserBtn.addEventListener("click", () => {
      const index = User.users_list.indexOf(this);
      console.log(index);
      if (index !== -1) {
        User.users_list.splice(index, 1);
        document.getElementById(`user-id-${this.index}`).remove();
        console.log(`User ${this.id} has been deleted.`);
      } else {
        console.log(`User ${this.id} not found.`);
      }
    });
  }
  editUserName() {
    let editUsernameBtn = document.getElementById(
      `edit-username-${this.index}`
    );
    editUsernameBtn.addEventListener("click", () => {
      //   console.log("clicked");
      let newUsername = prompt("New username ?");
      this.u = newUsername;
      document.getElementById(
        this.id
      ).innerHTML = `<img src="plus one.svg" class="plus-one" alt=""/> ${newUsername}`;
    });
  }
}
console.log(User.users_list);
let addPlayerBtn = document.getElementById("add-player");
addPlayerBtn.addEventListener("click", function () {
  let promptPlayerName = prompt("Player name ?");
  let newPlayer = new User(promptPlayerName);
  newPlayer.addPlayerBox();
  console.log(newPlayer);
});
let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
  for (let i = 0; i < User.users_list.length; i++) {
    User.users_list[i].score = 0;
    let showResult = document.getElementById(`score-${User.users_list[i].id}`);
    showResult.innerText = "";
  }
});
let booklet = document.getElementById("booklet");
let howToStartBtn = document.getElementById("how-to-start-btn");
howToStartBtn.addEventListener("click", function () {
  booklet.style.display = "block";
});
let closeHowToStart = document.getElementById("close-how-to-start");
closeHowToStart.addEventListener("click", function () {
  booklet.style.display = "none";
});
