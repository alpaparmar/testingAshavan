import * as React from 'react';

export default function MagnifyingGlass({ className }) {
    return (
        <svg className={className} viewBox="0 0 48 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="13" stroke="currentColor" strokeWidth="3" fill="none" />
            <line x1="23.606" y1="24.606" x2="39" y2="39" stroke="currentColor" strokeWidth="3" />
        </svg>
    );
}
