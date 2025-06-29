import { Icon } from '@iconify/react';

export default function FeatureIcon({ icon, className = '' }) {
  return <Icon icon={icon} className={`text-primary-400 text-2xl mb-4 ${className}`} />;
} 