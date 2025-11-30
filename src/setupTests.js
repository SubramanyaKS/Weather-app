// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock reactjs-toggleswitch to avoid parsing ESM/CJS issues in its
// distributed bundle and to prevent forwarding non-standard styling
// props to DOM elements during tests.
// This mock is intentionally self-contained and uses `require('react')`
// inside the factory so it can be executed by Jest at setup time.
jest.mock('reactjs-toggleswitch', () => {
	const React = require('react');

	const allowedProps = new Set([
		'id',
		'name',
		'className',
		'style',
		'role',
		'title',
		'tabIndex',
		'disabled',
		'checked',
		'value',
	]);

	function filterProps(props) {
		const out = {};
		for (const k of Object.keys(props)) {
			if (allowedProps.has(k) || k.startsWith('data-') || k.startsWith('aria-')) {
				out[k] = props[k];
			}
		}
		return out;
	}

	const ToggleSwitch = ({ checked = false, onToggle, onChange, ariaLabel, children, ...rest }) => {
		const safe = filterProps(rest);
		const handleChange = (e) => {
			const next = e.target.checked;
			if (typeof onToggle === 'function') onToggle(next);
			if (typeof onChange === 'function') onChange(e);
		};

		return React.createElement(
			'label',
			{ className: 'mock-toggle-switch', style: { display: 'inline-block' } },
			React.createElement('input', {
				type: 'checkbox',
				role: 'switch',
				checked,
				'aria-label': ariaLabel,
				onChange: handleChange,
				...safe,
			}),
			React.createElement('span', { className: 'mock-toggle-slider' }, children || null)
		);
	};

	return { ToggleSwitch };
});
