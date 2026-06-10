import { ReactNode } from 'react';

/**
 * Props for EmptyState component.
 */
export interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode; //can be a button, Link or nothing
}


