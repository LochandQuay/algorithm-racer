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

	handleSubmit (e) {
		e.preventDefault();
		this.refs.submit.setAttribute('disabled', 'disabled');
		this.setSpeed();
		this.setGolfScore();
		this.setState({ totalScore: this.state.speed * this.state.golfScore });
		let data = {
			algorithm: {
				title: this.state.title,
				body: this.state.code,
				speed: this.state.speed,
				category: this.state.category,
				golf_score: this.state.golfScore,
				total_score: this.state.totalScore
			}
		};
		APIUtil.createAlgo(data)
			.then((resp) => this.handleSuccess(resp));
	},

	handleSuccess (resp) {

		this.refs.submit.removeAttribute('disabled');


	},

	runCode () {
		safeEval(this.state.code);
	},

	setSpeed () {
		let start = window.performance.now();
		this.runCode();
		let end = window.performance.now();
		this.setState({ speed: Math.floor(end-start) });
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
				<h2>Submit an Algorithm</h2>
				<label>
					Title:
					<input onChange={this.updateTitle}
								 type='text'
								 value={this.state.title} />
				</label>

				<label className="select-arrow">
					Category:
					<select value={this.state.category}
									onChange={this.updateCategory}>
		        <option value="SORT">Sorting</option>
		        <option value="ARRAY_SEARCH">Array Searching</option>
	      	</select>
	      </label>

				<br />

				<Codemirror ref="editor"
										value={this.state.code}
										onChange={this.updateCode}
										options={options}
										interact={this.interact} />

				<br />

				<input type='submit'
							 ref="submit"
							 onClick={this.handleSubmit}
							 value='Submit Algorithm' />
			</div>
		);
	}
});

export default Editor;
