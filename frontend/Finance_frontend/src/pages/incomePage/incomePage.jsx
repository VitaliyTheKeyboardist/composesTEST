import { useEffect } from "react"
import InputForm from "../../modules/inputForm/inputForm"
import { URLS, months, month } from "../../urls/urlsAndDates"
import { numberFormatRub } from "../../modules/calculator/functions/numberFormatHalper"

function IncomePage({
  categories,
  getCategories,
  getOperationList,
  getBalanceData,
  getInputData,
  inputData,
  changeRangeCalendar,
  range,
  setCheckMainField,
  setCheckCalculator,
}) {
  useEffect(() => {
    getCategories(URLS.getIncomeCategories)
    changeRangeCalendar(false)
    getInputData(URLS.sumIncomeCash)
    setCheckMainField(true)
    setCheckCalculator(false)
    getOperationList(URLS.last5IncomeCash, "+")
  }, [])

  return (
    <div className="main_field" key="">
      <h2 className="main_field_title">Доходы</h2>
      <div className="main_field_input">
        <input
          className="input_rub"
          value={numberFormatRub.format(inputData)}
          readOnly
        ></input>
      </div>
      <div className="main_field_title_label">
        Общий доход за <span className="balance_month">{months[month]}</span>
      </div>
      <InputForm
        title="Постоянные"
        type="constant"
        income_outcome="income"
        endpoint={URLS.last5IncomeCash}
        typeOfSum={URLS.POSTincomcash}
        getInputData={getInputData}
        sumCash={URLS.sumIncomeCash}
        typeForSum="constant_sum"
        getOperationList={getOperationList}
        getCategories={getCategories}
        typeOfCategories={URLS.getIncomeCategories}
        categories={categories}
        symbol="+"
        getBalanceData={getBalanceData}
        range={range}
        addActive={true}
      />
      <InputForm
        title="Временные"
        type="once"
        income_outcome="income"
        endpoint={URLS.last5IncomeCash}
        typeOfSum={URLS.POSTincomcash}
        getInputData={getInputData}
        sumCash={URLS.sumIncomeCash}
        typeForSum="onse_sum"
        getOperationList={getOperationList}
        getCategories={getCategories}
        typeOfCategories={URLS.getIncomeCategories}
        categories={categories}
        symbol="+"
        getBalanceData={getBalanceData}
        addActive={true}
      />
      <div className="mobileSum">
        <div className="mobileSum_input">
          <div className="mainTextSumm">
            Ваш общий доход за{" "}
            <span className="balance_month_mobile">{months[month]}</span>
          </div>
          <input
            className="input_rubMobile"
            value={numberFormatRub.format(inputData)}
            readOnly
          ></input>
        </div>
      </div>
    </div>
  )
}

export default IncomePage
