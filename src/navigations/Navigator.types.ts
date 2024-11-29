export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Users: undefined;
  ProfileDrawer: undefined;
  SharedNavProfile: undefined;
  Splash: undefined;
  Onboarding: undefined;
  MainApp: { surveyResponses?: {
    experienceLevel: string;
    preferredLearningStyle: string;
    mainGoal: string;
  }};
};

export type TabParamList = {
  AboutMe: undefined;
  Details: undefined;
  Settings: undefined;
};
