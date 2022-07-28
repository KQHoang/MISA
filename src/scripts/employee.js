$(document).ready(function() {
    new Employee();
});

class Employee {
    constructor() {
        this.loadData();
        this.setupEvents();
    }

    setupEvents() {
        $(".refesh-button").click(function(e) {
            e.preventDefault();
            location.reload();
        });

        // hiển thị form thêm nhân viên
        $(".header-button").click(this.btnAddOnClick);

        $(".close-icon").click(function(e) {
            e.preventDefault();
            $(".ms-popup").hide();
            $(".layout--main").css("filter", "brightness(100%)");
            Employee.resetForm();
        });

        // nhấn nút close message box
        $(".btn-close--message").click(function(e) {
            e.preventDefault();
            $(".ms-message--danger").hide();
            //$(".layout--main").css("filter", "brightness(100%)");
            $(".ms-popup").css("filter", "brightness(100%)");
            $("[notValid]")[0].focus();
        });

        // loại bỏ thuộc tính notValid ở input
        $(document).on('blur', "[notValid]", function(e) {
            const value = $(this).val();
            if (value) {
                $(this).removeAttr('notValid');
            }
        });

        $(document).on('blur', "[requỉed]", function(e) {
            const value = $(this).val();
            if (value) {
                $(this).removeAttr('notValid');
            } else {
                $(this).attr('notValid', true);
                $(this).attr("title", "Thông tin này không đc phép để trống");
            }
        });

        $("#btnSaveForm").click(this.btnSaveonClick.bind(this));

        // double click vào tr hiển thị thông tin chi tiết nhân viên
        $(document).on('dblclick', 'tr', function(e) {
            $(".ms-popup").show();
            $(".layout--main").css("filter", "brightness(50%)");
        });
    }

    // bấm nút add -> hiển thị form thêm mới nhân viên
    btnAddOnClick() {
        $(".ms-popup").show();
        $(".layout--main").css("filter", "brightness(50%)");

        // focus vào ô nhập liệu đầu tiên (mã nhân viên)
        // 2. tự sinh 1 mã nhân viên mới
        $.ajax({
            type: "GET",
            url: "https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode",
            success: function(response) {
                const employeeCode = response;
                $("#txtEmployeeCode").val(employeeCode);
                $("txtEmployeeCode").focus();
            }
        });
    }

    // bấm nút lưu -> validate dữ liệu
    btnSaveonClick() {
        try {
            // Validate dữ liệu
            this.validateObject();
            // build ra đối tượng nhân viên


            // thực hiện gọi cất dữ liệu
        } catch (error) {

        }

    }

    // reset form thêm nhân viên mới 
    resetForm() {
        try {
            $("#txtEmployeeName").val("aa");
            $("#txtEmployeeDateofBirth").val("");
            $("#optionDV").val("");
            $("#txtEmployeeCCCD").val("");
            $("#txtEmployeeDate").val("");
            $("#txtEmployeeChucDanh").val("");
            $("#txtEmployeeNoiCap").val("");
            $("#txtEmployeeAddress").val("");
            $("#txtEmployeePhone").val("");
            $("#txtEmployeePhoneCD").val("");
            $("#txtEmployeeEmail").val("");
            $("#txtEmployeeBankAccount").val("");
        } catch (error) {

        }

    }

