import React from 'react';
import { gcash, paypal, others, credits } from '../assets';

const PaymentHeader = ({ onSelectPayment }) => {
    return (
        <div className="flex bg-white rounded-lg sm:w-fit">
            <div className="grid grid-cols-4 gap-4 place-items-center">
                <div className="cursor-pointer border-gray-300 rounded" onClick={() => onSelectPayment('gcash')}>
                    <img src={gcash} alt="Gcash" className="w-full"/>
                </div>
                <div className="cursor-pointer border-gray-300 rounded" onClick={() => onSelectPayment('debitcredit')}>
                    <img src={credits} alt="Debit/Credit Card" className="w-full"/>
                </div>
                <div className="cursor-pointer border-gray-300 rounded" onClick={() => onSelectPayment('paypal')}>
                    <img src={paypal} alt="PayPal" className="w-full"/>
                </div>
                <div className="cursor-not-allowed border-gray-300 rounded" 
                // onClick={() => onSelectPayment('others')}
                >
                    <img src={others} alt="Other" className="w-full"/>
                </div>
            </div>
        </div>
    );
}

export default PaymentHeader;
