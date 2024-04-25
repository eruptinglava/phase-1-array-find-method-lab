// code your solution here
const superbowlWin = (arr) => {
    const recObj = arr.find(i => i.result === "W");
    return recObj ? recObj.year : undefined;
  };