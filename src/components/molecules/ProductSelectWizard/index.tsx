import { useState } from "react";
import BaseWizardStep from "../BaseWizardStep";
import CheckboxWrapper from "../CheckboxWrapper";
import { useGetProductCategoryQuery } from "../../../services/api";
import SelectedProducts from "../SelectedProducts";

function ProductSelectWizard() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const { data } = useGetProductCategoryQuery({
    query: category,
    paging: { limit: 3, skip: 0 },
  });

  function handlerStepNext() {
    setStep((prev) => prev + 1);
  }

  function handlerStepPrev() {
    setStep((prev) => prev - 1);
  }

  return (
    <div>
      {step === 1 && (
        <BaseWizardStep
          title="We will select the perfect product for you"
          subtitle="Answer three questions and we will send you a catalog with the most suitable products for you."
          btnText="Next Step"
          step={step}
          onBtnClick={handlerStepNext}
          isBtnDisabled={category === ""}
        >
          <CheckboxWrapper
            currentCategory={category}
            setCategory={setCategory}
          />
        </BaseWizardStep>
      )}

      {step === 2 && (
        <BaseWizardStep
          title="Your selection is ready!"
          step={step}
          btnText="Change selection"
          onBtnClick={handlerStepPrev}
        >
          <SelectedProducts products={data?.products} />
        </BaseWizardStep>
      )}
    </div>
  );
}

export default ProductSelectWizard;
