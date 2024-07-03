class landing{
    dataBase={}
    registerUser(){
        if (localStorage.getItem('userData')!=null) {
            this.getData()
        }
        let firstName=userName.value;
        let email=exampleInputEmail1.value;
        let password=exampleInputPassword1.value
        if (firstName!==''&&email!==''&&password!=='')   {
            if (email in this.dataBase) {
                alert(` ${email} IS ALREADY exist`)
            }
            else {
                this.dataBase[email]={
                    name:firstName,
                    email:email,
                    password:password
                }
                this.saveData();
                alert("Registration Succesfull")
                window.location="index.html"
            }
        }
        else{
            alert("enter value")
        }
    }
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("userData"))
    }
    saveData(){
        localStorage.setItem("userData",JSON.stringify(this.dataBase))
    }
    login(){
        
        let loggedEmail=userEmail.value;
        let loggedPassword=userPassword.value;
        this.getData();
        if (loggedEmail==""||loggedPassword=="") {
            alert("please enter value")

        }
        else{
            if (loggedEmail in this.dataBase) {
                if (this.dataBase[loggedEmail].password===loggedPassword) {
                    localStorage.setItem("firstName",this.dataBase[loggedEmail].name)
                    window.location="home.html"
                } else {
                    alert("passWord Missmatch")
                }

            } else {
                alert(`${loggedEmail} not found`)
            }
        }
    }
    clear(){
        userEmail.value="";
        userPassword.value=""
    }
    regclear(){
        exampleInputEmail1.value="";
        userName.value="";
        exampleInputPassword1.value="";
    }
}
const obj = new landing()
