import { useState } from 'react';

const sportOptions = [
  { value: 'football', label: 'Football' },
  { value: 'basketball', label: 'Basketball' },
  { value: 'soccer', label: 'Soccer' },
  { value: 'baseball', label: 'Baseball' },
  { value: 'track', label: 'Track & Field' },
  { value: 'swimming', label: 'Swimming' },
  { value: 'tennis', label: 'Tennis' },
  { value: 'golf', label: 'Golf' },
  { value: 'crossfit', label: 'CrossFit' },
  { value: 'powerlifting', label: 'Powerlifting' },
  { value: 'bodybuilding', label: 'Bodybuilding' },
  { value: 'combat', label: 'Combat Sports/MMA' },
  { value: 'other', label: 'Other' }
];

const goalOptions = [
  { value: 'strength', label: 'Strength Gain' },
  { value: 'speed', label: 'Speed Development' },
  { value: 'endurance', label: 'Endurance/Conditioning' },
  { value: 'weight_loss', label: 'Weight Loss' },
  { value: 'muscle', label: 'Muscle Building' },
  { value: 'performance', label: 'Sport Performance' },
  { value: 'recovery', label: 'Injury Recovery/Prevention' }
];

const guides = {
  strength: "Ultimate Strength Building Guide",
  speed: "Speed & Agility Development Manual",
  endurance: "Endurance Training Blueprint",
  weight_loss: "Athletic Weight Management Guide",
  muscle: "Muscle Building for Athletes",
  performance: "Sport Performance Optimization",
  recovery: "Injury Prevention & Recovery Protocol"
};

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Basic validation
    if (!email || !name || !sport || !goal) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    
    // In a real implementation, this would be an API call to your backend
    try {
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success state
      setSubmitted(true);
      setLoading(false);
      
      // Reset form
      setEmail('');
      setName('');
      setSport('');
      setGoal('');
    } catch (err) {
      setError('There was an error subscribing. Please try again.');
      setLoading(false);
    }
  };
  
  const selectedGuide = guides[goal] || "Athletic Training Guide";

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-6 shadow-lg">
      <div className="max-w-3xl mx-auto">
        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-3">Get Your FREE Training Guide</h2>
              <p className="text-blue-100">
                Subscribe to receive a specialized training guide tailored to your goals, plus weekly tips and exclusive content to help you reach your athletic potential.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-md bg-blue-800 text-white placeholder-blue-300 border border-blue-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                    autocomplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-md bg-blue-800 text-white placeholder-blue-300 border border-blue-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@example.com"
                    required
                    autocomplete="email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sport" className="block text-sm font-medium mb-1">Primary Sport/Activity</label>
                  <select
                    id="sport"
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    className="w-full p-3 rounded-md bg-blue-800 text-white border border-blue-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    autocomplete="off"
                  >
                    <option value="" disabled>Select your sport</option>
                    {sportOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="goal" className="block text-sm font-medium mb-1">Primary Training Goal</label>
                  <select
                    id="goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full p-3 rounded-md bg-blue-800 text-white border border-blue-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    autocomplete="off"
                  >
                    <option value="" disabled>Select your goal</option>
                    {goalOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {error && (
                <div className="bg-red-700 text-white p-3 rounded-md">
                  {error}
                </div>
              )}
              
              <div className="flex items-center">
                <input
                  id="privacy"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                  autocomplete="off"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm">
                  I agree to receive training resources and newsletter emails. See our <a href="#" className="underline">Privacy Policy</a>.
                </label>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Processing...' : 'Get My Free Training Guide'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-500">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Thank You for Subscribing!</h2>
            <p className="mb-6">
              Your free <strong>{selectedGuide}</strong> is on its way to your inbox. 
              Please check your email to download your guide and confirm your subscription.
            </p>
            <p className="text-sm text-blue-200">
              If you don't see the email within a few minutes, please check your spam folder.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup; 