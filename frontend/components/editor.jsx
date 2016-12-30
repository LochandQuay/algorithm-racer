let React = require('react');
let ReactDOM = require('react-dom');
let Codemirror = require('../src/Codemirror');
let safeEval = require('safe-eval');
let APIUtil = require('../api_util');

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

let defaults = {
	ruby: "def my_function\n\tputs \"Hello World!\"\nend",
	javascript: 'myFunction = () => {\n\talert("Hello World!");\n}'
};

let Editor = React.createClass({
	getInitialState () {
		return {
			code: defaults.javascript,
			readOnly: false,
			mode: 'javascript',
			speed: 0,
			golfScore: 0,
			totalScore: 0,
			title: "",
			category: 'SORT'
		};
	},

	updateCode (newCode) {
		this.setState({ code: newCode });
	},

	updateTitle (e) {
		this.setState({ title: e.target.value });
	},

	updateCategory (e) {
		this.setState({ category: e.target.value });
	},

	changeMode (e) {
		let mode = e.target.value;
		this.setState({ mode: mode, code: defaults[mode] });
	},

	toggleReadOnly () {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
	},

	interact (cm) {
		console.log(cm.getValue());
	},

	handleSubmit () {
		this.refs.submit.setAttribute('disabled', 'disabled');
		this.setSpeed();
		this.setGolfScore();
		this.setState({ totalScore: this.speed * this.golfScore });
		let data = {
			title: this.title,
			body: this.code,
			speed: this.speed,
			category: this.category,
			golf_score: this.golfScore,
			total_score: this.totalScore
		};
		APIUtil.createAlgo(JSON.stringify(data))
			.then((resp) => this.handleSuccess(resp));
	},

	handleSuccess (resp) {
		this.setState({
			code: defaults.javascript,
			title: "",
			category: 'SORT',
			speed: 0,
			golfScore: 0,
			totalScore: 0,
		});
		this.refs.submit.removeAttribute('disabled');
	},

	runCode () {
		safeEval(this.state.code);
	},

	setSpeed () {
		let start = window.performance.now();
		this.runCode();
		let end = window.performance.now();
		this.setState({ speed: end-start });
	},

	setGolfScore () {

	},

	render () {
		let options = {
			lineNumbers: true,
			readOnly: this.state.readOnly,
			mode: this.state.mode
		};
		return (
			<div>
				<label>
					Title:
					<input onChange={this.updateTitle.bind(this)}
								 type='text'
								 value={this.state.title} />
				</label>

				<label className="select-arrow">
					Category:
					<select value={this.state.category}
									onChange={this.updateCategory.bind(this)}>
		        <option value="SORT">Sorting</option>
		        <option value="ARRAY_SEARCH">Array Searching</option>
	      	</select>
	      </label>

				<br />

				<Codemirror ref="editor"
										value={this.state.code}
										onChange={this.updateCode.bind(this)}
										options={options}
										interact={this.interact} />

				<br />

				<button ref="submit" onClick={this.handleSubmit.bind(this)}>
					Submit Algorithm
				</button>
			</div>
		);
	}
});

export default Editor;
