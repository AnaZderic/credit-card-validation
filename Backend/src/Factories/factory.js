const DateEdgeFactory = (strDate) => {
    let dateArr = strDate.split("-");
    let date = new Date(dateArr[0], dateArr[1], 0);
    date.setHours(23, 59, 59, 999);
    return date;
}

module.exports = {DateEdgeFactory};