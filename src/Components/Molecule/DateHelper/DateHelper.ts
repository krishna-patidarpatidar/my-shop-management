import moment from "moment";

const formatDate = (date:any) =>{
  return moment(date).format("DD/MM/YYYY")
}

export {formatDate}
