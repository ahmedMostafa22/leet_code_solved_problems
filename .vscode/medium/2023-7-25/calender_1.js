    var MyCalendar = function () {
        this.booking = [];
    };

    /** 
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    MyCalendar.prototype.book = function (start, end) {
        var ans = 0;
        this.booking.forEach(interval => {
            if ((start >= interval[0] && start < interval[1]) || (end > interval[0] && end <= interval[1])||(end>interval[1]&&start<interval[0])) ans++;
        });
        if (ans === 0)
            this.booking.push([start, end]);
        return ans === 0;
    };

    /** 
     * Your MyCalendar object will be instantiated and called as such:
     * var obj = new MyCalendar()
     * var param_1 = obj.book(start,end)
     */