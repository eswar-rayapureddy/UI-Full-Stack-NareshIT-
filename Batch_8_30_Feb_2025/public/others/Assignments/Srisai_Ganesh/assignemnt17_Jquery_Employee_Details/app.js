var generateEmpDetails = () => {
    var empDetails = {};
    
    empDetails.name = $('#ename').val();
    empDetails.gen = $('input[name=gender]:checked').val();
    empDetails.loc = $('#eloc').val();
    empDetails.dept = $('#edept').val();
    empDetails.sal = parseInt($('#esal').val());

    var pf = empDetails.sal * 0.12;
    empDetails.pf = pf;
    var hra = empDetails.sal * 0.24;
    empDetails.hra = hra;

    empDetails.totalsal = parseInt(empDetails.sal) + parseInt(hra) + parseInt(pf);
    
    empDetails.getTax = function(gen, sal) {
        var gender = gen.toLowerCase();
        var taxper = 0;
        var tax = 0;
        if (gender == "male" || gender == "m" || gender == "mal" || gender == "ma") {
            if (sal >= 100000) {
                taxper = 15;
            }
            else if (sal >= 50000) {
                taxper = 10;
            }
            else if (sal >= 25000) {
                taxper = 5;
            }
            else {
                taxper = 0;
            }
        }
        else {
            if (sal >= 100000) {
                taxper = 10;
            }
            else if (sal >= 50000) {
                taxper = 5;
            }
            else {
                taxper = 0;
            }
        }
        tax = sal * (taxper / 100);
        return tax;
    }

    empDetails.tax = empDetails.getTax(empDetails.gen, empDetails.sal);

    empDetails.displayDetails = function() {
        $("#e_name").text(this.name);
        $("#e_gen").text(this.gen);
        $("#e_loc").text(this.loc);
        $("#e_dept").text(this.dept);
        $("#e_pf").text(this.pf);
        $("#e_hra").text(this.hra);
        $("#e_sal").text(this.totalsal);
        $("#e_tax").text(this.tax);
    }

    empDetails.displayDetails();
    console.log(empDetails);

};