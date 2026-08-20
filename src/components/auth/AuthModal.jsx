import React, { useState } from 'react';
import { X, Eye, EyeOff, Mail, Lock, User as UserIcon, AlertCircle } from 'lucide-react';

const AuthModal = ({ 
  isOpen, 
  onClose, 
  onLogin, 
  onSignup, 
  onForgotPassword,
  isLoading 
}) => {
  const [authMode, setAuthMode] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!loginEmail || !loginPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    const result = onLogin(loginEmail, loginPassword);
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess('Login successful!');
      setTimeout(() => {
        onClose();
        setLoginEmail('');
        setLoginPassword('');
        setError('');
        setSuccess('');
      }, 500);
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!signupName || !signupEmail || !signupPassword || !signupConfirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (signupPassword !== signupConfirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (signupPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    const result = onSignup(signupName, signupEmail, signupPassword);
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess('Account created successfully!');
      setTimeout(() => {
        onClose();
        setSignupName('');
        setSignupEmail('');
        setSignupPassword('');
        setSignupConfirmPassword('');
        setError('');
        setSuccess('');
      }, 500);
    }
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!forgotEmail) {
      setError('Please enter your email');
      return;
    }
    
    const result = onForgotPassword(forgotEmail);
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(`Password reset link sent to ${forgotEmail}`);
      setTimeout(() => {
        setAuthMode('login');
        setForgotEmail('');
        setError('');
        setSuccess('');
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto animate-scaleIn">
        {/* Close button */}
        <button
          onClick={() => {
            onClose();
            setError('');
            setSuccess('');
            setAuthMode('login');
          }}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Logo */}
        <div className="text-center mb-4 sm:mb-6">
          <span className="font-serif font-bold text-[#0D2038] text-xl sm:text-2xl tracking-[3px] sm:tracking-[4px]">
            MEN<span className="text-[#D0B580]">E</span>TO
          </span>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Real Estate</p>
        </div>

        {/* Error/Success Messages */}
        {error && (
          <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600 text-xs sm:text-sm">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-xs sm:text-sm">
            {success}
          </div>
        )}

        {/* Login Form */}
        {authMode === 'login' && (
          <form onSubmit={handleLoginSubmit}>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0D2038] mb-4 sm:mb-6 text-center">Welcome Back</h2>
            
            <div className="mb-3 sm:mb-4">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0B580] focus:border-[#D0B580] outline-none transition"
                  placeholder="your@email.com"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0B580] focus:border-[#D0B580] outline-none transition"
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" /> : <Eye className="w-3 h-3 sm:w-4 sm:h-4" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end mb-4 sm:mb-6">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('forgot');
                  setError('');
                  setSuccess('');
                }}
                className="text-xs sm:text-sm text-[#D0B580] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 sm:py-3 bg-[#D0B580] hover:bg-[#c4a870] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>

            <p className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setError('');
                  setSuccess('');
                }}
                className="text-[#D0B580] font-medium hover:underline"
              >
                Sign up
              </button>
            </p>
          </form>
        )}

        {/* Signup Form */}
        {authMode === 'signup' && (
          <form onSubmit={handleSignupSubmit}>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0D2038] mb-4 sm:mb-6 text-center">Create Account</h2>

            <div className="mb-3 sm:mb-4">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0B580] focus:border-[#D0B580] outline-none transition"
                  placeholder="John Doe"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0B580] focus:border-[#D0B580] outline-none transition"
                  placeholder="your@email.com"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0B580] focus:border-[#D0B580] outline-none transition"
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" /> : <Eye className="w-3 h-3 sm:w-4 sm:h-4" />}
                </button>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0B580] focus:border-[#D0B580] outline-none transition"
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" /> : <Eye className="w-3 h-3 sm:w-4 sm:h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 sm:py-3 bg-[#D0B580] hover:bg-[#c4a870] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              {isLoading ? 'Creating account...' : 'Sign Up'}
            </button>

            <p className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setError('');
                  setSuccess('');
                }}
                className="text-[#D0B580] font-medium hover:underline"
              >
                Log in
              </button>
            </p>
          </form>
        )}

        {/* Forgot Password Form */}
        {authMode === 'forgot' && (
          <form onSubmit={handleForgotSubmit}>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0D2038] mb-3 sm:mb-6 text-center">Reset Password</h2>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 text-center">
              Enter your email and we'll send you a link to reset your password.
            </p>

            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0B580] focus:border-[#D0B580] outline-none transition"
                  placeholder="your@email.com"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 sm:py-3 bg-[#D0B580] hover:bg-[#c4a870] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>

            <p className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
              Remember your password?{' '}
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setError('');
                  setSuccess('');
                }}
                className="text-[#D0B580] font-medium hover:underline"
              >
                Log in
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;