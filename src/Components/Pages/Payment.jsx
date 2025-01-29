import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import { FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

function Payment() {
  const location = useLocation();
  
  if (!location.state) {
    return <div className="text-center text-xl font-semibold text-red-500">Error: No payment details available!</div>;
  }

  let total_amount = location.state.reduce((acc, item) => acc + item.caloriesPerServing * item.qty, 0);
  let transaction_uuid = uuidv4();
  let product_code = "EPAYTEST";

  let Message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
  let hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  let hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        
        <FaMoneyBillWave className="text-green-500 text-4xl mx-auto mb-3" />
        
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Summary
        </h1>
        <p className="text-gray-600 mb-4">Complete your payment securely</p>

        <div className="bg-gray-200 rounded-lg py-3 px-6 mb-4">
          <p className="text-lg font-semibold">Total Amount: <span className="text-green-600">NPR {total_amount}</span></p>
        </div>

        <form
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input type="hidden" name="amount" value={total_amount} />
          <input type="hidden" name="tax_amount" value="0" />
          <input type="hidden" name="total_amount" value={total_amount} />
          <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
          <input type="hidden" name="product_code" value={product_code} />
          <input type="hidden" name="product_service_charge" value="0" />
          <input type="hidden" name="product_delivery_charge" value="0" />
          <input type="hidden" name="success_url" value="https://momohouse-project.vercel.app/success" />
          <input type="hidden" name="failure_url" value="https://momohouse-project.vercel.app/failure" />
          <input type="hidden" name="signed_field_names" value="total_amount,transaction_uuid,product_code" />
          <input type="hidden" name="signature" value={hashInBase64} />

          <button
            type="submit"
            className="flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer hover:bg-orange-600 transition shadow-md w-full"
          >
            <FaCheckCircle className="mr-2" />
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
