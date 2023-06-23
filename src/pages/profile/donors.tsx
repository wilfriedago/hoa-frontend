import { HFlow, Step, Stepper, useStepperState, VFlow } from 'bold-ui';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { setEligibility } from '@/features/donors';
import { eligibilityQuestions, Questionnaire, RegisterDonorForm } from '@/features/donors/forms';
import { AuthLayout } from '@/layouts';
import { useAppDispatch } from '@/store';
import type { NextPageWithLayout } from '@/utils/types';

const DonorsPage: NextPageWithLayout = () => {
  const dispatch = useAppDispatch();

  const { getStepProps, nextStep, previousStep, currentStep } = useStepperState(0);
  const [isStepsValidated, setIsStepsValidated] = useState([false, false, false]);

  const validateStep = (step: number, value: boolean) => {
    const newSteps = [...isStepsValidated];
    newSteps[step] = value;
    setIsStepsValidated(newSteps);
  };

  const steps = [
    {
      title: 'Informations personnelles',
      description: "Veuillez renseignée des informations véridiques, afin qu'elles puissent être vérifiées.",
      isValidated: false,
      content: <RegisterDonorForm />
    },
    {
      title: "Questionnaire d'éligibilité",
      description: 'Répondez aux questions suivantes pour vérifier votre éligibilité au don de sang.',
      isValidated: false,
      content: (
        <Questionnaire
          questions={eligibilityQuestions}
          onFinish={isEligible => {
            validateStep(1, isEligible);
            dispatch(setEligibility(isEligible));
            nextStep();
          }}
        />
      )
    },
    {
      title: "Conditions d'utilisation",
      description: "Acceptez les conditions d'utilisation",
      isValidated: false
    }
  ];

  const disabledButton = isStepsValidated.some(isValid => !isValid);

  return (
    <div className="flex flex-col">
      <VFlow>
        <Stepper>
          {/* TODO: Refactor this */}
          <Step {...getStepProps(0)}>{steps[0]?.title}</Step>
          <Step {...getStepProps(1)}>{steps[1]?.title}</Step>
          <Step {...getStepProps(2)}>{steps[2]?.title}</Step>
        </Stepper>

        <div className="mx-auto mt-10 h-full w-full max-w-7xl px-4 sm:mt-6 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div className="md:col-span-12">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{steps[currentStep]?.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{steps[currentStep]?.description}</p>
              </div>
            </div>
            <div className="md:col-span-12">{steps[currentStep]?.content}</div>
          </div>
        </div>

        <HFlow justifyContent="center">
          {currentStep > 0 && <Button onClick={previousStep}>Étape précédente</Button>}
          <Button onClick={nextStep} disabled={disabledButton}>
            Étape suivante
          </Button>
        </HFlow>
      </VFlow>
    </div>
  );
};

DonorsPage.layout = page => (
  <AuthLayout title="Inscription donneur | Blood Donation App" description="Accueil">
    {page}
  </AuthLayout>
);

export default DonorsPage;
