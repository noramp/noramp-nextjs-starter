"use client";
import { NoRampOneClick } from "norampkit";

export default function Page() {
  return (
    <>
      <main>
        <div className="text-3xl font-bold text-center mt-8">
          <h1>NoRamp Next.js Starter</h1>
          <div className="flex justify-center p-12">
            <NoRampOneClick
              priceId="price_62F1sgqEkrH1sWrszOk0QV" // Create price in your dashboard or using our API
              testnet // optional param to use testnet, dont include for mainnet
            />
          </div>
        </div>
      </main>
    </>
  );
}
