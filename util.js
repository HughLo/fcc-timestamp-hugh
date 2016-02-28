module.exports = function() {
    return {
        parseDateString: function(dateString) {
            var unixDate = parseInt(dateString);
            var naturalDate = Date.parse(dateString)

            console.log("unix date: " + unixDate);
            console.log("natural date: " + naturalDate);

            if (!isNaN(unixDate)) {
                return new Date(unixDate);
            }
            else if (!isNaN(naturalDate)) {
                return new Date(naturalDate);
            }

            return null;
        },
        convertDateToReadableString: function(date) {
            var monthStringArray = [
                "January",
                "Februrary",
                "March",
                "Apirl",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];

            var result = monthStringArray[date.getMonth()] + " " + date.getDate() +
                ", " + date.getFullYear();

            return result;
        },

        convertToTimeStampObject: function(dateString) {
            var date = this.parseDateString(dateString);
            if(date) {
                return {
                    "unix": date.getTime(),
                    "natural": this.convertDateToReadableString(date)
                }
            } else {
                return {
                    "unix": null,
                    "natural": null
                }
            }
        }
    };
}