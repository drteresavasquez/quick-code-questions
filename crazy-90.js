// There is a problem here! There is a bug in this code and this block is where that pesky bug is located. 

// The UI fails any time a user has a percentage of 90% exactly

// Can anyone look at this with your knowledge of JS and tell me what the bug is? 

const getPercentageInfo = (percentage) => {
  if (percentage < 50) {
      return {
          text: "High Risk",
          extra: "Complete Your Assignments",
          color: "danger",
      };
  } else if (percentage >= 50 && percentage <= 70) {
      return {
          text: "Moderate Risk",
          extra: "Complete Your Assignments",
          color: "warning",
      };
  } else if (percentage >= 71 && percentage <= 89) {
      return {
          text: "Low Risk",
          extra: "Keep working, you're almost there!",
          color: "info",
      };
  } else if (percentage > 90) {
      return {
          text: "No Risk",
          extra: "Look at you! Keep up the good work!",
          color: "success",
      };
  }
};
