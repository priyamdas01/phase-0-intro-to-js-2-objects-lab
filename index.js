// Write your solution in this file!
const employee = {name: "priyam", streetAddress: "32 bethel church"};
function updateEmployeeWithKeyAndValue(emp, empKey, empValue){
    const updatedEmp = {...emp}
    updatedEmp[empKey] = empValue;
    return updatedEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, empKey, empValue){
    emp[empKey] = empValue;
    return emp;
}

function deleteFromEmployeeByKey(emp, key){
    const updatedEmp = {...emp}
    delete updatedEmp[key];
    return updatedEmp;
}

function destructivelyDeleteFromEmployeeByKey(emp, key){
    delete emp[key];
    return emp;
}