<template>
  <!-- class="content_area__content the-content" -->
  <div
    id="list-employee"
    v-loading="iShow"
    element-loading-background="#0000004f"
  >
    <div class="layout-directionary">
      <div class="title-distance header-list">
        <div class="header-di">
          <div class="title-di">Nhân viên</div>
          <div class="header-button">
            <button
              class="btn-default btn-success btn-border-none"
              @click="btnShowDialog"
            >
              <!-- button-header -->
              Thêm mới nhân viên
            </button>
          </div>
        </div>
      </div>

      <div id="layout-dictionary-body" class="body">
        <div class="grid-list-data sticky left-0">
          <div class="grid-button-list flex">
            <div class="flex-grow inline">
              <div class="check-all-dropdown">
                <el-dropdown trigger="click" class="dropdown-delete">
                  <span
                    class="dropdown-delete-link pointer"
                    @click="showDeleteAll"
                  >
                    <div class="delete-link">Thực hiện hàng loạt</div>
                    <div class="mi mi-16 icon-delete-all"></div>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu
                      v-if="isShowDelete"
                      class="dropdown-delete-ul"
                    >
                      <el-dropdown-item
                        class="dropdown-delete-li"
                        @click="deleteSelected"
                        >Xoá</el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
                <!-- <button >Xoá hàng loạt</button> -->
              </div>
            </div>

            <div class="ms-con-input">
              <div class="content-input-list">
                <input
                  class="input-search"
                  type="text"
                  placeholder="Tìm theo mã, tên nhân viên"
                  v-model="keySearch"
                  @keyup="search"
                />
                <div class="icon-inputx mi-16 mi"></div>
              </div>
            </div>

            <div class="align-item flex">
              <el-tooltip content="Lấy lại dữ liệu">
                <div class="refesh-button" @click="refreshPage">
                  <div class="mi mi-24 mi-refesh"></div>
                </div>
              </el-tooltip>

              <el-tooltip content="Xuất ra Excel">
                <div class="refesh-button">
                  <div class="mi mi-24 export" @click="exportExcel"></div>
                </div>
              </el-tooltip>
            </div>
          </div>
        </div>

        <div class="content_table_page">
          <div class="content_table">
            <table class="table">
              <thead>
                <th class="col-sticky-left width-40">
                  <div class="div-checkbox">
                    <label class="checkbox-box">
                      <input type="checkbox" v-model="selectAll" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </th>
                <th class="width-141 positon-sticky-40">
                  <span class="p-r-12"> MÃ NHÂN VIÊN </span>
                </th>
                <th class="width-236">
                  <span class="p-r-12"> TÊN NHÂN VIÊN </span>
                </th>
                <th class="width-128">
                  <span class="p-r-12"> GIỚI TÍNH </span>
                </th>
                <th class="text-center width-114">
                  <span class="p-r-12"> NGÀY SINH </span>
                </th>
                <el-tooltip content="Số chứng minh nhân dân">
                  <th class="width-133">
                    <span class="p-r-12"> SỐ CMND </span>
                  </th>
                </el-tooltip>

                <th class="width-143">
                  <span class="p-r-12"> CHỨC DANH </span>
                </th>
                <th class="width-244">
                  <span class="p-r-12"> TÊN ĐƠN VỊ </span>
                </th>
                <th class="width-208">
                  <span class="p-r-12"> SỐ TÀI KHOẢN </span>
                </th>
                <th class="width-189">
                  <span class="p-r-12"> TÊN NGÂN HÀNG </span>
                </th>
                <th class="width-250">
                  <span class="p-r-12"> CHI NHÁNH TK NGÂN HÀNG </span>
                </th>
                <th class="text-right col-sticky-right width-120 p-r-4">
                  <span class="p-r-12"> CHỨC NĂNG </span>
                </th>
              </thead>
              <tbody id="data">
                <tr
                  v-for="emp in employees"
                  :key="emp.EmployeeId"
                  @dblclick="rowOnDBClick(emp)"
                >
                  <td
                    class="td_check text-center col-sticky-left td-bg-white width-40"
                  >
                    <div class="div-checkbox">
                      <label class="checkbox-box">
                        <input
                          type="checkbox"
                          v-model="selected"
                          :value="emp.EmployeeId"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </td>
                  <td class="td_id left td-bg-white positon-sticky-40">
                    {{ emp.EmployeeCode }}
                  </td>
                  <td class="td_name left">{{ emp.FullName }}</td>
                  <td class="td_gender left">{{ emp.GenderName }}</td>
                  <td class="td_date text-center">
                    {{ formatDate(emp.DateOfBirth) }}
                  </td>
                  <td class="td_card left">{{ emp.IdentityNumber }}</td>
                  <td class="td_position left">{{ emp.PositionName }}</td>
                  <td class="td_company left">{{ emp.DepartmentName }}</td>
                  <td class="td_accountnumber left">
                    {{ emp.BankAccountNumber }}
                  </td>
                  <td class="td_bankname left">{{ emp.BankName }}</td>
                  <td class="td_bankbranch left">{{ emp.BankBranchName }}</td>
                  <td class="text-center col-sticky-right bg-white">
                    <el-dropdown
                      trigger="click"
                      split-button
                      class="el-dropdown-button"
                    >
                      <span class="el-dropdown-link" @click="rowOnDBClick(emp)">
                        Sửa
                      </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item
                            class="el-dropdown-item"
                            @click="repEmployee(emp)"
                            >Nhân bản</el-dropdown-item
                          >
                          <el-dropdown-item @click="deleteEmployee(emp)">
                            Xoá
                          </el-dropdown-item>
                          <el-dropdown-item>Ngưng sử dụng</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                    <!-- </div> -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Phân trang -->
        <div class="ms-pagination">
          <div class="left-pagination">
            Tổng số: <b>{{ sizeEmployee }}</b> bản ghi
          </div>
          <div class="right-pagination flex align-center">
            <!--Select page size  -->
            <el-select
              v-model="pagesizes.id"
              class="sel-footer-right"
              placeholder="10 bản ghi trên 1 trang"
              :filterable="true"
              :autocomplete="on"
              v-on:change="pageSizeChange"
            >
              <el-option
                class="ops-footer-right"
                v-for="item in pagesizes"
                :key="item.id"
                :label="item.title"
                :value="item.id"
              />
            </el-select>

            <!-- Phân trang -->
            <el-pagination
              small
              v-model:currentPage="currentPage"
              v-model:page-size="pageSize"
              :disabled="disabled"
              prev-text="Trước"
              next-text="Sau"
              layout="prev, pager, next"
              :total="sizeEmployee"
              @current-change="pageChangeClick"
              @size-change="handleSizeChange"
              :pager-count="4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Dialog box -->
  <!-- :employeeList="employees" -->
  <employeeDetail
    v-if="isShowDialog"
    :employeeSelected="employeeSelected"
    :editMode="editMode"
    @closeDialog="closeDialog"
    @showReLoad="showReLoad"
    @reFresh="reFresh"
  />

  <!-- Warning xoá nhân viên -->
  <div class="ms-message" v-if="isWarningDelete">
    <div class="ms-message--danger">
      <div class="ms-message--content">
        <div class="icon-warning-employeecode"></div>

        <ul class="message-text">
          <li class="warning-text">
            {{ this.messageDelete }}
          </li>
        </ul>
      </div>

      <div class="line-message"></div>
      <div class="message-footer--warning warning-flex">
        <button class="btn-default" @click="btnNoDelete">Không</button>
        <button
          class="btn-default btn-success btn-close--warning"
          @click="btnOkDelete"
        >
          Có
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ElMessage } from "element-plus";
import EmployeeDetail from "./EmployeeDetail.vue";

