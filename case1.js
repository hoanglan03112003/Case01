const Modules = function () {
  const ListItem = document.querySelectorAll("li");

  ListItem.forEach((item) => {
    item.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#f2f2f2";
      this.style.color = "black";
    });
    item.addEventListener("mouseout", function () {
      this.style.backgroundColor = "black";
      this.style.color = "white";
    });
  });

  const AddItem = document.getElementById("demo3");
  const ShowFeatures = document.getElementById("showlogin");
  const CloseLogin = document.getElementById("test2");
  const CloseLogin2 = document.getElementById("test3");

  /// show and close login
  AddItem.addEventListener("click", () => {
    ShowFeatures.style.display = "block";
  });

  CloseLogin.addEventListener("click", () => {
    ShowFeatures.style.display = "none";
  });
  CloseLogin2.addEventListener("click", () => {
    ShowFeatures.style.display = "none";
  });

  const LoginForm = document.getElementById("test5");
  LoginForm.addEventListener("click", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "nguyenhoanglan" && password === "123456") {
      alert("Logged in successfully");
    } else if (username !== "nguyenhoanglan" && password === "123456") {
      alert("Wrong account");
    } else if (username === "nguyenhoanglan" && password !== "123456") {
      alert("Wrong password");
    } else if (username === "" && password === "") {
      alert("Please enter your password and account");
    } else {
      alert("User account or password incorrect");
    }
  });
};
Modules();
