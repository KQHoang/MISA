<template>
<div class="router-view fix-view">
    <div class="router-content">
        <!-- <router-view></router-view> -->
        <EmployeeList/>
        <!-- <customer/> -->
    </div>
</div>
</template>

<script>

import EmployeeList from '../../view/employees/EmployeeList.vue'
export default{
    name: "TheContent",
    components: {
        EmployeeList
    }
};
</script>