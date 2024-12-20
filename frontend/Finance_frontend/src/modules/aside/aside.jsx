import React from "react"
import style from "./aside.module.css"
import userAva from "./../../assets/Images/userAva.svg"
import "air-datepicker/air-datepicker.css"
import AirDatePicker from "../calendar/AirCalendar"
import { balanceMonths } from "../../urls/urlsAndDates"
import { numberFormatRub } from "../calculator/functions/numberFormatHalper"

const Aside = ({ balanceData, range, selectDate, checkCalculator }) => {
  let selectDateAside = selectDate.split("-")
  return (
    <div>
      <div className={style.root}>
        <div className={style.userDate}>
          <div className={style.balance}>
            <input
              type="text"
              value={numberFormatRub.format(balanceData)}
              readOnly
            />
            <div className={style.textBalance}>
              Ваш баланс на{" "}
              <span className={style.balance_month}>{selectDateAside[2]}</span>
              <span className={style.balance_month}>
                {balanceMonths[Number(selectDateAside[1])]}
              </span>
            </div>
          </div>
          <div className={style.userAva}>
            <img src={userAva} alt="" />
          </div>
        </div>
        {!checkCalculator && (
          <div className={style.datePicker}>
            <AirDatePicker range={range} inline={false} autoClose={true} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Aside
