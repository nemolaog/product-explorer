import {ChangeEvent} from 'react';
import {SearchBarProps} from './SearchBar.types';

/**
 * SearchBar component
 * Provides a reusable search input for filtering product data.
 */

function SearchBar({

                     value,
                     onChange,
                     placeholder = 'Search products...',
                   }: SearchBarProps) {
  /**
   * Handles input value changes and passes the new value to parent component.
   */
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  )
}

export default SearchBar;







