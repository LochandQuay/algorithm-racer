import React from 'react';
import LeaderboardScore from './leaderboard_list_items';

const LeaderboardScores = [
	{
		type: "Sample",
		username: "Boaty McBoatface",
		speed: "42ms",
		golf: "Par",
		score: 9872
	},
	{
		type: "Sample",
		username: "Boaty McBoatface",
		speed: "42ms",
		golf: "Par",
		score: 9879
	},
	{
		type: "Sample",
		username: "Boaty McBoatface",
		speed: "42ms",
		golf: "Par",
		score: 9016
	},
	{
		type: "Sample",
		username: "Boaty McBoatface",
		speed: "42ms",
		golf: "Par",
		score: 9000
	}
];

class Leaderboard extends React.Component {
  constructor () {
    super();
    this.state = { sortBy: 'All', scores: LeaderboardScores};
		this.fetchScores = this.fetchScores.bind(this);
		this.fetchSortScores = this.fetchSortScores.bind(this);
		this.fetchSearchScores = this.fetchSearchScores.bind(this);
		this.handleAll = this.handleAll.bind(this);
		this.handleSort = this.handleSort.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.fetchScores();
  }

	fetchScores() {
		$.ajax ({
			method: 'GET',
			url: 'http://localhost:3000/algorithms',
			dataType: 'json'
		}).then(scores => this.setScores(scores));
	}

	fetchSortScores() {
		$.ajax ({
			method: 'GET',
			url: 'http://localhost:3000/algorithms/sort',
			dataType: 'json'
		}).then(scores => this.setScores(scores));
	}

	fetchSearchScores() {
		$.ajax ({
			method: 'GET',
			url: 'http://localhost:3000/algorithms/array_search',
			dataType: 'json'
		}).then(scores => this.setScores(scores));
	}

	handleAll() {
		this.setState({ sortBy: 'All' }, this.fetchScores);
	}

	handleSort() {
		this.setState({ sortBy: 'Sorting' }, this.fetchSortScores);
	}

	handleSearch() {
		this.setState({ sortBy: 'Searching' }, this.fetchSearchScores);
	}

	setScores(scores) {
		this.setState({scores: scores});
	}

  render() {
    const leaderboardSortTitle = this.state.sortBy;

    const leaderboardScores = this.state.scores.map( (score, i) => (
			<a href='#' key={i}>
				<LeaderboardScore type={score.title}
					score={score.total_score}
					username={score.author}
					speed={score.speed}
					golf={score.golf_score} />
			</a>
      )
    );
    return (
      <div>
        <h2>{ leaderboardSortTitle } Leaderboard</h2>
        <div className="group leader-nav">
        	<h4>Go to:</h4>
        	<ul className="leaderboard-dropdown">
        		<div className="leaderboard-dropdown-items">
        			<li onClick={this.handleSort}>Sorting</li>
        			<li onClick={this.handleSearch}>Searching</li>
        			<li onClick={this.handleAll}>All</li>
        		</div>
        	</ul>
        </div>

        <ol className="leaderboard-list">
          { leaderboardScores }
        </ol>
      </div>
    );
  }
}

export default Leaderboard;
