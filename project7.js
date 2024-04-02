const salaryForm = document.getElementById('salaryForm');
const salaryRangesTable = document.getElementById('salaryRanges');
const salaryRanges = [
    { min: 0, max: 1000, count: 0 },
    { min: 1001, max: 2000, count: 0 },
    { min: 2001, max: 3000, count: 0 },
    { min: 3001, max: 4000, count: 0 },
    { min: 4001, max: 5000, count: 0 },
    { min: 5001, max: Infinity, count: 0 }
];

salaryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const grossSales = parseInt(document.getElementById('grossSales').value);
    const salary = calculateSalary(grossSales);
    const range = getSalaryRange(salary);
    range.count++;
    updateSalaryRangesTable();
});

function calculateSalary(grossSales) {
    const baseSalary = 200;
    const commissionRate = 0.09;
    const salary = baseSalary + Math.floor(grossSales * commissionRate);
    return salary;
}

function getSalaryRange(salary) {
    return salaryRanges.find(range => salary >= range.min && salary <= range.max);
}
function updateSalaryRangesTable() {
    salaryRangesTable.innerHTML = '';
    salaryRangesTable.appendChild(document.createElement('tr'));
    salaryRangesTable.rows[0].innerHTML = '<th>Range</th><th>Number of Salespeople</th>';
    salaryRanges.forEach(range => {
        const row = salaryRangesTable.insertRow();
        row.insertCell().textContent = ${range.min} - ${range.max};
        row.insertCell().textContent = range.count;
    });
}
