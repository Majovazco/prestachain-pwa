import MainLayout from "../layouts/MainLayout";

import LoanRequestForm from "../components/LoanRequestForm";

export default function () {
    return (
        <MainLayout showBackButton={true}>
            <div className="mt-6 flex flex-col items-center justify-center w-full">
                <LoanRequestForm />
            </div>
        </MainLayout>
    )
}