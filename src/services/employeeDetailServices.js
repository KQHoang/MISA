import axios from "axios";
export default {
    async getEmployeeList() {
        await axios
            .post("http://localhost:5199/api/v1/Employees", this.employee)
            .then(function(res) {
                console.log(res);
            })
            .catch(function(res) {
                console.log(res);
            });
    }
}