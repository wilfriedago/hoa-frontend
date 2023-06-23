import { ArrowPathIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

import {
  Coronavirus,
  DonateBlood,
  FaceMask,
  FlashOutline,
  GooglerTravel,
  HealthAndSafety,
  Medication,
  PregnantWoman,
  Rating18Plus,
  WeightSharp
} from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/store';

import { selectEligibility, selectQuestionnaire, setQuestionnaire } from '../donors.slice';

interface EligibilityQuestion {
  id: number;
  title: string;
  question: string;
  validation: (answer: string) => boolean;
  icon: any;
}

export const eligibilityQuestions: EligibilityQuestion[] = [
  {
    id: 1,
    title: 'age',
    question: 'Aviez vous plus de 18 ans ?',
    validation: answer => answer === 'Oui', // Minimum age requirement for blood donation
    icon: Rating18Plus
  },
  {
    id: 2,
    title: 'weight',
    question: 'Pesez-vous plus de 50 kg ?',
    validation: answer => answer === 'Oui', // Minimum weight requirement for blood donation
    icon: WeightSharp
  },
  {
    id: 3,
    title: 'healthCondition',
    question: 'Avez-vous des problèmes de santé particuliers ?',
    validation: answer => answer === 'Non', // Blood donation may have restrictions based on health conditions
    icon: HealthAndSafety
  },
  {
    id: 4,
    title: 'travelHistory',
    question: "Avez-vous voyagé à l'étranger récemment ?",
    validation: answer => answer === 'Non',
    icon: GooglerTravel
  },
  {
    id: 5,
    title: 'medication',
    question: 'Prenez-vous actuellement des médicaments ?',
    validation: answer => answer === 'Non',
    icon: Medication
  },
  {
    id: 6,
    title: 'recentSurgery',
    question: 'Avez-vous subi une intervention chirurgicale récemment ?',
    validation: answer => answer === 'Non',
    icon: FaceMask
  },
  {
    id: 7,
    title: 'donationHistory',
    question: 'Avez-vous déjà fait un don de sang auparavant ?',
    validation: answer => answer === 'Oui',
    icon: DonateBlood
  },
  {
    id: 8,
    title: 'pregnancy',
    question: 'Êtes-vous enceinte actuellement ?',
    validation: answer => answer === 'Non',
    icon: PregnantWoman
  },
  {
    id: 9,
    title: 'tattooPiercing',
    question: 'Avez-vous récemment fait un tatouage ou un piercing ?',
    validation: answer => answer === 'Non',
    icon: FlashOutline
  },
  {
    id: 10,
    title: 'exposureRisk',
    question: 'Avez-vous été exposé à des maladies transmissibles récemment ?',
    validation: answer => answer === 'Non',
    icon: Coronavirus
  }
];

type QuestionnaireProps = {
  questions: EligibilityQuestion[];
  onFinish: (isEligible: boolean) => void;
};

export const Questionnaire: React.FC<QuestionnaireProps> = ({ questions, onFinish }) => {
  const userIsEligible = useAppSelector(selectEligibility);
  const questionnaire = useAppSelector(selectQuestionnaire);
  const dispatch = useAppDispatch();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [isEligible, setIsEligible] = useState(questionnaire.isTaken ? userIsEligible : true);

  const currentQuestion = questions[currentQuestionIndex] as EligibilityQuestion;

  const analyzeAnswers = (): boolean => {
    const criticalQuestions = [1, 2, 3, 5, 6, 8]; // 'age', 'weight', 'healthCondition', 'medication', 'recentSurgery', 'pregnancy'

    for (const questionId of criticalQuestions) {
      const answer = answers[questionId] as string;
      const question = questions.find(q => q.id === questionId);

      if (!question || !question.validation(answer)) {
        return false; // User is ineligible if any critical question is not validated
      }
    }

    dispatch(setQuestionnaire({ isTaken: true, answers }));

    return true; // User is eligible if all critical questions are validated
  };

  const handleAnswer = (answer: string) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentQuestion.id]: answer
    }));

    if (currentQuestion.id === questions.length) setIsEligible(analyzeAnswers());
    else setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const handleResetQuestionnaire = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  return (
    <div className="overflow-hidden shadow sm:rounded-md">
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="mt-8 lg:col-span-2 lg:mt-0">
          {isEligible ? (
            <div className="flex flex-col items-center md:col-span-2">
              {Object.values(answers).length !== questions.length ? (
                <div className="flex h-72 flex-col justify-center overflow-hidden rounded-lg border border-gray-300 bg-white px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 font-semibold">
                      {`${currentQuestion?.id} / ${questions.length}`}
                    </div>

                    {currentQuestion?.icon && (
                      <div className="mt-3 text-center sm:mt-5">
                        <currentQuestion.icon className="mx-auto h-12 w-12 text-rose-500" />
                      </div>
                    )}

                    <div className="mt-3 text-center sm:mt-5">
                      <h3 className="text-xl font-medium leading-6 text-gray-900">{currentQuestion?.question}</h3>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <Button onClick={() => handleAnswer('Oui')}>Oui</Button>
                    <Button onClick={() => handleAnswer('Non')}>Non</Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-300 bg-white px-4 pb-4 pt-5 text-center transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <h2 className="text-xl font-medium text-gray-900">Vous êtes éligible pour le don de sang !</h2>
                  <div className="mt-5 flex justify-center">
                    <Button onClick={() => onFinish(isEligible)}>Passer à l&apos;étape suivante</Button>
                  </div>
                </div>
              )}
              <Button onClick={handleResetQuestionnaire} className="flex sm:flex-1">
                <ArrowPathIcon className="mr-2 h-5 font-medium" />
                Réinitialiser le questionnaire
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center md:col-span-2">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-300 bg-white px-4 pb-4 pt-5 text-center transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Désolé, mais vous n&apos;êtes pas éligible pour le don de sang.
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
