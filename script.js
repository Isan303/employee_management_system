// IBM FSD Demo App
console.log('IBM FSD Demo App');

// const restUrl = 'http://localhost:8090/';

// ---
const getAllEmpUrl = "http://localhost:9090/emp/get-all-emps";
const postEmpUrl = "http://localhost:9090/emp/add-emp";
const delUrl =`http://localhost:9090/emp/delete-emp/${employeeId}`;

const findAllEmployees = async () => {
    await fetch(getAllEmpUrl)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => { console.log(err) })
};

const findEmployeeById = (employeeId) => { };

const findEmployeeByName = (firstName) => { };


// dummy emp data 
employee = {
    "firstName": "Sam",
    "email": "Sam@gmail.com",
    "aadhaar": 90904545454,
    "salary": 230000,
    "age": 22
}

const addEmployee = async (employee) => {
    await fetch(postUrl, {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
    })
        .then((res) => {
            console.log("sucess" + res);
        })
        .catch((err) => {
            console.log(err);
        });
};

const deleteEmployee = async (employeeId) => {
    await fetch(delUrl, {
        method: "DELETE", // or 'PUT'
       
        
    })
        .then((res) => {
            console.log("Deleted Successfully" + res);

        })
        .catch((err) => {
            console.log(err);
        });
};

deleteEmployee(employeeId);




