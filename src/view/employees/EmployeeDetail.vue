<template>
  <div
    class="popup"
    id="detail-employee"
    v-loading="isShowLoading"
    element-loading-background="transparent"
  >
    <div class="ms-popup">
      <div class="ms-popup--header">
        <div class="ms-popup--title">
          <h1 class="popup--title">{{ formName }}</h1>

          <div class="popup-checkbox">
            <!-- <input type="checkbox" class="checkbox-popup" /> -->
            <div class="div-checkbox w-18">
              <label class="checkbox-box">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <span class="label-checkbox-label">Là khách hàng</span>
          </div>

          <div class="popup-checkbox">
            <!-- <input type="checkbox" class="checkbox-popup" /> -->
            <div class="div-checkbox w-18">
              <label class="checkbox-box">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <span class="label-checkbox-label">Là khách hàng</span>
          </div>
        </div>

        <div class="ms-popup--close">
          <el-tooltip content="Giúp">
            <div class="mi mi-24 help-btn"></div>
          </el-tooltip>
          <el-tooltip content="Đóng">
            <div
              class="mi mi-24 close-icon"
              @click="btnCloseDialogOnClick"
              accesskey="ESC"
            ></div>
          </el-tooltip>
        </div>
      </div>

      <div class="ms-popup--main">
        <div class="form-popup--main">
          <div class="pd-b-12 flex">
            <div class="w1-per2 p-r-26">
              <div class="flex row-input">
                <div class="col-input p-r-6 width-percent-40">
                  <div class="input-box">
                    <label for="" class="label-input--box"
                      >Mã
                      <span class="feild-required">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      class="input-popup"
                      id="txtEmployeeCode"
                      title="Mã không được để trống"
                      v-model="employee.EmployeeCode"
                      ref="refEmployeeCode"
                      maxlength="20"
                      :class="{ 'input-valid': arrayInputColors[0].isValid }"
                      @blur="blurColor"
                    />
                  </div>
                </div>

                <div class="col-input width-percent-60">
                  <div class="input-box">
                    <label for="" class="label-input--box"
                      >Tên
                      <span class="feild-required">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      class="input-popup"
                      id="txtEmployeeName"
                      title="Tên không được để trống"
                      v-model="employee.FullName"
                      ref="refFullName"
                      maxlength="100"
                      :class="{ 'input-valid': arrayInputColors[1].isValid }"
                      @blur="blurColor"
                    />
                  </div>
                </div>
              </div>

              <div class="flex row-input">
                <div class="input-box full-col">
                  <label for="" class="label-input--box"
                    >Đơn vị
                    <span class="feild-required">*</span>
                  </label>
                  <!--  -->
                  <el-select
                    :class="{ 'input-valid': arrayInputColors[2].isValid }"
                    @blur="blurColor"
                    v-model="employee.DepartmentId"
                    class="sel-footer-right"
                    placeholder="Chọn phòng ban"
                    :filterable="true"
                    :default-first-option="true"
                    ref="refDepartmentId"
                    :autocomplete="on"
                    title="Phòng ban không được để trống"
                  >
                    <el-option
                      class="ops-footer-right"
                      v-for="item in depatments"
                      :key="item.DepartmentId"
                      :label="item.DepartmentName"
                      :value="item.DepartmentId"
                    />
                  </el-select>
                </div>
              </div>

              <div class="flex row-input">
                <div class="input-box full-col">
                  <label for="" class="label-input--box">Chức danh</label>
                  <input
                    type="text"
                    class="input-popup"
                    id="txtEmployeeChucDanh"
                    v-model="employee.PositionName"
                    maxlength="100"
                  />
                </div>
              </div>
            </div>

            <!-- // cột tiếp -->
            <div class="w1-per2">
              <div class="flex row-input">
                <div class="input-box width-percent-40 p-r-6">
                  <label for="" class="label-input--box">Ngày sinh</label>
                  <input
                    type="date"
                    class="input-popup"
                    v-model="dateOfBirth"
                    ref="refDateOfBirth"
                    :class="{ 'input-valid': arrayInputColors[3].isValid }"
                    @blur="blurColor"
                  />
                </div>

                <div class="input-box width-percent-60">
                  <label for="" class="label-input--box p-l-10"
                    >Giới tính</label
                  >
                  <div class="input-radio--box p-l-10">
                    <input
                      type="radio"
                      name="Genaral"
                      id="rdoMale"
                      value="1"
                      v-model="employee.Gender"
                      checked
                    />
                    <label for="">Nam</label>
                    <input
                      type="radio"
                      name="Genaral"
                      id="rdoFemale"
                      value="0"
                      v-model="employee.Gender"
                    />
                    <label for="">Nữ</label>
                    <input
                      type="radio"
                      name="Genaral"
                      id="rdoOther"
                      value="2"
                      v-model="employee.Gender"
                    />
                    <label for="">Khác</label>
                  </div>
                </div>
              </div>

              <div class="flex row-input">
                <div class="input-box width-percent-60 p-r-6">
                  <div class="width-percent-100 label-pb-4">
                    <el-tooltip
                      content="Số chứng minh nhân dân"
                      placement="bottom-start"
                    >
                      <label for="" class="label-input--box">Số CMND</label>
                    </el-tooltip>
                  </div>
                  <input
                    type="text"
                    class="input-popup"
                    id="txtEmployeeCCCD"
                    v-model="employee.IdentityNumber"
                    maxlength="25"
                    ref="refIdentityNumber"
                    :class="{ 'input-valid': arrayInputColors[4].isValid }"
                    @blur="blurColor"
                  />
                </div>

                <div class="input-box width-percent-40">
                  <label for="" class="label-input--box">Ngày cấp</label>
                  <input
                    type="date"
                    ref="refIdentityDate"
                    class="input-popup"
                    id="txtEmployeeDate"
                    v-model="identityDate"
                    :class="{ 'input-valid': arrayInputColors[5].isValid }"
                    @blur="blurColor"
                  />
                </div>
              </div>

              <div class="flex row-input">
                <div class="input-box full-col">
                  <label for="" class="label-input--box">Nơi cấp</label>
                  <input
                    type="text"
                    class="input-popup"
                    id="txtEmployeeNoiCap"
                    v-model="employee.IdentityPlace"
                    maxlength="255"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="mg-top-12">
            <div class="row-input">
              <div class="input-box full-col">
                <label for="" class="label-input--box">Địa chỉ</label>
                <input
                  type="text"
                  class="input-popup"
                  id="txtEmpoyeeAddress"
                  v-model="employee.Address"
                  maxlength="255"
                />
              </div>
            </div>

            <div class="row-input">
              <div class="col-input">
                <div class="input-box width-percent-25 p-r-6">
                  <div class="width-percent-100 label-pb-4">
                    <el-tooltip
                      content="Điện thoại di động"
                      placement="bottom-start"
                    >
                      <label for="" class="label-input--box">DT di động</label>
                    </el-tooltip>
                  </div>
                  <input
                    type="text"
                    class="input-popup"
                    id="txtEmployeePhone"
                    v-model="employee.PhoneNumber"
                    maxlength="50"
                  />
                </div>

                <div class="input-box width-percent-25 p-r-6">
                  <div class="width-percent-100 label-pb-4">
                    <el-tooltip
                      content="Điện thoại cố định"
                      placement="bottom-start"
                    >
                      <label for="" class="label-input--box">DT cố định</label>
                    </el-tooltip>
                  </div>

                  <input
                    type="text"
                    class="input-popup"
                    id="txtEmployeePhoneCD"
                    v-model="employee.TelephoneNumber"
                    maxlength="50"
                  />
                </div>

                <div class="input-box width-percent-25 p-r-6">
                  <label for="" class="label-input--box">Email</label>
                  <input
                    type="email"
                    class="input-popup"
                    id="txtEmployeeEmail"
                    v-model="employee.Email"
                    maxlength="100"
                    ref="refEmail"
                    :class="{ 'input-valid': arrayInputColors[6].isValid }"
                    @blur="blurColor"
                  />
                </div>
              </div>
            </div>

            <div class="row-input">
              <div class="col-input">
                <div class="input-box width-percent-25 p-r-6">
                  <label for="" class="label-input--box"
                    >Tài khoản ngân hàng</label
                  >
                  <input
                    type="text"
                    class="input-popup"
                    id="txtEmployeeBankAccount"
                    v-model="employee.BankAccountNumber"
                    maxlength="25"
                    ref="refBankAccountNumber"
                    :class="{ 'input-valid': arrayInputColors[7].isValid }"
                    @blur="blurColor"
                  />
                </div>

                <div class="input-box width-percent-25 p-r-6">
                  <label for="" class="label-input--box">Tên ngân hàng</label>
                  <input
                    type="text"
                    class="input-popup"
                    id="txtEmployeeBankName"
                    v-model="employee.BankName"
                    maxlength="255"
                  />
                </div>

                <div class="input-box width-percent-25 p-r-6">
                  <label for="" class="label-input--box">Chi nhánh</label>
                  <input
                    type="text"
                    class="input-popup"
                    id="txtEmployeeCN"
                    v-model="employee.BankBranchName"
                    maxlength="255"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-popup">
          <div class="line"></div>

          <div class="popup-footer--button">
            <div class="btn-add flex">
              <div class="first-button">
                <el-tooltip content="Cất">
                  <button
                    class="btn-default btn-height-34"
                    @click="btnSaveOnClick"
                  >
                    Cất
                  </button>
                </el-tooltip>
              </div>

              <el-tooltip content="Cất và thêm">
                <button
                  class="btn-default btn-success btn-border-none btn-height-34"
                  id="btnSaveForm"
                  @click="btnSaveAndAdd"
                >
                  <!-- :disabled="btnDisable" -->
                  Cất và thêm
                </button>
              </el-tooltip>
            </div>

            <button
              class="btn-default btn-height-34"
              id="btnCancelForm"
              @click="btnCancelOnClick"
            >
              Huỷ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- thông báo lỗi -->
  <div class="ms-message" v-if="isShowMessage">
    <div class="ms-message--danger">
      <div class="ms-message--content">
        <div class="icon-message"></div>

        <ul class="message-text">
          <li v-for="mess in messages" :key="mess" class="warning-text">
            {{ mess }}
          </li>
        </ul>
      </div>

      <div class="line-message"></div>
      <div class="ms-message-footer">
        <button
          class="btn-default btn-success btn-close--message btn-height-34"
          @click="closeMessageClick"
        >
          Đóng
        </button>
      </div>
    </div>
  </div>

  <!-- // Cảnh báo -->
  <div class="ms-message" v-if="isShowWarning">
    <div class="ms-message--danger">
      <div class="ms-message--content">
        <div class="icon-warning-employeecode"></div>

        <ul class="message-text">
          <li class="warning-text">
            {{ errorWarning }}
          </li>
        </ul>
      </div>

      <div class="line-message"></div>
      <div class="message-footer--warning">
        <button
          class="btn-default btn-success btn-close--warning btn-width-80"
          @click="closeWarningCode"
        >
          Đồng ý
        </button>
      </div>
    </div>
  </div>

  <!-- Question dữ liệu thay đổi -->
  <div class="ms-message" v-if="isShowQuestion">
    <div class="ms-message--danger">
      <div class="ms-message--content">
        <div class="icon-question"></div>

        <ul class="message-text">
          <li class="warning-text">
            Dữ liệu đã bị thay đổi. Bạn có muốn cất không?
          </li>
        </ul>
      </div>
      <div class="line-message"></div>
      <div class="message-footer--warning warning-flex">
        <button class="btn-default btn-width-80" @click="btnCancelQuestion">
          Huỷ
        </button>
        <div>
          <button class="btn-default btn-width-80" @click="btnNoQuestion">
            Không
          </button>
          <button
            class="btn-default btn-success btn-close--warning btn-marginleft-12 btn-width-80"
            @click="btnYesQuestion"
          >
            Có
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import employeeDetailServices from "../../services/employeeDetailServices.js";
import { ElMessage } from "element-plus";
export default {
  name: "employeeDetail",
  components: {},
  data() {
    return {
      employees: [], // mảng đối tượng nhân viên
      employee: {}, // đối tượng nhân viên
      isShowMessage: false, // biến hiển thị lỗi validate
      isShowWarning: false, // biến hiển thị cảnh báo
      isShowQuestion: false, // biến hiển thị dữ liệu thay đổi
      isDataChanged: false, // kiểm tra dữ liệu form có thay đổi không
      messages: [], // mảng message
      errorWarning: "", // nội dung cảnh báo trùng mã
      errorMessage: false, // có lỗi thiếu dữ liệu (sai định dạng) hay không
      isError: false, // có lỗi cảnh báo không
      dateOfBirth: "", // trung gian ngày sinh
      identityDate: "", // trung gian ngày cấp,
      depatments: [], // mảng phòng ban
      isShowLoading: false, // ẩn hiện loading
      contentMessage: "", // nội dung thông báo
      isEdit: 0, // 0 - thêm mới, 1 - sửa dữ liệu
      arrayInputColors: [
        { id: "refEmployeeCode", isValid: false, value: "" },
        { id: "refFullName", isValid: false, value: "" },
        { id: "refDepartmentId", isValid: false, value: "" },
        { id: "refDateOfBirth", isValid: false, value: "" },
        { id: "refIdentityNumber", isValid: false, value: "" },
        { id: "refIdentityDate", isValid: false, value: "" },
        { id: "refEmail", isValid: false, value: "" },
        { id: "refBankAccountNumber", isValid: false, value: "" },
      ], // mảng các input (id - tên các input, isValid: true - không hợp lệ, false - hợp lệ)
      formName: "", // tên form (thêm mới hoặc cập nhật)
    };
  },

  /**
   * nhận dữ liệu từ cha
   * Người tạo: Khuất Quang Hoàng
   * Ngày tạo: (28/6/2022)
   */

  props: {
    // thông tin nhân viên khi dbClick vào tr
    employeeSelected: {
      type: Object,
    },

    // nhận diện thêm, sửa, nhân bản
    editMode: {
      type: Number,
      default: 0, // 0 -Thêm mới, 1 sửa, 2 - nhân bản
      required: true,
    },
  },

  methods: {
    /**
     * Đóng form thêm nhân viên
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    btnCloseDialogOnClick() {
      if (this.isDataChanged) this.isShowQuestion = true;
      else {
        this.$emit("closeDialog", false);
      }
    },

    /**
     * nhấn nút cất form chi tiết nhân viên
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    btnSaveOnClick() {
      var me = this;
      try {
        me.submitForm();
      } catch (error) {
        console.log(error);
      }

      // Nếu không có lỗi
      if (!this.errorMessage && !this.isError) {
        this.$emit("showReLoad", true);
        this.$emit("closeDialog", false);
      }
    },

    /**
     * nhấn nút huỷ form chi tiết nhân viên
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    btnCancelOnClick() {
      this.$emit("closeDialog", false);
    },

    /**
     * nhấn nút cất và thêm form chi tiết nhân viên
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    async btnSaveAndAdd() {
      // var me = this;
      // submit form thông tin nhân viên
      try {
        await this.submitForm();

        // reset form nếu không có lỗi
        if (!this.errorMessage && !this.isError) {
          if (!this.isEdit) this.contentMessage = "Thêm mới thành công";
          else {
            this.contentMessage = "Cập nhật thành công";
            this.isEdit = 0;
            this.formName = "Thêm mới nhân viên";
          }
          // Hiển thị thông báo thao tác thành công
          ElMessage({
            message: this.contentMessage,
            grouping: true,
            type: "success",
            duration: 2000,
          });

          this.isShowLoading = true;
          this.employee = {};

          this.dateOfBirth = "";
          this.identityDate = "";
          this.$emit("reFresh", true);

          setTimeout(() => (this.isShowLoading = false), 1000);
          // setTimeout(()=> this.getNewEmployeeCode(), 500);
          await this.getNewEmployeeCode();
          //lấy mã nhân viên mới
        }
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Gán dữ liệu cho ngày sinh, ngày cấp và giới tính
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (22/7/2022)
     */
    formatDataOut() {
      if (this.dateOfBirth != "") this.employee.DateOfBirth = this.dateOfBirth;
      if (this.identityDate != "")
        this.employee.IdentityDate = this.identityDate;
      this.employee.Gender = parseInt(this.employee.Gender);
    },

    /**
     * thực hiện gửi dữ liệu lên server (thêm mới hoặc update)
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */

    async submitForm() {
      var me = this;
      if (!this.validateData()) return;

      //thực hiện thêm mới
      if (!this.isShowMessage && !this.isEdit && !this.isShowWarning) {
        // định dạng lại dữ liệu
        this.formatDataOut();

        // 
        await employeeDetailServices.getEmployeeList();
      }

      //thực hiện cập nhật thông tin nhân viên
      if (!this.isShowMessage && this.isEdit) {
        // định dạng lại dữ liệu
        this.formatDataOut();

        axios
          .put(
            `http://localhost:5199/api/v1/Employees`,
            me.employee
            //${me.employee.EmployeeId}
          )
          .then(function (res) {
            console.log(res);
          })
          .catch(function (res) {
            console.log(res);
          });
      }
    },

    /**
     * nhấn nút close messagebox (thông báo lỗi)
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    closeMessageClick() {
      this.isShowMessage = false;
      this.errorMessage = false;
      this.messages = [];
      // tìm vị trí lỗi đầu tiên và focus
      var i = 0;
      while (
        i < this.arrayInputColors.length &&
        !this.arrayInputColors[i].isValid
      ) {
        i++;
      }
      this.$refs[this.arrayInputColors[i].id].focus();
    },

    /**
     * kiểm tra dữ liệu đầu vào khi thêm hoặc sửa đổi dữ liệu
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    validateData() {
      // kiểm tra dữ liệu nhập đủ không
      if (!this.employee.EmployeeCode) {
        this.messages.push("Mã nhân viên không được để trống");
        this.errorMessage = true;
        this.arrayInputColors[0].isValid = true;
      }
      if (!this.employee.FullName) {
        this.messages.push("Tên nhân viên không được để trống");
        this.errorMessage = true;
        this.arrayInputColors[1].isValid = true;
      }
      if (!this.employee.DepartmentId) {
        this.messages.push("Đơn vị không được để trống");
        this.errorMessage = true;
        this.arrayInputColors[2].isValid = true;
      }

      // nếu dữ liệu thiếu hiển thị message
      if (this.errorMessage) {
        this.isShowMessage = true;
        return false;
      }

      // kiểm tra đầu vào ngày tháng phải nhỏ hơn ngày tháng hiện tại
      if (new Date(this.dateOfBirth) > new Date()) {
        this.errorMessage = true;
        this.messages.push("Ngày sinh phải nhỏ hơn ngày hiện tại");
        this.arrayInputColors[3].isValid = true;
      }

      // kiểm tra đầu vào căn cước công dân
      // if (this.employee.IdentityNumber && isNaN(this.employee.IdentityNumber)) {
      //   this.errorMessage = true;
      //   this.messages.push("Số căn cước công dân phải là chuỗi số");
      //   this.arrayInputColors[4].isValid = true;
      // }

      // kiểm tra đầu vào ngày tháng phải nhỏ hơn ngày tháng hiện tại
      if (new Date(this.identityDate) > new Date()) {
        this.errorMessage = true;
        this.messages.push("Ngày cấp phải nhỏ hơn ngày hiện tại");
        this.arrayInputColors[5].isValid = true;
      }

      // kiểm tra đầu vào email
      if (this.employee.Email) {
        var validateRegex =
          /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
        if (!this.employee.Email.match(validateRegex)) {
          this.errorMessage = true;
          this.messages.push("Email chưa đúng định dạng");
          this.arrayInputColors[6].isValid = true;
        }
      }

      // kiểm tra đầu vào số tài khoản ngân hàng
      // if (
      //   this.employee.BankAccountNumber &&
      //   isNaN(this.employee.BankAccountNumber)
      // ) {
      //   this.errorMessage = true;
      //   this.messages.push("Số tài khoản ngân hàng phải là chuỗi số");
      //   this.arrayInputColors[7].isValid = true;
      // }

      // nếu dữ liệu không đúng định dạng hiển thị message
      if (this.errorMessage) {
        this.isShowMessage = true;
        return false;
      }

      // !this.isEdit
      // kiểm tra trùng mã nhân viên
      if (!this.errorMessage) {
        this.employees.forEach((element) => {
          if (
            element.EmployeeCode == this.employee.EmployeeCode &&
            element.EmployeeId != this.employee.EmployeeId
          ) {
            this.isError = true;
            this.errorWarning =
              "Mã nhân viên <" +
              this.employee.EmployeeCode +
              "> đã tồn tại trong hệ thống, vui lòng kiểm tra lại";
          }
        });
      }

      // Nếu có lỗi trùng mã hiển thị cảnh báo
      if (this.isError) {
        this.isShowWarning = true;
        return false;
      }
      return true;
    },

    /**
     * Đóng form thông báo warning trùng mã nhân viên
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    closeWarningCode() {
      this.isShowWarning = false;
      this.isError = false;
      this.errorWarning = "";
    },

    /**
     * format date
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     * input: chuỗi ngày tháng
     * ouput: date trùng với định dạng trong form
     */
    formatDate(dob) {
      let dateConvert = new Date(dob);
      if (dob && dateConvert instanceof Date && !isNaN(dateConvert.valueOf())) {
        let date = dateConvert.getDate();
        date = date < 10 ? `0${date}` : date;
        // lay ra thang
        let month = dateConvert.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        // lay ra nam
        let year = dateConvert.getFullYear();
        dob = `${year}-${month}-${date}`;
        return dob;
      } else return "";
    },

    /**
     * sự kiện nhấn nút huỷ thông báo Question
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    btnCancelQuestion() {
      this.isShowQuestion = false;
      this.isDataChanged = false;
    },

    /**
     * sự kiện nhấn nút Không thông báo Question
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    btnNoQuestion() {
      this.isShowQuestion = false;
      this.isDataChanged = false;
      this.$emit("closeDialog", false);
    },

    /**
     * sự kiện ấn nút đồng ý cất khi dữ liệu thay đổi
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (14/7/2022)
     */
    btnYesQuestion() {
      this.btnSaveOnClick();
    },

    /**
     * Lấy mã nhân viên mới
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (18/07/2022)
     * ouput: mã nhân viên mới
     */
    async getNewEmployeeCode() {
      try {
        var me = this;
        await axios
          .get("http://localhost:5199/api/v1/Employees/NewEmployee")
          .then(function (res) {
            if (!res) {
              console.log("Có lỗi xảy ra khi tải dữ liệu về");
              return;
            }
            me.employee.EmployeeCode = res.data;
          });
      } catch (error) {
        alert(error);
      }

      await me.$refs.refEmployeeCode.focus();
    },

    /**
     * kiểm tra dữ liệu thay đổi khi thêm mới
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (18/07/2022)
     */
    checkDataChange() {
      for (let [key, value] of Object.entries(this.employee)) {
        if (key != "EmployeeCode") {
          if (value != "") {
            this.isDataChanged = true;
            return;
          }
        }
      }
    },

    /**
     * Chức năng làm đổi màu input khi dữ liệu validate thành công
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (19/7/2022)
     */
    blurColor() {
      this.arrayInputColors.forEach((element) => {
        if (element.value && element.isValid) element.isValid = false;
      });
    },

    /**
     * gán dữ liệu cho đối tượng employee, ngày sinh và ngày cấp
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (22/7/2022)
     */
    formatDataIn() {
      this.employee = JSON.parse(JSON.stringify(this.employeeSelected));
      this.dateOfBirth = this.formatDate(this.employee.DateOfBirth);
      this.identityDate = this.formatDate(this.employee.IdentityDate);
    },
  },

  /**
   * gán dữ liệu cho form
   * Người tạo: Khuất Quang Hoàng
   * Ngày tạo: (19/7/2022)
   */
  created() {
    this.isEdit = this.editMode;
    if (this.editMode == 2) this.isEdit = 0;
    var me = this;
    try {
      // lấy tất cả nhân viên
      axios
        .get(`http://localhost:5199/api/v1/Employees`)
        .then(function (res) {
          if (!res) {
            console.log("Có lỗi xảy ra khi tải dữ liệu về");
            return;
          }
          me.employees = res.data;
        })
        .catch(function (res) {
          console.log(res);
        });

      // lấy phòng ban từ database về
      axios
        .get(`http://localhost:5199/api/v1/Departments`)
        .then(function (res) {
          if (!res) {
            console.log("Có lỗi xảy ra khi tải dữ liệu về");
            return;
          }
          me.depatments = res.data;
        })
        .catch(function (res) {
          console.log(res);
        });

      // thêm mới
      if (this.editMode == 0) {
        this.getNewEmployeeCode();
        this.employee.Gender = 1;
        this.formName = "Thêm mới nhân viên";
      }

      // Cập nhật dữ liệu
      if (this.editMode == 1) {
        this.$nextTick(() => this.$refs.refEmployeeCode.focus());
        this.formatDataIn();
        this.formName = "Cập nhật nhân viên";
      }

      // nhân bản
      if (this.editMode == 2) {
        // lấy mã nhân viên mới
        this.getNewEmployeeCode();
        this.formatDataIn();
        setTimeout(() => this.$refs.refEmployeeCode.focus(), 500);
        this.formName = "Thêm mới nhân viên";
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  },

  mounted() {},

  /**
   * kiểm tra form nhập liệu có thay đổi hay không
   * Người tạo: Khuất Quang Hoàng
   * Ngày tạo: (26/06/2022)
   */
  updated() {
    var me = this;

    // Nếu là sửa dữ liệu
    if (me.isEdit == 1) {
      if (me.employee != JSON.parse(JSON.stringify(me.employeeSelected))) {
        me.isDataChanged = true;
      }
    }

    // Nếu là thêm mới
    if (!me.isEdit) {
      this.checkDataChange();
    }

    this.arrayInputColors[0].value = this.employee.EmployeeCode;
    this.arrayInputColors[1].value = this.employee.FullName;
    this.arrayInputColors[2].value = this.employee.DepartmentId;
    this.arrayInputColors[3].value = this.dateOfBirth;
    this.arrayInputColors[4].value = this.employee.IdentityNumber;
    this.arrayInputColors[5].value = this.identityDate;
    this.arrayInputColors[6].value = this.employee.Email;
    this.arrayInputColors[7].value = this.employee.BankAccountNumber;

    if (this.employee.DepartmentId) this.arrayInputColors[2].isValid = false;
  },
};
</script>
<style lang="sass"></style>