    // Validate dữ liệu
    validateObject() {
        // 1. kiểm tra các thông tin ràng buộc
        const employeeCode = $("#txtEmployeeCode").val();
        const employeeName = $("#txtEmployeeName").val();
        const employeeDateofBirth = $("#txtEmployeeDateofBirth").val();
        //const employeeGenaral =  ;
        const employeeDV = $("#optionDV").val();
        const employeeCCCD = $("#txtEmployeeCCCD").val();
        const employeeDate = $("#txtEmployeeDate").val();
        const employeeChucDanh = $("#txtEmployeeChucDanh").val();
        const employeeNoiCap = $("#txtEmployeeNoiCap").val();
        const employeeAddress = $("#txtEmployeeAddress").val();
        const employeePhone = $("#txtEmployeePhone").val();
        const employeePhoneCD = $("#txtEmployeePhoneCD").val();
        const employeeEmail = $("#txtEmployeeEmail").val();
        const employeeBankAccount = $("#txtEmployeeBankAccount").val();
        const employeeBankName = $("#txtEmployeeBankName").val();
        const employeeBankCN = $("#txtEmployeeCN").val();

        let isValid = true;
        let msgs = [];
        if (!employeeCode) {
            isValid = false;
            msgs.push("Mã nhân viên không được phép để trống");
            // $("#txtEmployeeCode").addClass("m-notValid");
            $("#txtEmployeeCode").attr("notValid", true);
        }

        if (!employeeName) {
            isValid = false;
            msgs.push("Tên nhân viên không được phép để trống");
            // $("#txtEmployeeName").addClass("m-notValid");
            $("#txtEmployeeName").attr("notValid", true);
        }

        if (employeeDV < 1) {
            isValid = false;
            msgs.push("Đơn vị chưa được chọn");
        }


        // 2. Kiểm tra các thông tin liên quan ngày tháng 

        // 3. Kiểm tra các thông tin có đúng định dạng hay ko

        // 4. Kiểm tra các thông tin có đúng hay không VD: phòng ban có trong hệ thống hay không

        // kiểm tra có lỗi validate không
        if (!isValid) {
            $(".message-text").empty();
            for (const msg of msgs) {
                $(".message-text").append(`<li>${msg}</li>`);
            }
            $(".ms-message--danger").show();
            $(".layout--main").css("filter", "brightness(50%)");
            $(".ms-popup").css("filter", "brightness(0.5)");
            return;
        } else {
            var Employee = {};
            Employee.employeeCode = employeeCode;
            Employee.employeeName = employeeName;
            // Employee.DateOfBirth = employeeDateofBirth;
            //data.gender = $("input[name='Genaral']:checked").val();
            //data.departmentName = employeeDV;
            console.log(Employee);
            try {
                $.ajax({
                    type: "POST",
                    url: "https://amis.manhnv.net/api/v1/" + Employee,

                    success: function(response) {
                        alert("Thêm mới thành công");
                    }
                });
            } catch (error) {
                console.log(error);
            }

        }
        // 5. Theo nghiệp vụ đặc thù bài toán 
    }

    loadData() {
        $.ajax({
            type: "GET",
            url: "https://amis.manhnv.net/api/v1/Employees",
            success: function(response) {
                var employee = response;

                for (const emp of employee) {
                    let dob = emp.DateOfBirth;
                    dob = new Date(dob);
                    let date = dob.getDate();
                    date = date < 10 ? `0${date}` : date;
                    // lay ra thang
                    let month = dob.getMonth() + 1;
                    month = month < 10 ? `0${month}` : month;
                    // lay ra nam
                    let year = dob.getFullYear();
                    dob = `${date}/${month}/${year}`;
                    var tr = `
                    <tr>
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
                            <td class="td_date left">${dob}</td>
                            <td class="td_card left">${emp.IdentityNumber}</td>
                            <td class="td_position left">${emp.EmployeePosition}</td>
                            <td class="td_company left">${emp.DepartmentName}</td>
                            <td class="td_accountnumber left">${emp.BankAccountNumber}</td>
                            <td class="td_bankname left">${emp.BankName}</td>
                            <td class="td_bankbranch left">${emp.BankProvinceName}</td>
                            <td class="td_feature center">
                                <button class="btn_feature" style="font-size: 15px;">
                                    Sửa
                                </button>
                                <div class="mi mi-24 pointer brach-icon" style="margin-right: 0;">
                                </div>

                            </td>
                    </tr>
                    
                    `
                    $("#data").append(tr);
                }
            },
            error: function() {

            }
        });
    }
}