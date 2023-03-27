import { useEffect, useState } from "react";

function PasswordStrengthMeter({passwordData, getPasswordStrengthScore, children}) {
  const [password, setPassword] = useState(passwordData);
  const [score, setScore] = useState(0);

  const handleChange = (p) => {
    const password = p;
    setPassword(password);
    const score = calculatePasswordStrength(password);
    getPasswordStrengthScore(score);
    setScore(score);
};

useEffect(() => {
    handleChange(passwordData);
  }, [passwordData])

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 7) {
      strength += 1;
    }
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }
    return strength;
  };

  const getBarColor = () => {
    switch (score) {
      case 0:
        return "bg-red-300";
      case 1:
        return "bg-orange-300";
      case 2:
        return "bg-yellow-300";
      case 3:
        return "bg-green-300";
      case 4:
        return "bg-blue-300";
      case 5:
        return "bg-purple-300";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="mt-3 w-full">
      <div className="relative rounded-md shadow-sm">
        <div
          className={`h-2 rounded-md ${getBarColor()} transition-all duration-300`}
          style={{ width: `${(score) * 20}%` }}
        ></div>
      </div>
      {children}
      <p className="text-sm mt-1 text-gray-600">
        Password strength: {score}/5
      </p>
    </div>
  );
}

export default PasswordStrengthMeter;
