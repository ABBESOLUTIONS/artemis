interface Props {
    timestamp?: number,
    date?: Date | null,
    action?: "toTimesTamp" | "toDateString" | "toDateHourString"
}

function dateConverter({timestamp = 0, date = null, action = "toTimesTamp"} : Props) {

    if(action === "toTimesTamp") {
        if(date != null)
            return date?.getTime();
        return ;
    }
    else if(action === "toDateString") {
        if(timestamp != null){
            const nDate = new Date(timestamp);
            return nDate.getFullYear()+"-"+(nDate.getUTCMonth()+1)+"-"+nDate.getDate();
        }
        return null;
    }
    else if(action === "toDateHourString") {
        if(timestamp != null){
            const nDate = new Date(timestamp);
            return `${nDate.getFullYear()}-${(nDate.getUTCMonth()+1)}-${nDate.getDate()} ${nDate.getHours()}:${nDate.getMinutes()}`;
        }
        return null;
    }
    return null;
}

export default dateConverter;