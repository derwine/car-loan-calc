import React, {useState} from "react"

function CarFinanceCalc({cost, interest_pct, downpayment, term}){

    const [interest_, setInterest] = useState(interest_pct);
    const [downpayment_, setDownpayment] = useState(downpayment);
    const [term_, setTerm] = useState(term);

    function calcDownPaymentPct(){
        return Math.round((downpayment_/cost)*100, 0);
    }

    function calcMonthlyPayment(){
        return Math.round(((cost - downpayment_)/term_), 0);
    }

    function updateDownpayment(e){
        setDownpayment(e.target.value);
    }

    function updateInterest(e){
        setInterest(e.target.value);
    }

    function updateTerm(e){
        setTerm(e.target.value);
    }

    return (
        <div className="columns">
            <div className="column is-half">
                <p className="is-primary">
                    <span>Cost: ${cost}</span>&nbsp;
                    <span>Interest Rate: {interest_}%</span>&nbsp;
                    <span>Downpayment: {calcDownPaymentPct()}%</span>&nbsp;
                    <span>Term {term_} months</span>&nbsp;
                </p>
                <p>
                    Monthly Payment: <b>${calcMonthlyPayment()}</b>
                </p>

                <div className="field">
                    <label className="label">Downpayment</label>
                    <div className="control">
                        <input className="input" 
                        type="number" 
                        min="0"
                        max={cost}
                        placeholder="Downpayment amount" 
                        value={downpayment_} 
                        onChange={updateDownpayment} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Interest Rate %</label>
                    <div className="control">
                        <input className="input" 
                        type="number"
                        min="0"
                        max="30" 
                        placeholder="Interest %" 
                        value={interest_} 
                        onChange={updateInterest}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Term</label>
                    <div className="control">
                        <input className="input" 
                        type="number" 
                        placeholder="Term in months" 
                        value={term_} 
                        min="0"
                        max="84" 
                        onChange={updateTerm}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarFinanceCalc;