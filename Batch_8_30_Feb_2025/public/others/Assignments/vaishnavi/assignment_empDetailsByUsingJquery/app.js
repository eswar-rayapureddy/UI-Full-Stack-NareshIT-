var generateEmployeeDetails = () => {
    var employeeDetails = {};
    employeeDetails.name = $("#ename").val();
    employeeDetails.age = parseInt($("#eage").val());
    employeeDetails.gender = $('input[name=gender]:checked').val();
    employeeDetails.location = $("#locationname").val();
    employeeDetails.department = $("#edepartment").val();
    employeeDetails.salary = parseInt($("#esalary").val());

    console.log(employeeDetails);
    employeeDetails.getPfHraAndTotalsal = function () {
        this.basicsal = this.salary;
        this.pf = (12 * this.basicsal) / 100;
        this.hra = (24 * this.basicsal) / 100;
        this.totalsal = this.basicsal + this.pf + this.hra;
        this.getTaxPercent();
     }
      employeeDetails.getTaxPercent = function () {
          this.taxpercent = 0;
         var gender = this.gender;
                if (this.gender.toLowerCase() == 'male'){
             if (this.totalsal > 100000){
                 this.taxpercent = (this.totalsal * 15) / 100;
             }else if (this.totalsal > 50000){
                 this.taxpercent = (this.totalsal * 10) / 100;
             }else if (this.totalsal > 25000){
                 this.taxpercent = (this.totalsal * 5) / 100;
             }else {
                 this.taxpercent = 0;
             }
         }
         if (this.gender.toLowerCase() == 'female'){
             if (this.totalsal > 100000){
                 this.taxpercent = (this.totalsal * 10) / 100;
             }else if (this.totalsal > 50000){
                 this.taxpercent = (this.totalsal * 5) / 100;
             }else {
                 this.taxpercent = 0;
             }
          }
          this.displayDetails();
       }
       employeeDetails.displayDetails = function () {
          $("#d_name").text(this.name);
          $("#d_age").text(this.age);
          $("#d_gender").text(this.gender);
          $("#d_location").text(this.location);
          $("#d_department").text(this.department);
          $("#d_totalsal").text(this.totalsal);
          $("#d_taxpercent").text(this.taxpercent);
       }
       employeeDetails.getPfHraAndTotalsal();
    }