export default {
  el: "#app",
  name: "employeeList",
  components: { EmployeeDetail },
  data() {
    return {
      iShow: false, // show loading
      sizeEmployee: 0, // số lượng employee
      editMode: 0, // thêm - 0 , sửa - 1, nhân bản 2
      isShowDialog: false, // ẩn hiện form thêm mới nhân viên
      employees: [], // danh sách nhân viên
      employeeSelected: {}, // nhân viên chọn
      employeeDelete: {}, // nhân viên xoá
      isWarningDelete: false, // ẩn hiện cảnh báo xoá nhân viên
      keySearch: "", // nội dung tìm kiếm
      currentPage: 1, // trang hiện tại
      pageSize: 10, // số lượng bản ghi trên 1 trang
      pagesizes: [
        { id: 10, title: "10 bản ghi trên 1 trang" },
        { id: 20, title: "20 bản ghi trên 1 trang" },
        { id: 30, title: "30 bản ghi trên 1 trang" },
        { id: 50, title: "50 bản ghi trên 1 trang" },
        { id: 100, title: "100 bản ghi trên 1 trang" },
      ],
      selected: [], // mảng chứa id các nhân viên được chọn
      messageDelete: "", // nội dung message xoá
      isShowDelete: false, // hiển thị context menu xoá hàng loạt
    };
  },

  methods: {
    /**
     * refesh lại dữ liệu
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (10/7/2022)
     * input: true - thực hiện reload , false - không thực hiện
     */

    reFresh(isReFresh) {
      if (isReFresh) setTimeout(() => this.getPaging(), 500);
    },

    /**
     * hàm ẩn hiện dialog thêm nhân viên
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    closeDialog(isShow) {
      this.isShowDialog = isShow;
    },

    /**
     * định dạng ngày tháng
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     * input: chuỗi
     * output: ngày tháng đã đc định dạng
     */
    formatDate(dob) {
      try {
        let dateConvert = new Date(dob);
        if (
          dob &&
          dateConvert instanceof Date &&
          !isNaN(dateConvert.valueOf())
        ) {
          let date = dateConvert.getDate();
          date = date < 10 ? `0${date}` : date;
          // lay ra thang
          let month = dateConvert.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
          // lay ra nam
          let year = dateConvert.getFullYear();
          dob = `${date}/${month}/${year}`;
          return dob;
        } else return "";
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },

    /**
     * nhấn nút thêm mới nhân viên hiển thị form thêm mới
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    btnShowDialog() {
      this.editMode = 0;
      this.isShowDialog = true;
      this.employeeSelected = {};
    },

    /**
     * Click đúp vào row hiển thị thông tin chi tiết lên form
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     * input: đối tượng nhân viên
     */
    rowOnDBClick(emp) {
      this.editMode = 1;
      // gán dữ liệu và hiển thị form thông tin nhân viên
      this.dataAssignment(emp);
    },

    /**
     * chức năng nhân bản
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (18/07/2022)
     * input: đối tượng nhân viên cần nhân bản
     */
    repEmployee(emp) {
      this.editMode = 2;
      // gán dữ liệu và hiển thị form thông tin nhân viên
      this.dataAssignment(emp);
    },

    /**
     * Gán dữ liệu cho employeeSelected và hiển thị form thông tin nhân viên
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (21/7/2022)
     * @param {*} emp đối tượng cần gán
     */
    dataAssignment(emp) {
      this.employeeSelected = emp;
      this.isShowDialog = true;
    },

    /**
     * định dạng giới tính nam-1, nữ-0 , khác 3
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     * input: number (0, 1, 2)
     * ouput: nam, nữ, khác
     */
    formatGender(gender) {
      if (gender == 1) {
        return "Nam";
      } else if (gender == 0) {
        return "Nữ";
      } else if (gender == 2) {
        return "Khác";
      } else return "";
    },

    /**
     * nhấn nút xoá trong dropdown
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    deleteEmployee(emp) {
      this.messageDelete =
        "Bạn có thực sự muốn xoá Nhân viên <" + emp.EmployeeCode + "> không?";
      this.employeeDelete = emp;
      this.isWarningDelete = true;
    },

    /**
     * Không đồng ý xoá
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    btnNoDelete() {
      this.isWarningDelete = false;
      this.employeeDelete = {};
    },

    /**
     * Đồng ý xoá
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    async btnOkDelete() {
      var me = this;
      try {
        // thực hiện xoá khi ấn nút xoá trong context menu
        if (me.employeeDelete.EmployeeCode != undefined) {
          axios
            .delete(
              `http://localhost:5199/api/v1/Employees/${me.employeeDelete.EmployeeId}`
            )
            .then(function (res) {
              console.log(res);
              ElMessage({
                message: "Xoá thành công.",
                grouping: true,
                type: "success",
                duration: 2000,
              });
              // load lại dữ liệu
              me.isWarningDelete = false;
              me.employeeDelete = {};
              me.reLoad();
              // setTimeout(()=> me.reLoad() , 2000);
            })
            .catch(function (res) {
              console.log(res);
              alert(res);
            });
        } else {
          // Thực hiện xoá khi ấn nút xoá hàng loạt
          me.isWarningDelete = false;
          await me.selected.forEach((element) => {
            axios
              .delete(`http://localhost:5199/api/v1/Employees/${element}`)
              .then(function (res) {
                console.log(res);
                // me.reLoad();
              })
              .catch(function (res) {
                console.log(res);
              });
          });

          ElMessage({
            message: "Xoá thành công.",
            grouping: true,
            type: "success",
            duration: 2000,
          });
          await me.reLoad();
        }
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * tìm kiếm
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    search() {
      try {
        setTimeout(() => this.getPaging(), 1000);
      } catch (error) {
        console.log(error);
        alert("Có lỗi xảy ra khi tải dữ liệu về");
      }
    },

    /**
     * Refresh lại trang
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/06/2022)
     */
    refreshPage() {
      this.reLoad();
    },

    /**
     * Trang thay đổi
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    pageChangeClick() {
      try {
        this.getPaging();
      } catch (error) {
        console.log(error);
        alert("Có lỗi xảy ra khi tải dữ liệu về");
      }
    },

    /**
     * số lượng bản ghi trên trang thay đổi
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (28/6/2022)
     */
    handleSizeChange() {
      try {
        this.getPaging();
      } catch (error) {
        console.log(error);
        alert("Có lỗi xảy ra khi tải dữ liệu về");
      }
    },

    /**
     * Phân trang - không có loading, không có thông báo
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (9/7/2022)
     */
    getPaging() {
      var me = this;
      axios
        .get(
          `http://localhost:5199/api/v1/Employees/filter?pageIndex=${this.currentPage}&pageSize=${this.pageSize}&filter=${this.keySearch}`
        )
        .then(function (res) {
          me.errorAndData(res);
        })
        .catch(function (res) {
          console.log(res);
        });
    },

    /**
     * Load lại dữ liệu khi thực hiện thêm mới, sửa, xoá ( có loading, thông báo thành công)
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (11/7/2022)
     */
    reLoad() {
      var me = this;
      //this.isShowMSuccess = false;
      this.iShow = true;
      axios
        .get(
          `http://localhost:5199/api/v1/Employees/filter?pageIndex=${this.currentPage}&pageSize=${this.pageSize}&filter=${this.keySearch}`
        )
        .then(function (res) {
          me.errorAndData(res);

          setTimeout(() => (me.iShow = false), 1000);
        })
        .catch(function (res) {
          console.log(res);
        });
    },

    /**
     * Gán dữ liệu cho danh sách, gán số lượng bản ghi
     * thông báo lỗi nếu dữ liệu trống
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (11/7/2022)
     * @param {} res
     */
    errorAndData(res) {
      if (!res) {
        console.log("Có lỗi xảy ra khi tải dữ liệu về");
        return;
      }
      this.employees = res.data.Data;
      this.sizeEmployee = res.data.TotalRecord;
    },

    /**
     * Hàm hiển thị reload khi thực hiện thao tác thêm hoặc sửa
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (11/7/2022)
     */
    showReLoad(isShow) {
      if (!isShow) {
        return;
      }
      // hiển thị thông báo thực hiện thành công
      ElMessage({
        message: "Thao tác thành công.",
        grouping: true,
        type: "success",
        duration: 2000,
      });

      //this.reLoad();
      setTimeout(() => this.reLoad(), 500);
    },

    /**
     * Thay đổi sựa chọn số bản ghi trên 1 trang
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (9/7/2022)
     */
    pageSizeChange() {
      this.pageSize = this.pagesizes.id;
      this.handleSizeChange();
    },

    /**
     * Xoá hàng loạt
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (19/7/2022)
     */
    deleteSelected() {
      this.messageDelete =
        "Bạn có thực sự muốn xoá những nhân viên đã chọn không?";
      this.isWarningDelete = true;
    },

    /**
     * kiểm tra chọn hết phần tử không
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (19/07/2022)
     * output: true - các phần tử đã được lưu hết trong mảng selected
     *         false - các phần tử chưa được lưu hết trong mảng selected
     */
    checkSelectAll() {
      var check = true;
      this.employees.forEach((element) => {
        if (this.selected.includes(element.EmployeeId) == false) check = false;
      });
      return check;
    },

    /**
     * hiển thị context menu xoá hàng loạt
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (22/7/2022)
     */
    showDeleteAll() {
      if (this.selected.length != 0) {
        this.isShowDelete = true;
      }
    },

    /**
     * Xuất excel
     * Người tạo: Khuất Quang Hoàng
     * Ngày tạo: (22/7/2022)
     */
    exportExcel() {
      window.open("http://localhost:5199/api/v1/Employees/expoert");
    },
  },
  beforeCreate() {},

  /**
   * Phân trang dữ liệu khi khởi tạo không có thông báo, có loading
   * Người tạo: Khuất Quang Hoàng
   * Ngày tạo: (9/7/2022)
   */
  created() {
    try {
      this.reLoad();
    } catch (error) {
      console.log(error);
      alert("Có lỗi xảy ra khi tải dữ liệu về");
    }
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},

  /**
   * update
   * Người tạo: Khuất Quang Hoàng
   * Ngày tạo: (19/7/2022)
   */
  updated() {
    // không cho phép hiện context menu xoá hàng loạt khi không chọn phần tử
    if (this.selected.length == 0) {
      this.isShowDelete = false;
    }
  },
  beforeUnmount() {},
  unmounted() {},

  /**
   * kiểm soát sự thay đổi của selectAll
   * Người tạo: Khuất Quang Hoàng
   * Ngày tạo: (19/7/2022)
   */
  computed: {
    selectAll: {
      get: function () {
        return this.employees.length ? this.checkSelectAll() : false;
      },
      set: function (value) {
        var selected1 = [];
        // nếu có dữ liệu
        if (value) {
          this.employees.forEach(function (emp) {
            selected1.push(emp.EmployeeId);
          });
        }

        // nếu các phần tử chưa được chọn hết thì lưu những phần tử chưa tồn tại trong mảng selected
        if (!this.checkSelectAll()) {
          selected1.forEach((element) => {
            if (!this.selected.includes(element)) this.selected.push(element);
          });
        } else {
          // thực hiện xoá những phần tử tương ứng trong trang hiện tại khi bỏ tích
          this.employees.forEach(function (emp) {
            selected1.push(emp.EmployeeId);
          });

          selected1.forEach((element) => {
            let index = this.selected.indexOf(element);
            this.selected.splice(index, 1);
          });
        }
      },
    },
  },
};
</script>
