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
////////////////////////////// Main /////////////////////////////////////////////
const employee = [];

function randomId() {
  return "EMP" + Math.floor(Math.random() * 10000);
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
    Employee_FullName === "" ||
    Employee_BaseSalary === "" ||
    Employee_ProductSalary === "" ||
    Employee_ProductQuantity === ""
  ) {
    alert("Please fill in the above information completely!");
  } else {
    const table = document.getElementById("EmployeeTable");
    const NewStaff = table.insertRow(-1);

    NewStaff.innerHTML = `
       <td>${randomId()}</td>   
       <td>${Employee_FullName}</td>   
       <td>${Employee_BaseSalary}</td>   
       <td>${Employee_ProductSalary}</td>   
       <td>${Employee_ProductQuantity}</td>   
       <td>${Total(
         Employee_BaseSalary,
         Employee_ProductSalary,
         Employee_ProductQuantity
       )}</td>   
       <td><button onclick="editRow(this)">Chỉnh sửa</button></td>
       <td><button onclick="deleteRow(this)">xoa</button></td>
    `;
    const ID = randomId();
    document.getElementById("FullNameStaff").value = "";
    document.getElementById("BaseSalary").value = "";
    document.getElementById("ProductSalary").value = "";
    document.getElementById("ProductQuantity").value = "";
    alert("New employee added successfully!\nID Staff: " + ID);
  }
  sortTableBySalary();
  employee.push({
    name: Employee_FullName,
    baseSalary: Employee_BaseSalary,
    productSalary: Employee_ProductSalary,
    productQuantity: Employee_ProductQuantity,
  });

  const highestEmployee = findhighEmployee();
  alert(`Employee with highest salary: ${highestEmployee.name}`);
}
///// function to find the employee with the highest total salary
function findhighEmployee() {
  let highsalary = 0;
  let highestEmployee = null;

  employee.forEach((employee) => {
    const totalSalary = Total(
      employee.baseSalary,
      employee.productSalary,
      employee.productQuantity
    );
    if (totalSalary > highsalary) {
      highsalary = totalSalary;
      highestEmployee = employee;
    }
  });
  return highestEmployee;
}
function sortTableBySalary() {
  const table = document.getElementById("EmployeeTable");
  const rows = Array.from(table.getElementsByTagName("tr"));
  rows.shift();

  rows.sort((rowA, rowB) => {
    const salaryA = rowA.cells[4].innerText.replace("$", "");
    const salaryB = rowB.cells[4].innerText.replace("$", "");
    return salaryA - salaryB;
  });
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  rows.forEach((row) => {
    table.appendChild(row);
  });
}

/// Function to edit employee information
function editRow(button) {
  const row = button.parentNode.parentNode;
  const cells = row.getElementsByTagName("td");

  const employeeId = cells[0].innerText;
  const employeeName = cells[1].innerText;
  const baseSalary = parseFloat(cells[2].innerText.slice(1)); // Loại bỏ ký tự $
  const productSalary = parseFloat(cells[3].innerText);
  const totalProducts = parseInt(cells[4].innerText);

  const newBaseSalary = prompt(
    `Mã NV: ${employeeId}\nFullName: ${employeeName}\nNew BaseSalary:`
  );
  const newProductSalary = prompt(
    `Enter new ProductSalary NV ${employeeName}:`
  );
  const newTotalProducts = prompt(
    `Enter new ProductQuantity NV ${employeeName}:`
  );

  if (
    newBaseSalary !== null &&
    newProductSalary !== null &&
    newTotalProducts !== null
  ) {
    cells[2].innerText = `$${newBaseSalary}`;
    cells[3].innerText = newProductSalary;
    cells[4].innerText = newTotalProducts;
    const newTotalSalary = Total(
      parseFloat(newBaseSalary),
      parseFloat(newProductSalary),
      parseInt(newTotalProducts)
    );
    cells[5].innerText = `$${newTotalSalary}`;
  }
}
/// functiton DeleteRow table//////
function deleteRow(button){
  const row = button.parentNode.parentNode;
    const index = row.rowIndex;
    document.getElementById("EmployeeTable").deleteRow(index);
    
    employee.splice(index -1, 1);
}

//////////////////////////////close the table///////////////////////////////
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
