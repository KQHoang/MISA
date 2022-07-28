$(document).ready(function() {
    new EmployeePage();
});

class EmployeePage {
    constructor() {
        this.setupEvents();
        this.loadData();
    }

    setupEvents() {
            // Click BTN Show Employee Form
            $(".btnAdd").click(function(e) {
                    e.preventDefault();
                    // Show Form
                    $('.popup_form').show()
                    document.querySelector('.container').style.filter = "brightness(50%)"
                })
                // Click BTN Close Employee Form
            $(".close_popup").click(function(e) {
                    e.preventDefault();
                    // Close Form
                    $('.popup_form').hide();
                    document.querySelector('.container').style.filter = "brightness(100%)"
                })
                // Click Employee in Table Show Employee Info Form
            $("tr").click(function(e) {
                e.preventDefault();
                $('.popup_form').show()
                document.querySelector('.container').style.filter = "brightness(50%)"
            });
        }
        /**
         * Load Data
         * Author: BTDung(05/06/2022)
         */
    loadData() {
        // Gọi api lấy dữ liệu
        $.ajax({
            type: "GET",
            url: "https://amis.manhnv.net/api/v1/Employees",
            success: function(response) {
                // Xử lý dữ liệu
                var employee = response;
                for (const emp of employee) {
                    var tr = `<tr>
                    <td class="td_check center">
                        <div class="div_checkbox">
                            <label class="checkbox_box">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </td>
                    <td class="td_id left">${emp.EmployeeCode}</td>
                    <td class="td_name left">${emp.EmployeeName}</td>
                    <td class="td_gender left">${emp.GenderName}</td>
                    <td class="td_date left">${emp.DateOfBirth}</td>
                    <td class="td_card left">${emp.IdentityNumber}</td>
                    <td class="td_position left">${emp.EmployeePosition}</td>
                    <td class="td_company left">${emp.DepartmentName}</td>
                    <td class="td_accountnumber left">${emp.BankAccountNumber}</td>
                    <td class="td_bankname left">${emp.BankName}</td>
                    <td class="td_bankbranch left">${emp.BankProvinceName}</td>
                    <td class="td_feature center">
                        <button class="btn_feature">
                            Sửa
                            <i class="fas fa-angle-up feature_icon_up"></i>
                            <i class="fas fa-angle-down feature_icon_down"></i>
                        </button>
                    </td>
                </tr>`
                    $("#data").append(tr);
                }

                // Hiển thị dữ liệu lên table
            },
            error: function() {

            }
        });



    }

}


// // Show - Close Form Validate when add employee
// function popupValidateShow(mes){
//     let popup = document.querySelector('.popup_message')
//     popup.style.display = 'block'
//     let messageBox = popup.querySelector('.message_text')
//     console.log(messageBox)
//     document.querySelector('.popup_form').style.filter = "brightness(75%)"
// }
// function popupValidateClose(){
//     document.querySelector('.popup_message').style.display = 'none'
//     document.querySelector('.popup_form').style.filter = "brightness(100%)"
// }

// // Validate Form 
// const form = document.myForm
// form.onsubmit = (e) => {
//     e.preventDefault()
//     let checkId = form.infoId.value
//     let checkName = form.infoName.value
//     let checkCompany = form.infoCompany.value
//     if (checkId == "") {
//         popupValidateShow("Mã không được để trống")
//     } else {
//         if (checkName == "") {
//             popupValidateShow("Tên không được để trống")
//         } else {
//             if (checkCompany == "") {
//                 popupValidateShow("Đơn vị không được để trống")
//             }
//         }
//     }
// }