import React from 'react';
import LeaderboardScore from './leaderboard_list_items';


class Leaderboard extends React.Component {
  constructor () {
    super();
    this.state = { sortBy: 'All', scores: []};
		this.fetchScores = this.fetchScores.bind(this);
		this.fetchSortScores = this.fetchSortScores.bind(this);
		this.fetchSearchScores = this.fetchSearchScores.bind(this);
		this.handleAll = this.handleAll.bind(this);
		this.handleSort = this.handleSort.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.fetchScores();
  }

	fetchScores(category) {
		$.ajax ({
			method: 'GET',
			url: 'http://localhost:3000/algorithms',
			dataType: 'json',
			data: {
				category: category
			}
		}).then(scores => this.setScores(scores));
	}

	handleAll() {
		this.setState({ sortBy: 'All' }, this.fetchScores);
	}

	handleSort() {
		this.setState(
			{ sortBy: 'Sorting' },
			() => (this.fetchScores('SORT'))
		);
	}

	handleSearch() {
		this.setState(
			{ sortBy: 'Searching' },
			() => (this.fetchScores('ARRAY_SEARCH'))
		);
	}

	handleScroll() {

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

				<a onClick={this.handleScroll} href="#">Load more scores</a>

      </div>
    );
  }
}

export default Leaderboard;
