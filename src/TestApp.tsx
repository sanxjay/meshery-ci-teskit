import React, { createContext, useState, useContext, type ReactNode } from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';

// 1. Simple Test Context for global state management in tests
interface TestContextType {
  testMode: boolean;
  setTestMode: (mode: boolean) => void;
  featureFlagA: boolean;
  toggleFeatureFlagA: () => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [testMode, setTestMode] = useState<boolean>(true);
  const [featureFlagA, setFeatureFlagA] = useState<boolean>(false);

  const toggleFeatureFlagA = () => setFeatureFlagA(prev => !prev);

  return (
    <TestContext.Provider value={{ testMode, setTestMode, featureFlagA, toggleFeatureFlagA }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTestContext must be used within a TestProvider');
  }
  return context;
};

// 2. Error Boundary for gracefully handling component errors
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error("Caught error in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 3. TestApp component using MemoryRouter and the new functionalities
function TestApp() {
  return (
    <TestProvider>
      <ErrorBoundary fallback={<div>Something went wrong in TestApp.</div>}>
        <MemoryRouter initialEntries={['/']}> {/* Use MemoryRouter for isolated tests */}
          <div className="flex bg-gray-100 dark:bg-gray-900">
            <Sidebar />
            <div className="flex-1 p-10 text-2xl font-bold">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                {/* Example of a route that might use the test context */}
                <Route path="/test-feature" element={<TestFeatureComponent />} />
              </Routes>
            </div>
          </div>
        </MemoryRouter>
      </ErrorBoundary>
    </TestProvider>
  );
}

// Example component to demonstrate using the TestContext
const TestFeatureComponent: React.FC = () => {
  const { testMode, featureFlagA, toggleFeatureFlagA } = useTestContext();
  return (
    <div>
      <h2>Test Feature Component</h2>
      <p>Test Mode: {testMode ? 'Enabled' : 'Disabled'}</p>
      <p>Feature Flag A: {featureFlagA ? 'On' : 'Off'}</p>
      <button onClick={toggleFeatureFlagA} className="px-4 py-2 bg-blue-500 text-white rounded">
        Toggle Feature Flag A
      </button>
      <p>This component demonstrates how you can control test-specific states or feature flags via context.</p>
    </div>
  );
};

export default TestApp;
