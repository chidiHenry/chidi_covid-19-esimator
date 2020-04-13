
const covid19ImpactEstimator = (data) => ({
  return: {
    data: {
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      },
      periodType: 'days',
      timeToElapse: 58,
      reportedCases: 674,
      population: 66622705,
      totalHospitalBeds: 1380614
    },
    impact: {
      currentlyInfected: data.reportedCases * 10,
      infectionsByRequestedTime: this.currentlyInfected * 2 ** 9,
      severeCasesByRequestedTime: this.infectionsByRequestedTime * 0.15,
      totalHospitalBeds: this.severeCasesByRequestedTime * 0.35,
      hospitalBedsByRequestedTime:
      this.severeCasesByRequestedTime / this.totalHospitalBeds,
      casesForICUByRequestedTime: this.infectionsByRequestedTime * 0.05,
      casesForVentilatorsByRequestedTime: this.infectionsByRequestedTime * 0.02,
      dollarsInFlight:
      this.infectionsByRequestedTime * data.avgDailyIncomePopulation * data.periodType
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionsByRequestedTime: this.currentlyInfected * 2 ** 9,
      severeCasesByRequestedTime: this.infectionsByRequestedTime * 0.15,
      totalHospitalBeds: this.severeCasesByRequestedTime * 0.35,
      hospitalBedsByRequestedTime:
      this.severeCasesByRequestedTime / this.totalHospitalBeds,
      casesForICUByRequestedTime: this.infectionsByRequestedTime * 0.05,
      casesForVentilatorsByRequestedTime: this.infectionsByRequestedTime * 0.02,
      dollarsInFlight: this.infectionsByRequestedTime * data.avgDailyIncomePopulation * data.periodType

    }
  }

});

export default covid19ImpactEstimator;
