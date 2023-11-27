const ShowForm = document.getElementById("Show-staff_form");
const InputStaff = document.getElementById("input-staff");
const CloseStaff = document.getElementById("close-staff");
const MoreStaff = document.getElementById("md2");

MoreStaff.addEventListener("click", () => {
  ShowForm.style.display = "block";
});
CloseStaff.addEventListener("click", () => {
  ShowForm.style.display = "none";
});
function randomId() {
  return  "EMP" + Math.floor(Math.random() * 100000);
}
function Total(BaseSalary, ProductSalary, ProductQuantity) {
  let salary = BaseSalary + ProductSalary * ProductQuantity;
  if (ProductQuantity < 50) {
    salary *= 0.9;
  } else if (ProductQuantity > 50) {
    const extraProducts = ProductQuantity - 50;
    const bonus = ProductSalary * extraProducts * 0.1;
    salary += bonus;
  }
  return salary;
}
function addEmployee() {
  const Employee_FullName = document.getElementById("FullNameStaff").value;
  const Employee_BaseSalary = document.getElementById("BaseSalary").value;
  const Employee_ProductSalary = document.getElementById("ProductSalary").value;
  const Employee_ProductQuantity =
    document.getElementById("ProductQuantity").value;
  if (
    Employee_FullName === "" &&
    Employee_BaseSalary === "" &&
    Employee_ProductSalary === "" &&
    Employee_ProductQuantity === ""
  ) {
    alert("Please fill in the above information completely!");
  } else if (Employee_BaseSalary === "") {
    alert("Please fill in the above information completely!");
  } else if (Employee_ProductSalary === "") {
    alert("Please fill in the above information completely!");
  } else if (Employee_ProductQuantity === "") {
    alert("Please fill in the above information completely!");
  } else {
    const table = document.getElementById("EmployeeTable");
    const NewStaff = table.insertRow(-1);

    const Staff0 = NewStaff.insertCell(0);
    const Staff1 = NewStaff.insertCell(1);
    const Staff2 = NewStaff.insertCell(2);
    const Staff3 = NewStaff.insertCell(3);
    const Staff4 = NewStaff.insertCell(4);

    Staff0.innerHTML = randomId();
    Staff1.innerHTML = Employee_FullName;
    Staff2.innerHTML = "$" + Employee_BaseSalary;
    Staff3.innerHTML = Employee_ProductSalary;

    const total = Total(Employee_BaseSalary, Employee_ProductSalary, Employee_ProductQuantity);
    Staff4.innerHTML = "$" + total;
   
    document.getElementById("FullNameStaff").value = "";
    document.getElementById("BaseSalary").value = "";
    document.getElementById("ProductSalary").value = "";
    document.getElementById("ProductQuantity").value = "";
    alert("New employee added successfully!\nID Staff: " + randomId());
  }
}
function CloseList() {
  const CloseStaffList = document.getElementById("close-staff_list");
  const ShowStaffList = document.getElementById("table-form_list");
  CloseStaffList.addEventListener("click", () => {
    ShowStaffList.style.display = "none";
  });
}
function ReviewStaff() {
  const ShowStaffList = document.getElementById("table-form_list");
  const ReViews = document.getElementById("ReView");

  ReViews.addEventListener("click", () => {
    ShowStaffList.style.display = "block";
  });
}
function OutPutList() {
  const OutputStaff = document.getElementById("Output-staff");
  const ShowStaffList = document.getElementById("table-form_list");
  const ShowForm = document.getElementById("Show-staff_form");

  OutputStaff.addEventListener("click", () => {
    ShowStaffList.style.display = "block";
  });
  OutputStaff.addEventListener("click", () => {
    ShowForm.style.display = "none";
  });
}
