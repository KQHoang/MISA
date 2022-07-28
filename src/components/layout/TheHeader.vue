<template>
  <div id="header" class="vx-navbar-wrapper">
    <div class="vx-navbar navbar-custom flex item-center">
      <div class="header-icon mi mi-24 stripes pointer"></div>

      <div class="flex pointer">
        <div class="ms-tooltip">
          <div class="tooltip-content">
            <div class="header-brach-name">
              CÔNG TY TINH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUÝ PHÚC
            </div>
          </div>
        </div>

        <div class="flex align-item mg-10">
          <div class="header-icon-down mi mi-14 pointer brach-icon"></div>
        </div>
      </div>

      <div class="ms-space"></div>

      <el-tooltip content="Thông báo">
        <div class="tooltip-content-header">
          <div class="wrap-notify">
            <div class=" mi mi-24 bell pointer"></div>
          </div>
        </div>
      </el-tooltip>
      
      <div class="pointer account-info">
        <div class="ms-component flex align-item">
          <div class="user-ava">
            <div
              class=" mi mi-32 pointer avatar"
              style="border-radius: 20px"
            ></div>
          </div>

          <div class="ms-tooltip user-name">
            <div class="tooltip-content">
              <div class="account-name">KHUẤT QUANG HOÀNG</div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="mi mi-14 pointer brach-icon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
