function calculateProfit() {
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const salePrice = parseFloat(document.getElementById('salePrice').value);
    const acquisitionTax = parseFloat(document.getElementById('acquisitionTax').value);
    const registrationFee = parseFloat(document.getElementById('registrationFee').value);
    const brokerFee = parseFloat(document.getElementById('brokerFee').value);
    const propertyTax = parseFloat(document.getElementById('propertyTax').value);
    const maintenanceFee = parseFloat(document.getElementById('maintenanceFee').value);
    const vacancyLoss = parseFloat(document.getElementById('vacancyLoss').value);
    const otherCosts = parseFloat(document.getElementById('otherCosts').value);

    if (!purchasePrice || !salePrice || !acquisitionTax || !registrationFee || !brokerFee || 
        !propertyTax || !maintenanceFee || !vacancyLoss || !otherCosts) {
        alert("모든 필드를 입력해주세요!");
        return;
    }

    // 총 부대비용 계산
    const totalAdditionalCosts = acquisitionTax + registrationFee + brokerFee;

    // 총 보유 비용 계산
    const totalHoldingCosts = propertyTax + maintenanceFee + vacancyLoss + otherCosts;

    // 매매 차익 계산
    const profit = salePrice - (purchasePrice + totalAdditionalCosts + totalHoldingCosts);

    // 결과 표시
    document.getElementById('results').innerHTML = `
        <p><strong>매매차익 계산 결과:</strong></p>
        <p>총 부대비용: ₩${totalAdditionalCosts.toLocaleString()}</p>
        <p>총 보유비용: ₩${totalHoldingCosts.toLocaleString()}</p>
        <p>매매 차익: ₩${profit.toLocaleString()}</p>
    `;
}
