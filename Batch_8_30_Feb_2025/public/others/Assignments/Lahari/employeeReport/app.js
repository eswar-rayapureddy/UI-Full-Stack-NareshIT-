var generateEmployeeReport = () =>{
    var employeeDetails = {}

        employeeDetails.name = $("#ename").val();
        employeeDetails.age = $("#eage").val();
        employeeDetails.location = $("#eloc").val();
        employeeDetails.gender = $('input[name=gender]:checked').val();
        employeeDetails.department = $("#edep").val();
        employeeDetails.salary = parseInt($("#esal").val());
        console.log(employeeDetails);

        function calHraAndPfAndTotalsal(){
            var pf = this.salary* 12/100;
            var hra = this.salary * 24/100;
            this.totalsal=this.salary + pf + hra;
            this.taxPercent();
        }

        function taxPercent(){
            var taxpercent = 0;
            if (this.gender == "male") {
                console.log("gender is male");
                if (this.totalsal >= 100000) {
                    console.log("taxpercent is 15% on totalsalary");
                    taxpercent = this.totalsal * 15 / 100;
                    console.log("By applying taxpercent, taxpercent is " + taxpercent);
                } else if (this.totalsal >= 50000) {
                    console.log("taxpercent is 10% on totalsalary");
                    taxpercent = this.totalsal * 10 / 100;
                    console.log("By applying taxpercent, taxpercent is " + taxpercent);
                } else if (this.totalsal >= 25000) {
                    console.log("taxpercent is 5% on totalsalary");
                    taxpercent = this.totalsal * 5 / 100;
                    console.log("By applying taxpercent, taxpercent is " + taxpercent);
                } else {
                    console.log("taxpercent is 0");
                    console.log("By applying taxpercent, taxpercent is " + this.totalsal);
                }
            } else {
                console.log("gender is female");
                if (this.totalsal >= 100000) {
                    console.log("taxpercent is 10% on totalsalary");
                    taxpercent = this.totalsal * 10 / 100;
                    console.log("By applying taxpercent, taxpercent is " + taxpercent);
                } else if (this.totalsal >= 50000) {
                    console.log("taxpercent is 5% on totalsalary");
                    taxpercent = this.totalsal * 5 / 100;
                    console.log("By applying taxpercent, taxpercent is " + taxpercent);
                } else {
                    console.log("taxpercent is 0");
                    console.log("By applying taxpercent, taxpercent is " + this.totalsal);
                }
            }
            this.taxPercent = taxpercent;
            this.displayDetails();
        }            




        employeeDetails.displayDetails = function() {
            $("#dname").text(this.name);
            $("#dage").text(this.age);
            $("#dlocation").text(this.location);
            $("#dgender").text(this.gender);
            $("#ddepartment").text(this.department);
            $("#salary").text(this.salary)
            $("#taxpercent").text(this.taxpercent);
        }
        
        employeeDetails.calHraAndPfAndTotalsal();
    

}
