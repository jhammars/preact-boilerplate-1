import { h, Component } from 'preact';
import style from './style.less';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>Home component here! Testing deploy preview now.</p>
			</div>
		);
	}
}
