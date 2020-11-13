import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
	selectCount,
} from './counterSlice';
import Header from "../shared/Header";
import StyledCounter from "./CounterStyles"

export function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');

	return (
		<>
			<Header />
			<StyledCounter>
				<div>
					<div className="row">
						<button
							className="button"
							aria-label="Increment value"
							onClick={() => dispatch(increment())}
						>
							+
        </button>
						<span className="value">{count}</span>
						<button
							className="button"
							aria-label="Decrement value"
							onClick={() => dispatch(decrement())}
						>
							-
        </button>
					</div>
					<div className="row">
						<input
							className="textbox"
							aria-label="Set increment amount"
							value={incrementAmount}
							onChange={e => setIncrementAmount(e.target.value)}
						/>
						<button
							className="button"
							onClick={() =>
								dispatch(incrementByAmount(Number(incrementAmount) || 0))
							}
						>
							Add Amount
        </button>
						<button
							className="button asyncButton"
							onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
						>
							Add Async
        </button>
					</div>
				</div>
			</StyledCounter>
		</>
	);
}
