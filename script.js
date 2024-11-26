function calculateProfit() {
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const salePrice = parseFloat(document.getElementById('salePrice').value);
    const acquisitionTax = parseFloat(document.getElementById('acquisitionTax').value);
    const registrationFee = parseFloat(document.getElementById('registrationFee').value);
    const brokerFee = parseFloat(document.getElementById('brokerFee').value);

    if (!purchasePrice || !salePrice || !acquisitionTax || !registrationFee || !brokerFee) {
        alert("모든 필드를 입력해주세요!");
        return;
    }

    // 총 거래비용 계산
    const totalTransactionCosts = acquisitionTax + registrationFee + brokerFee;

    // 매매차익 계산
    const profit = salePrice - (purchasePrice + totalTransactionCosts);

    // 결과 표시
    document.getElementById('results').innerHTML = `
        <p><strong>매매차익 계산 결과:</strong></p>
        <p>총 거래비용: ₩${totalTransactionCosts.toLocaleString()}</p>
        <p>매매 차익: ₩${profit.toLocaleString()}</p>
    `;
}
