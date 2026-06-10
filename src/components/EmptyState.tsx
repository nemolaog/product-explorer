import { EmptyStateProps } from './EmptyState.types';

/**
 * EmptyState component
 * Displays a reusable message when a page or section has no data.
 */
function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      {/* Empty state title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        {title}
      </h2>

      {/* Empty state description */}
      <p className="text-gray-600 mb-6">
        {description}
      </p>

      {/* Optional action button or link */}
      {action && (
        <div>
          {action}
        </div>
      )}
    </div>
  );
}

export default EmptyState;


