export type DonorsState = {
  isELigible?: boolean;
  questionnaire: {
    isTaken: boolean;
    answers?: { [key: number]: string };
  };
};
