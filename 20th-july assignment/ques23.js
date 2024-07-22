function calculateProfitOrLoss(costPrice, sellingPrice) {
    const profitOrLoss = sellingPrice - costPrice;

    if (profitOrLoss > 0) {
        return `Profit: ${profitOrLoss}`;
    } else if (profitOrLoss < 0) {
        return `Loss: ${Math.abs(profitOrLoss)}`;
    } else {
        return "No profit, no loss.";
    }
}

// Example usage:
const costPrice = parseFloat(prompt("Enter the cost price:"));
const sellingPrice = parseFloat(prompt("Enter the selling price:"));
const result = calculateProfitOrLoss(costPrice, sellingPrice);
console.log(result);
