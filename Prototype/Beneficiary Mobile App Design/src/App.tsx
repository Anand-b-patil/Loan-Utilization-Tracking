import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { LoginScreen } from './components/LoginScreen';
import { ConsentScreen } from './components/ConsentScreen';
import { Dashboard } from './components/Dashboard';
import { NewSubmissionFlow } from './components/NewSubmissionFlow';
import { SubmissionsScreen } from './components/SubmissionsScreen';
import { SubmissionDetailScreen } from './components/SubmissionDetailScreen';

type AppScreen = 
  | 'splash'
  | 'onboarding'
  | 'login'
  | 'consent'
  | 'dashboard'
  | 'new-submission'
  | 'submissions'
  | 'submission-detail';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('splash');
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<number | null>(null);

  const navigateToScreen = (screen: AppScreen, submissionId?: number) => {
    if (submissionId) {
      setSelectedSubmissionId(submissionId);
    }
    setCurrentScreen(screen);
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return (
          <SplashScreen 
            onGetStarted={() => navigateToScreen('onboarding')}
          />
        );
      
      case 'onboarding':
        return (
          <OnboardingScreen 
            onComplete={() => navigateToScreen('login')}
            onBack={() => navigateToScreen('splash')}
          />
        );
      
      case 'login':
        return (
          <LoginScreen 
            onLogin={() => navigateToScreen('consent')}
            onBack={() => navigateToScreen('onboarding')}
          />
        );
      
      case 'consent':
        return (
          <ConsentScreen 
            onComplete={() => navigateToScreen('dashboard')}
          />
        );
      
      case 'dashboard':
        return (
          <Dashboard 
            onNewSubmission={() => navigateToScreen('new-submission')}
            onViewSubmissions={() => navigateToScreen('submissions')}
          />
        );
      
      case 'new-submission':
        return (
          <NewSubmissionFlow 
            onComplete={() => navigateToScreen('submissions')}
            onBack={() => navigateToScreen('dashboard')}
          />
        );
      
      case 'submissions':
        return (
          <SubmissionsScreen 
            onBack={() => navigateToScreen('dashboard')}
            onViewDetail={(submissionId) => navigateToScreen('submission-detail', submissionId)}
          />
        );
      
      case 'submission-detail':
        return (
          <SubmissionDetailScreen 
            submissionId={selectedSubmissionId || 1}
            onBack={() => navigateToScreen('submissions')}
          />
        );
      
      default:
        return <SplashScreen onGetStarted={() => navigateToScreen('onboarding')} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderCurrentScreen()}
    </div>
  );
}