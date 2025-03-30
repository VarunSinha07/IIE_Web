export async function getOverviewData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    fundsStartup: {
      value: 250000,
      growthRate: 0.43,
    },
    corpousFund: {
      value: 15000000,
      growthRate: 4.35,
    },
    incubationProjects: {
      value: 130,
      growthRate: 2.59,
    },
    eventOrg: {
      value: 250,
      growthRate: -0.95,
    },
    incubatedStartup: {
      value: 46,
      growthRate: 4.35,
    },
    technologyTransfer: {
      value: 2,
      growthRate: 2.59,
    },
  };
}

