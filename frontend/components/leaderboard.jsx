import React from 'react';
import LeaderboardScore from './leaderboard_list_items';
const APIUtil = require('../api_util');


class Leaderboard extends React.Component {
  constructor () {
    super();
    this.state = { sortBy: 'ALL', scores: [], maxScore: undefined};
		this.fetchScores = this.fetchScores.bind(this);
		this.handleAll = this.handleAll.bind(this);
		this.handleSort = this.handleSort.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.fetchScores();
  }

	fetchScores(category) {
		APIUtil.fetchScores(category)
      .then(scores => this.setScores(scores));
	}

	handleAll() {
		this.setState({ sortBy: 'ALL' }, this.fetchScores);
	}

	handleSort() {
		this.setState(
			{ sortBy: 'SORT' },
			() => (this.fetchScores('SORT'))
		);
	}

	handleSearch() {
		this.setState(
			{ sortBy: 'ARRAY_SEARCH' },
			() => (this.fetchScores('ARRAY_SEARCH'))
		);
	}

	handleScroll() {
    APIUtil.fetchScores(this.state.sortBy, this.state.maxScore)
      .then((scores) => (
        this.setState({
          scores: this.state.scores.concat(scores),
          maxScore: scores[scores.length-1].total_score
        })
      ));
	}

	setScores(scores) {
		this.setState({
      scores: scores,
      maxScore: scores[scores.length-1].total_score
    });
	}

  render() {
    const leaderboardSortTitle = () => {
      if (this.state.sortBy === 'SORT') {
        return "Sorting";
      } else if (this.state.sortBy === 'ARRAY_SEARCH') {
        return "Array Searching";
      } else {
        return "All Categories";
      }
    };

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
        <h2>{ leaderboardSortTitle() } Leaderboard</h2>

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
