import { circle, wrapper } from './background.css';

export default function Background() {
	return (
		<div className={wrapper}>
			<span className={circle['blue']}></span>
			<span className={circle['purple']}></span>
		</div>
	);
}
