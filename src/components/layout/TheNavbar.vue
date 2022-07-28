<template>
  <div id="navbar" class="menu-container expand">
    <div class="logo-container">
      <a href="" class="menu-container-option"></a>
      <a href="" class="logo">
      </a>
    </div>

    <div class="menu-item-list scroller">
      <el-tooltip content="Tổng quan" :hide-after="0" placement="right-end" >
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <router-link to="/customer" class="menu-item router-link-active">
                <div class="menu-item__icon">
                  <div class="mi mi-24 mi-sidebar-dasboard"></div>
                  <div class="menu-item__title">Tổng quan</div>
                </div>
            </router-link>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Tiền mặt" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <router-link to="/employee" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 cash"></div>
                <div class="menu-item__title">Tiền mặt</div>
              </div>
            </router-link>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Tiền gửi" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 bank"></div>
                <div class="menu-item__title">Tiền gửi</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Mua hàng" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 pru"></div>
                <div class="menu-item__title">Mua hàng</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Bán hàng" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 sale"></div>
                <div class="menu-item__title">Bán hàng</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Quản lý hoá đơn" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 invoice"></div>
                <div class="menu-item__title">Quản lý hoá đơn</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Kho" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 stock"></div>
                <div class="menu-item__title">Kho</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Công cụ dụng cụ, Chi phí trả trước" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 tools"></div>
                <div class="menu-item__title">Công cụ dụng cụ</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Tài sản cố định" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 fix-assets"></div>
                <div class="menu-item__title">Tài sản cố định</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Thuế" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 tax"></div>
                <div class="menu-item__title">Thuế</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Giá thành" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 price"></div>
                <div class="menu-item__title">Giá thành</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Tổng hợp" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 generral"></div>
                <div class="menu-item__title">Tổng hợp</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Ngân sách" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 buget"></div>
                <div class="menu-item__title">Ngân sách</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Báo cáo" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 report"></div>
                <div class="menu-item__title">Báo cáo</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>

      <el-tooltip content="Phân tích tài chính" :hide-after="0" placement="right-end">
        <div class="con-ms-tooltip">
          <div class="tooltip-content">
            <a href="" class="menu-item router-link-active">
              <div class="menu-item__icon">
                <div class="mi mi-24 finance"></div>
                <div class="menu-item__title">Phân tích tài chính</div>
              </div>
            </a>
          </div>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>
