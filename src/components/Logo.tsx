import React from 'react';
import { Shield } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <Shield className={`text-primary-500 ${className}`} />
  );
};

export default Logo;