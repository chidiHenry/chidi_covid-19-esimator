/* eslint-disable linebreak-style */


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
      currentlyInfected: Math.trunc(data.reportedCases * 10),
      infectionsByRequestedTime: Math.trunc(this.currentlyInfected * 2 ** 9),
      severeCasesByRequestedTime: Math.trunc(this.infectionsByRequestedTime * 0.15),
      totalHospitalBeds: Math.trunc(this.severeCasesByRequestedTime * 0.35),
      hospitalBedsByRequestedTime:
      Math.trunc(this.severeCasesByRequestedTime / this.totalHospitalBeds),
      casesForICUByRequestedTime: Math.trunc(this.infectionsByRequestedTime * 0.05),
      casesForVentilatorsByRequestedTime: Math.trunc(this.infectionsByRequestedTime * 0.02),
      dollarsInFlight:
      Math.trunc(this.infectionsByRequestedTime * data.avgDailyIncomePopulation * data.periodType)
    },
    severeImpact: {
      currentlyInfected: Math.trunc(data.reportedCases * 50),
      infectionsByRequestedTime: Math.trunc(this.currentlyInfected * 2 ** 9),
      severeCasesByRequestedTime: Math.trunc(this.infectionsByRequestedTime * 0.15),
      totalHospitalBeds: Math.trunc(this.severeCasesByRequestedTime * 0.35),
      hospitalBedsByRequestedTime:
      Math.trunc(this.severeCasesByRequestedTime / this.totalHospitalBeds),
      casesForICUByRequestedTime: Math.trunc(this.infectionsByRequestedTime * 0.05),
      casesForVentilatorsByRequestedTime: Math.trunc(this.infectionsByRequestedTime * 0.02),
      dollarsInFlight:
      Math.trunc(this.infectionsByRequestedTime * data.avgDailyIncomePopulation * data.periodType)

    }
  }

});

export default covid19ImpactEstimator;
