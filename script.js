function calculateBreakdown() {
    const salary = parseFloat(document.getElementById("salary").value);

    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid salary greater than 0.");
        return;
    }

    const investmentPercent = 25.81 / 100;
    const remainingPercent = 100 - 25.81;

    const investmentAmount = salary * investmentPercent;
    const remaining = salary - investmentAmount;

    const essentials = remaining * (50 / 80);
    const savings = remaining * (10 / 80);
    const misc = remaining * (10 / 80);
    const extra1 = remaining * (10 / 80);

    document.getElementById("essentials").textContent = "₱" + essentials.toFixed(2);
    document.getElementById("savings").textContent = "₱" + savings.toFixed(2);
    document.getElementById("misc").textContent = "₱" + misc.toFixed(2);
    document.getElementById("extra1").textContent = "₱" + extra1.toFixed(2);
    document.getElementById("investment").textContent = "₱" + investmentAmount.toFixed(2);

    document.getElementById("result").classList.remove("hidden");
}