import { useState } from 'react';
import { AppShell, UserRole } from './components/app-shell';
import { LandingPage } from './components/landing-page';
import { BeneficiaryDashboard } from './components/beneficiary/dashboard';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [currentPath, setCurrentPath] = useState('/');

  const handleRoleSelect = (role: UserRole) => {
    setCurrentRole(role);
    // Set default path for each role
    const defaultPaths = {
      beneficiary: '/b/dashboard',
      officer: '/o/inbox',
      admin: '/a/overview'
    };
    setCurrentPath(defaultPaths[role]);
  };

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
  };

  const renderContent = () => {
    if (!currentRole) {
      return <LandingPage onRoleSelect={handleRoleSelect} />;
    }

    // Start with just beneficiary dashboard for testing
    if (currentPath.startsWith('/b/') && currentPath === '/b/dashboard') {
      return <BeneficiaryDashboard onNavigate={handleNavigate} />;
    }

    // Simplified routing for other paths
    return (
      <div className="p-8">
        <h1>Welcome to {currentRole} dashboard</h1>
        <p className="text-muted-foreground">Current path: {currentPath}</p>
        <div className="mt-4 space-x-2">
          <button 
            onClick={() => handleNavigate('/b/dashboard')}
            className="px-4 py-2 bg-primary text-primary-foreground rounded"
          >
            Beneficiary Dashboard
          </button>
          <button 
            onClick={() => handleNavigate('/o/inbox')}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded"
          >
            Officer Inbox
          </button>
          <button 
            onClick={() => handleNavigate('/a/overview')}
            className="px-4 py-2 bg-accent text-accent-foreground rounded"
          >
            Admin Overview
          </button>
        </div>
      </div>
    );
  };

  if (!currentRole) {
    return (
      <>
        <LandingPage onRoleSelect={handleRoleSelect} />
        <Toaster />
      </>
    );
  }

  return (
    <>
      <AppShell 
        role={currentRole} 
        currentPath={currentPath} 
        onNavigate={handleNavigate}
      >
        {renderContent()}
      </AppShell>
      <Toaster />
    </>
  );
}