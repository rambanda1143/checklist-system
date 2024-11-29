module.exports = [
    {
      name: "Valuation Fee Paid",
      key: "isValuationFeePaid",
      validate: (data) => data.isValuationFeePaid === true,
    },
    {
      name: "UK Resident",
      key: "isUkResident",
      validate: (data) => data.isUkResident === true,
    },
    {
      name: "Risk Rating Medium",
      key: "riskRating",
      validate: (data) => data.riskRating === "Medium",
    },
    {
      name: "LTV Below 60%",
      key: "ltv",
      validate: (data) => {
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return ltv < 60;
      },
    },
  ];
  